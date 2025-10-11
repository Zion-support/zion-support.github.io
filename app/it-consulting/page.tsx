'use client'
import React from 'react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight,
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock,
  TrendingUp, Star, Settings, Calendar, CheckSquare, FileText,
  Mail, Phone, DollarSign, Clock, Award, CheckCircle,
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart,
  CreditCard, Building, Factory, Car, Plane, Ship, Train,
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench,
  Hammer, Paintbrush, Scissors, BookOpen, Calculator,
  Compass, PieChart, TrendingDown, Activity, Zap as Lightning,
  Target as Crosshair, Shield as Security, Users as People,
  Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow,
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location,
  Eye, Search, MessageSquare, PieChart as Chart,
  Download, Upload, RefreshCw, Play, Pause, Stop,
  Volume2, VolumeX, Mic, MicOff, Headphones,
  Wifi, WifiOff, Battery, BatteryCharging,
  Sun, Moon, Sunrise, Sunset, CloudRain,
  Snowflake, Wind, Thermometer, Droplets,
  Lightbulb, LightbulbOff, Power, PowerOff,
  Wrench as Tool, Hammer as HammerIcon,
  Paintbrush as Brush, Scissors as ScissorIcon,
  BookOpen as Book, Calculator as Calc,
  Compass as CompassIcon, PieChart as PieChartIcon,
  TrendingDown as TrendingDownIcon, Activity as ActivityIcon,
  Grid3X3, Package, Utensils, Microscope,
  Atom, Cpu as CpuIcon, Database as DatabaseIcon,
  Network, Layers, Workflow, GitBranch,
  Zap as ZapIcon, Brain as BrainIcon, Eye as EyeIcon,
  Search as SearchIcon, MessageSquare as MessageSquareIcon,
  PieChart as PieChartIcon2, BarChart as BarChartIcon,
  TrendingUp as TrendingUpIcon, Activity as ActivityIcon2,
  Target as TargetIcon, Globe as GlobeIcon,
  Shield as ShieldIcon, Lock as LockIcon,
  Users as UsersIcon, Settings as SettingsIcon,
  Calendar as CalendarIcon, CheckSquare as CheckSquareIcon,
  FileText as FileTextIcon, Mail as MailIcon2,
  Phone as PhoneIcon2, DollarSign as DollarSignIcon,
  Clock as ClockIcon, Award as AwardIcon,
  CheckCircle as CheckCircleIcon, ArrowRight as ArrowRightIcon,
  Bot as BotIcon, Palette as PaletteIcon,
  Camera as CameraIcon, Music as MusicIcon,
  Video as VideoIcon, Gamepad2 as Gamepad2Icon,
  ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon,
  Building as BuildingIcon, Factory as FactoryIcon,
  Car as CarIcon, Plane as PlaneIcon,
  Ship as ShipIcon, Train as TrainIcon,
  Home as HomeIcon, Heart as HeartIcon,
  Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon,
  Briefcase as BriefcaseIcon, Wrench as WrenchIcon,
  Hammer as HammerIcon2, Paintbrush as PaintbrushIcon,
  Scissors as ScissorsIcon, BookOpen as BookOpenIcon,
  Calculator as CalculatorIcon, Compass as CompassIcon2,
  PieChart as PieChartIcon3, TrendingDown as TrendingDownIcon2,
  Activity as ActivityIcon3, Zap as ZapIcon2,
  Target as TargetIcon2, Shield as ShieldIcon2,
  Users as UsersIcon2, Star as StarIcon2,
  CheckCircle as CheckCircleIcon2, ArrowRight as ArrowRightIcon2,
  Phone as PhoneIcon3, Mail as MailIcon3,
  MapPin as LocationIcon, Server, HardDrive,
  Monitor, Printer, Router, Wifi as WifiIcon,
  Smartphone as SmartphoneIcon, Laptop,
  Tablet, Headphones as HeadphonesIcon,
  Keyboard, Mouse, Webcam, Speaker,
  HardDrive as HardDriveIcon, Server as ServerIcon,
  Monitor as MonitorIcon, Printer as PrinterIcon,
  Router as RouterIcon, Wifi as WifiIcon2,
  Smartphone as SmartphoneIcon2, Laptop as LaptopIcon,
  Tablet as TabletIcon, Headphones as HeadphonesIcon2,
  Keyboard as KeyboardIcon, Mouse as MouseIcon,
  Webcam as WebcamIcon, Speaker as SpeakerIcon}
} from 'lucide-react'
const ITConsultingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const itServices = [
    // IT Infrastructure Services
    {
      i: d: 'it-infrastructure-design',
      name: 'IT Infrastructure Design & Implementation',
      descriptio: n: 'Complete IT infrastructure design, deployment, and optimization for modern businesses',
      categor: y: 'infrastructure',
      ico: n: Server,
      pric: e: 'Starting at $5,000',
      feature: s: [
        'Network architecture design',
        'Server deployment and configuration',
        'Storage solutions implementation',
        'Backup and disaster recovery setup',
        'Security infrastructure deployment',
        'Monitoring and management tools',
        'Documentation and training',
        'Ongoing support and maintenance'
      ],
      benefit: s: [
        'Scalable and reliable infrastructure',
        'Improved system performance',
        'Enhanced security posture',
        'Reduced downtime and outages',
        'Future-proof technology stack'
      ],
      targetAudienc: e: 'Small to large businesses, Startups, Enterprises',
      setupTim: e: '2-8 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: '24/7 technical support',
      certification: s: ['Cisco', 'Microsoft', 'VMware', 'AWS', 'Azure'],
      lin: k: 'http: s://ziontechgroup.com/it-infrastructure-design',
      caseStud: y: 'Manufacturing company reduced IT downtime by 95% with our infrastructure design'
    },
    {
      i: d: 'cloud-migration-services',
      name: 'Cloud Migration & Optimization',
      descriptio: n: 'Seamless migration to cloud platforms with optimization for cost and performance',
      categor: y: 'cloud',
      ico: n: Cloud,
      pric: e: 'Starting at $3,000',
      feature: s: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Data and application migration',
        'Cloud security implementation',
        'Cost optimization analysis',
        'Performance tuning',
        'Disaster recovery setup',
        'Training and documentation'
      ],
      benefit: s: [
        'Reduce IT costs by 30-50%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Better disaster recovery capabilities',
        'Access to latest technologies'
      ],
      targetAudienc: e: 'Businesses looking to modernize IT infrastructure',
      setupTim: e: '1-6 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Migration specialist and ongoing support',
      certification: s: ['AWS', 'Azure', 'Google Cloud', 'VMware'],
      lin: k: 'http: s://ziontechgroup.com/cloud-migration-services',
      caseStud: y: 'Retail chain saved $2M annually by migrating to cloud infrastructure'
    },
    {
      i: d: 'cybersecurity-services',
      name: 'Cybersecurity Solutions',
      descriptio: n: 'Comprehensive security assessment, implementation, and ongoing protection',
      categor: y: 'security',
      ico: n: Shield,
      pric: e: 'Starting at $2,500',
      feature: s: [
        'Security risk assessment',
        'Penetration testing',
        'Security policy development',
        'Firewall and endpoint protection',
        'Email security implementation',
        'Security awareness training',
        'Compliance auditing',
        'Incident response planning'
      ],
      benefit: s: [
        'Protect against cyber threats',
        'Ensure regulatory compliance',
        'Reduce security risks by 90%',
        'Improve incident response time',
        'Maintain customer trust'
      ],
      targetAudienc: e: 'All businesses handling sensitive data',
      setupTim: e: '1-4 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Security specialist and 24/7 monitoring',
      certification: s: ['CISSP', 'CISM', 'CEH', 'CompTIA Security+'],
      lin: k: 'http: s://ziontechgroup.com/cybersecurity-services',
      caseStud: y: 'Healthcare provider achieved 100% compliance with HIPAA regulations'
    },
    {
      i: d: 'network-design-optimization',
      name: 'Network Design & Optimization',
      descriptio: n: 'High-performance network infrastructure design and optimization for reliability',
      categor: y: 'networking',
      ico: n: Network,
      pric: e: 'Starting at $2,000',
      feature: s: [
        'Network architecture design',
        'Bandwidth optimization',
        'Quality of Service (QoS) setup',
        'Wireless network deployment',
        'Network monitoring implementation',
        'Traffic analysis and optimization',
        'Redundancy and failover setup',
        'Performance tuning'
      ],
      benefit: s: [
        'Improve network performance by 200%',
        'Reduce network downtime',
        'Optimize bandwidth usage',
        'Enhance user experience',
        'Future-proof network design'
      ],
      targetAudienc: e: 'Businesses with complex networking needs',
      setupTim: e: '1-3 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Network specialist and ongoing optimization',
      certification: s: ['CCNA', 'CCNP', 'JNCIA', 'CompTIA Network+'],
      lin: k: 'http: s://ziontechgroup.com/network-design-optimization',
      caseStud: y: 'Law firm improved network speed by 300% and eliminated connectivity issues'
    },
    {
      i: d: 'database-management',
      name: 'Database Management & Optimization',
      descriptio: n: 'Database design, implementation, optimization, and ongoing management',
      categor: y: 'database',
      ico: n: Database,
      pric: e: 'Starting at $1,500',
      feature: s: [
        'Database design and architecture',
        'Performance optimization',
        'Backup and recovery setup',
        'Security implementation',
        'Monitoring and alerting',
        'Query optimization',
        'Capacity planning',
        'Maintenance and updates'
      ],
      benefit: s: [
        'Improve database performance by 150%',
        'Ensure data integrity and security',
        'Reduce maintenance overhead',
        'Optimize storage usage',
        'Minimize downtime'
      ],
      targetAudienc: e: 'Businesses with critical data requirements',
      setupTim: e: '1-2 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Database specialist and 24/7 monitoring',
      certification: s: ['Oracle', 'Microsoft SQL Server', 'MySQL', 'PostgreSQL'],
      lin: k: 'http: s://ziontechgroup.com/database-management',
      caseStud: y: 'E-commerce platform improved query performance by 400% and reduced costs by 60%'
    },
    {
      i: d: 'it-support-services',
      name: 'Managed IT Support Services',
      descriptio: n: 'Comprehensive IT support and management for ongoing operations',
      categor: y: 'support',
      ico: n: Headphones,
      pric: e: 'Starting at $99/user/month',
      feature: s: [
        '24/7 technical support',
        'Remote monitoring and management',
        'Proactive maintenance',
        'Software updates and patches',
        'Hardware support and replacement',
        'User training and onboarding',
        'IT asset management',
        'Help desk services'
      ],
      benefit: s: [
        'Reduce IT downtime by 80%',
        'Lower IT support costs',
        'Improve user productivity',
        'Proactive issue resolution',
        'Focus on core business activities'
      ],
      targetAudienc: e: 'Small to medium businesses without dedicated IT staff',
      setupTim: e: '1 week',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Dedicated support team',
      certification: s: ['Microsoft', 'CompTIA', 'Cisco', 'VMware'],
      lin: k: 'http: s://ziontechgroup.com/it-support-services',
      caseStud: y: 'Marketing agency reduced IT issues by 90% and improved employee productivity'
    },
    {
      i: d: 'software-development',
      name: 'Custom Software Development',
      descriptio: n: 'Tailored software solutions built to meet specific business requirements',
      categor: y: 'development',
      ico: n: Code,
      pric: e: 'Starting at $5,000',
      feature: s: [
        'Requirements analysis',
        'Custom application development',
        'Web and mobile app development',
        'API development and integration',
        'Database design and implementation',
        'Testing and quality assurance',
        'Deployment and maintenance',
        'User training and documentation'
      ],
      benefit: s: [
        'Streamline business processes',
        'Improve operational efficiency',
        'Gain competitive advantage',
        'Reduce manual work',
        'Scale with business growth'
      ],
      targetAudienc: e: 'Businesses needing custom software solutions',
      setupTim: e: '4-16 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Development team and ongoing maintenance',
      technologie: s: ['React', 'Node.js', 'Python', 'Java', 'C#', 'PHP', 'Mobile'],
      lin: k: 'http: s://ziontechgroup.com/software-development',
      caseStud: y: 'Logistics company automated 80% of manual processes with custom software'
    },
    {
      i: d: 'it-consulting',
      name: 'Strategic IT Consulting',
      descriptio: n: 'Technology strategy and roadmap development for digital transformation',
      categor: y: 'consulting',
      ico: n: Briefcase,
      pric: e: 'Starting at $200/hour',
      feature: s: [
        'IT strategy development',
        'Technology roadmap planning',
        'Digital transformation consulting',
        'Vendor evaluation and selection',
        'Cost-benefit analysis',
        'Risk assessment and mitigation',
        'Change management planning',
        'Implementation guidance'
      ],
      benefit: s: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Reduce implementation risks',
        'Accelerate digital transformation',
        'Improve ROI on technology'
      ],
      targetAudienc: e: 'Businesses planning technology initiatives',
      setupTim: e: '1-4 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Senior consultant and ongoing guidance',
      certification: s: ['PMP', 'ITIL', 'COBIT', 'TOGAF'],
      lin: k: 'http: s://ziontechgroup.com/it-consulting',
      caseStud: y: 'Manufacturing company achieved 40% cost reduction through strategic IT planning'
    },
    {
      i: d: 'disaster-recovery',
      name: 'Disaster Recovery & Business Continuity',
      descriptio: n: 'Comprehensive disaster recovery planning and implementation',
      categor: y: 'recovery',
      ico: n: RefreshCw,
      pric: e: 'Starting at $3,500',
      feature: s: [
        'Business impact analysis',
        'Recovery time objective planning',
        'Backup strategy implementation',
        'Disaster recovery testing',
        'Business continuity planning',
        'Cloud-based recovery solutions',
        'Documentation and procedures',
        'Regular testing and updates'
      ],
      benefit: s: [
        'Minimize business disruption',
        'Ensure rapid recovery',
        'Protect critical data',
        'Maintain customer service',
        'Comply with regulations'
      ],
      targetAudienc: e: 'Businesses requiring high availability',
      setupTim: e: '2-6 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Recovery specialist and ongoing testing',
      certification: s: ['CBCP', 'DRII', 'ITIL', 'ISO 22301'],
      lin: k: 'http: s://ziontechgroup.com/disaster-recovery',
      caseStud: y: 'Financial services firm achieved 99.9% uptime with our disaster recovery solution'
    },
    {
      i: d: 'compliance-auditing',
      name: 'IT Compliance & Auditing',
      descriptio: n: 'Compliance assessment and implementation for various industry standards',
      categor: y: 'compliance',
      ico: n: CheckSquare,
      pric: e: 'Starting at $2,000',
      feature: s: [
        'Compliance gap analysis',
        'Policy and procedure development',
        'Security control implementation',
        'Audit preparation and support',
        'Training and awareness programs',
        'Ongoing compliance monitoring',
        'Documentation and reporting',
        'Remediation planning'
      ],
      benefit: s: [
        'Ensure regulatory compliance',
        'Reduce audit findings',
        'Improve security posture',
        'Avoid penalties and fines',
        'Build customer trust'
      ],
      targetAudienc: e: 'Healthcare, Finance, Government, Education sectors',
      setupTim: e: '2-8 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Compliance specialist and ongoing monitoring',
      standard: s: ['HIPAA', 'SOX', 'PCI-DSS', 'GDPR', 'ISO 27001', 'NIST'],
      lin: k: 'http: s://ziontechgroup.com/compliance-auditing',
      caseStud: y: 'Healthcare provider achieved 100% HIPAA compliance and passed all audits'
    }
  ]
  const categories = [
    { i: d: 'all', name: 'All IT Services', ico: n: Grid3X3 },
    { i: d: 'infrastructure', name: 'Infrastructure', ico: n: Server },
    { i: d: 'cloud', name: 'Cloud Services', ico: n: Cloud },
    { i: d: 'security', name: 'Cybersecurity', ico: n: Shield },
    { i: d: 'networking', name: 'Networking', ico: n: Network },
    { i: d: 'database', name: 'Database', ico: n: Database },
    { i: d: 'support', name: 'IT Support', ico: n: Headphones },
    { i: d: 'development', name: 'Development', ico: n: Code },
    { i: d: 'consulting', name: 'Consulting', ico: n: Briefcase },
    { i: d: 'recovery', name: 'Disaster Recovery', ico: n: RefreshCw },
    { i: d: 'compliance', name: 'Compliance', ico: n: CheckSquare }
  ]
  const filteredServices = itServices.filter(service => {const ITConsultingPage: React.FC = () => {const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('');const itServices = [
    // IT Infrastructure Services
    {i: d: 'it-infrastructure-design',
      name: 'IT Infrastructure Design & Implementation',
      descriptio: n: 'Complete IT infrastructure design, deployment, and optimization for modern businesses',
      categor: y: 'infrastructure',
      ico: n: Server,
      pric: e: 'Starting at $5,000',
      feature: s: [
        'Network architecture design',
        'Server deployment and configuration',
        'Storage solutions implementation',
        'Backup and disaster recovery setup',
        'Security infrastructure deployment',
        'Monitoring and management tools',
        'Documentation and training',
        'Ongoing support and maintenance'
      ],
      benefit: s: [
        'Scalable and reliable infrastructure',
        'Improved system performance',
        'Enhanced security posture',
        'Reduced downtime and outages',
        'Future-proof technology stack'
      ],
      targetAudienc: e: 'Small to large businesses, Startups, Enterprises',
      setupTim: e: '2-8 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: '24/7 technical support',
      certification: s: ['Cisco', 'Microsoft', 'VMware', 'AWS', 'Azure'],
      lin: k: 'http: s://ziontechgroup.com/it-infrastructure-design',
      caseStud: y: 'Manufacturing company reduced IT downtime by 95% with our infrastructure design'}
    },
    {i: d: 'cloud-migration-services',
      name: 'Cloud Migration & Optimization',
      descriptio: n: 'Seamless migration to cloud platforms with optimization for cost and performance',
      categor: y: 'cloud',
      ico: n: Cloud,
      pric: e: 'Starting at $3,000',
      feature: s: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Data and application migration',
        'Cloud security implementation',
        'Cost optimization analysis',
        'Performance tuning',
        'Disaster recovery setup',
        'Training and documentation'
      ],
      benefit: s: [
        'Reduce IT costs by 30-50%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Better disaster recovery capabilities',
        'Access to latest technologies'
      ],
      targetAudienc: e: 'Businesses looking to modernize IT infrastructure',
      setupTim: e: '1-6 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Migration specialist and ongoing support',
      certification: s: ['AWS', 'Azure', 'Google Cloud', 'VMware'],
      lin: k: 'http: s://ziontechgroup.com/cloud-migration-services',
      caseStud: y: 'Retail chain saved $2M annually by migrating to cloud infrastructure'}
    },
    {i: d: 'cybersecurity-services',
      name: 'Cybersecurity Solutions',
      descriptio: n: 'Comprehensive security assessment, implementation, and ongoing protection',
      categor: y: 'security',
      ico: n: Shield,
      pric: e: 'Starting at $2,500',
      feature: s: [
        'Security risk assessment',
        'Penetration testing',
        'Security policy development',
        'Firewall and endpoint protection',
        'Email security implementation',
        'Security awareness training',
        'Compliance auditing',
        'Incident response planning'
      ],
      benefit: s: [
        'Protect against cyber threats',
        'Ensure regulatory compliance',
        'Reduce security risks by 90%',
        'Improve incident response time',
        'Maintain customer trust'
      ],
      targetAudienc: e: 'All businesses handling sensitive data',
      setupTim: e: '1-4 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Security specialist and 24/7 monitoring',
      certification: s: ['CISSP', 'CISM', 'CEH', 'CompTIA Security+'],
      lin: k: 'http: s://ziontechgroup.com/cybersecurity-services',
      caseStud: y: 'Healthcare provider achieved 100% compliance with HIPAA regulations'}
    },
    {i: d: 'network-design-optimization',
      name: 'Network Design & Optimization',
      descriptio: n: 'High-performance network infrastructure design and optimization for reliability',
      categor: y: 'networking',
      ico: n: Network,
      pric: e: 'Starting at $2,000',
      feature: s: [
        'Network architecture design',
        'Bandwidth optimization',
        'Quality of Service (QoS) setup',
        'Wireless network deployment',
        'Network monitoring implementation',
        'Traffic analysis and optimization',
        'Redundancy and failover setup',
        'Performance tuning'
      ],
      benefit: s: [
        'Improve network performance by 200%',
        'Reduce network downtime',
        'Optimize bandwidth usage',
        'Enhance user experience',
        'Future-proof network design'
      ],
      targetAudienc: e: 'Businesses with complex networking needs',
      setupTim: e: '1-3 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Network specialist and ongoing optimization',
      certification: s: ['CCNA', 'CCNP', 'JNCIA', 'CompTIA Network+'],
      lin: k: 'http: s://ziontechgroup.com/network-design-optimization',
      caseStud: y: 'Law firm improved network speed by 300% and eliminated connectivity issues'}
    },
    {i: d: 'database-management',
      name: 'Database Management & Optimization',
      descriptio: n: 'Database design, implementation, optimization, and ongoing management',
      categor: y: 'database',
      ico: n: Database,
      pric: e: 'Starting at $1,500',
      feature: s: [
        'Database design and architecture',
        'Performance optimization',
        'Backup and recovery setup',
        'Security implementation',
        'Monitoring and alerting',
        'Query optimization',
        'Capacity planning',
        'Maintenance and updates'
      ],
      benefit: s: [
        'Improve database performance by 150%',
        'Ensure data integrity and security',
        'Reduce maintenance overhead',
        'Optimize storage usage',
        'Minimize downtime'
      ],
      targetAudienc: e: 'Businesses with critical data requirements',
      setupTim: e: '1-2 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Database specialist and 24/7 monitoring',
      certification: s: ['Oracle', 'Microsoft SQL Server', 'MySQL', 'PostgreSQL'],
      lin: k: 'http: s://ziontechgroup.com/database-management',
      caseStud: y: 'E-commerce platform improved query performance by 400% and reduced costs by 60%'}
    },
    {i: d: 'it-support-services',
      name: 'Managed IT Support Services',
      descriptio: n: 'Comprehensive IT support and management for ongoing operations',
      categor: y: 'support',
      ico: n: Headphones,
      pric: e: 'Starting at $99/user/month',
      feature: s: [
        '24/7 technical support',
        'Remote monitoring and management',
        'Proactive maintenance',
        'Software updates and patches',
        'Hardware support and replacement',
        'User training and onboarding',
        'IT asset management',
        'Help desk services'
      ],
      benefit: s: [
        'Reduce IT downtime by 80%',
        'Lower IT support costs',
        'Improve user productivity',
        'Proactive issue resolution',
        'Focus on core business activities'
      ],
      targetAudienc: e: 'Small to medium businesses without dedicated IT staff',
      setupTim: e: '1 week',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Dedicated support team',
      certification: s: ['Microsoft', 'CompTIA', 'Cisco', 'VMware'],
      lin: k: 'http: s://ziontechgroup.com/it-support-services',
      caseStud: y: 'Marketing agency reduced IT issues by 90% and improved employee productivity'}
    },
    {i: d: 'software-development',
      name: 'Custom Software Development',
      descriptio: n: 'Tailored software solutions built to meet specific business requirements',
      categor: y: 'development',
      ico: n: Code,
      pric: e: 'Starting at $5,000',
      feature: s: [
        'Requirements analysis',
        'Custom application development',
        'Web and mobile app development',
        'API development and integration',
        'Database design and implementation',
        'Testing and quality assurance',
        'Deployment and maintenance',
        'User training and documentation'
      ],
      benefit: s: [
        'Streamline business processes',
        'Improve operational efficiency',
        'Gain competitive advantage',
        'Reduce manual work',
        'Scale with business growth'
      ],
      targetAudienc: e: 'Businesses needing custom software solutions',
      setupTim: e: '4-16 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Development team and ongoing maintenance',
      technologie: s: ['React', 'Node.js', 'Python', 'Java', 'C#', 'PHP', 'Mobile'],
      lin: k: 'http: s://ziontechgroup.com/software-development',
      caseStud: y: 'Logistics company automated 80% of manual processes with custom software'}
    },
    {i: d: 'it-consulting',
      name: 'Strategic IT Consulting',
      descriptio: n: 'Technology strategy and roadmap development for digital transformation',
      categor: y: 'consulting',
      ico: n: Briefcase,
      pric: e: 'Starting at $200/hour',
      feature: s: [
        'IT strategy development',
        'Technology roadmap planning',
        'Digital transformation consulting',
        'Vendor evaluation and selection',
        'Cost-benefit analysis',
        'Risk assessment and mitigation',
        'Change management planning',
        'Implementation guidance'
      ],
      benefit: s: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Reduce implementation risks',
        'Accelerate digital transformation',
        'Improve ROI on technology'
      ],
      targetAudienc: e: 'Businesses planning technology initiatives',
      setupTim: e: '1-4 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Senior consultant and ongoing guidance',
      certification: s: ['PMP', 'ITIL', 'COBIT', 'TOGAF'],
      lin: k: 'http: s://ziontechgroup.com/it-consulting',
      caseStud: y: 'Manufacturing company achieved 40% cost reduction through strategic IT planning'}
    },
    {i: d: 'disaster-recovery',
      name: 'Disaster Recovery & Business Continuity',
      descriptio: n: 'Comprehensive disaster recovery planning and implementation',
      categor: y: 'recovery',
      ico: n: RefreshCw,
      pric: e: 'Starting at $3,500',
      feature: s: [
        'Business impact analysis',
        'Recovery time objective planning',
        'Backup strategy implementation',
        'Disaster recovery testing',
        'Business continuity planning',
        'Cloud-based recovery solutions',
        'Documentation and procedures',
        'Regular testing and updates'
      ],
      benefit: s: [
        'Minimize business disruption',
        'Ensure rapid recovery',
        'Protect critical data',
        'Maintain customer service',
        'Comply with regulations'
      ],
      targetAudienc: e: 'Businesses requiring high availability',
      setupTim: e: '2-6 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Recovery specialist and ongoing testing',
      certification: s: ['CBCP', 'DRII', 'ITIL', 'ISO 22301'],
      lin: k: 'http: s://ziontechgroup.com/disaster-recovery',
      caseStud: y: 'Financial services firm achieved 99.9% uptime with our disaster recovery solution'}
    },
    {i: d: 'compliance-auditing',
      name: 'IT Compliance & Auditing',
      descriptio: n: 'Compliance assessment and implementation for various industry standards',
      categor: y: 'compliance',
      ico: n: CheckSquare,
      pric: e: 'Starting at $2,000',
      feature: s: [
        'Compliance gap analysis',
        'Policy and procedure development',
        'Security control implementation',
        'Audit preparation and support',
        'Training and awareness programs',
        'Ongoing compliance monitoring',
        'Documentation and reporting',
        'Remediation planning'
      ],
      benefit: s: [
        'Ensure regulatory compliance',
        'Reduce audit findings',
        'Improve security posture',
        'Avoid penalties and fines',
        'Build customer trust'
      ],
      targetAudienc: e: 'Healthcare, Finance, Government, Education sectors',
      setupTim: e: '2-8 weeks',
      freeConsultatio: n: 'Yes',
      suppor: t: 'Compliance specialist and ongoing monitoring',
      standard: s: ['HIPAA', 'SOX', 'PCI-DSS', 'GDPR', 'ISO 27001', 'NIST'],
      lin: k: 'http: s://ziontechgroup.com/compliance-auditing',
      caseStud: y: 'Healthcare provider achieved 100% HIPAA compliance and passed all audits'}
    }
  ];const categories = [
    { i: d: 'all', name: 'All IT Services', ico: n: Grid3X3 },
    { i: d: 'infrastructure', name: 'Infrastructure', ico: n: Server },
    { i: d: 'cloud', name: 'Cloud Services', ico: n: Cloud },
    { i: d: 'security', name: 'Cybersecurity', ico: n: Shield },
    { i: d: 'networking', name: 'Networking', ico: n: Network },
    { i: d: 'database', name: 'Database', ico: n: Database },
    { i: d: 'support', name: 'IT Support', ico: n: Headphones },
    { i: d: 'development', name: 'Development', ico: n: Code },
    { i: d: 'consulting', name: 'Consulting', ico: n: Briefcase },
    { i: d: 'recovery', name: 'Disaster Recovery', ico: n: RefreshCw },
    { i: d: 'compliance', name: 'Compliance', ico: n: CheckSquare }
  ];const filteredServices = itServices.filter(service => {const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch}
  })
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}</div>
      <section className="relative py-20 px-4: sm:px-6: lg:px-8 cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl: md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse"></h1>;
Professional <span className="holographic-text">IT Services>
          <p className="text-xl: md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
            Comprehensive IT solutions designed to optimize your technology infrastructure, 
            enhance security, and drive business growth. Expert consulting and implementation.
          </p>
          <div className="flex flex-col: sm:flex-row gap-4 justify-center mb-12"></div>
            <a
              href="te: l:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform: hover:scale-105: focus:outline-none: focus:ring-4: focus:ring-cyan-400/50">
              <Phone className="w-5 h-5 inline mr-2" />
              Call (302) 464-0950
  </
            <a
              href="mailt: o:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg: hover:bg-cyan-400: hover:text-slate-900 transition-all duration-300 neon-glow: focus:outline-none: focus:ring-4: focus:ring-cyan-400/50">
              <Mail className="w-5 h-5 inline mr-2" />
              Get IT Consultation
  >;
return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}</div>
      <section className="relative py-20 px-4: sm:px-6: lg:px-8 cyber-grid"></section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl: md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse"></h1>;
Professional <span className="holographic-text">IT Services>
          <p className="text-xl: md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
            Comprehensive IT solutions designed to optimize your technology infrastructure,
            enhance security, and drive business growth. Expert consulting and implementation.
          </p>
          <div className="flex flex-col: sm:flex-row gap-4 justify-center mb-12"></div>
            <a
              href="te: l:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform: hover:scale-105: focus:outline-none: focus:ring-4: focus:ring-cyan-400/50">
              <Phone className="w-5 h-5 inline mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailt: o:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg: hover:bg-cyan-400: hover:text-slate-900 transition-all duration-300 neon-glow: focus:outline-none: focus:ring-4: focus:ring-cyan-400/50">
              <Mail className="w-5 h-5 inline mr-2" />
              Get IT Consultation
            >
      </section>
      {/* Search and Filter Section */}
      <section className="py-12 px-4: sm:px-6: lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col: lg:flex-row gap-6 mb-8"></div>
            {/* Search */}</div>
            <div className="flex-1"></div>
              <div className="relative"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400: focus:outline-none: focus:border-cyan-400: focus:ring-2: focus:ring-cyan-400/20"
                />
              </div>;
className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400: focus:outline-none: focus:border-cyan-400: focus:ring-2: focus:ring-cyan-400/20"
                />
              </div>
            {/* Category Filter */}
            <div className="l: g:w-64"></div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white: focus:outline-none: focus:border-cyan-400: focus:ring-2: focus:ring-cyan-400/20">
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white: focus:outline-none: focus:border-cyan-400: focus:ring-2: focus:ring-cyan-400/20">
                {categories.map((category) => (}
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>))}
              >
              >
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8"></div>
            {categories.map((category) => (</div>
              <button}
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300: hover:bg-slate-700/50: hover:text-cyan-400'}
                }`}
              >
                {category.name}
              </button>))}
          >
      {/* Services Grid */}
      <section className="py-12 px-4: sm:px-6: lg:px-8">
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (>
                <div className="flex items-start justify-between mb-4"></div>
                  <div className="text-cyan-400 group-hove: r:text-cyan-300 transition-colors"></div>
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="text-right"></div>
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">starting price>
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-3 mb-6"></div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key: Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}>
                      ))}
                    >
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefit: s:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}>
                      ))}
                    >
                <div className="space-y-2 mb-6 text-sm"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Setup: Time:</span>
                    <span className="text-white">{service.setupTime}>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Free: Consultation:</span>
                    <span className="text-green-400">{service.freeConsultation}>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Targe: t:</span>
                    <span className="text-white">{service.targetAudience}>
                {service.caseStudy && (
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg"></div>
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}">
                )}
                <div className="space-y-3"></div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center: hover:from-cyan-600: hover:to-blue-700 transition-all duration-300 transform: hover:scale-105">
                    Get Free Consultation
  </
                  <a
                    href="te: l:+13024640950"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center: hover:bg-cyan-400: hover:text-slate-900 transition-all duration-300">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Call for Quote
  </
                </div>
            ))}
          >
      {/* CTA Section */}
      <section className="py-20 px-4: sm:px-6: lg:px-8 cyber-scan-effect">
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl: md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-cyan-400 mb-8 neon-glow">
            Our certified IT professionals deliver reliable, secure, and scalable solutions. 
            All services include free consultations and ongoing support.
          </p>
          <div className="flex flex-col: sm:flex-row gap-4 justify-center"></div>
            <a
              href="te: l:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform: hover:scale-105 flex items-center justify-center gap-2: focus:outline-none: focus:ring-4: focus:ring-cyan-400/50">
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
  </
            <a
              href="mailt: o:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg: hover:bg-cyan-400: hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow: focus:outline-none: focus:ring-4: focus:ring-cyan-400/50">
              <Mail className="w-5 h-5" />
              Get Custom IT Strategy
  >
    </div>
  )}
export default ITConsultingPage
  >
      </section>
      {/* Services Grid */}
      <section className="py-12 px-4: sm:px-6: lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-3 gap-8"></div>
            {filteredServices.map((service) => (>
                <div className="flex items-start justify-between mb-4"></div>
                  <div className="text-cyan-400 group-hove: r:text-cyan-300 transition-colors"></div>
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="text-right"></div>
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">starting price>
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-3 mb-6"></div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key: Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (}
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}>))}
                    >
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefit: s:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (}
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}>))}
                    >
                <div className="space-y-2 mb-6 text-sm"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Setup: Time:</span>
                    <span className="text-white">{service.setupTime}>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Free: Consultation:</span>
                    <span className="text-green-400">{service.freeConsultation}>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Targe: t:</span>
                    <span className="text-white">{service.targetAudience}>
                {service.caseStudy && (<div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg"></div>}
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}">)}

                <div className="space-y-3"></div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center: hover:from-cyan-600: hover:to-blue-700 transition-all duration-300 transform: hover:scale-105">
                    Get Free Consultation
                  </a>
                  <a
                    href="te: l:+13024640950"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center: hover:bg-cyan-400: hover:text-slate-900 transition-all duration-300">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Call for Quote
                  >
              </div>))}
          >
      {/* CTA Section */}
      <section className="py-20 px-4: sm:px-6: lg:px-8 cyber-scan-effect"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl: md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-cyan-400 mb-8 neon-glow">
            Our certified IT professionals deliver reliable, secure, and scalable solutions.
            All services include free consultations and ongoing support.
          </p>
          <div className="flex flex-col: sm:flex-row gap-4 justify-center"></div>
            <a
              href="te: l:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform: hover:scale-105 flex items-center justify-center gap-2: focus:outline-none: focus:ring-4: focus:ring-cyan-400/50">
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="mailt: o:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg: hover:bg-cyan-400: hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow: focus:outline-none: focus:ring-4: focus:ring-cyan-400/50">
              <Mail className="w-5 h-5" />
              Get Custom IT Strategy
            >
      >)};export default ITConsultingPage