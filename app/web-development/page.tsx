import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Code, 
  Globe, 
  Smartphone, 
  Monitor,
  Database,
  Shield,
  Zap,
  Users,
  Clock,
  DollarSign,
  Award,
  Target,
  Settings,
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
  Cpu,
  Wifi,
  Battery,
  Camera,
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

const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      id: "frontend-development",
      name: "Frontend Development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      features: [
        "React & Next.js Development",
        "Responsive Design",
        "Progressive Web Apps",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "User Experience Design"
      ],
      icon: <Monitor className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "From $2,000/project"
    },
    {
      id: "backend-development",
      name: "Backend Development",
      description: "Robust server-side solutions and APIs for scalable applications",
      features: [
        "Node.js & Express",
        "Database Design & Integration",
        "RESTful & GraphQL APIs",
        "Authentication & Security",
        "Cloud Deployment",
        "Microservices Architecture"
      ],
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      price: "From $3,000/project"
    },
    {
      id: "full-stack-development",
      name: "Full-Stack Development",
      description: "Complete web solutions from frontend to backend and everything in between",
      features: [
        "End-to-End Development",
        "Database Architecture",
        "API Development",
        "DevOps & Deployment",
        "Testing & Quality Assurance",
        "Maintenance & Support"
      ],
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "From $5,000/project"
    },
    {
      id: "e-commerce-development",
      name: "E-commerce Development",
      description: "Custom e-commerce platforms and online store solutions",
      features: [
        "Custom E-commerce Platforms",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing",
        "Customer Management",
        "Analytics & Reporting"
      ],
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      price: "From $4,000/project"
    },
    {
      id: "mobile-web-development",
      name: "Mobile Web Development",
      description: "Mobile-optimized web applications and responsive designs",
      features: [
        "Mobile-First Design",
        "Progressive Web Apps",
        "Touch Optimization",
        "Offline Functionality",
        "Push Notifications",
        "App-like Experience"
      ],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "From $2,500/project"
    },
    {
      id: "web-optimization",
      name: "Web Optimization",
      description: "Performance optimization and SEO enhancement for existing websites",
      features: [
        "Performance Optimization",
        "SEO Enhancement",
        "Speed Optimization",
        "Security Hardening",
        "Code Refactoring",
        "Analytics Integration"
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      price: "From $1,500/project"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Services - Custom Web Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional web development services including frontend, backend, full-stack, e-commerce, and mobile web solutions. Custom websites built with modern technologies." />
        <meta name="keywords" content="web development, frontend development, backend development, full-stack development, e-commerce development, mobile web development, web optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Web Development Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ideas into powerful web applications with our comprehensive web development services. From frontend to backend, we build solutions that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                  Start Your Project
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
                Our Web Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of web development services designed to meet your specific needs.
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
              Ready to Build Your Next Web Application?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert developers bring your vision to life with cutting-edge web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                Get Started Today
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

export default WebDevelopmentPage;