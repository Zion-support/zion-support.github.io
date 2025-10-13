<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ItConsultingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>It Consulting - Zion Tech Group</title>
        <meta name="description" content="Advanced it consulting solutions and services" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            It Consulting
=======
'use client';
import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import {Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight,}
=======
'use client'
import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom'
import {
    Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
<<<<<<< HEAD
  Webcam as WebcamIcon, Speaker as SpeakerIcon;} from 'lucide-react';
const ITConsultingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
=======
  Webcam as WebcamIcon, Speaker as SpeakerIcon
  }
} from 'lucide-react'
const ITConsultingPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
const [searchTerm, setSearchTerm] = useState('')
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
const itServices = [
=======
  Webcam as WebcamIcon, Speaker as SpeakerIcon;)
} from 'lucide-react';
;
const ITConsultingPage: React.FC = () => {
const [selectedCategory, setSelectedCategory] = useState('all');
};
const [searchTerm, setSearchTerm] = useState('');
;
const itServices = [
];
  Webcam as WebcamIcon, Speaker as SpeakerIcon]
    } from 'lucide-react';
const ITConsultingPage: React.FC = () => {
};
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const itServices = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // IT Infrastructure Services
    {
      id: 'it-infrastructure-design',
      name: 'IT Infrastructure Design & Implementation',
      description: 'Complete IT infrastructure design, deployment, and optimization for modern businesses',
      category: 'infrastructure',
      icon: Server,
      price: 'Starting at $5,000',;
      features: [,
        'Network architecture design',
        'Server deployment and configuration',
        'Storage solutions implementation',
        'Backup and disaster recovery setup',
<<<<<<< HEAD

        'Security infrastructure deployment',

        'Monitoring and management tools',

        'Documentation and training',

=======
        'Security infrastructure deployment',
        'Monitoring and management tools',
        'Documentation and training',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Ongoing support and maintenance'
      ],
      benefits: [,
        'Scalable and reliable infrastructure',
<<<<<<< HEAD

        'Improved system performance',

        'Enhanced security posture',

        'Reduced downtime and outages',

=======
        'Improved system performance',
        'Enhanced security posture',
        'Reduced downtime and outages',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Future-proof technology stack'
      ],
      targetAudience: 'Small to large businesses, Startups, Enterprises',
      setupTime: '2-8 weeks',
      freeConsultation: 'Yes',
      support: '24/7 technical support',
      certifications: ['Cisco', 'Microsoft', 'VMware', 'AWS', 'Azure'],
      link: 'https://ziontechgroup.com/it-infrastructure-design',
      caseStudy: 'Manufacturing company reduced IT downtime by 95% with our infrastructure design',},
    {id: 'cloud-migration-services',
      name: 'Cloud Migration & Optimization',
      description: 'Seamless migration to cloud platforms with optimization for cost and performance',
      category: 'cloud',
      icon: Cloud,
      price: 'Starting at $3,000',;
      features: [,
        'Cloud readiness assessment',
        'Migration strategy development',
        'Data and application migration',
        'Cloud security implementation',
<<<<<<< HEAD

        'Cost optimization analysis',

        'Performance tuning',

        'Disaster recovery setup',

=======
        'Cost optimization analysis',
        'Performance tuning',
        'Disaster recovery setup',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Training and documentation'
      ],
      benefits: [,
        'Reduce IT costs by 30-50%',
<<<<<<< HEAD

        'Improve scalability and flexibility',

        'Enhanced security and compliance',

        'Better disaster recovery capabilities',

=======
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Better disaster recovery capabilities',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Access to latest technologies'
      ],
      targetAudience: 'Businesses looking to modernize IT infrastructure',
      setupTime: '1-6 weeks',
      freeConsultation: 'Yes',
      support: 'Migration specialist and ongoing support',
      certifications: ['AWS', 'Azure', 'Google Cloud', 'VMware'],
      link: 'https://ziontechgroup.com/cloud-migration-services',
      caseStudy: 'Retail chain saved $2M annually by migrating to cloud infrastructure',},
    {id: 'cybersecurity-services',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessment, implementation, and ongoing protection',
      category: 'security',
      icon: Shield,
      price: 'Starting at $2,500',;
      features: [,
        'Security risk assessment',
        'Penetration testing',
        'Security policy development',
        'Firewall and endpoint protection',
<<<<<<< HEAD

        'Email security implementation',

        'Security awareness training',

        'Compliance auditing',

=======
        'Email security implementation',
        'Security awareness training',
        'Compliance auditing',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Incident response planning'
      ],
      benefits: [,
        'Protect against cyber threats',
<<<<<<< HEAD

        'Ensure regulatory compliance',

        'Reduce security risks by 90%',

        'Improve incident response time',

=======
        'Ensure regulatory compliance',
        'Reduce security risks by 90%',
        'Improve incident response time',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Maintain customer trust'
      ],
      targetAudience: 'All businesses handling sensitive data',
      setupTime: '1-4 weeks',
      freeConsultation: 'Yes',
      support: 'Security specialist and 24/7 monitoring',
      certifications: ['CISSP', 'CISM', 'CEH', 'CompTIA Security+'],
      link: 'https://ziontechgroup.com/cybersecurity-services',
      caseStudy: 'Healthcare provider achieved 100% compliance with HIPAA regulations',},
    {id: 'network-design-optimization',
      name: 'Network Design & Optimization',
      description: 'High-performance network infrastructure design and optimization for reliability',
      category: 'networking',
      icon: Network,
      price: 'Starting at $2,000',;
      features: [,
        'Network architecture design',
        'Bandwidth optimization',
        'Quality of Service (QoS) setup',
        'Wireless network deployment',
<<<<<<< HEAD

        'Network monitoring implementation',

        'Traffic analysis and optimization',

        'Redundancy and failover setup',

=======
        'Network monitoring implementation',
        'Traffic analysis and optimization',
        'Redundancy and failover setup',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Performance tuning'
      ],
      benefits: [,
        'Improve network performance by 200%',
<<<<<<< HEAD

        'Reduce network downtime',

        'Optimize bandwidth usage',

        'Enhance user experience',

=======
        'Reduce network downtime',
        'Optimize bandwidth usage',
        'Enhance user experience',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Future-proof network design'
      ],
      targetAudience: 'Businesses with complex networking needs',
      setupTime: '1-3 weeks',
      freeConsultation: 'Yes',
      support: 'Network specialist and ongoing optimization',
      certifications: ['CCNA', 'CCNP', 'JNCIA', 'CompTIA Network+'],
      link: 'https://ziontechgroup.com/network-design-optimization',
      caseStudy: 'Law firm improved network speed by 300% and eliminated connectivity issues',},
    {id: 'database-management',
      name: 'Database Management & Optimization',
      description: 'Database design, implementation, optimization, and ongoing management',
      category: 'database',
      icon: Database,
      price: 'Starting at $1,500',;
      features: [,
        'Database design and architecture',
        'Performance optimization',
        'Backup and recovery setup',
        'Security implementation',
<<<<<<< HEAD

        'Monitoring and alerting',

        'Query optimization',

        'Capacity planning',

=======
        'Monitoring and alerting',
        'Query optimization',
        'Capacity planning',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Maintenance and updates'
      ],
      benefits: [,
        'Improve database performance by 150%',
<<<<<<< HEAD

        'Ensure data integrity and security',

        'Reduce maintenance overhead',

        'Optimize storage usage',

=======
        'Ensure data integrity and security',
        'Reduce maintenance overhead',
        'Optimize storage usage',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Minimize downtime'
      ],
      targetAudience: 'Businesses with critical data requirements',
      setupTime: '1-2 weeks',
      freeConsultation: 'Yes',
      support: 'Database specialist and 24/7 monitoring',
      certifications: ['Oracle', 'Microsoft SQL Server', 'MySQL', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/database-management',
      caseStudy: 'E-commerce platform improved query performance by 400% and reduced costs by 60%',},
    {id: 'it-support-services',
      name: 'Managed IT Support Services',
      description: 'Comprehensive IT support and management for ongoing operations',
      category: 'support',
      icon: Headphones,
      price: 'Starting at $99/user/month',
      features: [,
        '24/7 technical support',
        'Remote monitoring and management',
        'Proactive maintenance',
        'Software updates and patches',
<<<<<<< HEAD

        'Hardware support and replacement',

        'User training and onboarding',

        'IT asset management',

=======
        'Hardware support and replacement',
        'User training and onboarding',
        'IT asset management',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Help desk services'
      ],
      benefits: [,
        'Reduce IT downtime by 80%',
<<<<<<< HEAD

        'Lower IT support costs',

        'Improve user productivity',

        'Proactive issue resolution',

=======
        'Lower IT support costs',
        'Improve user productivity',
        'Proactive issue resolution',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Focus on core business activities'
      ],
      targetAudience: 'Small to medium businesses without dedicated IT staff',
      setupTime: '1 week',
      freeConsultation: 'Yes',
      support: 'Dedicated support team',
      certifications: ['Microsoft', 'CompTIA', 'Cisco', 'VMware'],
      link: 'https://ziontechgroup.com/it-support-services',
      caseStudy: 'Marketing agency reduced IT issues by 90% and improved employee productivity',},
    {id: 'software-development',
      name: 'Custom Software Development',
      description: 'Tailored software solutions built to meet specific business requirements',
      category: 'development',
      icon: Code,
      price: 'Starting at $5,000',;
      features: [,
        'Requirements analysis',
        'Custom application development',
        'Web and mobile app development',
        'API development and integration',
<<<<<<< HEAD

        'Database design and implementation',

        'Testing and quality assurance',

        'Deployment and maintenance',

=======
        'Database design and implementation',
        'Testing and quality assurance',
        'Deployment and maintenance',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'User training and documentation'
      ],
      benefits: [,
        'Streamline business processes',
<<<<<<< HEAD

        'Improve operational efficiency',

        'Gain competitive advantage',

        'Reduce manual work',

=======
        'Improve operational efficiency',
        'Gain competitive advantage',
        'Reduce manual work',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Scale with business growth'
      ],
      targetAudience: 'Businesses needing custom software solutions',
      setupTime: '4-16 weeks',
      freeConsultation: 'Yes',
      support: 'Development team and ongoing maintenance',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'PHP', 'Mobile'],
      link: 'https://ziontechgroup.com/software-development',
      caseStudy: 'Logistics company automated 80% of manual processes with custom software',},
    {id: 'it-consulting',
      name: 'Strategic IT Consulting',
      description: 'Technology strategy and roadmap development for digital transformation',
      category: 'consulting',
      icon: Briefcase,
      price: 'Starting at $200/hour',
      features: [,
        'IT strategy development',
        'Technology roadmap planning',
        'Digital transformation consulting',
        'Vendor evaluation and selection',
<<<<<<< HEAD

        'Cost-benefit analysis',

        'Risk assessment and mitigation',

        'Change management planning',

=======
        'Cost-benefit analysis',
        'Risk assessment and mitigation',
        'Change management planning',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Implementation guidance'
      ],
      benefits: [,
        'Align IT with business goals',
<<<<<<< HEAD

        'Optimize technology investments',

        'Reduce implementation risks',

        'Accelerate digital transformation',

=======
        'Optimize technology investments',
        'Reduce implementation risks',
        'Accelerate digital transformation',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Improve ROI on technology'
      ],
      targetAudience: 'Businesses planning technology initiatives',
      setupTime: '1-4 weeks',
      freeConsultation: 'Yes',
      support: 'Senior consultant and ongoing guidance',
      certifications: ['PMP', 'ITIL', 'COBIT', 'TOGAF'],
      link: 'https://ziontechgroup.com/it-consulting',
      caseStudy: 'Manufacturing company achieved 40% cost reduction through strategic IT planning',},
    {id: 'disaster-recovery',
      name: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery planning and implementation',
      category: 'recovery',
      icon: RefreshCw,
      price: 'Starting at $3,500',;
      features: [,
        'Business impact analysis',
        'Recovery time objective planning',
        'Backup strategy implementation',
        'Disaster recovery testing',
<<<<<<< HEAD

        'Business continuity planning',

        'Cloud-based recovery solutions',

        'Documentation and procedures',

=======
        'Business continuity planning',
        'Cloud-based recovery solutions',
        'Documentation and procedures',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Regular testing and updates'
      ],
      benefits: [,
        'Minimize business disruption',
<<<<<<< HEAD

        'Ensure rapid recovery',

        'Protect critical data',

        'Maintain customer service',

=======
        'Ensure rapid recovery',
        'Protect critical data',
        'Maintain customer service',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Comply with regulations'
      ],
      targetAudience: 'Businesses requiring high availability',
      setupTime: '2-6 weeks',
      freeConsultation: 'Yes',
      support: 'Recovery specialist and ongoing testing',
      certifications: ['CBCP', 'DRII', 'ITIL', 'ISO 22301'],
      link: 'https://ziontechgroup.com/disaster-recovery',
      caseStudy: 'Financial services firm achieved 99.9% uptime with our disaster recovery solution',},
    {id: 'compliance-auditing',
      name: 'IT Compliance & Auditing',
      description: 'Compliance assessment and implementation for various industry standards',
      category: 'compliance',
      icon: CheckSquare,
      price: 'Starting at $2,000',;
      features: [,
        'Compliance gap analysis',
        'Policy and procedure development',
        'Security control implementation',
        'Audit preparation and support',
<<<<<<< HEAD

        'Training and awareness programs',

        'Ongoing compliance monitoring',

        'Documentation and reporting',

=======
        'Training and awareness programs',
        'Ongoing compliance monitoring',
        'Documentation and reporting',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Remediation planning'
      ],
      benefits: [,
        'Ensure regulatory compliance',
<<<<<<< HEAD

        'Reduce audit findings',

        'Improve security posture',

        'Avoid penalties and fines',

=======
        'Reduce audit findings',
        'Improve security posture',
        'Avoid penalties and fines',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        'Build customer trust'
      ],
      targetAudience: 'Healthcare, Finance, Government, Education sectors',
      setupTime: '2-8 weeks',
      freeConsultation: 'Yes',
      support: 'Compliance specialist and ongoing monitoring',
      standards: ['HIPAA', 'SOX', 'PCI-DSS', 'GDPR', 'ISO 27001', 'NIST'],
      link: 'https://ziontechgroup.com/compliance-auditing',
<<<<<<< HEAD
      caseStudy: 'Healthcare provider achieved 100% HIPAA compliance and passed all audits',}}
  ]
const categories = [
    {id: 'all', name: 'All IT Services', icon: Grid3X3 ,},
    {id: 'infrastructure', name: 'Infrastructure', icon: Server ,},
    {id: 'cloud', name: 'Cloud Services', icon: Cloud ,},
    {id: 'security', name: 'Cybersecurity', icon: Shield ,},
    {id: 'networking', name: 'Networking', icon: Network ,},
    {id: 'database', name: 'Database', icon: Database ,},
    {id: 'support', name: 'IT Support', icon: Headphones ,},
    {id: 'development', name: 'Development', icon: Code ,},
    {id: 'consulting', name: 'Consulting', icon: Briefcase ,},
    {id: 'recovery', name: 'Disaster Recovery', icon: RefreshCw ,},
    {id: 'compliance', name: 'Compliance', icon: CheckSquare ,}]
const filteredServices = itServices.filter(service => {)
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;}})
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
=======
<<<<<<< HEAD
      caseStudy: 'Healthcare provider achieved 100% HIPAA compliance and passed all audits'
  }
    }
  ]
const categories = [
    { id: 'all', name: 'All IT Services', icon: Grid3X3 },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'networking', name: 'Networking', icon: Network },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'support', name: 'IT Support', icon: Headphones },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'consulting', name: 'Consulting', icon: Briefcase },
    { id: 'recovery', name: 'Disaster Recovery', icon: RefreshCw },
    { id: 'compliance', name: 'Compliance', icon: CheckSquare }
  ]
const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  }
  })
return (
=======
caseStudy: 'Healthcare provider achieved 100% HIPAA compliance and passed all audits']
    };
  ];
;
const categories = [
[
        { id: 'all', name: 'All IT Services', icon: Grid3X3 },
        { id: 'infrastructure', name: 'Infrastructure', icon: Server },
        { id: 'cloud', name: 'Cloud Services', icon: Cloud },
        { id: 'security', name: 'Cybersecurity', icon: Shield },
        { id: 'networking', name: 'Networking', icon: Network },
        { id: 'database', name: 'Database', icon: Database },
        { id: 'support', name: 'IT Support', icon: Headphones },
        { id: 'development', name: 'Development', icon: Code },
        { id: 'consulting', name: 'Consulting', icon: Briefcase },
        { id: 'recovery', name: 'Disaster Recovery', icon: RefreshCw },
        { id: 'compliance', name: 'Compliance', icon: CheckSquare };
  ];
;
const filteredServices = itServices.filter(service => {;
const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch]
    });;
  return (
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      {/* Hero Section */}</div>
      <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse"></h1>,
            Professional <span className="holographic-text">IT Services</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
          </h1>
<<<<<<< HEAD
          <p className="text-xl text-gray-300 mb-8">
            Coming Soon - Advanced it consulting solutions and services
=======
          <p>
            Comprehensive IT solutions designed to optimize your technology infrastructure,
            enhance security, and drive business growth. Expert consulting and implementation.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          </p>
        </div>
<<<<<<< HEAD
      </div>
    </div>
  );
};

export default ItConsultingPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
      </section>
      {/* Search and Filter Section */};
      <section className="py-12 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col lg:flex-row gap-6 mb-8"></div>
            {/* Search */}</div>
            <div className="flex-1"></div>
              <div className="relative"></div>
                <Search>
                <input
                  type="text"
                  placeholder="Search IT services..."
<<<<<<< HEAD
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}

                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />,
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg: w-64"></div>
              <select,
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}

                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              >,
                {
    categories.map((category) => (
  }
                  <option>

                    {category.name}
=======
                  value={searchTerm};
                  onChange={(e) => setSearchTerm(e.target.value);
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>
            {/* Category Filter */};
            <div>
              <select
                value={selectedCategory};
                onChange={(e) =></select> setSelectedCategory(e.target.value);
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}></option>
                    {category.name};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  </option>
                ))}

              </select>
            </div>
          </div>
          {/* Category Pills */};
          <div className="flex flex-wrap gap-2 mb-8"></div>
            {
    categories.map((category) => (</div>
              <button
<<<<<<< HEAD
  }
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
  }
                }`}
=======
                key={category.id};
                onClick={() =></button> setSelectedCategory(category.id);
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400']
    }`};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              >
                {category.name};
              </button>
            ))}

          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Services Grid */}
=======
      {/* Services Grid */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-12 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
<<<<<<< HEAD
            {
    filteredServices.map((service) => (</div>
  }
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse"></div>
                <div className="flex items-start justify-between mb-4"></div>
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors"></div>
                    <service>
=======
            {filteredServices.map((service) => (</div>
              <div>
                <div>
                  <div>
                    <service .icon className="w-12 h-12" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  </div>
                  <div className="text-right"></div>
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">starting price</div>
                  </div>
                </div>
<<<<<<< HEAD
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-3 mb-6"></div>
                  <div />
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul>
                      {
    service.features.slice(0, 4).map((feature, idx) => (
  }
                        <li>
                          <CheckCircle>
=======
                <h3 className="text-xl font-bold text-white mb-3 neon-glow"></h>{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2"></h>Key Features:</h4>
                    <ul className="space-y-1"></ul>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD
                  <div />
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul>
                      {
    service.benefits.slice(0, 2).map((benefit, idx) => (
  }
                        <li>
                          <TrendingUp>
=======
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2"></h>Benefits:</h4>
                    <ul className="space-y-1"></ul>
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
<<<<<<< HEAD
                <div className="space-y-2 mb-6 text-sm"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
=======
                <div>
                  <div>
                    <span className="text-gray-400"></spa>Setup Time:</span>
                    <span className="text-white"></spa>{service.setupTime}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Free Consultation:</span>
                    <span className="text-green-400">{service.freeConsultation}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Target:</span>
                    <span className="text-white">{service.targetAudience}</span>
                  </div>
                </div>
<<<<<<< HEAD
                {
    service.caseStudy && (
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg"></div>
  }
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}"</p>
                  </div>
                )}
<div className="space-y-3"></div>
                  <a>
=======
                {service.caseStudy && (
                  <div>
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}"</p>
                  </div>
                );
                <div>
                  <a
                    href={service.link};
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  ></a>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                    Get Free Consultation
                  </a>
                  <a>
                    <Phone>
                    Call for Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 cyber-scan-effect"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2>
            Ready to Optimize Your IT Infrastructure?,
=======
      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect"></section>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse"></h2>
            Ready to Optimize Your IT Infrastructure?
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          </h2>
          <p>
            Our certified IT professionals deliver reliable, secure, and scalable solutions.;
            All services include free consultations and ongoing support.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a>
              <Phone>
              Call (302) 464-0950
            </a>
            <a>
              <Mail>
              Get Custom IT Strategy
            </a>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  )
}
export default ITConsultingPage
=======
)]
    };
export default ITConsultingPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
