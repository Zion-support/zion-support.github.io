import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Clock, 
  Smartphone, 
  Mail,
  FileText,
  BarChart3,
  Database,
  Target,
  TrendingUp,
  Settings,
  Lock,
  Cloud,
  Cpu,
  Layers,
  Workflow,
  PieChart,
  Activity,
  Zap as Lightning,
  Eye,
  MessageSquare,
  Calendar,
  DollarSign,
  Headphones,
  HelpCircle,
  ChevronRight,
  ExternalLink,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Camera,
  CameraOff,
  Image,
  File,
  Folder,
  FolderOpen,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  MoreHorizontal,
  MoreVertical,
  Plus,
  Minus,
  X,
  Edit,
  Trash2,
  Copy,
  Share,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  AlertTriangle,
  Info,
  Check,
  AlertCircle,
  XCircle,
  PlusCircle,
  MinusCircle,
  XSquare,
  CheckSquare,
  Square,
  Circle,
  Dot,
  Line,
  Square as SquareIcon,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Diamond,
  Star as StarIcon,
  Heart as HeartIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  ArrowRight as ArrowRightIcon,
  CheckCircle as CheckCircleIcon,
  Users as UsersIcon,
  Award as AwardIcon,
  Clock as ClockIcon,
  Smartphone as SmartphoneIcon,
  Mail as MailIcon,
  FileText as FileTextIcon,
  BarChart3 as BarChart3Icon,
  Database as DatabaseIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Settings as SettingsIcon,
  Lock as LockIcon,
  Cloud as CloudIcon,
  Cpu as CpuIcon,
  Layers as LayersIcon,
  Workflow as WorkflowIcon,
  PieChart as PieChartIcon,
  Activity as ActivityIcon,
  Eye as EyeIcon,
  MessageSquare as MessageSquareIcon,
  Calendar as CalendarIcon,
  DollarSign as DollarSignIcon,
  Headphones as HeadphonesIcon,
  HelpCircle as HelpCircleIcon,
  ChevronRight as ChevronRightIcon,
  ExternalLink as ExternalLinkIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  RefreshCw as RefreshCwIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipForward as SkipForwardIcon,
  SkipBack as SkipBackIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Video as VideoIcon,
  VideoOff as VideoOffIcon,
  Camera as CameraIcon,
  CameraOff as CameraOffIcon,
  Image as ImageIcon,
  File as FileIcon,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  SortAsc as SortAscIcon,
  SortDesc as SortDescIcon,
  Grid as GridIcon,
  List as ListIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  Copy as CopyIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  Flag as FlagIcon,
  AlertTriangle as AlertTriangleIcon,
  Info as InfoIcon,
  Check as CheckIcon,
  AlertCircle as AlertCircleIcon,
  XCircle as XCircleIcon,
  PlusCircle as PlusCircleIcon,
  MinusCircle as MinusCircleIcon,
  XSquare as XSquareIcon,
  CheckSquare as CheckSquareIcon,
  Square as SquareIcon,
  Circle as CircleIcon,
  Dot as DotIcon,
  Line as LineIcon,
  Triangle as TriangleIcon,
  Hexagon as HexagonIcon,
  Octagon as OctagonIcon,
  Pentagon as PentagonIcon,
  Diamond as DiamondIcon
} from 'lucide-react';

const MicroSaasPage = () => {
  const services = [
    {
      name: "Zion AI Analytics Pro",
      description: "Advanced analytics platform with AI-powered insights and real-time reporting",
      price: "$99/month",
      features: ["AI-powered insights", "Real-time dashboards", "Custom reports", "Data visualization", "Predictive analytics"],
      icon: <Brain className="w-8 h-8" />,
      href: "/zion-ai-analytics-pro",
      popular: true
    },
    {
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI automation",
      features: ["Lead scoring", "Automated follow-ups", "Sales forecasting", "Customer insights"],
      price: "$149/month",
      icon: <Users className="w-8 h-8" />,
      href: "/zion-ai-crm-pro",
      popular: false
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-driven project management with intelligent task allocation and progress tracking",
      features: ["AI task allocation", "Progress tracking", "Team collaboration", "Resource optimization"],
      price: "$199/month",
      icon: <Award className="w-8 h-8" />,
      href: "/zion-ai-project-manager-pro"
    }
  ];

  const benefits = [
    {
      title: "AI-Powered Automation",
      description: "Leverage cutting-edge AI to automate complex business processes",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Cloud-Based Access",
      description: "Access your tools from anywhere in the world, anytime",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Start small and scale as your business grows",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, AI-driven micro SAAS tools designed to streamline your business operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered micro SAAS tools designed for modern businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-cyan-400 mr-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">
                    {service.price}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.href}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven automation with our comprehensive micro SAAS platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get started with our micro SAAS solutions today and experience the power of AI-driven automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="/consultation"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Schedule Consultation
              <Calendar className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;