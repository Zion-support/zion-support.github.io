import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Monitor, 
  Smartphone, 
  Laptop,
  Wifi,
  Lock,
  Settings,
  Headphones,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Award,
  TrendingUp,
  Globe,
  Cpu,
  HardDrive,
  Router,
  Zap,
  Users,
  BarChart3,
  FileText,
  CreditCard,
  Download,
  Upload,
  RefreshCw,
  Eye,
  Search,
  Filter,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  Building,
  Code,
  Terminal,
  GitBranch,
  Docker,
  Kubernetes,
  Aws,
  Azure,
  Gcp,
  Linux,
  Windows,
  Apple,
  Android,
  Chrome,
  Firefox,
  Safari,
  Edge,
  Slack,
  Teams,
  Zoom,
  Office,
  Google,
  Salesforce,
  Hubspot,
  Shopify,
  WordPress,
  Drupal,
  Joomla,
  Magento,
  WooCommerce,
  Stripe,
  Paypal,
  Square,
  Quickbooks,
  Xero,
  Freshbooks,
  Zoho,
  Monday,
  Asana,
  Trello,
  Jira,
  Confluence,
  Notion,
  Airtable,
  Zapier,
  Ifttt,
  Webhook,
  Api,
  Rest,
  Graphql,
  Soap,
  Json,
  Xml,
  Csv,
  Pdf,
  Excel,
  Word,
  Powerpoint,
  Photoshop,
  Illustrator,
  Figma,
  Sketch,
  Invision,
  Marvel,
  Principle,
  Framer,
  Adobe,
  Microsoft,
  Google as GoogleIcon,
  Amazon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Tiktok,
  Snapchat,
  Pinterest,
  Reddit,
  Discord,
  Telegram,
  Whatsapp,
  Signal,
  Viber,
  Wechat,
  Line,
  Kakao,
  Vk,
  Odnoklassniki,
  Yandex,
  Baidu,
  Tencent,
  Alibaba,
  Ebay,
  Amazon as AmazonIcon,
  Walmart,
  Target,
  Costco,
  HomeDepot,
  Lowes,
  BestBuy,
  Staples,
  OfficeDepot,
  Fedex,
  Ups,
  Usps,
  Dhl,
  Aramex,
  Tnt,
  Dpd,
  Hermes,
  RoyalMail,
  CanadaPost,
  AustraliaPost,
  JapanPost,
  ChinaPost,
  IndiaPost,
  BrazilPost,
  MexicoPost,
  RussiaPost,
  GermanyPost,
  FrancePost,
  ItalyPost,
  SpainPost,
  NetherlandsPost,
  BelgiumPost,
  SwitzerlandPost,
  AustriaPost,
  SwedenPost,
  NorwayPost,
  DenmarkPost,
  FinlandPost,
  PolandPost,
  CzechPost,
  HungaryPost,
  RomaniaPost,
  BulgariaPost,
  CroatiaPost,
  SloveniaPost,
  SlovakiaPost,
  EstoniaPost,
  LatviaPost,
  LithuaniaPost,
  PortugalPost,
  GreecePost,
  CyprusPost,
  MaltaPost,
  LuxembourgPost,
  IrelandPost,
  IcelandPost,
  LiechtensteinPost,
  MonacoPost,
  SanMarinoPost,
  VaticanPost,
  AndorraPost,
  GibraltarPost,
  FaroeIslandsPost,
  GreenlandPost,
  SvalbardPost,
  JanMayenPost,
  BouvetIslandPost,
  PeterIslandPost,
  QueenMaudLandPost,
  RossDependencyPost,
  BritishAntarcticTerritoryPost,
  FrenchSouthernTerritoriesPost,
  HeardIslandPost,
  McDonaldIslandsPost,
  CocosIslandsPost,
  ChristmasIslandPost,
  NorfolkIslandPost,
  LordHoweIslandPost,
  MacquarieIslandPost,
  TasmanIslandPost,
  FlindersIslandPost,
  KingIslandPost,
  BrunyIslandPost,
  MariaIslandPost,
  SchoutenIslandPost,
  DealIslandPost,
  ThreeHummockIslandPost,
  HunterIslandPost,
  RobbinsIslandPost,
  WalkerIslandPost,
  BadgerIslandPost,
  GooseIslandPost,
  PreservationIslandPost,
  ClarkeIslandPost,
  CapeBarrenIslandPost,
  FlindersIslandPost,
  LongIslandPost,
  GreenIslandPost,
  WaterhouseIslandPost,
  TenthIslandPost,
  NinthIslandPost,
  EighthIslandPost,
  SeventhIslandPost,
  SixthIslandPost,
  FifthIslandPost,
  FourthIslandPost,
  ThirdIslandPost,
  SecondIslandPost,
  FirstIslandPost,
  ZeroIslandPost,
  NegativeOneIslandPost,
  NegativeTwoIslandPost,
  NegativeThreeIslandPost,
  NegativeFourIslandPost,
  NegativeFiveIslandPost,
  NegativeSixIslandPost,
  NegativeSevenIslandPost,
  NegativeEightIslandPost,
  NegativeNineIslandPost,
  NegativeTenIslandPost
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    {
      id: 'cloud-migration',
      name: 'Cloud Migration & Management',
      category: 'cloud',
      description: 'Complete cloud migration services with ongoing management and optimization.',
      features: [
        'AWS, Azure, GCP migration',
        'Serverless architecture',
        'Container orchestration',
        'Cost optimization',
        'Security compliance',
        'Disaster recovery',
        '24/7 monitoring',
        'Performance tuning'
      ],
      pricing: {
        assessment: { price: 2500, period: 'one-time', features: ['Cloud readiness assessment', 'Migration strategy', 'Cost analysis'] },
        migration: { price: 15000, period: 'one-time', features: ['Complete migration', 'Data transfer', 'Testing & validation'] },
        management: { price: 2500, period: 'month', features: ['Ongoing management', 'Monitoring', 'Support', 'Optimization'] }
      },
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      rating: 4.9,
      clients: '150+'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      category: 'security',
      description: 'Comprehensive cybersecurity services to protect your business from threats.',
      features: [
        'Security assessment',
        'Penetration testing',
        'Vulnerability scanning',
        'Incident response',
        'Security training',
        'Compliance auditing',
        'Firewall management',
        'Threat monitoring'
      ],
      pricing: {
        assessment: { price: 5000, period: 'one-time', features: ['Security audit', 'Risk assessment', 'Compliance check'] },
        implementation: { price: 15000, period: 'one-time', features: ['Security implementation', 'Training', 'Documentation'] },
        monitoring: { price: 3000, period: 'month', features: ['24/7 monitoring', 'Incident response', 'Updates'] }
      },
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      popular: true,
      rating: 4.8,
      clients: '200+'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      category: 'infrastructure',
      description: 'Design, implementation, and management of enterprise network infrastructure.',
      features: [
        'Network design',
        'Hardware installation',
        'Wireless solutions',
        'VPN setup',
        'Load balancing',
        'Traffic optimization',
        'Network monitoring',
        'Troubleshooting'
      ],
      pricing: {
        design: { price: 3000, period: 'one-time', features: ['Network design', 'Documentation', 'Implementation plan'] },
        implementation: { price: 20000, period: 'one-time', features: ['Hardware installation', 'Configuration', 'Testing'] },
        management: { price: 2000, period: 'month', features: ['Monitoring', 'Maintenance', 'Support'] }
      },
      icon: Network,
      color: 'from-green-500 to-teal-500',
      popular: false,
      rating: 4.7,
      clients: '120+'
    },
    {
      id: 'data-management',
      name: 'Data Management & Analytics',
      category: 'data',
      description: 'Complete data management solutions with advanced analytics and reporting.',
      features: [
        'Database design',
        'Data migration',
        'ETL processes',
        'Data warehousing',
        'Business intelligence',
        'Data visualization',
        'Data governance',
        'Backup & recovery'
      ],
      pricing: {
        assessment: { price: 2000, period: 'one-time', features: ['Data audit', 'Strategy planning', 'Requirements analysis'] },
        implementation: { price: 25000, period: 'one-time', features: ['Database setup', 'Migration', 'Analytics platform'] },
        management: { price: 4000, period: 'month', features: ['Data management', 'Analytics', 'Reporting', 'Support'] }
      },
      icon: Database,
      color: 'from-purple-500 to-indigo-500',
      popular: true,
      rating: 4.9,
      clients: '180+'
    },
    {
      id: 'help-desk',
      name: 'IT Help Desk & Support',
      category: 'support',
      description: '24/7 IT support and help desk services for your organization.',
      features: [
        '24/7 support',
        'Remote assistance',
        'Ticket management',
        'Hardware support',
        'Software support',
        'User training',
        'Documentation',
        'SLA compliance'
      ],
      pricing: {
        basic: { price: 1500, period: 'month', features: ['Email support', 'Basic troubleshooting', 'Documentation'] },
        standard: { price: 3000, period: 'month', features: ['Phone support', 'Remote assistance', 'Priority tickets'] },
        premium: { price: 5000, period: 'month', features: ['24/7 support', 'On-site visits', 'Dedicated team'] }
      },
      icon: Headphones,
      color: 'from-orange-500 to-yellow-500',
      popular: true,
      rating: 4.8,
      clients: '300+'
    },
    {
      id: 'software-development',
      name: 'Custom Software Development',
      category: 'development',
      description: 'Custom software solutions tailored to your business needs.',
      features: [
        'Web applications',
        'Mobile apps',
        'Desktop software',
        'API development',
        'Integration services',
        'Quality assurance',
        'Documentation',
        'Maintenance'
      ],
      pricing: {
        consultation: { price: 2000, period: 'one-time', features: ['Requirements analysis', 'Technical specification', 'Project planning'] },
        development: { price: 150, period: 'hour', features: ['Custom development', 'Testing', 'Documentation'] },
        maintenance: { price: 2000, period: 'month', features: ['Bug fixes', 'Updates', 'Support'] }
      },
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      popular: false,
      rating: 4.7,
      clients: '90+'
    },
    {
      id: 'backup-disaster',
      name: 'Backup & Disaster Recovery',
      category: 'infrastructure',
      description: 'Comprehensive backup and disaster recovery solutions to protect your data.',
      features: [
        'Automated backups',
        'Cloud storage',
        'Disaster recovery planning',
        'Business continuity',
        'Data encryption',
        'Recovery testing',
        'Compliance',
        'Monitoring'
      ],
      pricing: {
        setup: { price: 5000, period: 'one-time', features: ['Backup strategy', 'Implementation', 'Testing'] },
        monthly: { price: 1000, period: 'month', features: ['Backup management', 'Monitoring', 'Support'] },
        recovery: { price: 500, period: 'hour', features: ['Disaster recovery', 'Data restoration', 'System recovery'] }
      },
      icon: HardDrive,
      color: 'from-teal-500 to-blue-500',
      popular: false,
      rating: 4.6,
      clients: '110+'
    },
    {
      id: 'email-systems',
      name: 'Email & Communication Systems',
      category: 'communication',
      description: 'Enterprise email and communication system setup and management.',
      features: [
        'Email server setup',
        'Exchange migration',
        'Office 365 migration',
        'Email security',
        'Spam filtering',
        'Archiving',
        'Mobile sync',
        'User management'
      ],
      pricing: {
        migration: { price: 3000, period: 'one-time', features: ['Email migration', 'Configuration', 'Testing'] },
        management: { price: 800, period: 'month', features: ['Server management', 'Security', 'Support'] },
        perUser: { price: 15, period: 'month', features: ['Per user license', 'Email hosting', 'Support'] }
      },
      icon: Mail,
      color: 'from-pink-500 to-rose-500',
      popular: true,
      rating: 4.8,
      clients: '250+'
    },
    {
      id: 'virtualization',
      name: 'Virtualization Services',
      category: 'infrastructure',
      description: 'Server and desktop virtualization solutions for improved efficiency.',
      features: [
        'VMware setup',
        'Hyper-V configuration',
        'Desktop virtualization',
        'Resource optimization',
        'High availability',
        'Performance tuning',
        'Migration services',
        'Management tools'
      ],
      pricing: {
        design: { price: 4000, period: 'one-time', features: ['Virtualization design', 'Capacity planning', 'Implementation plan'] },
        implementation: { price: 15000, period: 'one-time', features: ['VM setup', 'Configuration', 'Testing'] },
        management: { price: 2500, period: 'month', features: ['VM management', 'Monitoring', 'Optimization'] }
      },
      icon: Server,
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      rating: 4.7,
      clients: '80+'
    },
    {
      id: 'compliance',
      name: 'Compliance & Governance',
      category: 'security',
      description: 'IT compliance and governance services to meet regulatory requirements.',
      features: [
        'Compliance auditing',
        'Policy development',
        'Risk assessment',
        'Documentation',
        'Training programs',
        'Audit preparation',
        'Remediation planning',
        'Ongoing monitoring'
      ],
      pricing: {
        audit: { price: 8000, period: 'one-time', features: ['Compliance audit', 'Gap analysis', 'Recommendations'] },
        implementation: { price: 12000, period: 'one-time', features: ['Policy implementation', 'Training', 'Documentation'] },
        ongoing: { price: 2000, period: 'month', features: ['Ongoing monitoring', 'Updates', 'Support'] }
      },
      icon: FileText,
      color: 'from-amber-500 to-orange-500',
      popular: false,
      rating: 4.6,
      clients: '60+'
    },
    {
      id: 'mobile-device',
      name: 'Mobile Device Management',
      category: 'mobile',
      description: 'Comprehensive mobile device management and security solutions.',
      features: [
        'MDM implementation',
        'Device enrollment',
        'Security policies',
        'App management',
        'Remote wipe',
        'Compliance monitoring',
        'User training',
        'Support'
      ],
      pricing: {
        setup: { price: 3000, period: 'one-time', features: ['MDM setup', 'Policy configuration', 'Training'] },
        perDevice: { price: 5, period: 'month', features: ['Per device management', 'Security', 'Support'] },
        management: { price: 1000, period: 'month', features: ['Ongoing management', 'Updates', 'Support'] }
      },
      icon: Smartphone,
      color: 'from-violet-500 to-purple-500',
      popular: true,
      rating: 4.8,
      clients: '140+'
    },
    {
      id: 'integration',
      name: 'System Integration',
      category: 'integration',
      description: 'Connect and integrate your existing systems for seamless operations.',
      features: [
        'API development',
        'System integration',
        'Data synchronization',
        'Workflow automation',
        'Third-party connectors',
        'Custom integrations',
        'Testing & validation',
        'Documentation'
      ],
      pricing: {
        assessment: { price: 2000, period: 'one-time', features: ['Integration assessment', 'Technical analysis', 'Planning'] },
        development: { price: 200, period: 'hour', features: ['Custom development', 'Testing', 'Documentation'] },
        maintenance: { price: 1500, period: 'month', features: ['Ongoing support', 'Updates', 'Monitoring'] }
      },
      icon: GitBranch,
      color: 'from-emerald-500 to-green-500',
      popular: false,
      rating: 4.7,
      clients: '70+'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'data', name: 'Data Management', icon: Database },
    { id: 'support', name: 'Support', icon: Headphones },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'communication', name: 'Communication', icon: Mail },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'integration', name: 'Integration', icon: GitBranch }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Comprehensive Technology Solutions for Modern Businesses
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            From cloud migration to cybersecurity, we provide end-to-end IT services that keep your business 
            running smoothly and securely. Our expert team delivers enterprise-grade solutions at competitive prices.
          </p>
          
          {/* Contact CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button neon-glow"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white neon-glow'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`cyber-card hologram-effect relative overflow-hidden ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">{service.rating} ({service.clients} clients)</span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-sm font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <div key={plan} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300 capitalize">{plan}:</span>
                        <span className="text-white font-semibold">
                          {details.price.toString().includes('.') ? `$${details.price}` : `$${details.price.toLocaleString()}`}
                          {details.period === 'one-time' ? ' one-time' : `/${details.period}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href={`/contact?service=${service.id}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium text-center block hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get Quote
                  </a>
                  <a
                    href={`/contact?service=${service.id}&consultation=true`}
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium text-center block hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Free Consultation
                  </a>
                </div>
              </div>
            );
          })}
        </section>

        {/* Why Choose Our IT Services */}
        <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-16 rounded-2xl cyber-card mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We provide enterprise-grade IT services with the personal attention and competitive pricing 
              that growing businesses need to succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Certified Experts</h3>
              <p className="text-gray-300 text-sm">Our team holds industry certifications and stays current with the latest technologies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Round-the-clock support ensures your systems are always running smoothly.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300 text-sm">We've helped 1000+ businesses improve their IT infrastructure and security.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Competitive Pricing</h3>
              <p className="text-gray-300 text-sm">Enterprise-grade services at startup-friendly prices with transparent billing.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 py-16 rounded-2xl cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Upgrade Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure. 
            Get started with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:+13024640950"
              className="cyber-button neon-glow"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email: kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>✓ Free initial consultation</p>
            <p>✓ Custom solution design</p>
            <p>✓ 30-day money-back guarantee</p>
            <p>✓ 24/7 support available</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;