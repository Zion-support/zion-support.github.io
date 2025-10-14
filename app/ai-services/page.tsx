import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Award,
  Cloud,
  Code,
  Database,
  Mail,
  Clock,
  DollarSign,
  Globe,
  Lock,
  Settings,
  Target,
  TrendingUp,
  Cpu,
  Monitor,
  FileText,
  MessageSquare,
  Calendar,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bell,
  Eye,
  Heart,
  ThumbsUp,
  Rocket,
  Headphones,
  Mic,
  Video,
  Image,
  Music,
  BookOpen,
  Lightbulb,
  Puzzle,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Gift,
  Tag,
  Percent,
  Calculator,
  PieChart,
  LineChart,
  Activity,
  Layers,
  Grid,
  List,
  Map,
  Compass,
  Navigation,
  Globe2,
  WifiOff,
  Signal,
  Bluetooth,
  Usb,
  HardDrive,
  MemoryStick,
  Printer,
  Scanner,
  Fax,
  Phone,
  Voicemail,
  Headset,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Hourglass
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      id: "ai-analytics",
      name: "AI Analytics",
      description: "Advanced data analytics powered by artificial intelligence for deeper insights and better decision making",
      features: [
        "Predictive Analytics",
        "Real-time Data Processing",
        "Machine Learning Models",
        "Custom Dashboards",
        "Automated Reporting",
        "Data Visualization"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "From $2,500/month"
    },
    {
      id: "ai-automation",
      name: "AI Automation",
      description: "Intelligent automation solutions that streamline business processes and reduce manual work",
      features: [
        "Workflow Automation",
        "Process Optimization",
        "Smart Scheduling",
        "Task Management",
        "Resource Allocation",
        "Performance Monitoring"
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "From $1,800/month"
    },
    {
      id: "ai-content-generation",
      name: "AI Content Generation",
      description: "Create high-quality content at scale with AI-powered writing and content creation tools",
      features: [
        "Content Writing",
        "Blog Post Generation",
        "Social Media Content",
        "Email Marketing",
        "Product Descriptions",
        "SEO Optimization"
      ],
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      price: "From $1,200/month"
    },
    {
      id: "ai-customer-service",
      name: "AI Customer Service",
      description: "Enhance customer support with intelligent chatbots and automated customer service solutions",
      features: [
        "24/7 Chatbot Support",
        "Natural Language Processing",
        "Sentiment Analysis",
        "Ticket Management",
        "Knowledge Base",
        "Multi-language Support"
      ],
      icon: <Headphones className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      price: "From $2,000/month"
    },
    {
      id: "ai-cybersecurity",
      name: "AI Cybersecurity",
      description: "Protect your business with AI-powered security solutions and threat detection systems",
      features: [
        "Threat Detection",
        "Anomaly Detection",
        "Security Monitoring",
        "Incident Response",
        "Risk Assessment",
        "Compliance Management"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      price: "From $3,000/month"
    },
    {
      id: "ai-marketing",
      name: "AI Marketing",
      description: "Optimize your marketing campaigns with AI-driven insights and automated marketing tools",
      features: [
        "Campaign Optimization",
        "Customer Segmentation",
        "Personalization",
        "A/B Testing",
        "Lead Scoring",
        "ROI Analysis"
      ],
      icon: <Target className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "From $2,200/month"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including analytics, automation, content generation, customer service, cybersecurity, and marketing solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, content generation, customer service, cybersecurity, marketing AI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From analytics to automation, we provide comprehensive AI services to drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services designed to meet your specific business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{service.price}</span>
                    <Link
                      to={`/${service.id}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;