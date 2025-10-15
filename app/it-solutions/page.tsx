'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Shield, 
  Clock, 
  TrendingUp,
  BarChart3,
  Database,
  Smartphone,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin,
  Zap,
  Code,
  Eye,
  MessageSquare,
  Cpu,
  Network,
  FileText,
  Settings,
  CreditCard,
  Lock,
  Cloud,
  Wifi,
  Monitor,
  Server,
  Key,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Edit,
  Trash,
  Plus,
  Minus,
  Refresh,
  Play,
  Pause,
  Stop,
  Volume2,
  Camera,
  Image,
  Video,
  Music,
  Headphones,
  Mic,
  MicOff,
  Bell,
  BellOff,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Bookmark,
  Tag,
  Calendar,
  ClockIcon,
  Timer,
  Stopwatch,
  AlarmClock,
  CalendarDays,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
  Sun,
  Moon,
  CloudSun,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
  CloudDrizzle,
  CloudHail,
  CloudSleet,
  CloudWind,
  CloudMoon,
  CloudMoonRain,
  CloudMoonSnow,
  CloudMoonLightning,
  CloudMoonFog,
  CloudMoonDrizzle,
  CloudMoonHail,
  CloudMoonSleet,
  CloudMoonWind,
  CloudSunRain,
  CloudSunSnow,
  CloudSunLightning,
  CloudSunFog,
  CloudSunDrizzle,
  CloudSunHail,
  CloudSunSleet,
  CloudSunWind,
  Package,
  HardDrive,
  Router,
  Printer,
  Scanner,
  Keyboard,
  Mouse,
  Headset,
  Webcam,
  Speaker,
  Microphone,
  Laptop,
  Desktop,
  Tablet,
  Smartphone as PhoneIcon,
  Watch,
  Gamepad2,
  Joystick,
  Controller,
  Remote,
  Cable,
  Plug,
  Battery,
  Power,
  Wrench,
  Screwdriver,
  Hammer,
  Saw,
  Drill,
  Screw,
  Nut,
  Bolt,
  Washer,
  Spring,
  Gear,
  Cog,
  Settings2,
  Sliders,
  ToggleLeft,
  ToggleRight,
  Switch,
  Button,
  Knob,
  Dial,
  Lever,
  Handle,
  Grip,
  Hold,
  Grab,
  Pinch,
  Tap,
  Click,
  Press,
  Push,
  Pull,
  Drag,
  Drop,
  Move,
  Slide,
  Swipe,
  Scroll,
  Zoom,
  Rotate,
  Flip,
  Tilt,
  Bend,
  Stretch,
  Squeeze,
  Squash,
  Compress,
  Expand,
  Shrink,
  Grow,
  Increase,
  Decrease,
  Add,
  Remove,
  Insert,
  Delete,
  Create,
  Destroy,
  Build,
  Break,
  Fix,
  Repair,
  Maintain,
  Service,
  Support,
  Help,
  Guide,
  Tutorial,
  Manual,
  Documentation,
  Instructions,
  Steps,
  Process,
  Workflow,
  Pipeline,
  Chain,
  Link,
  Connect,
  Disconnect,
  Join,
  Split,
  Merge,
  Combine,
  Separate,
  Divide,
  Multiply,
  Add as PlusIcon,
  Subtract,
  Equals,
  NotEquals,
  GreaterThan,
  LessThan,
  GreaterThanOrEqual,
  LessThanOrEqual,
  And,
  Or,
  Not,
  Xor,
  Nand,
  Nor,
  Xnor,
  True,
  False,
  Null,
  Undefined,
  Empty,
  Full,
  Half,
  Quarter,
  Third,
  Fifth,
  Sixth,
  Seventh,
  Eighth,
  Ninth,
  Tenth,
  Hundredth,
  Thousandth,
  Millionth,
  Billionth,
  Trillionth,
  Infinity,
  NaN,
  Error,
  Warning,
  Info,
  Success,
  Failure,
  Pass,
  Fail,
  Skip,
  Retry,
  Cancel,
  Abort,
  Stop as StopIcon,
  Pause as PauseIcon,
  Play as PlayIcon,
  Record,
  Rewind,
  FastForward,
  SkipBack,
  SkipForward,
  Previous,
  Next,
  First,
  Last,
  Top,
  Bottom,
  Up,
  Down,
  Left,
  Right,
  North,
  South,
  East,
  West,
  Northeast,
  Northwest,
  Southeast,
  Southwest,
  Center,
  Middle,
  Edge,
  Corner,
  Side,
  Front,
  Back,
  Inside,
  Outside,
  Above,
  Below,
  Over,
  Under,
  Beside,
  Between,
  Among,
  Through,
  Across,
  Around,
  Along,
  Against,
  Toward,
  Away,
  Into,
  Onto,
  Off,
  On,
  In,
  Out,
  Up as UpIcon,
  Down as DownIcon,
  Left as LeftIcon,
  Right as RightIcon,
  Forward,
  Backward,
  Clockwise,
  Counterclockwise,
  Horizontal,
  Vertical,
  Diagonal,
  Parallel,
  Perpendicular,
  Tangent,
  Normal,
  Average,
  Median,
  Mode,
  Range,
  Minimum,
  Maximum,
  Sum,
  Product,
  Difference,
  Quotient,
  Remainder,
  Modulo,
  Power,
  Root,
  Square,
  Cube,
  Factorial,
  Logarithm,
  Exponential,
  Sine,
  Cosine,
  Tangent as TanIcon,
  Cotangent,
  Secant,
  Cosecant,
  ArcSine,
  ArcCosine,
  ArcTangent,
  ArcCotangent,
  ArcSecant,
  ArcCosecant,
  HyperbolicSine,
  HyperbolicCosine,
  HyperbolicTangent,
  HyperbolicCotangent,
  HyperbolicSecant,
  HyperbolicCosecant,
  InverseHyperbolicSine,
  InverseHyperbolicCosine,
  InverseHyperbolicTangent,
  InverseHyperbolicCotangent,
  InverseHyperbolicSecant,
  InverseHyperbolicCosecant,
  Absolute,
  Ceiling,
  Floor,
  Round,
  Truncate,
  Sign,
  Magnitude,
  Phase,
  Real,
  Imaginary,
  Complex,
  Conjugate,
  Transpose,
  Inverse,
  Determinant,
  Trace,
  Rank,
  Nullity,
  Eigenvalue,
  Eigenvector,
  Singular,
  Nonsingular,
  Symmetric,
  Antisymmetric,
  SkewSymmetric,
  Hermitian,
  SkewHermitian,
  Unitary,
  Orthogonal,
  Normal as NormalMatrix,
  PositiveDefinite,
  NegativeDefinite,
  Indefinite,
  Semidefinite,
  PositiveSemidefinite,
  NegativeSemidefinite,
  Diagonal as DiagonalMatrix,
  Tridiagonal,
  Banded,
  Sparse,
  Dense,
  Full as FullMatrix,
  Empty as EmptyMatrix,
  Zero,
  Identity,
  Ones,
  Random,
  Uniform,
  Normal as NormalDistribution,
  Gaussian,
  Binomial,
  Poisson,
  Exponential as ExponentialDistribution,
  Gamma,
  Beta,
  ChiSquared,
  StudentT,
  FisherF,
  Uniform as UniformDistribution,
  Triangular,
  Lognormal,
  Weibull,
  Pareto,
  Cauchy,
  Laplace,
  Logistic,
  Hypergeometric,
  Geometric,
  NegativeBinomial,
  Multinomial,
  Dirichlet,
  Wishart,
  InverseWishart,
  MatrixT,
  MatrixNormal,
  MatrixGamma,
  MatrixBeta,
  MatrixDirichlet,
  MatrixWishart,
  MatrixInverseWishart,
  MatrixT as MatrixTDistribution,
  MatrixNormal as MatrixNormalDistribution,
  MatrixGamma as MatrixGammaDistribution,
  MatrixBeta as MatrixBetaDistribution,
  MatrixDirichlet as MatrixDirichletDistribution,
  MatrixWishart as MatrixWishartDistribution,
  MatrixInverseWishart as MatrixInverseWishartDistribution
} from 'lucide-react';

const ITSolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Solutions',
      price: '$299/mo',
      originalPrice: '$599/mo',
      description: 'Comprehensive cloud infrastructure management and optimization',
      longDescription: 'Design, deploy, and manage scalable cloud infrastructure solutions using AWS, Azure, and Google Cloud platforms.',
      features: [
        'Multi-cloud Architecture',
        'Auto-scaling Solutions',
        'Load Balancing',
        'Disaster Recovery',
        'Security Hardening',
        'Cost Optimization',
        'Performance Monitoring',
        'Backup & Recovery',
        'Migration Services',
        '24/7 Support'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Increase system reliability',
        'Streamline operations'
      ],
      category: 'Cloud Computing',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      id: 'cybersecurity-solutions',
      name: 'Cybersecurity Solutions',
      price: '$399/mo',
      originalPrice: '$799/mo',
      description: 'Comprehensive security solutions to protect your digital assets',
      longDescription: 'Implement enterprise-grade cybersecurity measures including threat detection, incident response, and compliance management.',
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Penetration Testing',
        'Security Monitoring',
        'Compliance Management',
        'Identity & Access Management',
        'Data Encryption',
        'Network Security',
        'Security Training',
        'Incident Response'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure regulatory compliance',
        'Reduce security risks',
        'Improve incident response',
        'Enhance security posture'
      ],
      category: 'Security',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/cybersecurity-solutions'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      price: '$199/mo',
      originalPrice: '$399/mo',
      description: 'Design and implement robust network infrastructure',
      longDescription: 'Build and maintain high-performance network infrastructure including LAN, WAN, wireless, and data center networking.',
      features: [
        'Network Design & Planning',
        'Router & Switch Configuration',
        'Wireless Network Setup',
        'VPN Implementation',
        'Network Monitoring',
        'Performance Optimization',
        'Troubleshooting & Support',
        'Security Implementation',
        'Capacity Planning',
        'Documentation'
      ],
      benefits: [
        'Improve network performance',
        'Enhance security',
        'Reduce downtime',
        'Optimize bandwidth usage',
        'Scale with business growth'
      ],
      category: 'Networking',
      icon: <Network className="w-8 h-8 text-green-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      id: 'data-center-solutions',
      name: 'Data Center Solutions',
      price: '$599/mo',
      originalPrice: '$1199/mo',
      description: 'Complete data center design and management',
      longDescription: 'Design, build, and manage modern data centers with high availability, energy efficiency, and scalability.',
      features: [
        'Data Center Design',
        'Server Virtualization',
        'Storage Solutions',
        'Power & Cooling',
        'Environmental Monitoring',
        'Disaster Recovery',
        'Backup Solutions',
        'Security Implementation',
        'Compliance Management',
        '24/7 Monitoring'
      ],
      benefits: [
        'Improve data center efficiency',
        'Reduce operational costs',
        'Enhance reliability',
        'Ensure compliance',
        'Optimize space utilization'
      ],
      category: 'Data Center',
      icon: <Server className="w-8 h-8 text-purple-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/data-center-solutions'
    },
    {
      id: 'it-support-services',
      name: 'IT Support Services',
      price: '$149/mo',
      originalPrice: '$299/mo',
      description: 'Comprehensive IT support and maintenance',
      longDescription: 'Provide ongoing IT support, maintenance, and troubleshooting services to keep your systems running smoothly.',
      features: [
        '24/7 Help Desk Support',
        'Remote & On-site Support',
        'System Maintenance',
        'Software Updates',
        'Hardware Support',
        'User Training',
        'Documentation',
        'Proactive Monitoring',
        'Incident Management',
        'Change Management'
      ],
      benefits: [
        'Reduce IT downtime',
        'Improve user productivity',
        'Lower support costs',
        'Ensure system reliability',
        'Streamline IT operations'
      ],
      category: 'Support',
      icon: <Headphones className="w-8 h-8 text-cyan-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/it-support-services'
    },
    {
      id: 'software-development',
      name: 'Custom Software Development',
      price: '$499/mo',
      originalPrice: '$999/mo',
      description: 'Custom software solutions tailored to your business needs',
      longDescription: 'Develop custom software applications, web platforms, and mobile apps using modern technologies and best practices.',
      features: [
        'Custom Application Development',
        'Web Application Development',
        'Mobile App Development',
        'API Development',
        'Database Design',
        'UI/UX Design',
        'Quality Assurance',
        'Testing & Deployment',
        'Maintenance & Support',
        'Documentation'
      ],
      benefits: [
        'Tailored to business needs',
        'Improve operational efficiency',
        'Enhance customer experience',
        'Scale with business growth',
        'Competitive advantage'
      ],
      category: 'Development',
      icon: <Code className="w-8 h-8 text-orange-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/software-development'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      price: '$249/mo',
      originalPrice: '$499/mo',
      description: 'Comprehensive database design, optimization, and management',
      longDescription: 'Design, implement, and manage database systems with high performance, security, and scalability.',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration',
        'Backup & Recovery',
        'Security Implementation',
        'Monitoring & Maintenance',
        'Query Optimization',
        'Indexing Strategies',
        'Replication Setup',
        'Disaster Recovery'
      ],
      benefits: [
        'Improve database performance',
        'Ensure data integrity',
        'Reduce storage costs',
        'Enhance security',
        'Streamline data management'
      ],
      category: 'Database',
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/database-management'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting Services',
      price: '$199/mo',
      originalPrice: '$399/mo',
      description: 'Strategic IT consulting and technology planning',
      longDescription: 'Get expert guidance on IT strategy, technology selection, and digital transformation initiatives.',
      features: [
        'IT Strategy Planning',
        'Technology Assessment',
        'Digital Transformation',
        'Process Optimization',
        'Vendor Selection',
        'Cost Analysis',
        'Risk Assessment',
        'Compliance Review',
        'Training & Education',
        'Project Management'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Reduce risks',
        'Improve efficiency',
        'Stay competitive'
      ],
      category: 'Consulting',
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      id: 'backup-disaster-recovery',
      name: 'Backup & Disaster Recovery',
      price: '$179/mo',
      originalPrice: '$359/mo',
      description: 'Comprehensive backup and disaster recovery solutions',
      longDescription: 'Protect your critical data and systems with robust backup and disaster recovery solutions.',
      features: [
        'Automated Backup Solutions',
        'Disaster Recovery Planning',
        'Data Replication',
        'Recovery Testing',
        'Off-site Storage',
        'Cloud Backup',
        'Recovery Time Optimization',
        'Business Continuity',
        'Compliance Management',
        '24/7 Monitoring'
      ],
      benefits: [
        'Protect critical data',
        'Minimize downtime',
        'Ensure business continuity',
        'Meet compliance requirements',
        'Reduce recovery costs'
      ],
      category: 'Backup',
      icon: <HardDrive className="w-8 h-8 text-teal-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/backup-disaster-recovery'
    },
    {
      id: 'mobile-device-management',
      name: 'Mobile Device Management',
      price: '$129/mo',
      originalPrice: '$259/mo',
      description: 'Secure and manage mobile devices across your organization',
      longDescription: 'Implement comprehensive mobile device management solutions to secure and manage smartphones, tablets, and other mobile devices.',
      features: [
        'Device Enrollment',
        'Security Policies',
        'App Management',
        'Remote Wipe',
        'Location Tracking',
        'Compliance Monitoring',
        'User Management',
        'Content Management',
        'Analytics & Reporting',
        'Integration APIs'
      ],
      benefits: [
        'Enhance mobile security',
        'Simplify device management',
        'Ensure compliance',
        'Improve productivity',
        'Reduce support costs'
      ],
      category: 'Mobile',
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/mobile-device-management'
    },
    {
      id: 'virtualization-solutions',
      name: 'Virtualization Solutions',
      price: '$349/mo',
      originalPrice: '$699/mo',
      description: 'Server and desktop virtualization solutions',
      longDescription: 'Implement comprehensive virtualization solutions to optimize resource utilization and improve flexibility.',
      features: [
        'Server Virtualization',
        'Desktop Virtualization',
        'Application Virtualization',
        'Storage Virtualization',
        'Network Virtualization',
        'Cloud Integration',
        'Performance Optimization',
        'Resource Management',
        'Migration Services',
        'Support & Maintenance'
      ],
      benefits: [
        'Reduce hardware costs',
        'Improve resource utilization',
        'Enhance flexibility',
        'Simplify management',
        'Enable remote work'
      ],
      category: 'Virtualization',
      icon: <Monitor className="w-8 h-8 text-violet-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/virtualization-solutions'
    },
    {
      id: 'it-audit-compliance',
      name: 'IT Audit & Compliance',
      price: '$299/mo',
      originalPrice: '$599/mo',
      description: 'IT audit and compliance management services',
      longDescription: 'Ensure your IT systems meet regulatory requirements and industry standards with comprehensive audit and compliance services.',
      features: [
        'Compliance Assessment',
        'Security Audits',
        'Risk Assessment',
        'Policy Development',
        'Gap Analysis',
        'Remediation Planning',
        'Documentation',
        'Training Programs',
        'Ongoing Monitoring',
        'Certification Support'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Identify security gaps',
        'Reduce audit risks',
        'Improve security posture',
        'Maintain certifications'
      ],
      category: 'Compliance',
      icon: <FileText className="w-8 h-8 text-amber-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/it-audit-compliance'
    },
    {
      id: 'iot-solutions',
      name: 'IoT Solutions & Integration',
      price: '$449/mo',
      originalPrice: '$899/mo',
      description: 'Comprehensive IoT solutions and device management',
      longDescription: 'Connect and manage IoT devices with our comprehensive platform that provides device management, data analytics, and integration services.',
      features: [
        'Device Management',
        'Data Collection & Analytics',
        'Real-time Monitoring',
        'Edge Computing',
        'Protocol Integration',
        'Security Management',
        'Scalable Infrastructure',
        'Custom Dashboards',
        'API Development',
        'Maintenance Support'
      ],
      benefits: [
        'Connect any IoT device',
        'Real-time data insights',
        'Reduce operational costs',
        'Improve efficiency',
        'Scale IoT deployments'
      ],
      category: 'IoT',
      icon: <Wifi className="w-8 h-8 text-cyan-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/iot-solutions'
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Solutions',
      price: '$599/mo',
      originalPrice: '$1199/mo',
      description: 'Edge computing infrastructure and deployment',
      longDescription: 'Deploy edge computing solutions that bring processing closer to data sources for improved performance and reduced latency.',
      features: [
        'Edge Infrastructure Setup',
        'Data Processing at Edge',
        'Low Latency Applications',
        'Distributed Computing',
        'Edge Security',
        'Bandwidth Optimization',
        'Real-time Analytics',
        'Offline Capabilities',
        'Scalable Deployment',
        'Monitoring & Management'
      ],
      benefits: [
        'Reduce latency by 80%',
        'Improve application performance',
        'Reduce bandwidth costs',
        'Enable offline operations',
        'Better data privacy'
      ],
      category: 'Edge Computing',
      icon: <Server className="w-8 h-8 text-purple-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/edge-computing'
    },
    {
      id: 'microservices-architecture',
      name: 'Microservices Architecture',
      price: '$399/mo',
      originalPrice: '$799/mo',
      description: 'Design and implement microservices architecture',
      longDescription: 'Transform monolithic applications into scalable microservices architecture with our comprehensive design and implementation services.',
      features: [
        'Architecture Design',
        'Service Decomposition',
        'API Gateway Setup',
        'Service Discovery',
        'Load Balancing',
        'Container Orchestration',
        'Monitoring & Logging',
        'Security Implementation',
        'Testing Strategies',
        'Migration Services'
      ],
      benefits: [
        'Improve scalability',
        'Faster development cycles',
        'Better fault isolation',
        'Technology flexibility',
        'Easier maintenance'
      ],
      category: 'Architecture',
      icon: <Network className="w-8 h-8 text-blue-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/microservices-architecture'
    },
    {
      id: 'api-development',
      name: 'API Development & Integration',
      price: '$249/mo',
      originalPrice: '$499/mo',
      description: 'Custom API development and third-party integrations',
      longDescription: 'Build robust APIs and integrate with third-party services to connect your applications and streamline data flow.',
      features: [
        'RESTful API Development',
        'GraphQL APIs',
        'API Documentation',
        'Authentication & Authorization',
        'Rate Limiting',
        'Third-party Integrations',
        'API Testing',
        'Performance Optimization',
        'Version Management',
        'Monitoring & Analytics'
      ],
      benefits: [
        'Connect disparate systems',
        'Improve data flow',
        'Enable third-party access',
        'Reduce development time',
        'Better system integration'
      ],
      category: 'Development',
      icon: <Code className="w-8 h-8 text-green-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/api-development'
    },
    {
      id: 'devops-automation',
      name: 'DevOps Automation & CI/CD',
      price: '$349/mo',
      originalPrice: '$699/mo',
      description: 'Complete DevOps automation and continuous integration',
      longDescription: 'Automate your development and deployment processes with our comprehensive DevOps platform featuring CI/CD pipelines and infrastructure automation.',
      features: [
        'CI/CD Pipeline Setup',
        'Automated Testing',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Alerting',
        'Security Scanning',
        'Deployment Automation',
        'Environment Management',
        'Performance Optimization',
        'Team Collaboration Tools'
      ],
      benefits: [
        'Faster deployments',
        'Reduce manual errors',
        'Improve code quality',
        'Better team collaboration',
        'Scale development processes'
      ],
      category: 'DevOps',
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/devops-automation'
    },
    {
      id: 'data-warehousing',
      name: 'Data Warehousing & ETL',
      price: '$499/mo',
      originalPrice: '$999/mo',
      description: 'Enterprise data warehousing and ETL solutions',
      longDescription: 'Build comprehensive data warehouses and ETL pipelines to centralize and process your business data for analytics and reporting.',
      features: [
        'Data Warehouse Design',
        'ETL Pipeline Development',
        'Data Integration',
        'Data Quality Management',
        'Real-time Processing',
        'Data Modeling',
        'Performance Optimization',
        'Backup & Recovery',
        'Security Implementation',
        'Analytics Integration'
      ],
      benefits: [
        'Centralize data sources',
        'Improve data quality',
        'Enable better analytics',
        'Reduce data silos',
        'Faster reporting'
      ],
      category: 'Data Management',
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/data-warehousing'
    },
    {
      id: 'business-continuity',
      name: 'Business Continuity Planning',
      price: '$199/mo',
      originalPrice: '$399/mo',
      description: 'Comprehensive business continuity and disaster recovery',
      longDescription: 'Ensure your business can continue operations during disruptions with our comprehensive business continuity planning and disaster recovery services.',
      features: [
        'Risk Assessment',
        'Business Impact Analysis',
        'Recovery Planning',
        'Disaster Recovery Testing',
        'Backup Strategies',
        'Communication Plans',
        'Vendor Management',
        'Compliance Requirements',
        'Training Programs',
        'Ongoing Monitoring'
      ],
      benefits: [
        'Minimize downtime',
        'Protect critical data',
        'Ensure compliance',
        'Reduce business risks',
        'Maintain customer trust'
      ],
      category: 'Business Continuity',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/business-continuity'
    },
    {
      id: 'it-transformation',
      name: 'Digital IT Transformation',
      price: '$799/mo',
      originalPrice: '$1599/mo',
      description: 'Complete digital transformation of IT infrastructure',
      longDescription: 'Transform your entire IT infrastructure with our comprehensive digital transformation services that modernize technology and processes.',
      features: [
        'Technology Assessment',
        'Transformation Roadmap',
        'Legacy System Migration',
        'Cloud Migration',
        'Process Optimization',
        'Change Management',
        'Training & Support',
        'Performance Monitoring',
        'Cost Optimization',
        'Future Planning'
      ],
      benefits: [
        'Modernize technology stack',
        'Improve operational efficiency',
        'Reduce costs',
        'Enhance security',
        'Future-proof infrastructure'
      ],
      category: 'Transformation',
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/it-transformation'
    },
    {
      id: 'managed-it-services',
      name: 'Managed IT Services',
      price: '$299/mo',
      originalPrice: '$599/mo',
      description: 'Comprehensive managed IT services and support',
      longDescription: 'Outsource your IT operations to our expert team with comprehensive managed services including monitoring, maintenance, and support.',
      features: [
        '24/7 IT Monitoring',
        'Proactive Maintenance',
        'Help Desk Support',
        'Security Management',
        'Backup & Recovery',
        'Software Updates',
        'Hardware Management',
        'Performance Optimization',
        'Vendor Management',
        'Regular Reporting'
      ],
      benefits: [
        'Reduce IT costs',
        'Improve system reliability',
        'Access to expertise',
        'Focus on core business',
        'Predictable IT expenses'
      ],
      category: 'Managed Services',
      icon: <Headphones className="w-8 h-8 text-cyan-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/managed-it-services'
    }
  ];

  const categories = ['All', 'Cloud Computing', 'Security', 'Networking', 'Data Center', 'Support', 'Development', 'Database', 'Consulting', 'Backup', 'Mobile', 'Virtualization', 'Compliance', 'IoT', 'Edge Computing', 'Architecture', 'DevOps', 'Data Management', 'Business Continuity', 'Transformation', 'Managed Services'];

  const features = [
    '24/7 Expert Support',
    'Proven Methodologies',
    'Scalable Solutions',
    'Industry Expertise',
    'Cost Optimization',
    'Security First',
    'Compliance Ready',
    'Performance Monitoring',
    'Disaster Recovery',
    'Custom Solutions'
  ];

  const stats = [
    { number: '500+', label: 'IT Projects Completed' },
    { number: '100+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '24/7', label: 'Support Available' }
  ];

  const pricingTiers = [
    {
      name: 'Basic',
      price: '$199/mo',
      description: 'Perfect for small businesses',
      features: [
        'Basic IT support',
        'Email support',
        'Standard monitoring',
        'Basic security',
        'Monthly reports',
        'Remote assistance'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced IT support',
        'Priority support',
        'Proactive monitoring',
        'Advanced security',
        'Weekly reports',
        'On-site support',
        'Custom solutions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Dedicated IT team',
        '24/7 support',
        'Comprehensive monitoring',
        'Enterprise security',
        'Real-time reports',
        'Full-service support',
        'Custom development'
      ],
      popular: false
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>IT Solutions - Comprehensive Technology Services | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive IT solutions including cloud infrastructure, cybersecurity, networking, data center management, and custom software development. Transform your business with our expert IT services." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, networking, data center, software development, IT support, technology consulting" />
        <meta property="og:title" content="IT Solutions - Comprehensive Technology Services" />
        <meta property="og:description" content="Discover our comprehensive IT solutions including cloud infrastructure, cybersecurity, networking, data center management, and custom software development." />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/it-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Solutions
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}That Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT solutions designed to modernize your infrastructure, 
              enhance security, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of IT solutions designed to address your specific technology needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group relative ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-sm text-blue-400 font-medium">{service.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-xs text-blue-400 font-medium">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-center py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm"
                  >
                    Learn More
                  </a>
                  <Link
                    to="/contact"
                    className="block w-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-center py-2 rounded-lg font-semibold transition-all duration-300 text-sm"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IT solutions are designed with enterprise-grade reliability, security, and scalability in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-slate-700/30 rounded-lg hover:bg-slate-600/30 transition-colors group">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Solutions Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect IT solution plan for your business. All plans include 30-day free trial and no setup fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                tier.popular ? 'ring-2 ring-blue-500 bg-slate-700/50' : ''
              }`}>
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                      : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let our expert team help you modernize your IT infrastructure and drive business growth with our comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITSolutionsPage;