'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  DollarSign,
  Users,
  BarChart3,
  Clock,
  Star,
  TrendingUp,
  Lock,
  Cloud,
  Smartphone,
  Database,
  Code,
  Palette,
  Target,
  Rocket,
  Lightbulb,
  Settings,
  Monitor,
  Wifi,
  FileText,
  PieChart,
  MessageSquare,
  Calendar,
  Camera,
  Music,
  Video,
  ShoppingCart,
  CreditCard,
  Truck,
  Home,
  Car,
  Plane,
  Heart,
  BookOpen,
  Gamepad2,
  Headphones,
  Mic,
  Image,
  Download,
  Upload,
  Share2,
  Link,
  Copy,
  Edit,
  Trash2,
  Save,
  Search,
  Filter,
  Sort,
  RefreshCw,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Eye,
  EyeOff,
  Lock as LockIcon,
  Unlock,
  Key,
  Fingerprint,
  Shield as ShieldIcon,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info as InfoIcon,
  HelpCircle as HelpIcon,
  ExternalLink as ExternalLinkIcon,
  ChevronRight as ChevronRightIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  Grid as GridIcon,
  List as ListIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Lock as LockIcon2,
  Unlock as UnlockIcon,
  Key as KeyIcon,
  Fingerprint as FingerprintIcon,
  Shield as ShieldIcon2,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle2 as CheckCircle2Icon,
  XCircle as XCircleIcon,
  Server,
  HardDrive,
  Cpu,
  Network,
  Layers,
  Activity,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Atom,
  Microscope,
  FlaskConical,
  Dna,
  Stethoscope,
  Pill,
  Syringe,
  Heart as HeartIcon,
  Activity as ActivityIcon,
  Pulse,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  Tornado,
  Hurricane,
  Earthquake,
  Volcano,
  Mountain,
  TreePine,
  Leaf,
  Flower,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  PawPrint,
  Footprints,
  Tree,
  Sprout,
  Wheat,
  Apple,
  Carrot,
  Corn,
  Grape,
  Cherry,
  Strawberry,
  Banana,
  Orange,
  Lemon,
  Peach,
  Pear,
  Pineapple,
  Watermelon,
  Coconut,
  Avocado,
  Tomato,
  Potato,
  Onion,
  Garlic,
  Ginger,
  Pepper,
  Salt,
  Sugar,
  Coffee,
  Tea,
  Milk,
  Egg,
  Bread,
  Cheese,
  Meat,
  Fish as FishIcon,
  Shrimp,
  Lobster,
  Crab,
  Octopus,
  Squid,
  Snail,
  Butterfly,
  Bee,
  Ant,
  Spider,
  Scorpion,
  Snake,
  Lizard,
  Turtle,
  Frog,
  Tadpole,
  Salamander,
  Newt,
  Axolotl,
  Platypus,
  Kangaroo,
  Koala,
  Panda,
  Bear,
  Lion,
  Tiger,
  Leopard,
  Cheetah,
  Wolf,
  Fox,
  Raccoon,
  Skunk,
  Opossum,
  Squirrel,
  Chipmunk,
  Hamster,
  GuineaPig,
  Rabbit,
  Hare,
  Deer,
  Moose,
  Elk,
  Bison,
  Buffalo,
  Cow,
  Bull,
  Ox,
  Horse,
  Donkey,
  Mule,
  Zebra,
  Giraffe,
  Elephant,
  Rhinoceros,
  Hippopotamus,
  Pig,
  Sheep,
  Goat,
  Llama,
  Alpaca,
  Camel,
  Dromedary,
  Bactrian,
  Yak,
  Reindeer,
  Caribou,
  Elk as ElkIcon,
  Antelope,
  Gazelle,
  Impala,
  Springbok,
  Wildebeest,
  Gnu,
  Hartebeest,
  Topi,
  Waterbuck,
  Kudu,
  Eland,
  Oryx,
  Addax,
  Scimitar,
  Sable,
  Roan,
  Sitatunga,
  Lechwe,
  Puku,
  Redunca,
  Kob,
  Reedbuck,
  Duiker,
  Steenbok,
  Grysbok,
  Sharpe,
  Klipspringer,
  Oribi,
  Suni,
  Dik,
  DikDik,
  Madoqua,
  Neotragus,
  Oreotragus,
  Raphicerus,
  Sylvicapra,
  Cephalophus,
  Philantomba,
  Tragelaphus,
  Ammelaphus,
  Strepsiceros,
  Taurotragus,
  Tragelaphus as TragelaphusIcon,
  Boselaphus,
  Tetracerus,
  Antilope,
  Gazella,
  Eudorcas,
  Nanger,
  Litocranius,
  Ammodorcas,
  Procapra,
  Saiga,
  Pantholops,
  Capra,
  Ovis,
  Pseudois,
  Budorcas,
  Ovibos,
  Capricornis,
  Nemorhaedus,
  Rupicapra,
  Oreamnos,
  Hemitragus,
  Arabitragus,
  Ammotragus,
  Pseudois as PseudoisIcon,
  Ovis as OvisIcon,
  Capra as CapraIcon,
  Budorcas as BudorcasIcon,
  Ovibos as OvibosIcon,
  Capricornis as CapricornisIcon,
  Nemorhaedus as NemorhaedusIcon,
  Rupicapra as RupicapraIcon,
  Oreamnos as OreamnosIcon,
  Hemitragus as HemitragusIcon,
  Arabitragus as ArabitragusIcon,
  Ammotragus as AmmotragusIcon,
  Pseudois as PseudoisIcon2,
  Ovis as OvisIcon2,
  Capra as CapraIcon2,
  Budorcas as BudorcasIcon2,
  Ovibos as OvibosIcon2,
  Capricornis as CapricornisIcon2,
  Nemorhaedus as NemorhaedusIcon2,
  Rupicapra as RupicapraIcon2,
  Oreamnos as OreamnosIcon2,
  Hemitragus as HemitragusIcon2,
  Arabitragus as ArabitragusIcon2,
  Ammotragus as AmmotragusIcon2
} from 'lucide-react';

const ComprehensiveItServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Complete cloud migration solutions for seamless transition to AWS, Azure, and Google Cloud platforms.',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Data Migration', 'Application Migration'],
      pricing: '$5,000-50,000',
      category: 'Cloud Services',
      icon: Cloud,
      benefits: ['Scalable infrastructure', 'Cost optimization', 'Enhanced security', 'Improved performance'],
      marketPrice: '$8,000-100,000',
      link: 'https://ziontechgroup.com/cloud-migration',
      technology: 'Cloud Computing + DevOps'
    },
    {
      id: 'cybersecurity-audit',
      name: 'Cybersecurity Audit & Assessment',
      description: 'Comprehensive security assessment and penetration testing to identify vulnerabilities and strengthen defenses.',
      features: ['Penetration Testing', 'Vulnerability Assessment', 'Security Audit', 'Compliance Check', 'Risk Analysis'],
      pricing: '$3,000-25,000',
      category: 'Cybersecurity',
      icon: Shield,
      benefits: ['Identify vulnerabilities', 'Compliance assurance', 'Risk mitigation', 'Security enhancement'],
      marketPrice: '$5,000-50,000',
      link: 'https://ziontechgroup.com/cybersecurity-audit',
      technology: 'Cybersecurity + Penetration Testing'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure Design',
      description: 'Enterprise-grade network design, implementation, and optimization for maximum performance and security.',
      features: ['Network Design', 'Hardware Installation', 'Configuration', 'Monitoring', 'Maintenance'],
      pricing: '$2,500-30,000',
      category: 'Infrastructure',
      icon: Network,
      benefits: ['Optimized performance', 'Enhanced security', 'Scalable design', 'Reliable connectivity'],
      marketPrice: '$4,000-60,000',
      link: 'https://ziontechgroup.com/network-infrastructure',
      technology: 'Network Engineering + Security'
    },
    {
      id: 'database-optimization',
      name: 'Database Optimization & Management',
      description: 'Database performance tuning, optimization, and management for improved efficiency and reliability.',
      features: ['Performance Tuning', 'Query Optimization', 'Backup Solutions', 'Monitoring', 'Maintenance'],
      pricing: '$1,500-15,000',
      category: 'Database Services',
      icon: Database,
      benefits: ['Improved performance', 'Data integrity', 'Automated backups', 'Cost reduction'],
      marketPrice: '$2,500-30,000',
      link: 'https://ziontechgroup.com/database-optimization',
      technology: 'Database Administration + Performance Tuning'
    },
    {
      id: 'web-development',
      name: 'Custom Web Development',
      description: 'Full-stack web development services for modern, responsive, and scalable web applications.',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Database Design', 'Testing'],
      pricing: '$3,000-100,000',
      category: 'Development',
      icon: Code,
      benefits: ['Custom solutions', 'Modern technology', 'Responsive design', 'SEO optimization'],
      marketPrice: '$5,000-200,000',
      link: 'https://ziontechgroup.com/web-development',
      technology: 'Full-Stack Development + Modern Frameworks'
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android platforms.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization'],
      pricing: '$5,000-150,000',
      category: 'Mobile Development',
      icon: Smartphone,
      benefits: ['Native performance', 'Cross-platform compatibility', 'Modern UI/UX', 'App store optimization'],
      marketPrice: '$8,000-300,000',
      link: 'https://ziontechgroup.com/mobile-app-development',
      technology: 'Mobile Development + Cross-Platform'
    },
    {
      id: 'it-consulting',
      name: 'IT Strategy Consulting',
      description: 'Strategic IT consulting to align technology with business goals and optimize IT investments.',
      features: ['IT Strategy', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'ROI Analysis'],
      pricing: '$2,000-20,000',
      category: 'Consulting',
      icon: Lightbulb,
      benefits: ['Strategic alignment', 'Cost optimization', 'Digital transformation', 'Competitive advantage'],
      marketPrice: '$3,000-40,000',
      link: 'https://ziontechgroup.com/it-consulting',
      technology: 'IT Strategy + Digital Transformation'
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics & Business Intelligence',
      description: 'Advanced data analytics solutions to extract insights and drive data-driven business decisions.',
      features: ['Data Visualization', 'Predictive Analytics', 'Dashboard Creation', 'Data Mining', 'Reporting'],
      pricing: '$2,500-25,000',
      category: 'Analytics',
      icon: BarChart3,
      benefits: ['Data-driven insights', 'Predictive analytics', 'Visual dashboards', 'Business intelligence'],
      marketPrice: '$4,000-50,000',
      link: 'https://ziontechgroup.com/data-analytics',
      technology: 'Data Science + Business Intelligence'
    },
    {
      id: 'system-integration',
      name: 'System Integration Services',
      description: 'Seamless integration of disparate systems and applications for improved workflow and efficiency.',
      features: ['API Integration', 'Legacy System Integration', 'Third-party Integrations', 'Data Synchronization', 'Testing'],
      pricing: '$3,500-35,000',
      category: 'Integration',
      icon: Layers,
      benefits: ['Seamless integration', 'Improved workflow', 'Data consistency', 'Reduced manual work'],
      marketPrice: '$5,000-70,000',
      link: 'https://ziontechgroup.com/system-integration',
      technology: 'System Integration + API Development'
    },
    {
      id: 'it-support',
      name: '24/7 IT Support & Maintenance',
      description: 'Comprehensive IT support and maintenance services to ensure optimal system performance and uptime.',
      features: ['24/7 Support', 'Remote Monitoring', 'Preventive Maintenance', 'Issue Resolution', 'System Updates'],
      pricing: '$500-5,000/month',
      category: 'Support',
      icon: Settings,
      benefits: ['24/7 availability', 'Proactive monitoring', 'Quick resolution', 'Preventive maintenance'],
      marketPrice: '$800-10,000/month',
      link: 'https://ziontechgroup.com/it-support',
      technology: 'IT Support + Remote Monitoring'
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery & Backup Solutions',
      description: 'Comprehensive disaster recovery and backup solutions to protect critical business data and systems.',
      features: ['Backup Solutions', 'Disaster Recovery Planning', 'Data Replication', 'Recovery Testing', 'Monitoring'],
      pricing: '$2,000-20,000',
      category: 'Backup & Recovery',
      icon: HardDrive,
      benefits: ['Data protection', 'Business continuity', 'Quick recovery', 'Peace of mind'],
      marketPrice: '$3,000-40,000',
      link: 'https://ziontechgroup.com/disaster-recovery',
      technology: 'Backup Solutions + Disaster Recovery'
    },
    {
      id: 'server-management',
      name: 'Server Management & Administration',
      description: 'Complete server management services including setup, configuration, monitoring, and maintenance.',
      features: ['Server Setup', 'Configuration', 'Monitoring', 'Security Hardening', 'Performance Tuning'],
      pricing: '$1,000-10,000/month',
      category: 'Server Services',
      icon: Server,
      benefits: ['Optimized performance', 'Enhanced security', 'Proactive monitoring', 'Reduced downtime'],
      marketPrice: '$1,500-20,000/month',
      link: 'https://ziontechgroup.com/server-management',
      technology: 'Server Administration + Monitoring'
    }
  ];

  const categories = ['All', 'Cloud Services', 'Cybersecurity', 'Infrastructure', 'Database Services', 'Development', 'Mobile Development', 'Consulting', 'Analytics', 'Integration', 'Support', 'Backup & Recovery', 'Server Services'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Comprehensive IT Services | Zion Tech Group</title>
        <meta name="description" content="Complete IT services including cloud migration, cybersecurity, network infrastructure, web development, and 24/7 support solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, web development, mobile development, IT consulting, system integration" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              <span>Comprehensive IT</span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT solutions for modern businesses. From cloud migration to cybersecurity, web development to 24/7 support, 
              we provide end-to-end IT services that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Explore Services
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg">
                      <service.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <span className="text-sm text-purple-400 bg-purple-400/20 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{service.pricing}</div>
                    <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Technology Stack:</h4>
                  <span className="text-xs bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full">
                    {service.technology}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center flex items-center justify-center"
                  >
                    Learn More
                    <ExternalLink className="ml-2" size={16} />
                  </a>
                  <button className="px-4 py-2 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with our expert IT team to modernize your technology stack, enhance security, and drive business growth. 
              Contact us for a comprehensive IT assessment and customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Email Us
              </a>
            </div>
            <div className="mt-6 text-sm text-white/80">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveItServicesPage;
