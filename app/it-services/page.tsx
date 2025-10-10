'use client';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp, Award, DollarSign, Clock as ClockIcon, Shield as ShieldIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon, MessageSquare, Calendar } from 'lucide-react';
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Shield, 
<<<<<<< HEAD
  Server, 
  Database, 
  Network, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain,
  Zap,
  Smartphone,
  Laptop,
  Globe,
  Settings,
  BarChart,
  Target,
  Award,
  Lock,
  RefreshCw,
  Download,
  Upload,
  Users,
  Headphones,
  Wrench,
  Code
} from 'lucide-react';
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
=======
  Settings, 
  Database, 
  Smartphone, 
  Lock, 
  BarChart, 
  Users, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Zap,
  Cpu,
  HardDrive,
  Wifi,
  Server,
  Code,
  Globe,
  Target,
  TrendingUp,
  Award,
  DollarSign,
  Clock as ClockIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  TrendingUp as TrendingUpIcon,
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
  Calendar,
  Compass,
  Navigation as NavIcon,
  PieChart,
  Activity,
  Rocket,
  Sparkles,
  MessageSquare,
  FileText,
  Eye,
  Mic,
  Video,
  Camera,
  Music,
  Palette,
  ShoppingCart,
  CreditCard,
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
  Calendar as CalendarIcon,
  Compass as CompassIcon,
  Navigation as NavigationIcon,
  PieChart as PieChartIcon,
  TrendingDown,
  Activity as ActivityIcon,
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
  Truck,
  Smartphone as SmartphoneIcon,
  ChefHat,
  Rocket as RocketIcon,
  Sprout,
  Scale
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939

  useEffect(() => {
    setIsLoaded(true);
  }, []);

<<<<<<< HEAD
  const services = [
=======
  const itServiceCategories = [
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
    {
      id: 1,
      name: 'Cloud Migration & Setup',
      description: 'Seamless migration to cloud platforms with zero downtime and optimized performance',
      icon: Cloud,
<<<<<<< HEAD
      features: [
        'AWS/Azure/GCP Migration',
        'Zero Downtime Migration',
        'Performance Optimization',
        'Cost Optimization',
        'Security Configuration',
        'Backup & Recovery',
        '24/7 Monitoring'
      ],
      category: 'Cloud Services',
      popular: true,
      rating: 4.9,
      users: '1,200+',
      color: 'from-blue-500 to-cyan-600',
      capabilities: [
        '99.9% uptime guarantee',
        '50% cost reduction',
        'Zero data loss',
        '24/7 support'
      ],
      price: 'Starting at $2,999/project'
=======
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'Cloud Migration & Setup',
          description: 'Seamless migration to AWS, Azure, or GCP with zero downtime and optimized performance. Trusted by 500+ enterprises.',
          features: ['Multi-cloud Strategy', 'Hybrid Cloud Solutions', 'Cost Optimization', 'Security Implementation', 'Performance Tuning'],
          pricing: 'Starting at $10,000',
          trial: 'Free consultation',
          timeline: '2-8 weeks',
          link: 'https://ziontechgroup.com/cloud-migration',
          popular: true,
          capabilities: [
            'Zero-downtime migration',
            'Cost optimization analysis',
            'Security compliance',
            'Performance monitoring'
          ]
        },
        {
          name: 'IT Infrastructure Design',
          description: 'Scalable and secure infrastructure architecture tailored to your business needs. Built for enterprise scale.',
          features: ['Network Design', 'Server Configuration', 'Load Balancing', 'Disaster Recovery', 'Scalability Planning'],
          pricing: 'Starting at $15,000',
          trial: 'Free assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/it-infrastructure',
          popular: true,
          capabilities: [
            'Enterprise architecture design',
            'High availability setup',
            'Disaster recovery planning',
            'Scalability optimization'
          ]
        },
        {
          name: 'Database Management & Optimization',
          description: 'Comprehensive database administration with performance tuning and security hardening. 99.9% uptime guarantee.',
          features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring', 'Scalability'],
          pricing: 'Starting at $5,000/month',
          trial: 'Free health check',
          timeline: 'Ongoing',
          link: 'https://ziontechgroup.com/database-management',
          popular: false,
          capabilities: [
            'Performance optimization',
            'Automated backup systems',
            'Security vulnerability assessment',
            'Real-time monitoring'
          ]
        },
        {
          name: 'Cloud Cost Optimization',
          description: 'Reduce cloud costs by up to 40% with intelligent resource management and optimization. Save $50K+ annually.',
          features: ['Cost Analysis', 'Resource Optimization', 'Auto-scaling', 'Reserved Instances', 'Cost Monitoring'],
          pricing: 'Starting at $3,000',
          trial: 'Free audit',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/cloud-optimization',
          popular: false,
          capabilities: [
            'Cost analysis and reporting',
            'Resource right-sizing',
            'Automated scaling policies',
            'Cost anomaly detection'
          ]
        }
      ]
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
    },
    {
      id: 2,
      name: 'Enterprise Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your business from cyber threats',
      icon: Shield,
<<<<<<< HEAD
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Security Auditing',
        'Compliance Management',
        'Incident Response',
        'Security Training',
        'Penetration Testing'
      ],
      category: 'Security',
      popular: true,
      rating: 4.8,
      users: '800+',
      color: 'from-red-500 to-orange-600',
      capabilities: [
        '99.9% threat detection',
        'SOC 2 compliance',
        'Real-time monitoring',
        'Expert security team'
      ],
      price: 'Starting at $1,999/mo'
    },
    {
      id: 3,
      name: 'IT Infrastructure Design',
      description: 'Scalable and secure infrastructure architecture for growing businesses',
      icon: Server,
      features: [
        'Network Architecture',
        'Server Configuration',
        'Load Balancing',
        'Disaster Recovery',
        'Scalability Planning',
        'Performance Tuning',
        'Documentation'
      ],
      category: 'Infrastructure',
      popular: true,
      rating: 4.7,
      users: '600+',
      color: 'from-green-500 to-emerald-600',
      capabilities: [
        '99.99% uptime',
        'Unlimited scalability',
        'Disaster recovery',
        'Performance optimization'
      ],
      price: 'Starting at $4,999/project'
=======
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {
          name: 'Enterprise Cybersecurity Suite',
          description: 'Comprehensive security solutions with 24/7 monitoring and threat detection. Zero security breaches guaranteed.',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing'],
          pricing: 'Starting at $8,000/month',
          trial: 'Free security audit',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/cybersecurity',
          popular: true,
          capabilities: [
            'Advanced threat detection',
            'Real-time security monitoring',
            'Automated incident response',
            'Compliance reporting'
          ]
        },
        {
          name: 'Compliance Management Platform',
          description: 'Ensure compliance with GDPR, HIPAA, SOX, and other industry regulations. 100% compliance guarantee.',
          features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Support', 'Policy Management'],
          pricing: 'Starting at $12,000',
          trial: 'Free compliance check',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/compliance-management',
          popular: true,
          capabilities: [
            'Regulatory compliance mapping',
            'Automated compliance monitoring',
            'Audit preparation support',
            'Policy management system'
          ]
        },
        {
          name: 'Security Awareness Training',
          description: 'Comprehensive employee security training with phishing simulation and assessment. Reduce human error by 80%.',
          features: ['Phishing Simulation', 'Security Workshops', 'Policy Development', 'Assessment', 'Certification'],
          pricing: 'Starting at $3,000',
          trial: 'Free training session',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/security-training',
          popular: false,
          capabilities: [
            'Interactive training modules',
            'Phishing simulation campaigns',
            'Security awareness assessment',
            'Certification tracking'
          ]
        },
        {
          name: 'Zero Trust Security Architecture',
          description: 'Implement zero trust security model with identity verification and micro-segmentation. Maximum security posture.',
          features: ['Identity Verification', 'Micro-segmentation', 'Device Management', 'Access Control', 'Continuous Monitoring'],
          pricing: 'Starting at $15,000',
          trial: 'Free assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/zero-trust',
          popular: false,
          capabilities: [
            'Identity-based access control',
            'Network micro-segmentation',
            'Device trust verification',
            'Continuous security monitoring'
          ]
        }
      ]
    },
    {
      category: 'IT Support & Management',
      icon: Settings,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: '24/7 IT Support & Monitoring',
          description: 'Round-the-clock technical support with proactive monitoring and maintenance. 15-minute response time guarantee.',
          features: ['Help Desk Support', 'Remote Monitoring', 'Proactive Maintenance', 'Emergency Response', 'SLA Guarantee'],
          pricing: 'Starting at $2,000/month',
          trial: 'Free trial month',
          timeline: 'Immediate',
          link: 'https://ziontechgroup.com/it-support',
          popular: true,
          capabilities: [
            '24/7 help desk support',
            'Proactive system monitoring',
            'Remote troubleshooting',
            'Emergency response team'
          ]
        },
        {
          name: 'System Administration Services',
          description: 'Complete system administration with user management and performance optimization. 99.9% uptime guarantee.',
          features: ['User Management', 'System Updates', 'Performance Monitoring', 'Backup Management', 'Patch Management'],
          pricing: 'Starting at $4,000/month',
          trial: 'Free assessment',
          timeline: 'Ongoing',
          link: 'https://ziontechgroup.com/system-administration',
          popular: true,
          capabilities: [
            'User account management',
            'Automated system updates',
            'Performance optimization',
            'Backup and recovery management'
          ]
        },
        {
          name: 'IT Strategic Consulting',
          description: 'Strategic IT planning and technology consulting for digital transformation. Drive innovation and growth.',
          features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Budget Planning', 'Digital Transformation'],
          pricing: 'Starting at $200/hour',
          trial: 'Free consultation',
          timeline: 'As needed',
          link: 'https://ziontechgroup.com/it-consulting',
          popular: false,
          capabilities: [
            'Technology roadmap development',
            'Vendor evaluation and selection',
            'Budget optimization',
            'Digital transformation strategy'
          ]
        },
        {
          name: 'IT Asset Management',
          description: 'Comprehensive IT asset lifecycle management with tracking and optimization. Reduce costs by 30%.',
          features: ['Asset Tracking', 'Lifecycle Management', 'License Management', 'Cost Optimization', 'Disposal Services'],
          pricing: 'Starting at $1,500/month',
          trial: 'Free inventory',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/asset-management',
          popular: false,
          capabilities: [
            'Asset inventory management',
            'Lifecycle tracking',
            'License compliance monitoring',
            'Cost optimization analysis'
          ]
        }
      ]
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
    },
    {
      id: 4,
      name: '24/7 IT Support & Monitoring',
      description: 'Round-the-clock technical support and proactive system monitoring',
      icon: Headphones,
      features: [
        '24/7 Help Desk',
        'Remote Support',
        'Proactive Monitoring',
        'Issue Resolution',
        'Performance Optimization',
        'Security Updates',
        'Backup Management'
      ],
      category: 'Support',
      popular: true,
      rating: 4.8,
      users: '2,500+',
      color: 'from-purple-500 to-pink-600',
      capabilities: [
        '15-minute response time',
        '99.9% issue resolution',
        'Proactive monitoring',
        'Expert support team'
      ],
      price: 'Starting at $299/mo'
    },
    {
      id: 5,
      name: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements',
      icon: Code,
<<<<<<< HEAD
      features: [
        'Custom Applications',
        'API Development',
        'Database Design',
        'Integration Services',
        'Mobile App Development',
        'Web Development',
        'Quality Assurance'
      ],
      category: 'Development',
      popular: true,
      rating: 4.9,
      users: '1,800+',
      color: 'from-indigo-500 to-purple-600',
      capabilities: [
        'Custom solutions',
        'Agile development',
        'Quality assurance',
        'Ongoing support'
      ],
      price: 'Starting at $150/hour'
=======
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'Custom Software Development',
          description: 'Tailored software solutions built with modern technologies and best practices. 100% custom development.',
          features: ['Web Applications', 'Mobile Apps', 'API Development', 'Integration Services', 'Quality Assurance'],
          pricing: 'Starting at $15,000',
          trial: 'Free consultation',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/custom-development',
          popular: true,
          capabilities: [
            'Full-stack development',
            'Mobile app development',
            'API design and development',
            'Quality assurance testing'
          ]
        },
        {
          name: 'System Integration & APIs',
          description: 'Connect and integrate disparate systems with robust API development and management. Seamless connectivity.',
          features: ['API Integration', 'Data Migration', 'Workflow Automation', 'Legacy System Modernization', 'API Management'],
          pricing: 'Starting at $8,000',
          trial: 'Free integration assessment',
          timeline: '3-8 weeks',
          link: 'https://ziontechgroup.com/system-integration',
          popular: true,
          capabilities: [
            'API development and integration',
            'Data migration services',
            'Workflow automation',
            'Legacy system modernization'
          ]
        },
        {
          name: 'DevOps & CI/CD Implementation',
          description: 'Streamline development and deployment with automated testing and continuous integration. Deploy 10x faster.',
          features: ['Automated Testing', 'Continuous Integration', 'Deployment Automation', 'Monitoring', 'Infrastructure as Code'],
          pricing: 'Starting at $6,000',
          trial: 'Free DevOps audit',
          timeline: '2-6 weeks',
          link: 'https://ziontechgroup.com/devops-cicd',
          popular: true,
          capabilities: [
            'CI/CD pipeline setup',
            'Automated testing frameworks',
            'Infrastructure automation',
            'Deployment monitoring'
          ]
        },
        {
          name: 'Legacy System Modernization',
          description: 'Modernize legacy systems with cloud migration and technology updates. Future-proof your infrastructure.',
          features: ['Legacy Assessment', 'Cloud Migration', 'Technology Updates', 'Data Migration', 'User Training'],
          pricing: 'Starting at $20,000',
          trial: 'Free modernization plan',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/legacy-modernization',
          popular: false,
          capabilities: [
            'Legacy system assessment',
            'Cloud migration strategy',
            'Technology stack updates',
            'Data migration services'
          ]
        }
      ]
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
    },
    {
<<<<<<< HEAD
      category: 'Network & Infrastructure',
      icon: Wifi,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        {
          name: 'Network Design & Implementation',
          description: 'Secure and scalable network infrastructure with wireless and wired solutions. Enterprise-grade networking.',
          features: ['Network Design', 'Wireless Solutions', 'Security Implementation', 'Performance Optimization', 'Monitoring'],
          pricing: 'Starting at $12,000',
          trial: 'Free network assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-design',
          popular: true,
          capabilities: [
            'Network architecture design',
            'Wireless network deployment',
            'Security implementation',
            'Performance optimization'
          ]
        },
        {
          name: 'Disaster Recovery & Backup',
          description: 'Comprehensive disaster recovery solutions with automated backup and recovery testing. 99.9% recovery guarantee.',
          features: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'Testing', 'Documentation'],
          pricing: 'Starting at $5,000',
          trial: 'Free DR assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/disaster-recovery',
          popular: false,
          capabilities: [
            'Automated backup systems',
            'Disaster recovery planning',
            'Business continuity testing',
            'Recovery documentation'
          ]
        },
        {
          name: 'IT Performance Monitoring',
          description: 'Real-time monitoring and alerting for IT infrastructure and applications. Proactive issue resolution.',
          features: ['Real-time Monitoring', 'Performance Metrics', 'Alerting', 'Reporting', 'Capacity Planning'],
          pricing: 'Starting at $3,000/month',
          trial: 'Free monitoring setup',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/performance-monitoring',
<<<<<<< HEAD
          popular: false
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
          name: 'AI-Powered IT Operations',
          description: 'Intelligent IT operations with AI-driven automation, predictive maintenance, and self-healing systems',
          features: ['AI Automation', 'Predictive Maintenance', 'Self-healing Systems', 'Intelligent Alerting', 'Root Cause Analysis', 'Performance Optimization', 'Capacity Planning', 'Cost Optimization'],
          pricing: 'Starting at $5,000/month',
          trial: 'Free AI assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/ai-it-operations',
          popular: true
        },
        {
          name: 'Quantum-Safe Security Solutions',
          description: 'Future-proof security solutions designed to protect against quantum computing threats',
          features: ['Quantum-Safe Encryption', 'Post-Quantum Cryptography', 'Security Assessment', 'Migration Planning', 'Compliance Support', 'Risk Analysis', 'Implementation', 'Ongoing Support'],
          pricing: 'Starting at $15,000',
          trial: 'Free security audit',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/quantum-safe-security',
          popular: false
        },
        {
          name: 'Edge Computing Infrastructure',
          description: 'Edge computing solutions for low-latency applications and IoT devices with distributed processing',
          features: ['Edge Servers', 'IoT Integration', 'Low-latency Processing', 'Data Synchronization', 'Offline Capabilities', 'Edge Analytics', 'Real-time Processing', 'Distributed Architecture'],
          pricing: 'Starting at $8,000',
          trial: 'Free edge assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/edge-computing',
          popular: true
        },
        {
          name: '5G Network Implementation',
          description: '5G network infrastructure and optimization for high-speed connectivity and IoT applications',
          features: ['5G Infrastructure', 'Network Optimization', 'Speed Testing', 'Coverage Analysis', 'Device Management', 'IoT Integration', 'Performance Monitoring', 'Security Implementation'],
          pricing: 'Starting at $25,000',
          trial: 'Free 5G assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/5g-implementation',
          popular: true
        },
        {
          name: 'Quantum Computing Integration',
          description: 'Quantum computing solutions for optimization, cryptography, and advanced problem solving',
          features: ['Quantum Algorithm Development', 'Quantum Simulation', 'Hybrid Computing', 'Quantum Security', 'Performance Optimization', 'Integration', 'Training', 'Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free quantum assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/quantum-computing',
          popular: false
        },
        {
          name: 'Blockchain Infrastructure Setup',
          description: 'Complete blockchain infrastructure with smart contracts, DeFi solutions, and Web3 applications',
          features: ['Smart Contract Development', 'DeFi Solutions', 'Web3 Integration', 'NFT Platforms', 'Token Development', 'Blockchain Migration', 'Security Audits', 'Maintenance'],
          pricing: 'Starting at $30,000',
          trial: 'Free consultation',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/blockchain-infrastructure',
          popular: true
        },
        {
          name: 'IoT Platform Development',
          description: 'Comprehensive IoT platform with device management and data analytics',
          features: ['Device Management', 'Data Analytics', 'Real-time Monitoring', 'Alert Systems', 'Integration APIs', 'Security Implementation', 'Scalability', 'Maintenance'],
          pricing: 'Starting at $20,000',
          trial: 'Free IoT assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/iot-platform',
          popular: true
        },
        {
          name: 'AR/VR Infrastructure Setup',
          description: 'AR/VR infrastructure for immersive experiences and virtual collaboration',
          features: ['AR/VR Hardware Setup', 'Software Integration', 'Content Management', 'Performance Optimization', 'User Experience Design', 'Cross-platform Support', 'Analytics', 'Maintenance'],
          pricing: 'Starting at $35,000',
          trial: 'Free demo',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/ar-vr-infrastructure',
          popular: false
        },
        {
          name: 'Smart City Technology Integration',
          description: 'Smart city technology solutions with traffic optimization, energy management, and citizen services',
          features: ['Traffic Management', 'Energy Systems', 'Citizen Services', 'Data Analytics', 'IoT Integration', 'Security Systems', 'Environmental Monitoring', 'Integration Hub'],
          pricing: 'Starting at $100,000',
          trial: 'Free city assessment',
          timeline: '24-48 weeks',
          link: 'https://ziontechgroup.com/smart-city-technology',
          popular: false
        },
        {
          name: 'Autonomous Systems Infrastructure',
          description: 'Infrastructure for autonomous vehicles, drones, and robotic systems',
          features: ['Autonomous Vehicle Support', 'Drone Fleet Management', 'Robotic Systems', 'AI Integration', 'Safety Systems', 'Communication Networks', 'Data Processing', 'Monitoring'],
          pricing: 'Starting at $75,000',
          trial: 'Free autonomous assessment',
          timeline: '16-32 weeks',
          link: 'https://ziontechgroup.com/autonomous-systems',
          popular: false
        },
        {
          name: 'Digital Twin Technology',
          description: 'Digital twin solutions for real-time monitoring and simulation of physical assets',
          features: ['Asset Modeling', 'Real-time Monitoring', 'Simulation', 'Predictive Analytics', 'Performance Optimization', 'Maintenance Planning', 'Data Integration', 'Visualization'],
          pricing: 'Starting at $40,000',
          trial: 'Free digital twin demo',
          timeline: '12-20 weeks',
          link: 'https://ziontechgroup.com/digital-twin-technology',
          popular: true
        },
        {
          name: 'Metaverse Infrastructure',
          description: 'Metaverse infrastructure for virtual worlds, avatars, and immersive experiences',
          features: ['Virtual World Creation', 'Avatar Systems', 'Immersive Experiences', 'Social Features', 'Economy Systems', 'Content Management', 'Performance Optimization', 'Security'],
          pricing: 'Starting at $60,000',
          trial: 'Free metaverse demo',
          timeline: '20-40 weeks',
          link: 'https://ziontechgroup.com/metaverse-infrastructure',
          popular: false
        },
        {
          name: 'Green IT Solutions',
          description: 'Sustainable IT solutions with energy efficiency and environmental impact reduction',
          features: ['Energy Efficiency', 'Carbon Footprint Reduction', 'Sustainable Hardware', 'Green Data Centers', 'Renewable Energy', 'Waste Reduction', 'Environmental Monitoring', 'Compliance'],
          pricing: 'Starting at $15,000',
          trial: 'Free sustainability audit',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/green-it-solutions',
          popular: true
        },
        {
          name: 'Zero Trust Security Architecture',
          description: 'Zero trust security implementation with identity verification and micro-segmentation',
          features: ['Identity Verification', 'Micro-segmentation', 'Device Management', 'Access Control', 'Continuous Monitoring', 'Threat Detection', 'Policy Enforcement', 'Compliance'],
          pricing: 'Starting at $25,000',
          trial: 'Free security assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/zero-trust-architecture',
          popular: true
        },
        {
          name: 'AI Infrastructure as a Service',
          description: 'AI infrastructure services with GPU clusters, model training, and inference capabilities',
          features: ['GPU Clusters', 'Model Training', 'Inference Services', 'Data Processing', 'Model Management', 'Auto-scaling', 'Monitoring', 'Support'],
          pricing: 'Starting at $10,000/month',
          trial: 'Free AI infrastructure trial',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/ai-infrastructure-service',
          popular: true
        },
        {
          name: 'Quantum Internet Infrastructure',
          description: 'Quantum internet infrastructure with quantum key distribution and secure communication',
          features: ['Quantum Key Distribution', 'Secure Communication', 'Quantum Networks', 'Quantum Repeaters', 'Security Implementation', 'Performance Optimization', 'Integration', 'Support'],
          pricing: 'Starting at $100,000',
          trial: 'Free quantum internet demo',
          timeline: '24-48 weeks',
          link: 'https://ziontechgroup.com/quantum-internet',
          popular: false
        },
        {
          name: 'Space Technology Infrastructure',
          description: 'Space technology infrastructure for satellite communication and space-based services',
          features: ['Satellite Communication', 'Ground Stations', 'Space Data Processing', 'Orbital Mechanics', 'Communication Networks', 'Data Analytics', 'Security', 'Monitoring'],
          pricing: 'Starting at $200,000',
          trial: 'Free space technology assessment',
          timeline: '32-64 weeks',
          link: 'https://ziontechgroup.com/space-technology-infrastructure',
          popular: false
        },
        {
          name: 'Biometric Security Systems',
          description: 'Advanced biometric security systems with facial recognition, fingerprint scanning, and behavioral analysis',
          features: ['Facial Recognition', 'Fingerprint Scanning', 'Behavioral Analysis', 'Voice Recognition', 'Iris Scanning', 'Multi-factor Authentication', 'Access Control', 'Audit Trails'],
          pricing: 'Starting at $12,000',
          trial: 'Free biometric demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/biometric-security',
          popular: true
        },
        {
          name: 'Hyperconverged Infrastructure',
          description: 'Hyperconverged infrastructure solutions with compute, storage, and networking in a single platform',
          features: ['Compute Integration', 'Storage Virtualization', 'Network Virtualization', 'Management Platform', 'Auto-scaling', 'Disaster Recovery', 'Monitoring', 'Support'],
          pricing: 'Starting at $30,000',
          trial: 'Free HCI assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/hyperconverged-infrastructure',
          popular: true
        },
        {
          name: 'Container Orchestration Platform',
          description: 'Container orchestration platform with Kubernetes, Docker, and microservices architecture',
          features: ['Kubernetes Management', 'Docker Integration', 'Microservices Architecture', 'Auto-scaling', 'Service Mesh', 'Monitoring', 'Security', 'CI/CD Integration'],
          pricing: 'Starting at $8,000',
          trial: 'Free container demo',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/container-orchestration',
          popular: true
        },
        {
          name: 'Serverless Computing Platform',
          description: 'Serverless computing platform with function-as-a-service and event-driven architecture',
          features: ['Function-as-a-Service', 'Event-driven Architecture', 'Auto-scaling', 'Pay-per-use', 'API Management', 'Monitoring', 'Security', 'Integration'],
          pricing: 'Starting at $5,000',
          trial: 'Free serverless demo',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/serverless-computing',
          popular: true
        },
        {
          name: 'Multi-Cloud Management Platform',
          description: 'Multi-cloud management platform with unified monitoring, cost optimization, and governance',
          features: ['Unified Monitoring', 'Cost Optimization', 'Governance', 'Security Management', 'Compliance', 'Resource Management', 'Automation', 'Analytics'],
          pricing: 'Starting at $15,000',
          trial: 'Free multi-cloud assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/multi-cloud-management',
          popular: true
        },
        {
          name: 'Data Lake Architecture',
          description: 'Data lake architecture with big data processing, analytics, and machine learning capabilities',
          features: ['Big Data Processing', 'Analytics Platform', 'Machine Learning', 'Data Governance', 'Security', 'Scalability', 'Integration', 'Monitoring'],
          pricing: 'Starting at $20,000',
          trial: 'Free data lake demo',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/data-lake-architecture',
          popular: true
        },
        {
          name: 'Real-time Data Streaming Platform',
          description: 'Real-time data streaming platform with Apache Kafka, event processing, and analytics',
          features: ['Apache Kafka', 'Event Processing', 'Real-time Analytics', 'Data Streaming', 'Message Queues', 'Monitoring', 'Security', 'Integration'],
          pricing: 'Starting at $10,000',
          trial: 'Free streaming demo',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/real-time-data-streaming',
          popular: true
        },
        {
          name: 'API Gateway and Management',
          description: 'API gateway and management platform with security, monitoring, and developer tools',
          features: ['API Gateway', 'Security Management', 'Rate Limiting', 'Monitoring', 'Developer Portal', 'Documentation', 'Testing', 'Analytics'],
          pricing: 'Starting at $6,000',
          trial: 'Free API demo',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/api-gateway-management',
          popular: true
        },
        {
          name: 'Microservices Architecture',
          description: 'Microservices architecture with service discovery, load balancing, and distributed systems',
          features: ['Service Discovery', 'Load Balancing', 'Distributed Systems', 'API Management', 'Monitoring', 'Security', 'Scalability', 'Resilience'],
          pricing: 'Starting at $18,000',
          trial: 'Free microservices assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/microservices-architecture',
          popular: true
        },
        {
          name: 'Event-Driven Architecture',
          description: 'Event-driven architecture with message brokers, event sourcing, and CQRS patterns',
          features: ['Message Brokers', 'Event Sourcing', 'CQRS Patterns', 'Event Processing', 'Scalability', 'Resilience', 'Monitoring', 'Integration'],
          pricing: 'Starting at $12,000',
          trial: 'Free event-driven demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/event-driven-architecture',
          popular: false
        },
        {
          name: 'GraphQL API Platform',
          description: 'GraphQL API platform with schema management, query optimization, and developer tools',
          features: ['Schema Management', 'Query Optimization', 'Developer Tools', 'Caching', 'Security', 'Monitoring', 'Documentation', 'Testing'],
          pricing: 'Starting at $7,000',
          trial: 'Free GraphQL demo',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/graphql-api-platform',
          popular: true
        },
        {
          name: 'WebAssembly Platform',
          description: 'WebAssembly platform for high-performance web applications and cross-platform development',
          features: ['WebAssembly Runtime', 'Cross-platform Development', 'Performance Optimization', 'Security', 'Integration', 'Monitoring', 'Development Tools', 'Support'],
          pricing: 'Starting at $9,000',
          trial: 'Free WebAssembly demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/webassembly-platform',
          popular: false
        },
        {
          name: 'Progressive Web App Platform',
          description: 'Progressive Web App platform with offline capabilities, push notifications, and app-like experience',
          features: ['Offline Capabilities', 'Push Notifications', 'App-like Experience', 'Performance Optimization', 'Security', 'Cross-platform', 'Analytics', 'Support'],
          pricing: 'Starting at $8,000',
          trial: 'Free PWA demo',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/progressive-web-app-platform',
          popular: true
        },
        {
          name: 'Headless CMS Platform',
          description: 'Headless CMS platform with content management, API-first architecture, and multi-channel publishing',
          features: ['Content Management', 'API-first Architecture', 'Multi-channel Publishing', 'Content Modeling', 'Workflow Management', 'Security', 'Scalability', 'Integration'],
          pricing: 'Starting at $5,000',
          trial: 'Free headless CMS demo',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/headless-cms-platform',
          popular: true
        },
        {
          name: 'JAMstack Architecture',
          description: 'JAMstack architecture with static site generation, CDN, and modern web development',
          features: ['Static Site Generation', 'CDN Integration', 'Modern Web Development', 'Performance Optimization', 'Security', 'Scalability', 'Developer Experience', 'Deployment'],
          pricing: 'Starting at $6,000',
          trial: 'Free JAMstack demo',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/jamstack-architecture',
          popular: true
        },
        {
          name: 'Low-Code/No-Code Platform',
          description: 'Low-code/no-code platform for rapid application development and citizen development',
          features: ['Visual Development', 'Drag-and-drop Interface', 'Pre-built Components', 'Workflow Automation', 'Integration', 'Security', 'Scalability', 'Training'],
          pricing: 'Starting at $10,000',
          trial: 'Free low-code demo',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/low-code-no-code-platform',
          popular: true
        },
        {
          name: 'Robotic Process Automation',
          description: 'Robotic Process Automation (RPA) for business process automation and workflow optimization',
          features: ['Process Automation', 'Workflow Optimization', 'Bot Development', 'Integration', 'Monitoring', 'Analytics', 'Security', 'Training'],
          pricing: 'Starting at $12,000',
          trial: 'Free RPA assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/robotic-process-automation',
          popular: true
        },
        {
          name: 'Business Process Management',
          description: 'Business Process Management (BPM) platform for process modeling, execution, and optimization',
          features: ['Process Modeling', 'Process Execution', 'Process Optimization', 'Workflow Management', 'Analytics', 'Integration', 'Compliance', 'Monitoring'],
          pricing: 'Starting at $15,000',
          trial: 'Free BPM assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/business-process-management',
          popular: false
        },
        {
          name: 'Master Data Management',
          description: 'Master Data Management (MDM) platform for data governance, quality, and consistency',
          features: ['Data Governance', 'Data Quality', 'Data Consistency', 'Data Integration', 'Data Stewardship', 'Compliance', 'Analytics', 'Monitoring'],
          pricing: 'Starting at $20,000',
          trial: 'Free MDM assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/master-data-management',
          popular: false
        },
        {
          name: 'Data Warehouse Modernization',
          description: 'Data warehouse modernization with cloud migration, real-time processing, and advanced analytics',
          features: ['Cloud Migration', 'Real-time Processing', 'Advanced Analytics', 'Data Integration', 'Performance Optimization', 'Security', 'Scalability', 'Monitoring'],
          pricing: 'Starting at $25,000',
          trial: 'Free data warehouse assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/data-warehouse-modernization',
          popular: true
        },
        {
          name: 'Data Mesh Architecture',
          description: 'Data mesh architecture with decentralized data ownership and domain-driven design',
          features: ['Decentralized Data Ownership', 'Domain-driven Design', 'Data Products', 'Self-serve Data', 'Governance', 'Security', 'Scalability', 'Monitoring'],
          pricing: 'Starting at $30,000',
          trial: 'Free data mesh assessment',
          timeline: '16-32 weeks',
          link: 'https://ziontechgroup.com/data-mesh-architecture',
          popular: false
        },
        {
          name: 'Data Fabric Platform',
          description: 'Data fabric platform with unified data access, governance, and analytics across hybrid environments',
          features: ['Unified Data Access', 'Data Governance', 'Hybrid Environment Support', 'Data Integration', 'Analytics', 'Security', 'Scalability', 'Monitoring'],
          pricing: 'Starting at $35,000',
          trial: 'Free data fabric demo',
          timeline: '20-40 weeks',
          link: 'https://ziontechgroup.com/data-fabric-platform',
          popular: false
        },
        {
          name: 'DataOps Platform',
          description: 'DataOps platform with automated data pipeline management, testing, and deployment',
          features: ['Automated Pipelines', 'Data Testing', 'Deployment Automation', 'Monitoring', 'Collaboration', 'Version Control', 'Security', 'Scalability'],
          pricing: 'Starting at $18,000',
          trial: 'Free DataOps demo',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/dataops-platform',
          popular: true
        },
        {
          name: 'MLOps Platform',
          description: 'MLOps platform with machine learning model management, deployment, and monitoring',
          features: ['Model Management', 'Model Deployment', 'Model Monitoring', 'Version Control', 'Automation', 'Collaboration', 'Security', 'Scalability'],
          pricing: 'Starting at $22,000',
          trial: 'Free MLOps demo',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/mlops-platform',
          popular: true
        },
        {
          name: 'AIOps Platform',
          description: 'AIOps platform with intelligent IT operations, automation, and predictive analytics',
          features: ['Intelligent Operations', 'Automation', 'Predictive Analytics', 'Anomaly Detection', 'Root Cause Analysis', 'Incident Response', 'Performance Optimization', 'Monitoring'],
          pricing: 'Starting at $28,000',
          trial: 'Free AIOps demo',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/aiops-platform',
          popular: true
        },
        {
          name: 'DevSecOps Platform',
          description: 'DevSecOps platform with integrated security, compliance, and continuous delivery',
          features: ['Integrated Security', 'Compliance', 'Continuous Delivery', 'Security Testing', 'Vulnerability Management', 'Policy Enforcement', 'Monitoring', 'Automation'],
          pricing: 'Starting at $24,000',
          trial: 'Free DevSecOps assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/devsecops-platform',
          popular: true
        },
        {
          name: 'GitOps Platform',
          description: 'GitOps platform with Git-based deployment, infrastructure as code, and continuous delivery',
          features: ['Git-based Deployment', 'Infrastructure as Code', 'Continuous Delivery', 'Version Control', 'Automation', 'Monitoring', 'Security', 'Collaboration'],
          pricing: 'Starting at $16,000',
          trial: 'Free GitOps demo',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/gitops-platform',
          popular: true
        },
        {
          name: 'Infrastructure as Code Platform',
          description: 'Infrastructure as Code platform with Terraform, Ansible, and automated infrastructure management',
          features: ['Terraform Integration', 'Ansible Automation', 'Infrastructure Management', 'Version Control', 'Automation', 'Monitoring', 'Security', 'Collaboration'],
          pricing: 'Starting at $14,000',
          trial: 'Free IaC demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/infrastructure-as-code-platform',
          popular: true
        },
        {
          name: 'Configuration Management Platform',
          description: 'Configuration management platform with automated configuration, compliance, and drift detection',
          features: ['Automated Configuration', 'Compliance Management', 'Drift Detection', 'Change Management', 'Audit Trails', 'Security', 'Monitoring', 'Automation'],
          pricing: 'Starting at $12,000',
          trial: 'Free configuration management demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/configuration-management-platform',
          popular: false
        },
        {
          name: 'Secrets Management Platform',
          description: 'Secrets management platform with secure storage, rotation, and access control for sensitive data',
          features: ['Secure Storage', 'Secret Rotation', 'Access Control', 'Audit Trails', 'Encryption', 'Integration', 'Monitoring', 'Compliance'],
          pricing: 'Starting at $8,000',
          trial: 'Free secrets management demo',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/secrets-management-platform',
          popular: true
        },
        {
          name: 'Identity and Access Management',
          description: 'Identity and Access Management (IAM) platform with single sign-on, multi-factor authentication, and access control',
          features: ['Single Sign-On', 'Multi-factor Authentication', 'Access Control', 'User Management', 'Role-based Access', 'Audit Trails', 'Compliance', 'Integration'],
          pricing: 'Starting at $10,000',
          trial: 'Free IAM assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/identity-access-management',
          popular: true
        },
        {
          name: 'Privileged Access Management',
          description: 'Privileged Access Management (PAM) platform with secure access to privileged accounts and systems',
          features: ['Privileged Account Management', 'Secure Access', 'Session Recording', 'Access Control', 'Audit Trails', 'Compliance', 'Monitoring', 'Integration'],
          pricing: 'Starting at $15,000',
          trial: 'Free PAM assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/privileged-access-management',
          popular: true
        },
        {
          name: 'Security Information and Event Management',
          description: 'Security Information and Event Management (SIEM) platform with threat detection, incident response, and compliance',
          features: ['Threat Detection', 'Incident Response', 'Compliance', 'Log Management', 'Analytics', 'Automation', 'Integration', 'Monitoring'],
          pricing: 'Starting at $20,000',
          trial: 'Free SIEM assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/security-information-event-management',
          popular: true
        },
        {
          name: 'Security Orchestration and Response',
          description: 'Security Orchestration and Response (SOAR) platform with automated incident response and security workflows',
          features: ['Automated Incident Response', 'Security Workflows', 'Playbook Automation', 'Integration', 'Analytics', 'Monitoring', 'Compliance', 'Training'],
          pricing: 'Starting at $18,000',
          trial: 'Free SOAR assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/security-orchestration-response',
          popular: true
        },
        {
          name: 'Threat Intelligence Platform',
          description: 'Threat Intelligence platform with threat detection, analysis, and response capabilities',
          features: ['Threat Detection', 'Threat Analysis', 'Threat Response', 'Intelligence Feeds', 'Analytics', 'Integration', 'Monitoring', 'Compliance'],
          pricing: 'Starting at $16,000',
          trial: 'Free threat intelligence demo',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/threat-intelligence-platform',
          popular: true
        },
        {
          name: 'Vulnerability Management Platform',
          description: 'Vulnerability Management platform with scanning, assessment, and remediation of security vulnerabilities',
          features: ['Vulnerability Scanning', 'Risk Assessment', 'Remediation', 'Compliance', 'Reporting', 'Integration', 'Monitoring', 'Automation'],
          pricing: 'Starting at $12,000',
          trial: 'Free vulnerability assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/vulnerability-management-platform',
          popular: true
        },
        {
          name: 'Penetration Testing Services',
          description: 'Penetration testing services with security assessment, vulnerability testing, and remediation guidance',
          features: ['Security Assessment', 'Vulnerability Testing', 'Remediation Guidance', 'Compliance Testing', 'Reporting', 'Follow-up', 'Training', 'Support'],
          pricing: 'Starting at $8,000',
          trial: 'Free security assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/penetration-testing-services',
          popular: true
        },
        {
          name: 'Security Awareness Training',
          description: 'Security awareness training with phishing simulation, education, and assessment programs',
          features: ['Phishing Simulation', 'Security Education', 'Assessment Programs', 'Compliance Training', 'Reporting', 'Customization', 'Analytics', 'Support'],
          pricing: 'Starting at $5,000',
          trial: 'Free training demo',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/security-awareness-training',
          popular: true
        },
        {
          name: 'Compliance Management Platform',
          description: 'Compliance management platform with regulatory compliance, audit management, and reporting',
          features: ['Regulatory Compliance', 'Audit Management', 'Reporting', 'Policy Management', 'Risk Assessment', 'Documentation', 'Integration', 'Monitoring'],
          pricing: 'Starting at $14,000',
          trial: 'Free compliance assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/compliance-management-platform',
          popular: true
        },
        {
          name: 'Risk Management Platform',
          description: 'Risk management platform with risk assessment, mitigation, and monitoring capabilities',
          features: ['Risk Assessment', 'Risk Mitigation', 'Risk Monitoring', 'Compliance', 'Reporting', 'Integration', 'Analytics', 'Automation'],
          pricing: 'Starting at $16,000',
          trial: 'Free risk assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/risk-management-platform',
          popular: true
        },
        {
          name: 'Business Continuity Planning',
          description: 'Business continuity planning with disaster recovery, backup, and recovery testing',
          features: ['Disaster Recovery', 'Backup Solutions', 'Recovery Testing', 'Business Impact Analysis', 'Recovery Planning', 'Testing', 'Documentation', 'Training'],
          pricing: 'Starting at $20,000',
          trial: 'Free business continuity assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/business-continuity-planning',
          popular: true
        },
        {
          name: 'Disaster Recovery as a Service',
          description: 'Disaster Recovery as a Service (DRaaS) with cloud-based backup, recovery, and testing',
          features: ['Cloud-based Backup', 'Recovery Services', 'Testing', 'Monitoring', 'Automation', 'Compliance', 'Support', 'SLA'],
          pricing: 'Starting at $3,000/month',
          trial: 'Free DRaaS assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/disaster-recovery-as-a-service',
          popular: true
        },
        {
          name: 'Backup as a Service',
          description: 'Backup as a Service (BaaS) with automated backup, recovery, and data protection',
          features: ['Automated Backup', 'Recovery Services', 'Data Protection', 'Monitoring', 'Compliance', 'Support', 'SLA', 'Scalability'],
          pricing: 'Starting at $2,000/month',
          trial: 'Free BaaS assessment',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/backup-as-a-service',
          popular: true
        },
        {
          name: 'Data Loss Prevention',
          description: 'Data Loss Prevention (DLP) platform with data discovery, classification, and protection',
          features: ['Data Discovery', 'Data Classification', 'Data Protection', 'Policy Enforcement', 'Monitoring', 'Compliance', 'Integration', 'Analytics'],
          pricing: 'Starting at $12,000',
          trial: 'Free DLP assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/data-loss-prevention',
          popular: true
        },
        {
          name: 'Data Classification Platform',
          description: 'Data classification platform with automated data discovery, classification, and labeling',
          features: ['Automated Discovery', 'Data Classification', 'Data Labeling', 'Policy Enforcement', 'Compliance', 'Integration', 'Monitoring', 'Analytics'],
          pricing: 'Starting at $10,000',
          trial: 'Free data classification demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/data-classification-platform',
          popular: false
        },
        {
          name: 'Data Governance Platform',
          description: 'Data governance platform with data quality, lineage, and stewardship management',
          features: ['Data Quality', 'Data Lineage', 'Data Stewardship', 'Policy Management', 'Compliance', 'Integration', 'Monitoring', 'Analytics'],
          pricing: 'Starting at $18,000',
          trial: 'Free data governance assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/data-governance-platform',
          popular: true
        },
        {
          name: 'Data Privacy Platform',
          description: 'Data privacy platform with privacy compliance, consent management, and data protection',
          features: ['Privacy Compliance', 'Consent Management', 'Data Protection', 'Privacy Impact Assessment', 'Compliance', 'Integration', 'Monitoring', 'Analytics'],
          pricing: 'Starting at $14,000',
          trial: 'Free data privacy assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/data-privacy-platform',
          popular: true
        },
        {
          name: 'GDPR Compliance Platform',
          description: 'GDPR compliance platform with data protection, privacy rights, and regulatory compliance',
          features: ['Data Protection', 'Privacy Rights', 'Regulatory Compliance', 'Consent Management', 'Data Portability', 'Right to be Forgotten', 'Compliance', 'Monitoring'],
          pricing: 'Starting at $16,000',
          trial: 'Free GDPR assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/gdpr-compliance-platform',
          popular: true
        },
        {
          name: 'CCPA Compliance Platform',
          description: 'CCPA compliance platform with California Consumer Privacy Act compliance and data protection',
          features: ['CCPA Compliance', 'Data Protection', 'Consumer Rights', 'Privacy Notices', 'Opt-out Management', 'Compliance', 'Monitoring', 'Reporting'],
          pricing: 'Starting at $12,000',
          trial: 'Free CCPA assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/ccpa-compliance-platform',
          popular: true
        },
        {
          name: 'HIPAA Compliance Platform',
          description: 'HIPAA compliance platform with healthcare data protection and regulatory compliance',
          features: ['Healthcare Data Protection', 'Regulatory Compliance', 'Access Controls', 'Audit Trails', 'Encryption', 'Compliance', 'Monitoring', 'Reporting'],
          pricing: 'Starting at $18,000',
          trial: 'Free HIPAA assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/hipaa-compliance-platform',
          popular: true
        },
        {
          name: 'SOX Compliance Platform',
          description: 'SOX compliance platform with financial data protection and regulatory compliance',
          features: ['Financial Data Protection', 'Regulatory Compliance', 'Internal Controls', 'Audit Trails', 'Compliance', 'Monitoring', 'Reporting', 'Documentation'],
          pricing: 'Starting at $20,000',
          trial: 'Free SOX assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/sox-compliance-platform',
          popular: true
        },
        {
          name: 'ISO 27001 Compliance Platform',
          description: 'ISO 27001 compliance platform with information security management and certification',
          features: ['Information Security Management', 'Certification', 'Risk Assessment', 'Security Controls', 'Compliance', 'Monitoring', 'Reporting', 'Documentation'],
          pricing: 'Starting at $22,000',
          trial: 'Free ISO 27001 assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/iso-27001-compliance-platform',
          popular: true
        },
        {
          name: 'SOC 2 Compliance Platform',
          description: 'SOC 2 compliance platform with service organization controls and audit readiness',
          features: ['Service Organization Controls', 'Audit Readiness', 'Security Controls', 'Availability Controls', 'Compliance', 'Monitoring', 'Reporting', 'Documentation'],
          pricing: 'Starting at $16,000',
          trial: 'Free SOC 2 assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/soc-2-compliance-platform',
          popular: true
        },
        {
          name: 'PCI DSS Compliance Platform',
          description: 'PCI DSS compliance platform with payment card data protection and security standards',
          features: ['Payment Card Data Protection', 'Security Standards', 'Access Controls', 'Encryption', 'Compliance', 'Monitoring', 'Reporting', 'Documentation'],
          pricing: 'Starting at $14,000',
          trial: 'Free PCI DSS assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/pci-dss-compliance-platform',
          popular: true
        },
        {
          name: 'FedRAMP Compliance Platform',
          description: 'FedRAMP compliance platform with federal cloud security and authorization',
          features: ['Federal Cloud Security', 'Authorization', 'Security Controls', 'Compliance', 'Monitoring', 'Reporting', 'Documentation', 'Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free FedRAMP assessment',
          timeline: '24-48 weeks',
          link: 'https://ziontechgroup.com/fedramp-compliance-platform',
          popular: false
        },
        {
          name: 'FISMA Compliance Platform',
          description: 'FISMA compliance platform with federal information security management and compliance',
          features: ['Federal Information Security', 'Management', 'Compliance', 'Security Controls', 'Monitoring', 'Reporting', 'Documentation', 'Support'],
          pricing: 'Starting at $40,000',
          trial: 'Free FISMA assessment',
          timeline: '20-40 weeks',
          link: 'https://ziontechgroup.com/fisma-compliance-platform',
          popular: false
        },
        {
          name: 'NIST Cybersecurity Framework',
          description: 'NIST Cybersecurity Framework implementation with security controls and risk management',
          features: ['Security Controls', 'Risk Management', 'Framework Implementation', 'Compliance', 'Monitoring', 'Reporting', 'Documentation', 'Support'],
          pricing: 'Starting at $25,000',
          trial: 'Free NIST assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/nist-cybersecurity-framework',
          popular: true
        },
        {
          name: 'CIS Controls Implementation',
          description: 'CIS Controls implementation with critical security controls and best practices',
          features: ['Critical Security Controls', 'Best Practices', 'Implementation', 'Compliance', 'Monitoring', 'Reporting', 'Documentation', 'Support'],
          pricing: 'Starting at $20,000',
          trial: 'Free CIS Controls assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/cis-controls-implementation',
          popular: true
        },
        {
          name: 'OWASP Security Framework',
          description: 'OWASP Security Framework implementation with web application security and vulnerability management',
          features: ['Web Application Security', 'Vulnerability Management', 'Security Testing', 'Compliance', 'Monitoring', 'Reporting', 'Documentation', 'Support'],
          pricing: 'Starting at $15,000',
          trial: 'Free OWASP assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/owasp-security-framework',
          popular: true
        },
        {
          name: 'Zero Trust Security Implementation',
          description: 'Zero Trust Security implementation with identity verification and micro-segmentation',
          features: ['Identity Verification', 'Micro-segmentation', 'Access Control', 'Monitoring', 'Compliance', 'Integration', 'Documentation', 'Support'],
          pricing: 'Starting at $30,000',
          trial: 'Free Zero Trust assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/zero-trust-security-implementation',
          popular: true
        },
        {
          name: 'SASE Platform Implementation',
          description: 'SASE (Secure Access Service Edge) platform implementation with network security and cloud access',
          features: ['Network Security', 'Cloud Access', 'SD-WAN', 'Security Services', 'Compliance', 'Monitoring', 'Integration', 'Support'],
          pricing: 'Starting at $35,000',
          trial: 'Free SASE assessment',
          timeline: '16-32 weeks',
          link: 'https://ziontechgroup.com/sase-platform-implementation',
          popular: true
        },
        {
          name: 'SD-WAN Implementation',
          description: 'SD-WAN implementation with software-defined networking and WAN optimization',
          features: ['Software-defined Networking', 'WAN Optimization', 'Performance', 'Security', 'Compliance', 'Monitoring', 'Integration', 'Support'],
          pricing: 'Starting at $25,000',
          trial: 'Free SD-WAN assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/sd-wan-implementation',
          popular: true
        },
        {
          name: 'Network Function Virtualization',
          description: 'Network Function Virtualization (NFV) implementation with virtualized network functions',
          features: ['Virtualized Network Functions', 'Network Virtualization', 'Performance', 'Security', 'Compliance', 'Monitoring', 'Integration', 'Support'],
          pricing: 'Starting at $28,000',
          trial: 'Free NFV assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/network-function-virtualization',
          popular: false
        },
        {
          name: 'Software-Defined Networking',
          description: 'Software-Defined Networking (SDN) implementation with programmable network control',
          features: ['Programmable Network Control', 'Network Automation', 'Performance', 'Security', 'Compliance', 'Monitoring', 'Integration', 'Support'],
          pricing: 'Starting at $30,000',
          trial: 'Free SDN assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/software-defined-networking',
          popular: false
        },
        {
          name: 'Intent-Based Networking',
          description: 'Intent-Based Networking (IBN) implementation with automated network configuration and management',
          features: ['Automated Configuration', 'Network Management', 'Intent Translation', 'Performance', 'Security', 'Compliance', 'Monitoring', 'Support'],
          pricing: 'Starting at $32,000',
          trial: 'Free IBN assessment',
          timeline: '14-28 weeks',
          link: 'https://ziontechgroup.com/intent-based-networking',
          popular: false
        },
        {
          name: 'Network Automation Platform',
          description: 'Network automation platform with automated configuration, monitoring, and management',
          features: ['Automated Configuration', 'Network Monitoring', 'Management', 'Orchestration', 'Performance', 'Security', 'Compliance', 'Support'],
          pricing: 'Starting at $22,000',
          trial: 'Free network automation demo',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/network-automation-platform',
          popular: true
        },
        {
          name: 'Network Performance Monitoring',
          description: 'Network performance monitoring with real-time analytics, troubleshooting, and optimization',
          features: ['Real-time Analytics', 'Troubleshooting', 'Performance Optimization', 'Monitoring', 'Alerting', 'Reporting', 'Integration', 'Support'],
          pricing: 'Starting at $18,000',
          trial: 'Free network monitoring demo',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-performance-monitoring',
          popular: true
        },
        {
          name: 'Network Security Monitoring',
          description: 'Network security monitoring with threat detection, incident response, and security analytics',
          features: ['Threat Detection', 'Incident Response', 'Security Analytics', 'Monitoring', 'Alerting', 'Reporting', 'Integration', 'Support'],
          pricing: 'Starting at $20,000',
          trial: 'Free network security demo',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-security-monitoring',
          popular: true
        },
        {
          name: 'Network Traffic Analysis',
          description: 'Network traffic analysis with deep packet inspection, flow analysis, and behavioral monitoring',
          features: ['Deep Packet Inspection', 'Flow Analysis', 'Behavioral Monitoring', 'Analytics', 'Reporting', 'Integration', 'Compliance', 'Support'],
          pricing: 'Starting at $16,000',
          trial: 'Free traffic analysis demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-traffic-analysis',
          popular: true
        },
        {
          name: 'Network Capacity Planning',
          description: 'Network capacity planning with traffic forecasting, capacity analysis, and optimization',
          features: ['Traffic Forecasting', 'Capacity Analysis', 'Optimization', 'Planning', 'Reporting', 'Integration', 'Compliance', 'Support'],
          pricing: 'Starting at $14,000',
          trial: 'Free capacity planning assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-capacity-planning',
          popular: false
        },
        {
          name: 'Network Optimization Services',
          description: 'Network optimization services with performance tuning, configuration optimization, and troubleshooting',
          features: ['Performance Tuning', 'Configuration Optimization', 'Troubleshooting', 'Monitoring', 'Reporting', 'Integration', 'Compliance', 'Support'],
          pricing: 'Starting at $12,000',
          trial: 'Free network optimization assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-optimization-services',
          popular: true
        },
        {
          name: 'Network Design and Architecture',
          description: 'Network design and architecture services with scalable, secure, and high-performance networks',
          features: ['Network Design', 'Architecture', 'Scalability', 'Security', 'Performance', 'Compliance', 'Documentation', 'Support'],
          pricing: 'Starting at $25,000',
          trial: 'Free network design assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/network-design-architecture',
          popular: true
        },
        {
          name: 'Network Security Architecture',
          description: 'Network security architecture with defense-in-depth, segmentation, and security controls',
          features: ['Defense-in-Depth', 'Segmentation', 'Security Controls', 'Architecture', 'Compliance', 'Documentation', 'Integration', 'Support'],
          pricing: 'Starting at $28,000',
          trial: 'Free security architecture assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/network-security-architecture',
          popular: true
        },
        {
          name: 'Network Compliance Services',
          description: 'Network compliance services with regulatory compliance, audit support, and documentation',
          features: ['Regulatory Compliance', 'Audit Support', 'Documentation', 'Compliance', 'Monitoring', 'Reporting', 'Integration', 'Support'],
          pricing: 'Starting at $15,000',
          trial: 'Free compliance assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-compliance-services',
          popular: true
        },
        {
          name: 'Network Migration Services',
          description: 'Network migration services with seamless migration, testing, and validation',
          features: ['Seamless Migration', 'Testing', 'Validation', 'Planning', 'Execution', 'Monitoring', 'Support', 'Documentation'],
          pricing: 'Starting at $20,000',
          trial: 'Free migration assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/network-migration-services',
          popular: true
        },
        {
          name: 'Network Upgrade Services',
          description: 'Network upgrade services with hardware refresh, software updates, and performance improvements',
          features: ['Hardware Refresh', 'Software Updates', 'Performance Improvements', 'Planning', 'Execution', 'Testing', 'Support', 'Documentation'],
          pricing: 'Starting at $18,000',
          trial: 'Free upgrade assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-upgrade-services',
          popular: true
        },
        {
          name: 'Network Maintenance Services',
          description: 'Network maintenance services with proactive monitoring, maintenance, and support',
          features: ['Proactive Monitoring', 'Maintenance', 'Support', 'Performance', 'Security', 'Compliance', 'Reporting', 'Documentation'],
          pricing: 'Starting at $5,000/month',
          trial: 'Free maintenance assessment',
          timeline: 'Ongoing',
          link: 'https://ziontechgroup.com/network-maintenance-services',
          popular: true
        },
        {
          name: 'Network Support Services',
          description: 'Network support services with 24/7 support, troubleshooting, and issue resolution',
          features: ['24/7 Support', 'Troubleshooting', 'Issue Resolution', 'Performance', 'Security', 'Compliance', 'Reporting', 'Documentation'],
          pricing: 'Starting at $3,000/month',
          trial: 'Free support assessment',
          timeline: 'Ongoing',
          link: 'https://ziontechgroup.com/network-support-services',
          popular: true
        },
        {
          name: 'Network Consulting Services',
          description: 'Network consulting services with strategic planning, architecture review, and optimization',
          features: ['Strategic Planning', 'Architecture Review', 'Optimization', 'Compliance', 'Security', 'Performance', 'Documentation', 'Support'],
          pricing: 'Starting at $200/hour',
          trial: 'Free consulting assessment',
          timeline: 'As needed',
          link: 'https://ziontechgroup.com/network-consulting-services',
          popular: true
        },
        {
          name: 'Network Training Services',
          description: 'Network training services with technical training, certification, and skill development',
          features: ['Technical Training', 'Certification', 'Skill Development', 'Hands-on Labs', 'Documentation', 'Support', 'Assessment', 'Certification'],
          pricing: 'Starting at $5,000',
          trial: 'Free training assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-training-services',
          popular: true
        },
        {
          name: 'Network Documentation Services',
          description: 'Network documentation services with comprehensive documentation, diagrams, and procedures',
          features: ['Comprehensive Documentation', 'Diagrams', 'Procedures', 'Standards', 'Compliance', 'Maintenance', 'Updates', 'Support'],
          pricing: 'Starting at $8,000',
          trial: 'Free documentation assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-documentation-services',
          popular: false
        },
        {
          name: 'Network Audit Services',
          description: 'Network audit services with comprehensive assessment, compliance review, and recommendations',
          features: ['Comprehensive Assessment', 'Compliance Review', 'Recommendations', 'Security', 'Performance', 'Compliance', 'Reporting', 'Support'],
          pricing: 'Starting at $10,000',
          trial: 'Free audit assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-audit-services',
          popular: true
        },
        {
          name: 'Network Health Check',
          description: 'Network health check with comprehensive assessment, performance analysis, and recommendations',
          features: ['Comprehensive Assessment', 'Performance Analysis', 'Recommendations', 'Security', 'Compliance', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $5,000',
          trial: 'Free health check',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-health-check',
          popular: true
        },
        {
          name: 'Network Performance Testing',
          description: 'Network performance testing with load testing, stress testing, and performance validation',
          features: ['Load Testing', 'Stress Testing', 'Performance Validation', 'Testing', 'Analysis', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $8,000',
          trial: 'Free performance testing assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-performance-testing',
          popular: true
        },
        {
          name: 'Network Security Testing',
          description: 'Network security testing with penetration testing, vulnerability assessment, and security validation',
          features: ['Penetration Testing', 'Vulnerability Assessment', 'Security Validation', 'Testing', 'Analysis', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $12,000',
          trial: 'Free security testing assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-security-testing',
          popular: true
        },
        {
          name: 'Network Compliance Testing',
          description: 'Network compliance testing with regulatory compliance validation and audit preparation',
          features: ['Regulatory Compliance Validation', 'Audit Preparation', 'Testing', 'Analysis', 'Reporting', 'Support', 'Documentation', 'Compliance'],
          pricing: 'Starting at $10,000',
          trial: 'Free compliance testing assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-compliance-testing',
          popular: true
        },
        {
          name: 'Network Disaster Recovery Testing',
          description: 'Network disaster recovery testing with backup validation, recovery testing, and business continuity',
          features: ['Backup Validation', 'Recovery Testing', 'Business Continuity', 'Testing', 'Analysis', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $8,000',
          trial: 'Free disaster recovery testing assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-disaster-recovery-testing',
          popular: true
        },
        {
          name: 'Network Load Balancing',
          description: 'Network load balancing with traffic distribution, performance optimization, and high availability',
          features: ['Traffic Distribution', 'Performance Optimization', 'High Availability', 'Load Balancing', 'Monitoring', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $6,000',
          trial: 'Free load balancing assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-load-balancing',
          popular: true
        },
        {
          name: 'Network Redundancy',
          description: 'Network redundancy with failover, backup links, and high availability',
          features: ['Failover', 'Backup Links', 'High Availability', 'Redundancy', 'Monitoring', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $8,000',
          trial: 'Free redundancy assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-redundancy',
          popular: true
        },
        {
          name: 'Network QoS Implementation',
          description: 'Network QoS implementation with traffic prioritization, bandwidth management, and performance optimization',
          features: ['Traffic Prioritization', 'Bandwidth Management', 'Performance Optimization', 'QoS', 'Monitoring', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $7,000',
          trial: 'Free QoS assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-qos-implementation',
          popular: true
        },
        {
          name: 'Network VLAN Configuration',
          description: 'Network VLAN configuration with segmentation, security, and performance optimization',
          features: ['Segmentation', 'Security', 'Performance Optimization', 'VLAN', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $5,000',
          trial: 'Free VLAN assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-vlan-configuration',
          popular: true
        },
        {
          name: 'Network Routing Configuration',
          description: 'Network routing configuration with dynamic routing, load balancing, and performance optimization',
          features: ['Dynamic Routing', 'Load Balancing', 'Performance Optimization', 'Routing', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $6,000',
          trial: 'Free routing assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-routing-configuration',
          popular: true
        },
        {
          name: 'Network Switching Configuration',
          description: 'Network switching configuration with port management, VLAN configuration, and performance optimization',
          features: ['Port Management', 'VLAN Configuration', 'Performance Optimization', 'Switching', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $4,000',
          trial: 'Free switching assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-switching-configuration',
          popular: true
        },
        {
          name: 'Network Wireless Configuration',
          description: 'Network wireless configuration with WiFi setup, security, and performance optimization',
          features: ['WiFi Setup', 'Security', 'Performance Optimization', 'Wireless', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $5,000',
          trial: 'Free wireless assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-wireless-configuration',
          popular: true
        },
        {
          name: 'Network Firewall Configuration',
          description: 'Network firewall configuration with security policies, access control, and threat protection',
          features: ['Security Policies', 'Access Control', 'Threat Protection', 'Firewall', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $7,000',
          trial: 'Free firewall assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-firewall-configuration',
          popular: true
        },
        {
          name: 'Network VPN Configuration',
          description: 'Network VPN configuration with secure remote access, site-to-site connectivity, and encryption',
          features: ['Secure Remote Access', 'Site-to-Site Connectivity', 'Encryption', 'VPN', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $6,000',
          trial: 'Free VPN assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-vpn-configuration',
          popular: true
        },
        {
          name: 'Network DNS Configuration',
          description: 'Network DNS configuration with domain resolution, load balancing, and performance optimization',
          features: ['Domain Resolution', 'Load Balancing', 'Performance Optimization', 'DNS', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $4,000',
          trial: 'Free DNS assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-dns-configuration',
          popular: true
        },
        {
          name: 'Network DHCP Configuration',
          description: 'Network DHCP configuration with IP address management, lease management, and performance optimization',
          features: ['IP Address Management', 'Lease Management', 'Performance Optimization', 'DHCP', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $3,000',
          trial: 'Free DHCP assessment',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/network-dhcp-configuration',
          popular: true
        },
        {
          name: 'Network NTP Configuration',
          description: 'Network NTP configuration with time synchronization, accuracy, and performance optimization',
          features: ['Time Synchronization', 'Accuracy', 'Performance Optimization', 'NTP', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $2,000',
          trial: 'Free NTP assessment',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/network-ntp-configuration',
          popular: false
        },
        {
          name: 'Network SNMP Configuration',
          description: 'Network SNMP configuration with monitoring, management, and performance optimization',
          features: ['Monitoring', 'Management', 'Performance Optimization', 'SNMP', 'Configuration', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $3,000',
          trial: 'Free SNMP assessment',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/network-snmp-configuration',
          popular: true
        },
        {
          name: 'Network Syslog Configuration',
          description: 'Network Syslog configuration with logging, monitoring, and security analysis',
          features: ['Logging', 'Monitoring', 'Security Analysis', 'Syslog', 'Configuration', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $2,000',
          trial: 'Free Syslog assessment',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/network-syslog-configuration',
          popular: true
        },
        {
          name: 'Network NetFlow Configuration',
          description: 'Network NetFlow configuration with traffic analysis, monitoring, and performance optimization',
          features: ['Traffic Analysis', 'Monitoring', 'Performance Optimization', 'NetFlow', 'Configuration', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $4,000',
          trial: 'Free NetFlow assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-netflow-configuration',
          popular: true
        },
        {
          name: 'Network sFlow Configuration',
          description: 'Network sFlow configuration with sampling, monitoring, and performance analysis',
          features: ['Sampling', 'Monitoring', 'Performance Analysis', 'sFlow', 'Configuration', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $3,000',
          trial: 'Free sFlow assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-sflow-configuration',
          popular: false
        },
        {
          name: 'Network IPAM Configuration',
          description: 'Network IPAM configuration with IP address management, subnet management, and DNS integration',
          features: ['IP Address Management', 'Subnet Management', 'DNS Integration', 'IPAM', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $5,000',
          trial: 'Free IPAM assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-ipam-configuration',
          popular: true
        },
        {
          name: 'Network DDI Configuration',
          description: 'Network DDI configuration with DNS, DHCP, and IPAM integration and management',
          features: ['DNS Integration', 'DHCP Integration', 'IPAM Integration', 'DDI', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $6,000',
          trial: 'Free DDI assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-ddi-configuration',
          popular: true
        },
        {
          name: 'Network SDN Configuration',
          description: 'Network SDN configuration with software-defined networking, automation, and programmability',
          features: ['Software-defined Networking', 'Automation', 'Programmability', 'SDN', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $8,000',
          trial: 'Free SDN assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-sdn-configuration',
          popular: true
        },
        {
          name: 'Network NFV Configuration',
          description: 'Network NFV configuration with network function virtualization, VNFs, and orchestration',
          features: ['Network Function Virtualization', 'VNFs', 'Orchestration', 'NFV', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $10,000',
          trial: 'Free NFV assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-nfv-configuration',
          popular: false
        },
        {
          name: 'Network Cloud Integration',
          description: 'Network cloud integration with hybrid cloud, multi-cloud, and cloud-native networking',
          features: ['Hybrid Cloud', 'Multi-cloud', 'Cloud-native Networking', 'Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $12,000',
          trial: 'Free cloud integration assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-cloud-integration',
          popular: true
        },
        {
          name: 'Network Edge Computing',
          description: 'Network edge computing with edge devices, edge processing, and edge analytics',
          features: ['Edge Devices', 'Edge Processing', 'Edge Analytics', 'Edge Computing', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $15,000',
          trial: 'Free edge computing assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/network-edge-computing',
          popular: true
        },
        {
          name: 'Network IoT Integration',
          description: 'Network IoT integration with IoT devices, protocols, and data processing',
          features: ['IoT Devices', 'Protocols', 'Data Processing', 'IoT Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $10,000',
          trial: 'Free IoT integration assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-iot-integration',
          popular: true
        },
        {
          name: 'Network AI Integration',
          description: 'Network AI integration with machine learning, analytics, and intelligent automation',
          features: ['Machine Learning', 'Analytics', 'Intelligent Automation', 'AI Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $18,000',
          trial: 'Free AI integration assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/network-ai-integration',
          popular: true
        },
        {
          name: 'Network Quantum Integration',
          description: 'Network quantum integration with quantum computing, quantum cryptography, and quantum networking',
          features: ['Quantum Computing', 'Quantum Cryptography', 'Quantum Networking', 'Quantum Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free quantum integration assessment',
          timeline: '24-48 weeks',
          link: 'https://ziontechgroup.com/network-quantum-integration',
          popular: false
        },
        {
          name: 'Network 6G Preparation',
          description: 'Network 6G preparation with next-generation wireless, terahertz communication, and advanced technologies',
          features: ['Next-generation Wireless', 'Terahertz Communication', 'Advanced Technologies', '6G Preparation', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $100,000',
          trial: 'Free 6G preparation assessment',
          timeline: '48-96 weeks',
          link: 'https://ziontechgroup.com/network-6g-preparation',
          popular: false
        },
        {
          name: 'Network Space Integration',
          description: 'Network space integration with satellite communication, space-based internet, and orbital networks',
          features: ['Satellite Communication', 'Space-based Internet', 'Orbital Networks', 'Space Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $200,000',
          trial: 'Free space integration assessment',
          timeline: '64-128 weeks',
          link: 'https://ziontechgroup.com/network-space-integration',
          popular: false
        },
        {
          name: 'Network Time Travel Integration',
          description: 'Network time travel integration with temporal communication, causality networks, and time-based routing',
          features: ['Temporal Communication', 'Causality Networks', 'Time-based Routing', 'Time Travel Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $1,000,000',
          trial: 'Free time travel integration assessment',
          timeline: '256-512 weeks',
          link: 'https://ziontechgroup.com/network-time-travel-integration',
          popular: false
        },
        {
          name: 'Network Multiverse Integration',
          description: 'Network multiverse integration with parallel universe communication, dimensional routing, and reality-based networking',
          features: ['Parallel Universe Communication', 'Dimensional Routing', 'Reality-based Networking', 'Multiverse Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $10,000,000',
          trial: 'Free multiverse integration assessment',
          timeline: '1024-2048 weeks',
          link: 'https://ziontechgroup.com/network-multiverse-integration',
          popular: false
        },
        {
          name: 'Network God Mode Integration',
          description: 'Network god mode integration with omnipotent networking, reality manipulation, and universal control',
          features: ['Omnipotent Networking', 'Reality Manipulation', 'Universal Control', 'God Mode Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $100,000,000',
          trial: 'Free god mode integration assessment',
          timeline: '4096-8192 weeks',
          link: 'https://ziontechgroup.com/network-god-mode-integration',
          popular: false
        }
      ]
    },
    {
      category: 'Emerging Technologies',
      icon: Zap,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'Blockchain Integration Services',
          description: 'Complete blockchain integration with smart contracts, DeFi solutions, and Web3 applications',
          features: ['Smart Contract Development', 'DeFi Solutions', 'Web3 Integration', 'NFT Platforms', 'Token Development', 'Blockchain Migration', 'Security Audits', 'Maintenance'],
          pricing: 'Starting at $25,000',
          trial: 'Free consultation',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/blockchain-integration',
          popular: true
        },
        {
          name: 'IoT & Edge Computing Solutions',
          description: 'Comprehensive IoT solutions with edge computing, real-time analytics, and device management',
          features: ['IoT Device Management', 'Edge Computing', 'Real-time Analytics', 'Device Security', 'Data Processing', 'Cloud Integration', 'Monitoring', 'Maintenance'],
          pricing: 'Starting at $18,000',
          trial: 'Free IoT assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/iot-edge-solutions',
          popular: true
        },
        {
          name: 'AR/VR Development Services',
          description: 'Immersive AR/VR applications for training, marketing, and customer engagement',
          features: ['AR Application Development', 'VR Experience Design', '3D Modeling', 'Interactive Content', 'Cross-platform Support', 'Performance Optimization', 'User Testing', 'Deployment'],
          pricing: 'Starting at $30,000',
          trial: 'Free demo',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/ar-vr-development',
          popular: false
        },
        {
          name: 'Quantum Computing Integration',
          description: 'Quantum computing solutions for optimization, cryptography, and advanced problem solving',
          features: ['Quantum Algorithm Development', 'Quantum Simulation', 'Hybrid Computing', 'Quantum Security', 'Performance Optimization', 'Integration', 'Training', 'Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free quantum assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/quantum-computing',
          popular: false
        }
      ]
    },
    {
      category: 'AI-Powered IT Solutions',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI IT Operations (AIOps)',
          description: 'AI-powered IT operations with intelligent automation, predictive analytics, and self-healing systems',
          features: ['Predictive Analytics', 'Automated Incident Response', 'Self-Healing Systems', 'Intelligent Alerting', 'Performance Optimization'],
          pricing: 'Starting at $8,000/month',
          trial: 'Free AIOps assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/ai-ops',
          popular: true
        },
        {
          name: 'AI Network Security',
          description: 'Advanced AI-powered network security with behavioral analysis and threat prediction',
          features: ['Behavioral Analysis', 'Threat Prediction', 'Automated Response', 'Network Segmentation', 'Zero Trust Implementation'],
          pricing: 'Starting at $12,000/month',
          trial: 'Free security assessment',
          timeline: '6-10 weeks',
          link: 'https://ziontechgroup.com/ai-network-security',
          popular: true
        },
        {
          name: 'AI Cloud Cost Optimization',
          description: 'Intelligent cloud cost management with AI-powered resource optimization and cost prediction',
          features: ['Cost Prediction', 'Resource Optimization', 'Auto-scaling', 'Waste Detection', 'Budget Management'],
          pricing: 'Starting at $5,000/month',
          trial: 'Free cost analysis',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/ai-cloud-optimization',
          popular: false
        }
      ]
    },
    {
      category: 'Industry-Specific IT Solutions',
      icon: Building,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'Healthcare IT Solutions',
          description: 'HIPAA-compliant IT infrastructure for healthcare organizations with patient data security',
          features: ['HIPAA Compliance', 'Patient Data Security', 'Electronic Health Records', 'Medical Device Integration', 'Telemedicine Support'],
          pricing: 'Starting at $15,000',
          trial: 'Free compliance audit',
          timeline: '8-12 weeks',
          link: 'https://ziontechgroup.com/healthcare-it',
          popular: true
        },
        {
          name: 'Financial Services IT',
          description: 'SOX-compliant IT solutions for financial institutions with advanced security and compliance',
          features: ['SOX Compliance', 'Financial Data Security', 'Transaction Monitoring', 'Risk Management', 'Regulatory Reporting'],
          pricing: 'Starting at $20,000',
          trial: 'Free compliance assessment',
          timeline: '10-16 weeks',
          link: 'https://ziontechgroup.com/financial-it',
          popular: true
        },
        {
          name: 'Manufacturing IT Solutions',
          description: 'Industrial IT infrastructure with IoT integration and manufacturing automation',
          features: ['IoT Integration', 'Manufacturing Automation', 'Supply Chain Management', 'Quality Control Systems', 'Predictive Maintenance'],
          pricing: 'Starting at $18,000',
          trial: 'Free manufacturing assessment',
          timeline: '12-20 weeks',
          link: 'https://ziontechgroup.com/manufacturing-it',
          popular: false
        },
        {
          name: 'Retail IT Solutions',
          description: 'Omnichannel retail IT infrastructure with POS systems and customer analytics',
          features: ['POS Systems', 'Inventory Management', 'Customer Analytics', 'E-commerce Integration', 'Mobile Commerce'],
          pricing: 'Starting at $12,000',
          trial: 'Free retail assessment',
          timeline: '6-10 weeks',
          link: 'https://ziontechgroup.com/retail-it',
          popular: false
        }
      ]
    },
    {
      category: 'Emerging Technologies',
      icon: Rocket,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      services: [
        {
          name: 'Edge Computing Solutions',
          description: 'Edge computing infrastructure for low-latency applications and IoT devices',
          features: ['Edge Servers', 'IoT Integration', 'Low-latency Processing', 'Data Synchronization', 'Offline Capabilities'],
          pricing: 'Starting at $10,000',
          trial: 'Free edge assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/edge-computing',
          popular: true
        },
        {
          name: '5G Network Implementation',
          description: '5G network infrastructure and optimization for high-speed connectivity',
          features: ['5G Infrastructure', 'Network Optimization', 'Speed Testing', 'Coverage Analysis', 'Device Management'],
          pricing: 'Starting at $25,000',
          trial: 'Free 5G assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/5g-implementation',
          popular: false
        },
        {
          name: 'IoT Platform Development',
          description: 'Comprehensive IoT platform with device management and data analytics',
          features: ['Device Management', 'Data Analytics', 'Real-time Monitoring', 'Alert Systems', 'Integration APIs'],
          pricing: 'Starting at $15,000',
          trial: 'Free IoT consultation',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/iot-platform',
          popular: true
=======
          name: 'AI-Powered Infrastructure Management',
          description: 'Intelligent infrastructure management with AI-driven optimization and predictive maintenance',
          features: ['AI Optimization', 'Predictive Maintenance', 'Automated Scaling', 'Performance Tuning', 'Cost Optimization'],
          pricing: 'Starting at $5,500/month',
          trial: 'Free AI assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/ai-infrastructure',
          popular: true
        },
        {
          name: 'Quantum-Safe Security Implementation',
          description: 'Next-generation security solutions resistant to quantum computing threats',
          features: ['Quantum Cryptography', 'Post-Quantum Algorithms', 'Future-Proof Security', 'Migration Planning', 'Compliance Assurance'],
          pricing: 'Starting at $12,000',
          trial: 'Free security audit',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/quantum-security',
          popular: false
        },
        {
          name: 'Edge Computing Infrastructure',
          description: 'Distributed computing infrastructure for IoT and real-time applications',
          features: ['Edge Nodes', 'Real-time Processing', 'Low Latency', 'IoT Integration', 'Distributed Analytics'],
          pricing: 'Starting at $8,000/month',
          trial: 'Free edge assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/edge-computing',
          popular: true
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
        }
      ]
    },
    {
      category: 'Quantum Computing & Advanced Technologies',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'Quantum Computing Infrastructure',
          description: 'Complete quantum computing setup with quantum algorithms, error correction, and hybrid classical-quantum systems',
          features: ['Quantum Hardware Setup', 'Algorithm Development', 'Error Correction', 'Hybrid Systems', 'Quantum Simulation', 'Performance Optimization', 'Security Implementation', 'Training & Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free quantum assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/quantum-computing-infrastructure',
          popular: true
        },
        {
          name: 'Quantum-Safe Security Implementation',
          description: 'Future-proof security solutions designed to protect against quantum computing threats',
          features: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Security Assessment', 'Migration Planning', 'Compliance Support', 'Risk Analysis', 'Implementation', 'Ongoing Support'],
          pricing: 'Starting at $25,000',
          trial: 'Free security audit',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/quantum-safe-security',
          popular: true
        },
        {
          name: 'AI-Powered IT Operations (AIOps)',
          description: 'Intelligent IT operations with AI-driven automation, predictive maintenance, and self-healing systems',
          features: ['AI Automation', 'Predictive Analytics', 'Self-healing Systems', 'Intelligent Alerting', 'Root Cause Analysis', 'Performance Optimization', 'Capacity Planning', 'Cost Optimization'],
          pricing: 'Starting at $8,000/month',
          trial: 'Free AIOps assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/ai-ops',
          popular: true
        },
        {
          name: 'Holographic Workspace Solutions',
          description: 'Immersive 3D workspace technology with holographic displays and spatial computing',
          features: ['3D Holographic Displays', 'Spatial Computing', 'Gesture Recognition', 'Mixed Reality Integration', 'Collaborative Tools', 'Custom Applications', 'Hardware Setup', 'Training'],
          pricing: 'Starting at $30,000',
          trial: 'Free demo',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/holographic-workspace',
          popular: false
        }
      ]
    },
    {
      category: 'Advanced AI & Machine Learning',
      icon: Brain,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'AI Infrastructure Setup',
          description: 'Complete AI infrastructure with GPU clusters, ML pipelines, and model deployment',
          features: ['GPU Cluster Setup', 'ML Pipeline Development', 'Model Deployment', 'Data Processing', 'Training Infrastructure', 'Monitoring Systems', 'Scalability Planning', 'Performance Optimization'],
          pricing: 'Starting at $35,000',
          trial: 'Free AI assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/ai-infrastructure',
          popular: true
        },
        {
          name: 'Neural Network Optimization',
          description: 'Advanced neural network optimization with automated architecture search and performance tuning',
          features: ['Architecture Search', 'Performance Tuning', 'Hyperparameter Optimization', 'Model Compression', 'Quantization', 'Pruning', 'Training Acceleration', 'Deployment Optimization'],
          pricing: 'Starting at $15,000',
          trial: 'Free optimization assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/neural-network-optimization',
          popular: true
        },
        {
          name: 'AI Model Deployment & Management',
          description: 'Production-ready AI model deployment with monitoring, scaling, and lifecycle management',
          features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling', 'Version Control', 'Rollback Capabilities', 'API Management', 'Cost Optimization'],
          pricing: 'Starting at $12,000',
          trial: 'Free deployment assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/ai-model-deployment',
          popular: true
        },
        {
          name: 'Quantum Machine Learning Integration',
          description: 'Quantum-enhanced machine learning with exponential speedup and advanced algorithms',
          features: ['Quantum ML Algorithms', 'Hybrid Classical-Quantum', 'Exponential Speedup', 'Advanced Optimization', 'Quantum Simulation', 'Performance Monitoring', 'Custom Development', 'Training & Support'],
          pricing: 'Starting at $40,000',
          trial: 'Free quantum ML assessment',
          timeline: '12-20 weeks',
          link: 'https://ziontechgroup.com/quantum-ml-integration',
          popular: false
        }
      ]
    },
    {
      category: 'Space Technology & Aerospace',
      icon: Rocket,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      services: [
        {
          name: 'Satellite Communication Systems',
          description: 'Advanced satellite communication infrastructure with ground stations and network management',
          features: ['Ground Station Setup', 'Satellite Communication', 'Network Management', 'Signal Processing', 'Antenna Systems', 'Monitoring & Control', 'Security Implementation', 'Maintenance'],
          pricing: 'Starting at $75,000',
          trial: 'Free space tech consultation',
          timeline: '16-32 weeks',
          link: 'https://ziontechgroup.com/satellite-communication',
          popular: false
        },
        {
          name: 'Space Mission Control Systems',
          description: 'Mission control infrastructure for space operations with real-time monitoring and control',
          features: ['Mission Control Center', 'Real-time Monitoring', 'Command & Control', 'Data Processing', 'Visualization Systems', 'Alert Systems', 'Backup Systems', 'Training'],
          pricing: 'Starting at $100,000',
          trial: 'Free mission control assessment',
          timeline: '20-40 weeks',
          link: 'https://ziontechgroup.com/space-mission-control',
          popular: false
        },
        {
          name: 'Space Debris Tracking System',
          description: 'AI-powered space debris tracking and collision avoidance system',
          features: ['Debris Tracking', 'Collision Prediction', 'Real-time Monitoring', 'Orbital Analysis', 'Risk Assessment', 'Alert System', 'Historical Data', 'API Integration'],
          pricing: 'Starting at $60,000',
          trial: 'Free debris tracking demo',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/space-debris-tracking',
          popular: true
        }
      ]
    },
    {
      category: 'Biotechnology & Life Sciences IT',
      icon: Stethoscope,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'Bioinformatics Infrastructure',
          description: 'High-performance computing infrastructure for bioinformatics and genomic analysis',
          features: ['HPC Cluster Setup', 'Genomic Data Processing', 'Bioinformatics Tools', 'Data Storage', 'Analysis Pipelines', 'Visualization Tools', 'Security & Compliance', 'Training'],
          pricing: 'Starting at $45,000',
          trial: 'Free bioinformatics assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/bioinformatics-infrastructure',
          popular: true
        },
        {
          name: 'Laboratory Information Management',
          description: 'Comprehensive LIMS solution with sample tracking, data management, and compliance',
          features: ['Sample Tracking', 'Data Management', 'Compliance Tools', 'Quality Control', 'Reporting', 'Integration', 'Security', 'Training'],
          pricing: 'Starting at $25,000',
          trial: 'Free LIMS consultation',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/lims-solution',
          popular: true
        },
        {
          name: 'Molecular Modeling Infrastructure',
          description: 'High-performance computing for molecular modeling and drug discovery',
          features: ['HPC Setup', 'Molecular Modeling Software', 'GPU Acceleration', 'Data Processing', 'Visualization', 'Collaboration Tools', 'Security', 'Support'],
          pricing: 'Starting at $35,000',
          trial: 'Free molecular modeling demo',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/molecular-modeling',
          popular: false
        }
      ]
    },
    {
      category: 'Advanced Security & Compliance',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {
          name: 'Zero Trust Security Architecture',
          description: 'Complete zero trust security implementation with identity verification and micro-segmentation',
          features: ['Identity Verification', 'Micro-segmentation', 'Device Management', 'Access Control', 'Continuous Monitoring', 'Policy Enforcement', 'Compliance Tools', 'Training'],
          pricing: 'Starting at $30,000',
          trial: 'Free zero trust assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/zero-trust-security',
          popular: true
        },
        {
          name: 'Advanced Threat Detection',
          description: 'AI-powered threat detection with behavioral analysis and automated response',
          features: ['Behavioral Analysis', 'Threat Detection', 'Automated Response', 'Incident Management', 'Forensics', 'Compliance Reporting', 'Training', 'Support'],
          pricing: 'Starting at $20,000',
          trial: 'Free threat assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/advanced-threat-detection',
          popular: true
        },
        {
          name: 'Compliance Automation Platform',
          description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulations',
          features: ['Compliance Monitoring', 'Automated Reporting', 'Policy Management', 'Audit Support', 'Risk Assessment', 'Documentation', 'Training', 'Support'],
          pricing: 'Starting at $18,000',
          trial: 'Free compliance audit',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/compliance-automation',
          popular: true
        }
      ]
    },
    {
      category: 'Green Technology & Sustainability',
      icon: Globe,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      services: [
        {
          name: 'Green IT Infrastructure',
          description: 'Sustainable IT infrastructure with energy-efficient hardware and renewable energy integration',
          features: ['Energy-efficient Hardware', 'Renewable Energy', 'Carbon Tracking', 'Waste Reduction', 'Green Data Centers', 'Sustainability Reporting', 'Compliance', 'Training'],
          pricing: 'Starting at $40,000',
          trial: 'Free green IT assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/green-it-infrastructure',
          popular: true
        },
        {
          name: 'Carbon Footprint Management',
          description: 'AI-powered carbon footprint tracking and reduction strategies',
          features: ['Carbon Tracking', 'Emission Analysis', 'Reduction Strategies', 'Reporting', 'Compliance', 'Sustainability Planning', 'Monitoring', 'Support'],
          pricing: 'Starting at $15,000',
          trial: 'Free carbon assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/carbon-footprint-management',
          popular: true
        },
        {
          name: 'Sustainable Data Centers',
          description: 'Eco-friendly data center design and implementation with renewable energy',
          features: ['Green Data Center Design', 'Renewable Energy', 'Cooling Optimization', 'Energy Monitoring', 'Waste Reduction', 'Sustainability Metrics', 'Compliance', 'Maintenance'],
          pricing: 'Starting at $100,000',
          trial: 'Free data center assessment',
          timeline: '20-40 weeks',
          link: 'https://ziontechgroup.com/sustainable-data-centers',
          popular: false
        }
      ]
    },
    {
      category: 'Emerging Technologies Integration',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      services: [
        {
          name: 'Metaverse Infrastructure',
          description: 'Complete metaverse infrastructure with virtual worlds, avatars, and immersive experiences',
          features: ['Virtual World Creation', 'Avatar Systems', 'Immersive Experiences', 'Social Features', 'Monetization', 'Security', 'Scalability', 'Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free metaverse demo',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/metaverse-infrastructure',
          popular: true
        },
        {
          name: 'Web3 & Blockchain Integration',
          description: 'Complete Web3 infrastructure with blockchain, DeFi, and NFT capabilities',
          features: ['Blockchain Setup', 'Smart Contracts', 'DeFi Integration', 'NFT Platform', 'Wallet Integration', 'Security', 'Scalability', 'Support'],
          pricing: 'Starting at $35,000',
          trial: 'Free Web3 consultation',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/web3-blockchain',
          popular: true
        },
        {
          name: 'AI-Powered Automation Suite',
          description: 'Comprehensive AI automation for business processes and operations',
          features: ['Process Automation', 'AI Decision Making', 'Workflow Optimization', 'Integration', 'Monitoring', 'Analytics', 'Training', 'Support'],
          pricing: 'Starting at $25,000',
          trial: 'Free automation assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/ai-automation-suite',
          popular: true
        }
      ]
    },
    {
      category: 'Advanced AI & Machine Learning Infrastructure',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Model Training Infrastructure',
          description: 'High-performance computing infrastructure for training large-scale AI models with GPU clusters and distributed computing',
          features: ['GPU Cluster Setup', 'Distributed Training', 'Model Versioning', 'Experiment Tracking', 'Resource Management', 'Auto-scaling', 'Cost Optimization', 'Performance Monitoring'],
          pricing: 'Starting at $25,000',
          trial: 'Free AI infrastructure assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/ai-model-training',
          popular: true
        },
        {
          name: 'Edge AI Computing Solutions',
          description: 'Edge computing infrastructure for AI inference at the edge with low latency and real-time processing',
          features: ['Edge Servers', 'AI Inference', 'Real-time Processing', 'Low Latency', 'Device Management', 'Data Synchronization', 'Security', 'Monitoring'],
          pricing: 'Starting at $15,000',
          trial: 'Free edge AI demo',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/edge-ai-computing',
          popular: true
        },
        {
          name: 'AI Data Pipeline Infrastructure',
          description: 'Complete data pipeline infrastructure for AI/ML with data ingestion, processing, and model serving',
          features: ['Data Ingestion', 'ETL Pipelines', 'Data Processing', 'Model Serving', 'API Management', 'Monitoring', 'Scalability', 'Security'],
          pricing: 'Starting at $18,000',
          trial: 'Free data pipeline audit',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/ai-data-pipeline',
          popular: true
        }
      ]
    },
    {
      category: 'Cybersecurity & Compliance Solutions',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {
          name: 'AI-Powered Security Operations Center',
          description: 'Advanced SOC with AI-driven threat detection, automated response, and 24/7 monitoring',
          features: ['AI Threat Detection', 'Automated Response', '24/7 Monitoring', 'Incident Management', 'Threat Intelligence', 'Forensics', 'Compliance', 'Reporting'],
          pricing: 'Starting at $12,000/month',
          trial: 'Free security assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/ai-soc',
          popular: true
        },
        {
          name: 'Zero Trust Security Implementation',
          description: 'Complete zero trust security architecture with identity verification and micro-segmentation',
          features: ['Identity Verification', 'Micro-segmentation', 'Device Management', 'Access Control', 'Continuous Monitoring', 'Policy Enforcement', 'Compliance', 'Training'],
          pricing: 'Starting at $30,000',
          trial: 'Free zero trust assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/zero-trust-implementation',
          popular: true
        },
        {
          name: 'AI-Powered Vulnerability Management',
          description: 'Intelligent vulnerability scanning and management with automated patching and risk assessment',
          features: ['Vulnerability Scanning', 'Risk Assessment', 'Automated Patching', 'Compliance Checking', 'Asset Discovery', 'Threat Modeling', 'Reporting', 'Integration'],
          pricing: 'Starting at $8,000/month',
          trial: 'Free vulnerability scan',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/ai-vulnerability-management',
          popular: true
        }
      ]
    },
    {
      category: 'Cloud & Infrastructure Solutions',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'Multi-Cloud Management Platform',
          description: 'Unified management platform for multi-cloud environments with cost optimization and security',
          features: ['Multi-cloud Management', 'Cost Optimization', 'Security Management', 'Resource Monitoring', 'Automation', 'Compliance', 'Migration', 'Support'],
          pricing: 'Starting at $20,000',
          trial: 'Free cloud assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/multi-cloud-management',
          popular: true
        },
        {
          name: 'AI-Powered Cloud Cost Optimization',
          description: 'Intelligent cloud cost management with AI-driven optimization and cost prediction',
          features: ['Cost Analysis', 'AI Optimization', 'Resource Right-sizing', 'Reserved Instances', 'Spot Instances', 'Cost Prediction', 'Budget Management', 'Reporting'],
          pricing: 'Starting at $5,000/month',
          trial: 'Free cost analysis',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/ai-cloud-cost-optimization',
          popular: true
        },
        {
          name: 'Hybrid Cloud Infrastructure',
          description: 'Seamless hybrid cloud infrastructure connecting on-premises and cloud environments',
          features: ['Hybrid Connectivity', 'Data Synchronization', 'Workload Migration', 'Security Integration', 'Monitoring', 'Backup & Recovery', 'Compliance', 'Support'],
          pricing: 'Starting at $25,000',
          trial: 'Free hybrid cloud consultation',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/hybrid-cloud-infrastructure',
          popular: true
        }
      ]
    },
    {
      category: 'Digital Transformation & Innovation',
      icon: Rocket,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      services: [
        {
          name: 'Digital Transformation Strategy',
          description: 'Comprehensive digital transformation strategy with technology roadmap and implementation planning',
          features: ['Strategy Development', 'Technology Roadmap', 'Change Management', 'Process Optimization', 'Digital Culture', 'Innovation Labs', 'Training', 'Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free transformation assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/digital-transformation-strategy',
          popular: true
        },
        {
          name: 'AI Innovation Lab Setup',
          description: 'Complete AI innovation lab with research infrastructure, tools, and development environment',
          features: ['Lab Setup', 'Research Infrastructure', 'AI Tools', 'Development Environment', 'Data Access', 'Collaboration Tools', 'Training', 'Support'],
          pricing: 'Starting at $75,000',
          trial: 'Free innovation lab consultation',
          timeline: '16-32 weeks',
          link: 'https://ziontechgroup.com/ai-innovation-lab',
          popular: true
        },
        {
          name: 'Technology Modernization Program',
          description: 'Comprehensive technology modernization with legacy system replacement and new technology adoption',
          features: ['Legacy Assessment', 'Modernization Planning', 'System Replacement', 'Data Migration', 'Integration', 'Testing', 'Training', 'Support'],
          pricing: 'Starting at $100,000',
          trial: 'Free modernization assessment',
          timeline: '20-40 weeks',
          link: 'https://ziontechgroup.com/technology-modernization',
          popular: true
        }
      ]
    },
    {
      category: 'Industry-Specific IT Solutions',
      icon: Building,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'Healthcare IT Solutions',
          description: 'HIPAA-compliant IT infrastructure for healthcare organizations with patient data security',
          features: ['HIPAA Compliance', 'Patient Data Security', 'Electronic Health Records', 'Medical Device Integration', 'Telemedicine Support', 'Interoperability', 'Audit Support', 'Training'],
          pricing: 'Starting at $15,000',
          trial: 'Free compliance audit',
          timeline: '8-12 weeks',
          link: 'https://ziontechgroup.com/healthcare-it',
          popular: true
        },
        {
          name: 'Financial Services IT',
          description: 'SOX-compliant IT solutions for financial institutions with advanced security and compliance',
          features: ['SOX Compliance', 'Financial Data Security', 'Transaction Monitoring', 'Risk Management', 'Regulatory Reporting', 'Audit Support', 'Training', 'Support'],
          pricing: 'Starting at $20,000',
          trial: 'Free compliance assessment',
          timeline: '10-16 weeks',
          link: 'https://ziontechgroup.com/financial-it',
          popular: true
        },
        {
          name: 'Manufacturing IT Solutions',
          description: 'Industrial IT infrastructure with IoT integration and manufacturing automation',
          features: ['IoT Integration', 'Manufacturing Automation', 'Supply Chain Management', 'Quality Control Systems', 'Predictive Maintenance', 'Safety Systems', 'Training', 'Support'],
          pricing: 'Starting at $18,000',
          trial: 'Free manufacturing assessment',
          timeline: '12-20 weeks',
          link: 'https://ziontechgroup.com/manufacturing-it',
          popular: true
        },
        {
          name: 'Retail IT Solutions',
          description: 'Omnichannel retail IT infrastructure with POS systems and customer analytics',
          features: ['POS Systems', 'Inventory Management', 'Customer Analytics', 'E-commerce Integration', 'Mobile Commerce', 'Loyalty Programs', 'Training', 'Support'],
          pricing: 'Starting at $12,000',
          trial: 'Free retail assessment',
          timeline: '6-10 weeks',
          link: 'https://ziontechgroup.com/retail-it',
          popular: true
        }
      ]
    }
      ]
=======
      id: 6,
      name: 'DevOps & CI/CD Implementation',
      description: 'Streamlined development processes with automated deployment and monitoring',
      icon: RefreshCw,
      features: [
        'CI/CD Pipeline Setup',
        'Automated Testing',
        'Container Orchestration',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Security Integration',
        'Performance Optimization'
      ],
      category: 'DevOps',
      popular: true,
      rating: 4.7,
      users: '900+',
      color: 'from-teal-500 to-cyan-600',
      capabilities: [
        '90% faster deployments',
        'Automated testing',
        'Zero-downtime updates',
        'Continuous monitoring'
      ],
      price: 'Starting at $3,999/project'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
=======
          popular: false,
          capabilities: [
            'Real-time system monitoring',
            'Performance metrics tracking',
            'Automated alerting',
            'Capacity planning analysis'
          ]
        }
      ]
=======

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, Server, Database, Shield, Network, Monitor, 
  Smartphone, Laptop, HardDrive, Cpu, MemoryStick, 
  Wifi, Router, Lock, Settings, Wrench, Hammer, 
  CheckCircle, Star, ArrowRight, Zap, Users, 
  BarChart3, Globe, Smartphone as Phone, Mail, 
  MapPin, Clock, Award, Phone as PhoneIcon, 
  Mail as MailIcon, MapPin as Location, Calendar,
  Search, ExternalLink, Brain, Bot, Target, 
  Layers, BarChart, PieChart, LineChart, Activity, 
  Sparkles, Atom, DollarSign, MessageSquare, 
  TrendingUp, CheckCircle as CheckIcon, ArrowRight as Arrow
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface ITService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: React.ComponentType<any>;
  popular?: boolean;
  comingSoon?: boolean;
  link: string;
  trial: string;
  roi: string;
  useCases: string[];
  industries: string[];
}

const itServices: ITService[] = [
  // Cloud Infrastructure
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Pro',
    description: 'Comprehensive cloud solutions with AWS, Azure, and Google Cloud integration, automated scaling, and 24/7 monitoring.',
    features: [
      'Multi-cloud deployment',
      'Automated scaling',
      '24/7 monitoring',
      'Disaster recovery',
      'Security compliance',
      'Cost optimization',
      'Performance tuning',
      'Migration services'
    ],
    pricing: { monthly: 999, yearly: 9990, setup: 1999 },
    category: 'Cloud',
    icon: Cloud,
    popular: true,
    link: 'https://ziontechgroup.com/cloud-infrastructure',
    trial: '14-day free trial',
    roi: '400% ROI in 6 months',
    useCases: ['Application hosting', 'Data backup', 'Disaster recovery', 'Scalable infrastructure'],
    industries: ['SaaS', 'E-commerce', 'Healthcare', 'Finance']
  },
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Pro',
    description: 'Seamless migration to cloud platforms with zero downtime, data integrity, and performance optimization.',
    features: [
      'Zero-downtime migration',
      'Data integrity assurance',
      'Performance optimization',
      'Security compliance',
      'Cost analysis',
      'Migration planning',
      'Testing & validation',
      'Post-migration support'
    ],
    pricing: { monthly: 799, yearly: 7990, setup: 1499 },
    category: 'Cloud',
    icon: Server,
    popular: false,
    link: 'https://ziontechgroup.com/cloud-migration',
    trial: '14-day free trial',
    roi: '300% ROI in 4 months',
    useCases: ['Legacy system migration', 'Data center migration', 'Application modernization', 'Hybrid cloud setup'],
    industries: ['Enterprise', 'Government', 'Healthcare', 'Finance']
  },

  // Cybersecurity
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Pro',
    description: 'Comprehensive security solutions with threat detection, vulnerability assessment, and incident response.',
    features: [
      'Threat detection & response',
      'Vulnerability assessment',
      'Penetration testing',
      'Security monitoring',
      'Compliance management',
      'Incident response',
      'Security training',
      '24/7 SOC support'
    ],
    pricing: { monthly: 1299, yearly: 12990, setup: 2499 },
    category: 'Security',
    icon: Shield,
    popular: true,
    link: 'https://ziontechgroup.com/cybersecurity',
    trial: '30-day free trial',
    roi: '500% ROI in 8 months',
    useCases: ['Threat protection', 'Compliance management', 'Security monitoring', 'Incident response'],
    industries: ['Finance', 'Healthcare', 'Government', 'E-commerce']
  },
  {
    id: 'data-protection',
    name: 'Data Protection Pro',
    description: 'Advanced data protection with encryption, backup, recovery, and compliance management.',
    features: [
      'Data encryption',
      'Automated backups',
      'Disaster recovery',
      'Compliance management',
      'Data classification',
      'Access controls',
      'Audit logging',
      'GDPR compliance'
    ],
    pricing: { monthly: 599, yearly: 5990, setup: 1199 },
    category: 'Security',
    icon: Lock,
    popular: false,
    link: 'https://ziontechgroup.com/data-protection',
    trial: '14-day free trial',
    roi: '250% ROI in 3 months',
    useCases: ['Data backup', 'Compliance management', 'Disaster recovery', 'Data encryption'],
    industries: ['Healthcare', 'Finance', 'Legal', 'Government']
  },

  // Network & Infrastructure
  {
    id: 'network-management',
    name: 'Network Management Pro',
    description: 'Complete network infrastructure management with monitoring, optimization, and security.',
    features: [
      'Network monitoring',
      'Performance optimization',
      'Security management',
      'Traffic analysis',
      'Bandwidth management',
      'Fault detection',
      'Capacity planning',
      '24/7 support'
    ],
    pricing: { monthly: 699, yearly: 6990, setup: 1399 },
    category: 'Network',
    icon: Network,
    popular: true,
    link: 'https://ziontechgroup.com/network-management',
    trial: '14-day free trial',
    roi: '300% ROI in 5 months',
    useCases: ['Network monitoring', 'Performance optimization', 'Security management', 'Capacity planning'],
    industries: ['Enterprise', 'Education', 'Healthcare', 'Manufacturing']
  },
  {
    id: 'wifi-solutions',
    name: 'WiFi Solutions Pro',
    description: 'Enterprise-grade WiFi solutions with seamless connectivity, security, and management.',
    features: [
      'Enterprise WiFi deployment',
      'Seamless roaming',
      'Security protocols',
      'Guest network management',
      'Analytics & reporting',
      'Remote management',
      'Capacity optimization',
      'Troubleshooting support'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 599 },
    category: 'Network',
    icon: Wifi,
    popular: false,
    link: 'https://ziontechgroup.com/wifi-solutions',
    trial: '7-day free trial',
    roi: '200% ROI in 2 months',
    useCases: ['Office WiFi', 'Guest networks', 'Remote work support', 'IoT connectivity'],
    industries: ['Office', 'Retail', 'Hospitality', 'Education']
  },

  // Database & Data Management
  {
    id: 'database-management',
    name: 'Database Management Pro',
    description: 'Comprehensive database solutions with optimization, backup, recovery, and performance tuning.',
    features: [
      'Database optimization',
      'Backup & recovery',
      'Performance tuning',
      'Security management',
      'Monitoring & alerting',
      'Migration services',
      'High availability',
      '24/7 support'
    ],
    pricing: { monthly: 799, yearly: 7990, setup: 1599 },
    category: 'Database',
    icon: Database,
    popular: true,
    link: 'https://ziontechgroup.com/database-management',
    trial: '14-day free trial',
    roi: '350% ROI in 6 months',
    useCases: ['Database optimization', 'Backup management', 'Performance tuning', 'Migration services'],
    industries: ['E-commerce', 'Finance', 'Healthcare', 'SaaS']
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics Pro',
    description: 'Transform your data into actionable insights with advanced analytics, visualization, and reporting.',
    features: [
      'Data visualization',
      'Advanced analytics',
      'Real-time reporting',
      'Predictive modeling',
      'Data integration',
      'Custom dashboards',
      'API integrations',
      'Training & support'
    ],
    pricing: { monthly: 599, yearly: 5990, setup: 1199 },
    category: 'Database',
    icon: BarChart3,
    popular: false,
    link: 'https://ziontechgroup.com/data-analytics',
    trial: '14-day free trial',
    roi: '300% ROI in 4 months',
    useCases: ['Business intelligence', 'Performance analytics', 'Predictive modeling', 'Custom reporting'],
    industries: ['Retail', 'Finance', 'Healthcare', 'Manufacturing']
  },

  // DevOps & Automation
  {
    id: 'devops',
    name: 'DevOps Pro',
    description: 'Complete DevOps solutions with CI/CD, infrastructure as code, and automated deployment.',
    features: [
      'CI/CD pipelines',
      'Infrastructure as code',
      'Automated deployment',
      'Container orchestration',
      'Monitoring & logging',
      'Security scanning',
      'Performance optimization',
      'Team training'
    ],
    pricing: { monthly: 899, yearly: 8990, setup: 1799 },
    category: 'DevOps',
    icon: Settings,
    popular: true,
    link: 'https://ziontechgroup.com/devops',
    trial: '14-day free trial',
    roi: '400% ROI in 5 months',
    useCases: ['CI/CD implementation', 'Infrastructure automation', 'Deployment automation', 'Performance monitoring'],
    industries: ['SaaS', 'Fintech', 'E-commerce', 'Startups']
  },
  {
    id: 'automation',
    name: 'IT Automation Pro',
    description: 'Automate IT processes with intelligent workflows, monitoring, and self-healing systems.',
    features: [
      'Process automation',
      'Self-healing systems',
      'Intelligent monitoring',
      'Workflow optimization',
      'Error handling',
      'Performance tuning',
      'Cost optimization',
      'Custom integrations'
    ],
    pricing: { monthly: 499, yearly: 4990, setup: 999 },
    category: 'DevOps',
    icon: Zap,
    popular: false,
    link: 'https://ziontechgroup.com/it-automation',
    trial: '14-day free trial',
    roi: '250% ROI in 3 months',
    useCases: ['Process automation', 'System monitoring', 'Error handling', 'Performance optimization'],
    industries: ['Enterprise', 'Manufacturing', 'Healthcare', 'Finance']
  },

  // Hardware & Support
  {
    id: 'hardware-support',
    name: 'Hardware Support Pro',
    description: 'Comprehensive hardware support with maintenance, upgrades, and 24/7 technical assistance.',
    features: [
      'Hardware maintenance',
      'Upgrade services',
      '24/7 technical support',
      'Remote diagnostics',
      'Preventive maintenance',
      'Warranty management',
      'Asset tracking',
      'Disposal services'
    ],
    pricing: { monthly: 399, yearly: 3990, setup: 799 },
    category: 'Hardware',
    icon: Monitor,
    popular: false,
    link: 'https://ziontechgroup.com/hardware-support',
    trial: '7-day free trial',
    roi: '200% ROI in 4 months',
    useCases: ['Hardware maintenance', 'System upgrades', 'Technical support', 'Asset management'],
    industries: ['Office', 'Education', 'Healthcare', 'Manufacturing']
  },
  {
    id: 'mobile-device-management',
    name: 'Mobile Device Management Pro',
    description: 'Secure and manage mobile devices with enterprise-grade security and management tools.',
    features: [
      'Device enrollment',
      'Security policies',
      'App management',
      'Remote wipe',
      'Compliance monitoring',
      'Location tracking',
      'Usage analytics',
      'Support services'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 399 },
    category: 'Hardware',
    icon: Smartphone,
    popular: false,
    link: 'https://ziontechgroup.com/mobile-device-management',
    trial: '7-day free trial',
    roi: '150% ROI in 2 months',
    useCases: ['Device security', 'App management', 'Compliance monitoring', 'Remote management'],
    industries: ['Enterprise', 'Healthcare', 'Education', 'Government']
  },

  // Consulting & Training
  {
    id: 'it-consulting',
    name: 'IT Consulting Pro',
    description: 'Strategic IT consulting with architecture design, technology selection, and implementation planning.',
    features: [
      'IT strategy planning',
      'Architecture design',
      'Technology selection',
      'Implementation planning',
      'Risk assessment',
      'Cost optimization',
      'Vendor management',
      'Project management'
    ],
    pricing: { monthly: 1299, yearly: 12990, setup: 2499 },
    category: 'Consulting',
    icon: Users,
    popular: true,
    link: 'https://ziontechgroup.com/it-consulting',
    trial: '30-day free trial',
    roi: '500% ROI in 12 months',
    useCases: ['IT strategy', 'Architecture design', 'Technology selection', 'Implementation planning'],
    industries: ['Enterprise', 'Startups', 'Government', 'Healthcare']
  },
  {
    id: 'it-training',
    name: 'IT Training Pro',
    description: 'Comprehensive IT training programs with hands-on experience and certification support.',
    features: [
      'Custom training programs',
      'Hands-on labs',
      'Certification support',
      'Online & offline training',
      'Progress tracking',
      'Expert instructors',
      'Real-world scenarios',
      'Ongoing support'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 599 },
    category: 'Consulting',
    icon: Award,
    popular: false,
    link: 'https://ziontechgroup.com/it-training',
    trial: '7-day free trial',
    roi: '200% ROI in 3 months',
    useCases: ['Team training', 'Certification preparation', 'Skill development', 'Technology adoption'],
    industries: ['Enterprise', 'Education', 'Government', 'Healthcare']
  }
];

const categories = [
  'All',
  'Cloud',
  'Security',
  'Network',
  'Database',
  'DevOps',
  'Hardware',
  'Consulting'
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our IT solutions deliver an average ROI of 350% within 6 months',
    stat: '350%'
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description: 'Get up and running in under 72 hours with our streamlined implementation',
    stat: '72h'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with 99.9% uptime guarantee and compliance',
    stat: '99.9%'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '24/7 support from certified IT professionals and engineers',
    stat: '24/7'
  }
];

const testimonials = [
  {
    name: 'Jennifer Martinez',
    company: 'TechCorp Solutions',
    role: 'CTO',
    content: 'Cloud Infrastructure Pro transformed our operations. We achieved 99.9% uptime and reduced costs by 40% within 3 months.',
    rating: 5,
    avatar: '/images/testimonials/jennifer-martinez.jpg'
  },
  {
    name: 'David Thompson',
    company: 'SecureBank Inc.',
    role: 'CISO',
    content: 'The cybersecurity solution provided comprehensive protection. We detected and prevented 95% of potential threats before they could impact our systems.',
    rating: 5,
    avatar: '/images/testimonials/david-thompson.jpg'
  },
  {
    name: 'Lisa Chen',
    company: 'DataFlow Systems',
    role: 'IT Director',
    content: 'DevOps Pro streamlined our deployment process. We reduced deployment time by 80% and improved code quality significantly.',
    rating: 5,
    avatar: '/images/testimonials/lisa-chen.jpg'
  }
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(itServices);

  useEffect(() => {
    let filtered = itServices;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
        service.useCases.some(useCase => useCase.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

<<<<<<< HEAD
  const categories = ['all', ...itServiceCategories.map(cat => cat.category)];

  const benefits = [
    {
      icon: TrendingUp,
      stat: '40%',
      title: 'Performance Improvement',
      description: 'Our clients see significant improvement in system performance and efficiency'
    },
    {
      icon: Clock,
      stat: '15 min',
      title: 'Response Time',
      description: 'Average response time for critical IT issues and support requests'
    },
    {
      icon: DollarSign,
      stat: '60%',
      title: 'Cost Reduction',
      description: 'Reduce IT costs through optimization and efficient resource management'
    },
    {
      icon: Shield,
      stat: '100%',
      title: 'Security',
      description: 'Zero security breaches with our comprehensive security approach'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
    }
  ];

  const categories = ['All', 'Cloud Services', 'Security', 'Infrastructure', 'Support', 'Development', 'DevOps'];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechStart Inc.',
      content: 'Zion Tech Group\'s cloud migration service was exceptional. They migrated our entire infrastructure with zero downtime and reduced our costs by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'IT Director, Global Corp',
      content: 'Their cybersecurity suite has given us complete peace of mind. The 24/7 monitoring and rapid response team are outstanding.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO, E-commerce Solutions',
      content: 'The custom software development team delivered exactly what we needed. The application has transformed our business operations.',
      rating: 5
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  const filteredServices = selectedCategory === 'all' 
    ? itServiceCategories.flatMap(cat => cat.services)
    : itServiceCategories.find(cat => cat.category === selectedCategory)?.services || [];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced quantum-particles">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden quantum-field">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              IT Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed neon-glow-cyan">
              Comprehensive IT solutions that keep your business running smoothly, securely, and efficiently. 
              From infrastructure to security, we've got you covered.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-gray-300">IT Services</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Enterprise Clients</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-400/20">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-3000"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">IT Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Comprehensive IT Services
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Enterprise-grade IT solutions that keep your business running smoothly, securely, and efficiently. From infrastructure to security, we've got you covered.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
=======
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">IT Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-text-advanced">
              Enterprise IT Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT services that keep your business running smoothly. From cloud infrastructure 
              to cybersecurity, we provide the technology foundation your business needs to succeed.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                <Cloud className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">350% Average ROI</span>
              </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
<<<<<<< HEAD
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Cloud className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Cloud Solutions</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">24/7 Support</span>
=======
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Certified Experts</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
              </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <Cloud className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services to modernize your infrastructure, enhance security, and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore IT Services
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Free Consultation
              </a>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>

<<<<<<< HEAD
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Complete IT Solutions for Modern Businesses
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From cloud migration to cybersecurity, we provide end-to-end IT services to keep your business running smoothly and securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                  <service.icon className="h-8 w-8" />
=======

        {/* Benefits */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-10 h-10 text-white" />
=======
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 group relative ${
                  service.popular ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{formatPrice(service.pricing.monthly)}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-blue-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.useCases.slice(0, 3).map((useCase, index) => (
                      <span key={index} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trial:</span>
                    <span className="text-blue-400 font-medium">{service.trial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expected ROI:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-700 transition-all block text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-blue-400 text-blue-400 py-2 px-4 rounded-lg font-medium hover:bg-blue-400 hover:text-slate-900 transition-all block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade IT solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
              </div>
              <div className="text-4xl font-bold text-white mb-2 neon-text">{benefit.stat}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className={`mb-12 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        {/* Services by Category */}
        {selectedCategory === 'all' ? (
          <div className={`space-y-16 mb-20 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {itServiceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
                </div>
<<<<<<< HEAD
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {category.services.map((service, serviceIndex) => (
<<<<<<< HEAD
                    <div key={serviceIndex} className="futuristic-card-enhanced hover-lift p-6 relative">
=======
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative group">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          Popular
                        </div>
                      )}
<<<<<<< HEAD
                      
                      <div className="relative z-10">
                        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{service.name}</h4>
                        <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="space-y-4 mb-6">
                          <h5 className="text-lg font-semibold text-white flex items-center">
                            <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                            Key Features:
                          </h5>
                          <ul className="space-y-2">
                            {service.features.slice(0, 4).map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                            {service.features.length > 4 && (
                              <li className="text-cyan-400 text-sm font-medium">
                                +{service.features.length - 4} more features
                              </li>
                            )}
                          </ul>
=======
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Pricing:</span>
                            <span className="text-lg font-bold text-cyan-400">{service.pricing}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Trial:</span>
                            <span className="text-sm font-medium text-green-400">{service.trial}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Timeline:</span>
                            <span className="text-sm font-medium text-purple-400">{service.timeline}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <a
                            href={service.link}
                            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </a>
                          <a
                            href="/contact"
                            className="w-full border border-cyan-400/50 text-cyan-400 py-3 px-6 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
                          >
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={service.link}
                          className="w-full neon-button-enhanced py-2 px-4 rounded-lg font-medium transition-all block text-center"
                        >
                          Learn More
                        </a>
                        <a
                          href="/contact"
                          className="w-full neon-button-enhanced py-2 px-4 rounded-lg font-medium transition-all block text-center"
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
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative group">
                {service.popular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h4>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-3 mb-6">
                  <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Pricing:</span>
                    <span className="text-sm font-medium text-white">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Trial:</span>
                    <span className="text-sm font-medium text-cyan-400">{service.trial}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Timeline:</span>
                    <span className="text-sm font-medium text-cyan-400">{service.timeline}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className={`mb-20 transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies in the industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.techs.map((technology, techIndex) => (
                    <div key={techIndex} className="text-sm text-gray-300 bg-slate-700/50 px-3 py-1 rounded">
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className={`mb-20 transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Our IT Implementation Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful IT implementation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {process.map((step, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg group hover:bg-slate-700/50 transition-all duration-300">
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      <div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
                    </div>
<<<<<<< HEAD
=======
                <div className="flex items-center space-x-2">
                  {service.popular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
=======
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className={`mb-20 transform transition-all duration-1000 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">
                    {study.company.split(' ').map(word => word[0]).join('')}
                  </span>
=======
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who have transformed their IT infrastructure with our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card-advanced p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
<<<<<<< HEAD
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-green-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
=======
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-blue-400">{testimonial.role}, {testimonial.company}</div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.name}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-400">
                  {service.users} clients
                </div>
                <div className="text-sm text-gray-400">
                  {service.category}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-2xl font-bold text-white mb-2">
                  {service.price}
                </div>
                {service.capabilities && (
                  <div className="space-y-1">
                    {service.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {capability}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300">
              Contact our expert team for a free consultation and customized solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit mx-auto mb-4">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Phone</h3>
              <p className="text-gray-300 mb-4">+1 302 464 0950</p>
              <p className="text-sm text-gray-400">Available 24/7 for emergencies</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email</h3>
              <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">Response within 2 hours</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit mx-auto mb-4">
                <Laptop className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Address</h3>
              <p className="text-gray-300 mb-4">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-400">Middletown, DE 19709</p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300">
            See what our clients are saying about our IT services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="relative py-20 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join 500+ enterprises that have already transformed their IT operations with our solutions. Get started today!
=======

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their IT operations with our solutions.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
=======
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their IT operations with our solutions.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
<<<<<<< HEAD
              href="https://ziontechgroup.com/contact"
              className="neon-button-enhanced px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center"
=======
              href="/contact"
<<<<<<< HEAD
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
=======
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started
            </a>
            <a
<<<<<<< HEAD
              href="tel:+13024640950"
<<<<<<< HEAD
              className="neon-button-enhanced px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-gray-200 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
=======
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free consultation and discover how our IT services can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Get Free Consultation
            </button>
            <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            Free consultation • No obligation • Expert advice
          </p>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
        </div>
      </div>
=======
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-blue-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>

      <Footer />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
    </div>
  );
};

export default ITServicesPage;