<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
'use client';';
import React, {Suspense, lazy}from 'react';';';
import {Link}}from 'react-router-dom';';';
import {Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight,}
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
  Webcam as WebcamIcon, Speaker as SpeakerIcon;}} from 'lucide-react';';
const ITConsultingPage: React.FC = () => {,;
const [selectedCategory, setSelectedCategory] = useState('all');';
const [searchTerm, setSearchTerm] = useState('');';
const itServices = [;
    // IT Infrastructure Services;
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'it-infrastructure-design','
      name: 'IT Infrastructure Design & Implementation','
      description: 'Complete IT infrastructure design, deployment, and optimization for modern businesses','
      category: 'infrastructure','
      icon: Server,
      price: 'Starting at $5,000','
      features: [,
        'Network architecture design','
        'Server deployment and configuration','
        'Storage solutions implementation','
        'Backup and disaster recovery setup','

<<<<<<< HEAD
        'Security infrastructure deployment','

        'Monitoring and management tools','

        'Documentation and training','

        'Ongoing support and maintenance''
      ],
      benefits: [,
        'Scalable and reliable infrastructure','

        'Improved system performance','

        'Enhanced security posture','

        'Reduced downtime and outages','

        'Future-proof technology stack''
      ],
      targetAudience: 'Small to large businesses, Startups, Enterprises','
      setupTime: '2-8 weeks','
      freeConsultation: 'Yes','
      support: '24/7 technical support','
      certifications: ['Cisco', 'Microsoft', 'VMware', 'AWS', 'Azure'],'
      link: 'https://ziontechgroup.com/it-infrastructure-design','
      caseStudy: 'Manufacturing company reduced IT downtime by 95% with our infrastructure design''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'cloud-migration-services','
      name: 'Cloud Migration & Optimization','
      description: 'Seamless migration to cloud platforms with optimization for cost and performance','
      category: 'cloud','
      icon: Cloud,
      price: 'Starting at $3,000','
      features: [,
        'Cloud readiness assessment','
        'Migration strategy development','
        'Data and application migration','
        'Cloud security implementation','

        'Cost optimization analysis','

        'Performance tuning','

        'Disaster recovery setup','

        'Training and documentation''
      ],
      benefits: [,
        'Reduce IT costs by 30-50%','

        'Improve scalability and flexibility','

        'Enhanced security and compliance','

        'Better disaster recovery capabilities','

        'Access to latest technologies''
      ],
      targetAudience: 'Businesses looking to modernize IT infrastructure','
      setupTime: '1-6 weeks','
      freeConsultation: 'Yes','
      support: 'Migration specialist and ongoing support','
      certifications: ['AWS', 'Azure', 'Google Cloud', 'VMware'],'
      link: 'https://ziontechgroup.com/cloud-migration-services','
      caseStudy: 'Retail chain saved $2M annually by migrating to cloud infrastructure''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'cybersecurity-services','
      name: 'Cybersecurity Solutions','
      description: 'Comprehensive security assessment, implementation, and ongoing protection','
      category: 'security','
      icon: Shield,
      price: 'Starting at $2,500','
      features: [,
        'Security risk assessment','
        'Penetration testing','
        'Security policy development','
        'Firewall and endpoint protection','

        'Email security implementation','

        'Security awareness training','

        'Compliance auditing','

        'Incident response planning''
      ],
      benefits: [,
        'Protect against cyber threats','

        'Ensure regulatory compliance','

        'Reduce security risks by 90%','

        'Improve incident response time','

        'Maintain customer trust''
      ],
      targetAudience: 'All businesses handling sensitive data','
      setupTime: '1-4 weeks','
      freeConsultation: 'Yes','
      support: 'Security specialist and 24/7 monitoring','
      certifications: ['CISSP', 'CISM', 'CEH', 'CompTIA Security+'],'
      link: 'https://ziontechgroup.com/cybersecurity-services','
      caseStudy: 'Healthcare provider achieved 100% compliance with HIPAA regulations''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'network-design-optimization','
      name: 'Network Design & Optimization','
      description: 'High-performance network infrastructure design and optimization for reliability','
      category: 'networking','
      icon: Network,
      price: 'Starting at $2,000','
      features: [,
        'Network architecture design','
        'Bandwidth optimization','
        'Quality of Service (QoS) setup','
        'Wireless network deployment','

        'Network monitoring implementation','

        'Traffic analysis and optimization','

        'Redundancy and failover setup','

        'Performance tuning''
      ],
      benefits: [,
        'Improve network performance by 200%','

        'Reduce network downtime','

        'Optimize bandwidth usage','

        'Enhance user experience','

        'Future-proof network design''
      ],
      targetAudience: 'Businesses with complex networking needs','
      setupTime: '1-3 weeks','
      freeConsultation: 'Yes','
      support: 'Network specialist and ongoing optimization','
      certifications: ['CCNA', 'CCNP', 'JNCIA', 'CompTIA Network+'],'
      link: 'https://ziontechgroup.com/network-design-optimization','
      caseStudy: 'Law firm improved network speed by 300% and eliminated connectivity issues''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'database-management','
      name: 'Database Management & Optimization','
      description: 'Database design, implementation, optimization, and ongoing management','
      category: 'database','
      icon: Database,
      price: 'Starting at $1,500','
      features: [,
        'Database design and architecture','
        'Performance optimization','
        'Backup and recovery setup','
        'Security implementation','

        'Monitoring and alerting','

        'Query optimization','

        'Capacity planning','

        'Maintenance and updates''
      ],
      benefits: [,
        'Improve database performance by 150%','

        'Ensure data integrity and security','

        'Reduce maintenance overhead','

        'Optimize storage usage','

        'Minimize downtime''
      ],
      targetAudience: 'Businesses with critical data requirements','
      setupTime: '1-2 weeks','
      freeConsultation: 'Yes','
      support: 'Database specialist and 24/7 monitoring','
      certifications: ['Oracle', 'Microsoft SQL Server', 'MySQL', 'PostgreSQL'],'
      link: 'https://ziontechgroup.com/database-management','
      caseStudy: 'E-commerce platform improved query performance by 400% and reduced costs by 60%''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'it-support-services','
      name: 'Managed IT Support Services','
      description: 'Comprehensive IT support and management for ongoing operations','
      category: 'support','
      icon: Headphones,
      price: 'Starting at $99/user/month','
      features: [,
        '24/7 technical support','
        'Remote monitoring and management','
        'Proactive maintenance','
        'Software updates and patches','

        'Hardware support and replacement','

        'User training and onboarding','

        'IT asset management','

        'Help desk services''
      ],
      benefits: [,
        'Reduce IT downtime by 80%','

        'Lower IT support costs','

        'Improve user productivity','

        'Proactive issue resolution','

        'Focus on core business activities''
      ],
      targetAudience: 'Small to medium businesses without dedicated IT staff','
      setupTime: '1 week','
      freeConsultation: 'Yes','
      support: 'Dedicated support team','
      certifications: ['Microsoft', 'CompTIA', 'Cisco', 'VMware'],'
      link: 'https://ziontechgroup.com/it-support-services','
      caseStudy: 'Marketing agency reduced IT issues by 90% and improved employee productivity''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'software-development','
      name: 'Custom Software Development','
      description: 'Tailored software solutions built to meet specific business requirements','
      category: 'development','
      icon: Code,
      price: 'Starting at $5,000','
      features: [,
        'Requirements analysis','
        'Custom application development','
        'Web and mobile app development','
        'API development and integration','

        'Database design and implementation','

        'Testing and quality assurance','

        'Deployment and maintenance','

        'User training and documentation''
      ],
      benefits: [,
        'Streamline business processes','

        'Improve operational efficiency','

        'Gain competitive advantage','

        'Reduce manual work','

        'Scale with business growth''
      ],
      targetAudience: 'Businesses needing custom software solutions','
      setupTime: '4-16 weeks','
      freeConsultation: 'Yes','
      support: 'Development team and ongoing maintenance','
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'PHP', 'Mobile'],'
      link: 'https://ziontechgroup.com/software-development','
      caseStudy: 'Logistics company automated 80% of manual processes with custom software''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'it-consulting','
      name: 'Strategic IT Consulting','
      description: 'Technology strategy and roadmap development for digital transformation','
      category: 'consulting','
      icon: Briefcase,
      price: 'Starting at $200/hour','
      features: [,
        'IT strategy development','
        'Technology roadmap planning','
        'Digital transformation consulting','
        'Vendor evaluation and selection','

        'Cost-benefit analysis','

        'Risk assessment and mitigation','

        'Change management planning','

        'Implementation guidance''
      ],
      benefits: [,
        'Align IT with business goals','

        'Optimize technology investments','

        'Reduce implementation risks','

        'Accelerate digital transformation','

        'Improve ROI on technology''
      ],
      targetAudience: 'Businesses planning technology initiatives','
      setupTime: '1-4 weeks','
      freeConsultation: 'Yes','
      support: 'Senior consultant and ongoing guidance','
      certifications: ['PMP', 'ITIL', 'COBIT', 'TOGAF'],'
      link: 'https://ziontechgroup.com/it-consulting','
      caseStudy: 'Manufacturing company achieved 40% cost reduction through strategic IT planning''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'disaster-recovery','
      name: 'Disaster Recovery & Business Continuity','
      description: 'Comprehensive disaster recovery planning and implementation','
      category: 'recovery','
      icon: RefreshCw,
      price: 'Starting at $3,500','
      features: [,
        'Business impact analysis','
        'Recovery time objective planning','
        'Backup strategy implementation','
        'Disaster recovery testing','

        'Business continuity planning','

        'Cloud-based recovery solutions','

        'Documentation and procedures','

        'Regular testing and updates''
      ],
      benefits: [,
        'Minimize business disruption','

        'Ensure rapid recovery','

        'Protect critical data','

        'Maintain customer service','

        'Comply with regulations''
      ],
      targetAudience: 'Businesses requiring high availability','
      setupTime: '2-6 weeks','
      freeConsultation: 'Yes','
      support: 'Recovery specialist and ongoing testing','
      certifications: ['CBCP', 'DRII', 'ITIL', 'ISO 22301'],'
      link: 'https://ziontechgroup.com/disaster-recovery','
      caseStudy: 'Financial services firm achieved 99.9% uptime with our disaster recovery solution''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'compliance-auditing','
      name: 'IT Compliance & Auditing','
      description: 'Compliance assessment and implementation for various industry standards','
      category: 'compliance','
      icon: CheckSquare,
      price: 'Starting at $2,000','
      features: [,
        'Compliance gap analysis','
        'Policy and procedure development','
        'Security control implementation','
        'Audit preparation and support','

        'Training and awareness programs','

        'Ongoing compliance monitoring','

        'Documentation and reporting','

        'Remediation planning''
      ],
      benefits: [,
        'Ensure regulatory compliance','

        'Reduce audit findings','

        'Improve security posture','

        'Avoid penalties and fines','

        'Build customer trust''
      ],
      targetAudience: 'Healthcare, Finance, Government, Education sectors','
      setupTime: '2-8 weeks','
      freeConsultation: 'Yes','
      support: 'Compliance specialist and ongoing monitoring','
      standards: ['HIPAA', 'SOX', 'PCI-DSS', 'GDPR', 'ISO 27001', 'NIST'],'
      link: 'https://ziontechgroup.com/compliance-auditing','
      caseStudy: 'Healthcare provider achieved 100% HIPAA compliance and passed all audits',}}'
  ];
const categories = [
  // TODO: Add items
]
  // TODO: Add items
]
    {id: 'all', name: 'All IT Services', icon: Grid3X3 ,},'
    {id: 'infrastructure', name: 'Infrastructure', icon: Server ,},'
    {id: 'cloud', name: 'Cloud Services', icon: Cloud ,},'
    {id: 'security', name: 'Cybersecurity', icon: Shield ,},'
    {id: 'networking', name: 'Networking', icon: Network ,},'
    {id: 'database', name: 'Database', icon: Database ,},'
    {id: 'support', name: 'IT Support', icon: Headphones ,},'
    {id: 'development', name: 'Development', icon: Code ,},'
    {id: 'consulting', name: 'Consulting', icon: Briefcase ,},'
    {id: 'recovery', name: 'Disaster Recovery', icon: RefreshCw ,},'
    {id: 'compliance', name: 'Compliance', icon: CheckSquare ,}];';
const filteredServices = itServices.filter(service => {)
    { id: 'all', name: 'All IT Services', icon: Grid3X3 },'
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },'
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },'
    { id: 'security', name: 'Cybersecurity', icon: Shield },'
    { id: 'networking', name: 'Networking', icon: Network },'
    { id: 'database', name: 'Database', icon: Database },'
    { id: 'support', name: 'IT Support', icon: Headphones },'
    { id: 'development', name: 'Development', icon: Code },'
    { id: 'consulting', name: 'Consulting', icon: Briefcase },'
    { id: 'recovery', name: 'Disaster Recovery', icon: RefreshCw },'
    { id: 'compliance', name: 'Compliance', icon: CheckSquare }'
  ];
const filteredServices = itServices.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;';
const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
>>>>>>> cursor/delete-records-a75e

export default function PagePage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
=======
export default function ItConsultingPage() {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ItConsulting() {
>>>>>>> cursor/fix-errors-and-merge-to-main-5443
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>It Consulting - Zion Tech Group</title>
        <meta name="description" content="Advanced it consulting solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD

>>>>>>> cursor/fix-errors-and-merge-to-main-6053
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
<<<<<<< HEAD
            This page is under development. Please check back later.
          </p>
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ItConsultingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>It Consulting - Zion Tech Group</title>
        <meta name="description" content="It Consulting services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="it-consulting, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            It Consulting
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional it consulting services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced it consulting solutions. 
              Stay tuned for updates!
            </p>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
      {/* Hero Section */}</div>
<section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid"></section>"
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>"
<div className="relative z-10 max-w-7xl mx-auto text-center"></div>"
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse"></h1>"
            Professional <span className="holographic-text">IT Services</span></h1>"
<p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">"
            Comprehensive IT solutions designed to optimize your technology infrastructure,
            enhance security, and drive business growth. Expert consulting and implementation.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>"
<a
              href="tel:+13024640950""
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50""
            >
<Phone className="w-5 h-5 inline mr-2" />"
      {/* Hero Section */}</div>
<section className="py-20 px-4"></section>"
< className="$2 /></div>"
<div className="text-center mb-16"></div>"
<h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>"
<p className="text-xl text-gray-300">Section description</p></div>"
</div></section>
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>"
<div className="relative z-10 max-w-7xl mx-auto text-center"></div>"
<h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse"></h1>,"
            Professional <span className="holographic-text">IT Services</span></h1>"
<p>Comprehensive IT solutions designed to optimize your technology infrastructure,</p>
            enhance security, and drive business growth. Expert consulting and implementation.
          </p>
<div className="flex flex-col sm: flex-row gap-4 justify-center mb-12"></div>,"
            <a>
<Phone>
              Call (302) 464-0950;
              Call (302) 464-0950
>>>>>>> origin/main
            </a>
<a
              href="mailto:kleber@ziontechgroup.com""
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50""
            >
<Mail className="w-5 h-5 inline mr-2" />"
              Get IT Consultation
            </a></div>
</div></section>
<section className="py-12 px-4 sm:px-6 lg:px-8"></section>"
<div className="max-w-7xl mx-auto"></div>"
<div className="flex flex-col lg:flex-row gap-6 mb-8">"
            {/* Search */}</div>
<div className="flex-1"></div>"
<div className="relative"></div>"
<p className="text-xl text-gray-300">Section description</p></div>"
</div></section>
<div className="max-w-7xl mx-auto"></div>"
<div className="flex flex-col lg: flex-row gap-6 mb-8"></div>,"
            {/* Search */}</div>
<div className="flex-1"></div>"
<div className="relative"></div>"
<Search>
<input;
                  type="text";"
                  placeholder="Search IT services...";"
                  value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)}className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20","
                />,
              </div></div>

            {/* Category Filter */} <div className="lg: w-64"></div>,"
              <select,
                value={selectedCategory}onChange={(e) => setSelectedCategory(e.target.value)}className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20","
              >,
                {categories.map((category) => (} <option>

                    {category.name} </option>
                ))}

              </select></div>
</div>

          {/* Category Pills */} <div className="flex flex-wrap gap-2 mb-8"></div>"
            {categories.map((category) => (</div>
<button;}key={category.id}onClick={() =>setSelectedCategory(category.id)</button>}className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                  selectedCategory === category.id;
                    ? 'bg-cyan-500 text-white';'
                    : 'bg-slate-800/50 text-gray-300 hover: bg-slate-700/50 hover:text-cyan-400',}}`}'
              >;
                {category.name} </button>
<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
<input
                  type="text""
                  placeholder="Search IT services...""
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value</div>
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20""
                />
            {/* Category Filter */}
            <div className="lg:w-64"></div>"
<select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value</div>
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20""
              >
                {categories.map((category) => (
  // TODO: Add parameters
)
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select></div>
</div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">"
            {categories.map((category) => (</div>
<button
                key={category.id}
                onClick={() => setSelectedCategory(category.id</div>
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white''
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400''
                }`}
              >
                {category.name}
              </button>
            ))}
            ))}

>>>>>>> origin/main
          </div></div>
</section>
<section className="py-12 px-4 sm:px-6 lg:px-8"></section>"
<div className="max-w-7xl mx-auto"></div>"
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            {filteredServices.map((service) => (</div>
<div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse"></div>"
<div className="flex items-start justify-between mb-4"></div>"
<div className="text-cyan-400 group-hover:text-cyan-300 transition-colors"></div>"
<service.icon className="w-12 h-12" /></div>"
<div className="text-right"></div>"
<div className="text-2xl font-bold text-white">{service.price}</div>"
<div className="text-sm text-gray-400">starting price</div></div>"
</div>
<h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>"
<p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>"
<div className="space-y-3 mb-6"></div>"
<div></div>
<h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>"
<ul className="space-y-1">"
                      {service.features.slice(0, 4).map((feature, idx) => (
  // TODO: Add parameters
)
                        <li key={idx} className="flex items-center text-sm text-gray-300">"
<CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />"
<span>{feature}</span>
<p className="text-xl text-gray-300">Section description</p></div>"
</div></section>
<div className="max-w-7xl mx-auto"></div>"
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,"
            {filteredServices.map((service) => (</div>} <div key={service.id}className="quantum-card p-6 group hover: scale-105 transition-all duration-300 energy-pulse"></div>,"
                <div className="flex items-start justify-between mb-4"></div>"
<div className="text-cyan-400 group-hover: text-cyan-300 transition-colors"></div>,"
                    <service />
<div className="text-right"></div>"
<div className="text-2xl font-bold text-white">{service.price</div>}</div>"
<div className="text-sm text-gray-400">starting price</div></div>"
</div>
<h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>"
<p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description</p>}</p>"
<div className="space-y-3 mb-6"></div>"
<div />
<h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features: </h4>,"
                    <ul>
                      {service.features.slice(0, 4).map((feature, idx) => (} <li>
<CheckCircle />
<span>{feature</span>}</span>
>>>>>>> origin/main
                        </li>
                      ))}
                    </ul></div>
<div />
<h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits: </h4>,"
                    <ul>
                      {service.benefits.slice(0, 2).map((benefit, idx) => (} <li>
<TrendingUp>
<span>{benefit</span>}</span>
>>>>>>> origin/main
                        </li>
                      ))}
                    </ul></div>
</div>
<div className="space-y-2 mb-6 text-sm"></div>"
<div className="flex justify-between"></div>"
<span className="text-gray-400">Setup Time: </span>,"
                    <span className="text-white">{service.setupTime</span>}</span></div>"
<div className="flex justify-between"></div>"
<span className="text-gray-400">Free Consultation: </span>,"
                    <span className="text-green-400">{service.freeConsultation</span>}</span></div>"
<div className="flex justify-between"></div>"
<span className="text-gray-400">Target: </span>,"
                    <span className="text-white">{service.targetAudience</span>}</span></div>"
</div>
                {service.caseStudy && (;
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg"></div>} <p className="text-sm text-green-300 italic">"{service.caseStudy</p>}"</p></div>"
                )}
<div className="space-y-3"></div>"
<a>
                    Get Free Consultation;
                  </a>
<a>
<Phone>
                    Call for Quote;
                    Call for Quote
>>>>>>> origin/main
                  </a></div>
</div>
            ))}
          </div></div>
</section>
      {/* CTA Section */} <section className="py-20 px-4">"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-4xl font-bold text-white mb-4">Section Title</h2></a>"
</div></div>
</section></div>
  );
};
;
export default ITConsultingPage;
)))))))
>>>>>>> cursor/delete-records-a75e
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
};

export default ItConsultingPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
=======
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            It Consulting
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced it consulting solutions by Zion Tech Group.
          </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-5443
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-5443
