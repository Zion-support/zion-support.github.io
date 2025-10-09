import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Clock, Users, TrendingUp, Brain, Code, BarChart, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Database, Cloud, Lock, Settings, Bell, Target, Rocket, Award, Heart, DollarSign, PieChart, Activity, Layers, Globe2, Smartphone2, Monitor, Server, Wifi, Camera, Headphones, Mic, Mic2, Palette, Brush, Scissors, Wrench, Hammer, Cog, Filter, Search, Download, Upload, Share, Copy, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, ChevronRight, Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, Move, ZoomIn, ZoomOut, RefreshCw, RefreshCcw, Save, Folder, File, FolderOpen, Archive, Inbox, Send, Reply, Forward, Flag, Bookmark, Tag, Tags, Star as StarIcon, ThumbsUp, ThumbsDown, MessageCircle, MessageSquare, Phone, PhoneCall, PhoneIncoming, PhoneOutgoing, PhoneMissed, PhoneOff, Voicemail, Video as VideoIcon, VideoOff, Mic as MicIcon, MicOff, Headphones as HeadphonesIcon, HeadphonesOff, Volume1, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Speaker, SpeakerOff, Radio, Tv, Laptop, Tablet, Smartphone as SmartphoneIcon, Watch, Gamepad2, Joystick, Mouse, Keyboard, HardDrive, Cpu, MemoryStick, Wifi as WifiIcon, WifiOff, Bluetooth, BluetoothOff, Usb, Plug, Battery, BatteryCharging, Power, PowerOff, Sun, Moon, Cloud as CloudIcon, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Activity as ActivityIcon, Pulse, Heart as HeartIcon, Zap as ZapIcon, Flash, Thunder, Fire, Snowflake, Sun as SunIcon, Moon as MoonIcon, Sunrise, Sunset, Compass, Map, MapPin, Navigation, Car, Truck, Bus, Train, Plane, Ship, Bike, Walk, Run, Footprints, Mountain, Tree, Leaf, Flower, Bug, Fish, Bird, Cat, Dog, PawPrint, Skull, Ghost, Alien, Robot, Android, Apple, Windows, Linux, Chrome, Firefox, Safari, Edge, Opera, InternetExplorer, Github, Gitlab, Bitbucket, Docker, Kubernetes, Jenkins, Travis, Circle, Square, Circle as CircleIcon, Square as SquareIcon, Triangle, Hexagon, Pentagon, Octagon, Diamond, Heart as HeartShape, Star as StarShape, Cross, Plus as PlusIcon, Minus as MinusIcon, X as XIcon, Check as CheckIcon, AlertTriangle, AlertCircle as AlertCircleIcon, Info as InfoIcon, HelpCircle as HelpCircleIcon, ExternalLink as ExternalLinkIcon, ChevronRight as ChevronRightIcon, ChevronLeft, ChevronUp, ChevronDown, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, ArrowUpRight, ArrowUpLeft, ArrowDownRight, ArrowDownLeft, CornerUpLeft, CornerUpRight, CornerDownLeft, CornerDownRight, CornerLeftUp, CornerLeftDown, CornerRightUp, CornerRightDown, Move as MoveIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, RotateLeft, RotateRight, FlipHorizontal, FlipVertical, FlipHorizontal2, FlipVertical2, Rotate3D, Rotate3D as Rotate3DIcon, Rotate3D as Rotate3DIcon2, Rotate3D as Rotate3DIcon3, Rotate3D as Rotate3DIcon4, Rotate3D as Rotate3DIcon5, Rotate3D as Rotate3DIcon6, Rotate3D as Rotate3DIcon7, Rotate3D as Rotate3DIcon8, Rotate3D as Rotate3DIcon9, Rotate3D as Rotate3DIcon10, Rotate3D as Rotate3DIcon11, Rotate3D as Rotate3DIcon12, Rotate3D as Rotate3DIcon13, Rotate3D as Rotate3DIcon14, Rotate3D as Rotate3DIcon15, Rotate3D as Rotate3DIcon16, Rotate3D as Rotate3DIcon17, Rotate3D as Rotate3DIcon18, Rotate3D as Rotate3DIcon19, Rotate3D as Rotate3DIcon20, Rotate3D as Rotate3DIcon21, Rotate3D as Rotate3DIcon22, Rotate3D as Rotate3DIcon23, Rotate3D as Rotate3DIcon24, Rotate3D as Rotate3DIcon25, Rotate3D as Rotate3DIcon26, Rotate3D as Rotate3DIcon27, Rotate3D as Rotate3DIcon28, Rotate3D as Rotate3DIcon29, Rotate3D as Rotate3DIcon30, Rotate3D as Rotate3DIcon31, Rotate3D as Rotate3DIcon32, Rotate3D as Rotate3DIcon33, Rotate3D as Rotate3DIcon34, Rotate3D as Rotate3DIcon35, Rotate3D as Rotate3DIcon36, Rotate3D as Rotate3DIcon37, Rotate3D as Rotate3DIcon38, Rotate3D as Rotate3DIcon39, Rotate3D as Rotate3DIcon40, Rotate3D as Rotate3DIcon41, Rotate3D as Rotate3DIcon42, Rotate3D as Rotate3DIcon43, Rotate3D as Rotate3DIcon44, Rotate3D as Rotate3DIcon45, Rotate3D as Rotate3DIcon46, Rotate3D as Rotate3DIcon47, Rotate3D as Rotate3DIcon48, Rotate3D as Rotate3DIcon49, Rotate3D as Rotate3DIcon50, Rotate3D as Rotate3DIcon51, Rotate3D as Rotate3DIcon52, Rotate3D as Rotate3DIcon53, Rotate3D as Rotate3DIcon54, Rotate3D as Rotate3DIcon55, Rotate3D as Rotate3DIcon56, Rotate3D as Rotate3DIcon57, Rotate3D as Rotate3DIcon58, Rotate3D as Rotate3DIcon59, Rotate3D as Rotate3DIcon60, Rotate3D as Rotate3DIcon61, Rotate3D as Rotate3DIcon62, Rotate3D as Rotate3DIcon63, Rotate3D as Rotate3DIcon64, Rotate3D as Rotate3DIcon65, Rotate3D as Rotate3DIcon66, Rotate3D as Rotate3DIcon67, Rotate3D as Rotate3DIcon68, Rotate3D as Rotate3DIcon69, Rotate3D as Rotate3DIcon70, Rotate3D as Rotate3DIcon71, Rotate3D as Rotate3DIcon72, Rotate3D as Rotate3DIcon73, Rotate3D as Rotate3DIcon74, Rotate3D as Rotate3DIcon75, Rotate3D as Rotate3DIcon76, Rotate3D as Rotate3DIcon77, Rotate3D as Rotate3DIcon78, Rotate3D as Rotate3DIcon79, Rotate3D as Rotate3DIcon80, Rotate3D as Rotate3DIcon81, Rotate3D as Rotate3DIcon82, Rotate3D as Rotate3DIcon83, Rotate3D as Rotate3DIcon84, Rotate3D as Rotate3DIcon85, Rotate3D as Rotate3DIcon86, Rotate3D as Rotate3DIcon87, Rotate3D as Rotate3DIcon88, Rotate3D as Rotate3DIcon89, Rotate3D as Rotate3DIcon90, Rotate3D as Rotate3DIcon91, Rotate3D as Rotate3DIcon92, Rotate3D as Rotate3DIcon93, Rotate3D as Rotate3DIcon94, Rotate3D as Rotate3DIcon95, Rotate3D as Rotate3DIcon96, Rotate3D as Rotate3DIcon97, Rotate3D as Rotate3DIcon98, Rotate3D as Rotate3DIcon99, Rotate3D as Rotate3DIcon100 } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All IT Services', icon: Server },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'infrastructure', name: 'Infrastructure', icon: Database },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'devops', name: 'DevOps', icon: Settings },
    { id: 'networking', name: 'Networking', icon: Wifi },
    { id: 'support', name: 'Support', icon: Headphones },
    { id: 'consulting', name: 'Consulting', icon: Users },
    { id: 'migration', name: 'Migration', icon: ArrowRight },
  ];

  const itServices = [
    // Cloud Services
    {
      id: 'cloud-infrastructure-pro',
      name: 'Cloud Infrastructure Pro',
      description: 'Comprehensive cloud infrastructure management with AWS, Azure, and Google Cloud expertise',
      category: 'cloud',
      icon: Cloud,
      price: 2500,
      period: 'month',
      features: [
        'Multi-cloud Architecture',
        'Auto-scaling Infrastructure',
        'Disaster Recovery',
        'Cost Optimization',
        'Security Hardening',
        '24/7 Monitoring'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and reliability',
        'Ensure 99.9% uptime',
        'Simplify cloud management'
      ],
      popular: true,
      rating: 4.9,
      users: '3,200+',
      color: 'from-blue-500 to-cyan-600',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform']
    },
    {
      id: 'cloud-migration-suite',
      name: 'Cloud Migration Suite',
      description: 'Seamless cloud migration services with zero downtime and comprehensive testing',
      category: 'cloud',
      icon: ArrowRight,
      price: 5000,
      period: 'project',
      features: [
        'Zero-downtime Migration',
        'Application Assessment',
        'Data Migration',
        'Performance Testing',
        'Security Validation',
        'Post-migration Support'
      ],
      benefits: [
        'Migrate without business disruption',
        'Optimize for cloud-native features',
        'Ensure data integrity',
        'Reduce migration risks'
      ],
      rating: 4.8,
      users: '1,800+',
      color: 'from-purple-500 to-pink-600',
      technologies: ['AWS Migration', 'Azure Migration', 'Google Cloud', 'VMware', 'Hyper-V']
    },

    // Cybersecurity Services
    {
      id: 'cybersecurity-suite',
      name: 'Cybersecurity Suite',
      description: 'Comprehensive cybersecurity services including threat detection, incident response, and compliance',
      category: 'security',
      icon: Shield,
      price: 3500,
      period: 'month',
      features: [
        '24/7 Threat Monitoring',
        'Incident Response',
        'Vulnerability Assessment',
        'Penetration Testing',
        'Compliance Management',
        'Security Training'
      ],
      benefits: [
        'Protect against 99.9% of threats',
        'Reduce security incidents by 80%',
        'Ensure compliance with regulations',
        'Improve security awareness'
      ],
      popular: true,
      rating: 4.9,
      users: '2,500+',
      color: 'from-red-500 to-orange-600',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'MFA', 'Zero Trust']
    },
    {
      id: 'compliance-management',
      name: 'Compliance Management',
      description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulatory requirements',
      category: 'security',
      icon: CheckCircle,
      price: 2800,
      period: 'month',
      features: [
        'Automated Compliance Monitoring',
        'Risk Assessment',
        'Audit Preparation',
        'Policy Management',
        'Training Programs',
        'Reporting Dashboard'
      ],
      benefits: [
        'Maintain compliance automatically',
        'Reduce audit preparation time',
        'Minimize compliance risks',
        'Generate audit reports'
      ],
      rating: 4.8,
      users: '1,900+',
      color: 'from-green-500 to-emerald-600',
      technologies: ['GDPR', 'HIPAA', 'SOX', 'PCI DSS', 'ISO 27001', 'NIST']
    },

    // Infrastructure Services
    {
      id: 'infrastructure-management',
      name: 'Infrastructure Management',
      description: 'Complete infrastructure management including servers, networks, and data centers',
      category: 'infrastructure',
      icon: Server,
      price: 2000,
      period: 'month',
      features: [
        'Server Management',
        'Network Administration',
        'Data Center Operations',
        'Backup & Recovery',
        'Performance Monitoring',
        'Capacity Planning'
      ],
      benefits: [
        'Ensure 99.9% uptime',
        'Optimize infrastructure performance',
        'Reduce operational costs',
        'Scale infrastructure as needed'
      ],
      rating: 4.8,
      users: '4,100+',
      color: 'from-slate-500 to-gray-600',
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'SAN', 'NAS']
    },
    {
      id: 'network-security-pro',
      name: 'Network Security Pro',
      description: 'Advanced network security solutions with firewall management and intrusion detection',
      category: 'infrastructure',
      icon: Wifi,
      price: 1800,
      period: 'month',
      features: [
        'Firewall Management',
        'Intrusion Detection',
        'Network Monitoring',
        'VPN Services',
        'Wireless Security',
        'Network Segmentation'
      ],
      benefits: [
        'Secure network infrastructure',
        'Prevent unauthorized access',
        'Monitor network traffic',
        'Ensure data privacy'
      ],
      rating: 4.7,
      users: '3,500+',
      color: 'from-indigo-500 to-blue-600',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Check Point', 'Juniper', 'SonicWall']
    },

    // Development Services
    {
      id: 'custom-development',
      name: 'Custom Development',
      description: 'Custom software development services with modern technologies and agile methodologies',
      category: 'development',
      icon: Code,
      price: 150,
      period: 'hour',
      features: [
        'Full-stack Development',
        'Mobile App Development',
        'API Development',
        'Database Design',
        'UI/UX Design',
        'Quality Assurance'
      ],
      benefits: [
        'Build custom solutions',
        'Modern technology stack',
        'Agile development process',
        'Ongoing support and maintenance'
      ],
      popular: true,
      rating: 4.9,
      users: '5,200+',
      color: 'from-purple-500 to-violet-600',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'Swift', 'Kotlin']
    },
    {
      id: 'api-development',
      name: 'API Development',
      description: 'RESTful and GraphQL API development with comprehensive documentation and testing',
      category: 'development',
      icon: Database,
      price: 8000,
      period: 'project',
      features: [
        'RESTful API Design',
        'GraphQL Implementation',
        'API Documentation',
        'Authentication & Authorization',
        'Rate Limiting',
        'Performance Optimization'
      ],
      benefits: [
        'Enable system integration',
        'Improve data accessibility',
        'Enhance security',
        'Scale API performance'
      ],
      rating: 4.8,
      users: '2,800+',
      color: 'from-cyan-500 to-blue-600',
      technologies: ['REST', 'GraphQL', 'OpenAPI', 'JWT', 'OAuth', 'Rate Limiting']
    },

    // DevOps Services
    {
      id: 'devops-automation',
      name: 'DevOps Automation',
      description: 'Complete DevOps automation with CI/CD pipelines, infrastructure as code, and monitoring',
      category: 'devops',
      icon: Settings,
      price: 3000,
      period: 'month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Alerting',
        'Automated Testing',
        'Deployment Automation'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors',
        'Improve code quality',
        'Scale development teams'
      ],
      rating: 4.9,
      users: '3,600+',
      color: 'from-orange-500 to-red-600',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 'container-orchestration',
      name: 'Container Orchestration',
      description: 'Kubernetes and Docker container orchestration with automated scaling and management',
      category: 'devops',
      icon: Layers,
      price: 2500,
      period: 'month',
      features: [
        'Kubernetes Management',
        'Container Registry',
        'Auto-scaling',
        'Service Mesh',
        'Monitoring & Logging',
        'Security Scanning'
      ],
      benefits: [
        'Scale applications automatically',
        'Improve resource utilization',
        'Simplify deployment',
        'Ensure high availability'
      ],
      rating: 4.8,
      users: '2,900+',
      color: 'from-blue-500 to-indigo-600',
      technologies: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'Prometheus', 'Grafana']
    },

    // Networking Services
    {
      id: 'network-design',
      name: 'Network Design & Implementation',
      description: 'Enterprise network design and implementation with high availability and security',
      category: 'networking',
      icon: Wifi,
      price: 12000,
      period: 'project',
      features: [
        'Network Architecture Design',
        'Hardware Procurement',
        'Installation & Configuration',
        'Performance Testing',
        'Documentation',
        'Training & Support'
      ],
      benefits: [
        'Design scalable networks',
        'Ensure high availability',
        'Optimize performance',
        'Reduce network complexity'
      ],
      rating: 4.8,
      users: '1,500+',
      color: 'from-teal-500 to-cyan-600',
      technologies: ['Cisco', 'Juniper', 'Aruba', 'Meraki', 'SD-WAN', 'MPLS']
    },
    {
      id: 'wireless-networking',
      name: 'Wireless Networking',
      description: 'Enterprise wireless network design and implementation with seamless roaming and security',
      category: 'networking',
      icon: Wifi,
      price: 8000,
      period: 'project',
      features: [
        'Wireless Site Survey',
        'Access Point Installation',
        'Controller Configuration',
        'Security Implementation',
        'Performance Optimization',
        'Monitoring Setup'
      ],
      benefits: [
        'Provide seamless connectivity',
        'Ensure wireless security',
        'Optimize coverage',
        'Support mobile devices'
      ],
      rating: 4.7,
      users: '2,200+',
      color: 'from-green-500 to-teal-600',
      technologies: ['Wi-Fi 6', 'Cisco Wireless', 'Aruba', 'Meraki', 'WPA3', '802.1X']
    },

    // Support Services
    {
      id: 'managed-it-support',
      name: 'Managed IT Support',
      description: 'Comprehensive managed IT support with 24/7 monitoring and helpdesk services',
      category: 'support',
      icon: Headphones,
      price: 1500,
      period: 'month',
      features: [
        '24/7 Helpdesk Support',
        'Remote Monitoring',
        'Proactive Maintenance',
        'Software Updates',
        'Hardware Support',
        'User Training'
      ],
      benefits: [
        'Reduce IT downtime',
        'Improve user productivity',
        'Lower IT costs',
        'Ensure system reliability'
      ],
      popular: true,
      rating: 4.9,
      users: '6,800+',
      color: 'from-blue-500 to-purple-600',
      technologies: ['Remote Desktop', 'Ticketing System', 'Monitoring Tools', 'Patch Management']
    },
    {
      id: 'on-site-support',
      name: 'On-site IT Support',
      description: 'On-site technical support for complex issues and hardware installations',
      category: 'support',
      icon: Wrench,
      price: 200,
      period: 'hour',
      features: [
        'On-site Technical Support',
        'Hardware Installation',
        'Network Troubleshooting',
        'System Configuration',
        'User Training',
        'Emergency Response'
      ],
      benefits: [
        'Resolve complex issues',
        'Install hardware on-site',
        'Provide hands-on training',
        'Ensure proper setup'
      ],
      rating: 4.8,
      users: '3,400+',
      color: 'from-orange-500 to-yellow-600',
      technologies: ['Hardware Installation', 'Network Troubleshooting', 'System Configuration']
    },

    // Consulting Services
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting services for digital transformation and technology planning',
      category: 'consulting',
      icon: Users,
      price: 250,
      period: 'hour',
      features: [
        'Technology Assessment',
        'Digital Transformation',
        'IT Strategy Planning',
        'Vendor Selection',
        'Project Management',
        'Change Management'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Plan digital transformation',
        'Improve IT efficiency'
      ],
      rating: 4.9,
      users: '2,100+',
      color: 'from-purple-500 to-pink-600',
      technologies: ['IT Strategy', 'Digital Transformation', 'Technology Assessment', 'Project Management']
    },
    {
      id: 'security-consulting',
      name: 'Security Consulting',
      description: 'Cybersecurity consulting services for risk assessment and security strategy development',
      category: 'consulting',
      icon: Shield,
      price: 300,
      period: 'hour',
      features: [
        'Security Risk Assessment',
        'Security Strategy Development',
        'Compliance Planning',
        'Security Architecture',
        'Incident Response Planning',
        'Security Training'
      ],
      benefits: [
        'Identify security risks',
        'Develop security strategy',
        'Ensure compliance',
        'Improve security posture'
      ],
      rating: 4.8,
      users: '1,700+',
      color: 'from-red-500 to-pink-600',
      technologies: ['Risk Assessment', 'Security Architecture', 'Compliance', 'Incident Response']
    },

    // Migration Services
    {
      id: 'data-migration',
      name: 'Data Migration Services',
      description: 'Secure and efficient data migration services with minimal downtime and data integrity',
      category: 'migration',
      icon: Database,
      price: 15000,
      period: 'project',
      features: [
        'Data Assessment',
        'Migration Planning',
        'Data Transfer',
        'Data Validation',
        'Testing & Verification',
        'Post-migration Support'
      ],
      benefits: [
        'Migrate data safely',
        'Minimize downtime',
        'Ensure data integrity',
        'Reduce migration risks'
      ],
      rating: 4.8,
      users: '1,200+',
      color: 'from-emerald-500 to-green-600',
      technologies: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'Data Migration Tools']
    },
    {
      id: 'application-migration',
      name: 'Application Migration',
      description: 'Application migration services for modernizing legacy systems and cloud migration',
      category: 'migration',
      icon: ArrowRight,
      price: 25000,
      period: 'project',
      features: [
        'Application Assessment',
        'Migration Strategy',
        'Code Refactoring',
        'Testing & Validation',
        'Performance Optimization',
        'User Training'
      ],
      benefits: [
        'Modernize legacy applications',
        'Improve performance',
        'Reduce maintenance costs',
        'Enable cloud deployment'
      ],
      rating: 4.9,
      users: '900+',
      color: 'from-cyan-500 to-blue-600',
      technologies: ['Legacy Modernization', 'Cloud Migration', 'Microservices', 'API Development']
    }
  ];

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularServices = itServices.filter(service => service.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 cyber-glow">
            Comprehensive IT services for enterprise infrastructure and digital transformation
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
            From cloud infrastructure and cybersecurity to custom development and DevOps automation, 
            we provide end-to-end IT services that keep your business running smoothly and securely.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search IT services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent cyber-input"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Most Popular IT Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Our most requested and highest-performing IT solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <div key={service.id} className="quantum-card p-8 energy-pulse relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-cyan-400 neon-text">
                      {service.price.toLocaleString()}
                      <span className="text-sm text-gray-400">/{service.period}</span>
                    </div>
                    <div className="flex items-center text-yellow-400 text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1">{service.rating}</span>
                      <span className="text-gray-400 ml-2">({service.users})</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.name}</h3>
                <p className="text-gray-300 mb-6 text-base leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full cyber-button text-center py-4 px-6 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Complete IT Services Portfolio
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Comprehensive IT solutions for every business need
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-cyan-400 neon-text">
                      {service.price.toLocaleString()}
                      <span className="text-sm text-gray-400">/{service.period}</span>
                    </div>
                    <div className="flex items-center text-yellow-400 text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full cyber-button text-center py-3 px-4 rounded-lg font-semibold text-sm hover:scale-105 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Capabilities Overview */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            IT Capabilities & Technologies
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Cutting-edge technologies powering our IT solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cloud Computing</h3>
              <p className="text-gray-300 text-sm">
                AWS, Azure, Google Cloud expertise with multi-cloud architecture and migration services.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive security solutions including threat detection, incident response, and compliance.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Development</h3>
              <p className="text-gray-300 text-sm">
                Full-stack development with modern technologies and agile methodologies for scalable solutions.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">DevOps</h3>
              <p className="text-gray-300 text-sm">
                CI/CD automation, container orchestration, and infrastructure as code for efficient deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of enterprises already using our IT services to achieve optimal performance and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Get Free IT Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 24/7 IT Support Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;