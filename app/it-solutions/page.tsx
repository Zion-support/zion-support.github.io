import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ServerIcon,
  ShieldCheckIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  SignalIcon,
  DatabaseIcon,
  LockClosedIcon,
  KeyIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
  StarIcon,
  RocketLaunchIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  HeartIcon,
  TrophyIcon,
  GiftIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  PresentationChartLineIcon,
  BuildingOfficeIcon,
  HomeIcon,
  BriefcaseIcon,
  IdentificationIcon,
  CreditCardIcon,
  BanknotesIcon,
  ReceiptPercentIcon,
  ChartPieIcon,
  CurrencyDollarIcon as DollarIcon,
  CalculatorIcon,
  HandRaisedIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ExclamationCircleIcon,
  CheckIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  AdjustmentsHorizontalIcon,
  Cog6ToothIcon,
  WrenchScrewdriverIcon as WrenchIcon,
  PaintBrushIcon,
  PencilIcon,
  TrashIcon,
  ArchiveBoxIcon,
  FolderIcon,
  DocumentIcon,
  PhotoIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  HeadphonesIcon,
  DevicePhoneMobileIcon as MobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon as DesktopIcon,
  WifiIcon,
  LockIcon,
  UserIcon,
  UsersIcon,
  AwardIcon,
  TrophyIcon as TrophyIconAlt,
  TargetIcon,
  LightBulbIcon as BulbIcon,
  ClipboardIcon,
  CalendarIcon,
  MessageSquareIcon,
  ShareIcon,
  DownloadIcon,
  UploadIcon,
  EditIcon,
  Trash2Icon,
  PlusCircleIcon,
  MinusCircleIcon,
  CheckCircleIcon as CheckCircleIconAlt,
  XCircleIcon,
  PieChartIcon,
  LineChartIcon,
  TrendingDownIcon,
  CalculatorIcon as CalcIcon,
  CreditCardIcon as CardIcon,
  BanknoteIcon,
  WalletIcon,
  ReceiptIcon,
  ChartBarIcon as BarChartIcon,
  PercentIcon,
  CoinsIcon,
  Building2Icon,
  PiggyBankIcon,
  HandCoinsIcon,
  PenToolIcon,
  VideoIcon,
  HeadphonesIcon as HeadphoneIcon,
  SmartphoneIcon,
  TabletIcon,
  LaptopIcon,
  WifiIcon as WifiIconAlt,
  LockIcon as LockIconAlt,
  UserIcon as UserIconAlt,
  UsersIcon as UsersIconAlt,
  AwardIcon as AwardIconAlt,
  TrophyIcon as TrophyIconAlt2,
  TargetIcon as TargetIconAlt,
  LightBulbIcon as LightBulbIconAlt,
  ClipboardIcon as ClipboardIconAlt,
  CalendarIcon as CalendarIconAlt,
  MessageSquareIcon as MessageSquareIconAlt,
  Share2Icon,
  DownloadIcon as DownloadIconAlt,
  UploadIcon as UploadIconAlt,
  EditIcon as EditIconAlt,
  Trash2Icon as Trash2IconAlt,
  PlusIcon as PlusIconAlt,
  MinusIcon as MinusIconAlt,
  CheckIcon as CheckIconAlt,
  XIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      title: "Infrastructure Management",
      description: "Complete IT infrastructure setup, management, and optimization for your business needs.",
      icon: ServerIcon,
      features: [
        "Server setup and configuration",
        "Network infrastructure design",
        "Cloud migration services",
        "Performance monitoring",
        "Backup and disaster recovery",
        "24/7 technical support"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,500/month",
      benefits: ["99.9% uptime", "Scalable solutions", "Expert support"],
      useCases: ["Enterprise infrastructure", "Cloud migration", "System optimization"],
      href: "/it-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
      icon: ShieldCheckIcon,
      features: [
        "Security assessment and auditing",
        "Firewall configuration",
        "Intrusion detection systems",
        "Data encryption",
        "Security training",
        "Incident response"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $3,200/month",
      benefits: ["Advanced protection", "Compliance ready", "Real-time monitoring"],
      useCases: ["Data protection", "Compliance", "Threat prevention"],
      href: "/cybersecurity-solutions"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions to modernize your IT infrastructure and reduce operational costs.",
      icon: CloudIcon,
      features: [
        "Cloud strategy consulting",
        "Multi-cloud deployment",
        "Cloud security",
        "Cost optimization",
        "Migration services",
        "Cloud monitoring"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $1,800/month",
      benefits: ["Cost effective", "Highly scalable", "Global reach"],
      useCases: ["Digital transformation", "Cost reduction", "Scalability"],
      href: "/cloud-services"
    },
    {
      title: "Network Solutions",
      description: "Advanced networking solutions for seamless connectivity and optimal performance.",
      icon: GlobeAltIcon,
      features: [
        "Network design and implementation",
        "Wireless solutions",
        "VPN setup",
        "Network monitoring",
        "Bandwidth optimization",
        "Remote access solutions"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,200/month",
      benefits: ["High performance", "Secure connectivity", "Reliable service"],
      useCases: ["Remote work", "Branch connectivity", "Performance optimization"],
      href: "/network-solutions"
    },
    {
      title: "IT Support & Maintenance",
      description: "Comprehensive IT support services to keep your systems running smoothly and efficiently.",
      icon: CogIcon,
      features: [
        "24/7 technical support",
        "System maintenance",
        "Software updates",
        "Hardware repairs",
        "User training",
        "Help desk services"
      ],
      color: "from-orange-500 to-yellow-500",
      price: "Starting at $1,500/month",
      benefits: ["Quick response", "Expert technicians", "Proactive maintenance"],
      useCases: ["System reliability", "User support", "Preventive maintenance"],
      href: "/it-support"
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and operations.",
      icon: ChartBarIcon,
      features: [
        "Process automation",
        "Digital workflow design",
        "Legacy system modernization",
        "Data migration",
        "Change management",
        "Performance optimization"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $4,500/month",
      benefits: ["Increased efficiency", "Modern technology", "Competitive advantage"],
      useCases: ["Process improvement", "Technology upgrade", "Business growth"],
      href: "/digital-transformation"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant IT solutions for healthcare providers and medical facilities.",
      icon: "🏥",
      solutions: ["Electronic health records", "Telemedicine platforms", "Medical imaging systems"]
    },
    {
      name: "Finance",
      description: "Secure IT infrastructure for financial institutions and fintech companies.",
      icon: "💼",
      solutions: ["Banking systems", "Payment processing", "Risk management"]
    },
    {
      name: "Education",
      description: "Technology solutions for schools, universities, and educational institutions.",
      icon: "🎓",
      solutions: ["Learning management systems", "Student information systems", "Online learning platforms"]
    },
    {
      name: "Manufacturing",
      description: "Industrial IT solutions for manufacturing and production facilities.",
      icon: "🏭",
      solutions: ["Production monitoring", "Quality control systems", "Supply chain management"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Expert Technicians" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cybersecurity, cloud services, and digital transformation for businesses of all sizes." />
        <meta name="keywords" content="IT solutions, infrastructure management, cybersecurity, cloud services, digital transformation, IT support" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive IT Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your business with cutting-edge IT infrastructure and services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/case-studies"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete IT solutions designed to meet your business needs and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </span>
                  </div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized IT solutions tailored to meet the unique needs of various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {industry.description}
                </p>
                <div className="space-y-1">
                  {industry.solutions.map((solution, idx) => (
                    <div key={idx} className="text-sm text-blue-600">
                      • {solution}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let our experts help you implement the perfect IT solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              to="/it-solutions/consultation"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Free IT Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSolutionsPage;