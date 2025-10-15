import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  SignalIcon,
  DatabaseIcon,
  LockClosedIcon,
  KeyIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
  StarIcon,
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

const MicroSaasSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Intelligent analytics platform that provides real-time insights and predictive analytics for your business data.",
      icon: ChartBarIcon,
      features: [
        "Real-time data visualization",
        "Predictive analytics",
        "Custom dashboard creation",
        "Automated reporting",
        "Data integration",
        "Mobile-responsive design"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      benefits: ["Data-driven insights", "Easy setup", "Scalable"],
      useCases: ["Business intelligence", "Performance tracking", "Decision making"],
      href: "/micro-saas/analytics-dashboard"
    },
    {
      title: "Customer Relationship Management",
      description: "Streamlined CRM solution designed for small to medium businesses with advanced automation features.",
      icon: UserGroupIcon,
      features: [
        "Contact management",
        "Sales pipeline tracking",
        "Email automation",
        "Task scheduling",
        "Reporting and analytics",
        "Integration capabilities"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $199/month",
      benefits: ["Improved sales", "Better organization", "Time saving"],
      useCases: ["Sales management", "Customer service", "Lead tracking"],
      href: "/micro-saas/crm-solution"
    },
    {
      title: "Project Management Tool",
      description: "Comprehensive project management platform with team collaboration and progress tracking features.",
      icon: ClipboardDocumentListIcon,
      features: [
        "Task management",
        "Team collaboration",
        "Progress tracking",
        "File sharing",
        "Time tracking",
        "Gantt charts"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $149/month",
      benefits: ["Better productivity", "Team coordination", "Project visibility"],
      useCases: ["Project planning", "Team management", "Progress monitoring"],
      href: "/micro-saas/project-management"
    },
    {
      title: "E-commerce Analytics",
      description: "Advanced analytics solution for e-commerce businesses to track sales, customer behavior, and performance.",
      icon: ShoppingCartIcon,
      features: [
        "Sales tracking",
        "Customer analytics",
        "Inventory management",
        "Conversion optimization",
        "Revenue forecasting",
        "A/B testing"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $249/month",
      benefits: ["Increased sales", "Better insights", "Optimized performance"],
      useCases: ["Online retail", "Sales optimization", "Customer analysis"],
      href: "/micro-saas/ecommerce-analytics"
    },
    {
      title: "Social Media Management",
      description: "All-in-one social media management platform for scheduling, monitoring, and analyzing social media presence.",
      icon: ShareIcon,
      features: [
        "Content scheduling",
        "Social media monitoring",
        "Engagement analytics",
        "Multi-platform support",
        "Content calendar",
        "Team collaboration"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $179/month",
      benefits: ["Time saving", "Better engagement", "Unified management"],
      useCases: ["Social media marketing", "Brand management", "Content planning"],
      href: "/micro-saas/social-media-management"
    },
    {
      title: "Financial Tracking System",
      description: "Comprehensive financial management solution for tracking expenses, revenue, and financial health.",
      icon: CurrencyDollarIcon,
      features: [
        "Expense tracking",
        "Revenue monitoring",
        "Financial reporting",
        "Budget planning",
        "Tax preparation",
        "Investment tracking"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $129/month",
      benefits: ["Financial clarity", "Better budgeting", "Tax ready"],
      useCases: ["Personal finance", "Small business", "Financial planning"],
      href: "/micro-saas/financial-tracking"
    }
  ];

  const industries = [
    {
      name: "Startups",
      description: "Scalable solutions designed for growing startups and new businesses.",
      icon: "🚀",
      solutions: ["Rapid deployment", "Cost-effective", "Scalable growth"]
    },
    {
      name: "Small Business",
      description: "Affordable solutions tailored for small businesses and entrepreneurs.",
      icon: "🏪",
      solutions: ["Easy setup", "Low cost", "Essential features"]
    },
    {
      name: "Freelancers",
      description: "Professional tools for freelancers and independent contractors.",
      icon: "💼",
      solutions: ["Client management", "Time tracking", "Invoicing"]
    },
    {
      name: "Agencies",
      description: "Advanced solutions for marketing agencies and service providers.",
      icon: "🎯",
      solutions: ["Client portals", "Project management", "Reporting"]
    }
  ];

  const stats = [
    { number: "100+", label: "Micro-SaaS Solutions" },
    { number: "95%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "30+", label: "Integrations" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro-SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized micro-SaaS solutions including analytics dashboards, CRM systems, project management tools, and more for businesses of all sizes." />
        <meta name="keywords" content="micro-saas, SaaS solutions, business software, analytics, CRM, project management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro-SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Specialized software solutions designed to solve specific business challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/case-studies"
                className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors"
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
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
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

      {/* Micro-SaaS Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Micro-SaaS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized software solutions designed to address specific business needs and challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
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
                    <span className="text-2xl font-bold text-purple-600">
                      {service.price}
                    </span>
                  </div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
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
              Perfect For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our micro-SaaS solutions are designed for businesses of all sizes and types
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
                    <div key={idx} className="text-sm text-purple-600">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Micro-SaaS Solution?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let our experts help you create the perfect specialized software solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Building
            </Link>
            <Link
              to="/micro-saas-solutions/consultation"
              className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasSolutionsPage;