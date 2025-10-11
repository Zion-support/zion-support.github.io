'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Smartphone,
  Database,
  Code,
  Settings,
  Target,
  Heart,
  Clock,
  Award,
  MessageSquare,
  FileText,
  Cpu,
  Eye,
  Mic,
  Lock,
  Wifi,
  Server,
  Package,
  Monitor,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  RefreshCw,
  RefreshCcw,
  Download,
  Upload,
  Share,
  Copy,
  Cut,
  Paste,
  Save,
  Trash2,
  Edit,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ChevronsDown,
  ChevronsUp,
  ChevronsLeft,
  ChevronsRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  ArrowDownRight,
  ArrowUpLeft,
  ArrowDownLeft,
  Move,
  Move3D,
  Rotate3D,
  Scale,
  Crop,
  Focus,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Sad,
  Wink,
  Kiss,
  Tongue,
  Eye as EyeIcon,
  EyeOff,
  Ear,
  Nose,
  Mouth,
  Hand,
  Fingerprint,
  User,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  Users as UsersIcon,
  UserCircle,
  UserSquare,
  Crown,
  Award as AwardIcon,
  Medal,
  Trophy,
  Gift,
  Present,
  Box,
  Package as PackageIcon,
  Archive,
  Folder,
  FolderOpen,
  File,
  FileText as FileTextIcon,
  FileImage,
  FileVideo,
  FileAudio,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileCode,
  FileJson,
  FileXml,
  FileCsv,
  FileZip,
  FileArchive,
  FileCheck,
  FileX,
  FilePlus,
  FileMinus,
  FileEdit,
  FileSearch,
  FileDownload,
  FileUpload,
  FileShare,
  FileCopy,
  FileMove,
  FileTrash,
  FileLock,
  FileUnlock,
  FileSettings,
  FileInfo,
  FileWarning,
  FileAlert,
  FileQuestion,
  FileHeart,
  FileStar,
  FileBookmark,
  FileTag,
  FileLabel,
  FileFolder,
  FileFolderOpen,
  FileFolderPlus,
  FileFolderMinus,
  FileFolderEdit,
  FileFolderSearch,
  FileFolderDownload,
  FileFolderUpload,
  FileFolderShare,
  FileFolderCopy,
  FileFolderMove,
  FileFolderTrash,
  FileFolderLock,
  FileFolderUnlock,
  FileFolderSettings,
  FileFolderInfo,
  FileFolderWarning,
  FileFolderAlert,
  FileFolderQuestion,
  FileFolderHeart,
  FileFolderStar,
  FileFolderBookmark,
  FileFolderTag,
  FileFolderLabel
} from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300% and reduced costs by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Systems",
      role: "CTO",
      content: "The micro SAAS solutions provided by Zion Tech Group are game-changers. We've seen a 250% increase in customer satisfaction.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "CloudFirst Corp",
      role: "Operations Director",
      content: "Outstanding service and support. Their team delivered our project on time and exceeded all expectations. Highly recommended!",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "50+", label: "Countries Served", icon: Globe }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Advanced artificial intelligence services including chatbots, analytics, and automation",
      link: "/ai-services",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "IT Services",
      description: "Comprehensive IT solutions including cloud migration, cybersecurity, and infrastructure",
      link: "/it-services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Micro SAAS",
      description: "Powerful business software solutions for small and medium enterprises",
      link: "/micro-saas",
      color: "from-green-500 to-emerald-500"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, testimonials.length]);

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Transform Your Business</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology, micro SAAS solutions, and expert consulting." />
        <meta name="keywords" content="AI solutions, IT services, micro saas, business transformation, cloud migration, cybersecurity, artificial intelligence" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <Navigation />
        
        {/* Hero Section */}
        <main className="pt-20 relative z-10">
          <section className="relative min-h-screen flex items-center justify-center">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
              <div className="text-center">
                <div className="mb-8">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Welcome to{' '}
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                      Zion Tech Group
                    </span>
                  </h1>
                  <p className="text-2xl md:text-3xl text-cyan-400 mb-8 font-medium">
                    AI & IT Solutions for the Future
                  </p>
                  <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Transform your business with cutting-edge artificial intelligence, comprehensive IT solutions, 
                    and innovative micro SAAS platforms. We deliver measurable results and exceptional value 
                    to companies worldwide.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                  >
                    Get Started Today
                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/services"
                    className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                  >
                    Explore Our Services
                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-cyan-400" />
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our <span className="text-cyan-400">Solutions</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-white/5 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Our <span className="text-cyan-400">Clients Say</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what our satisfied clients have to say about our services.
                </p>
              </div>

              <div className="relative max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                  </div>
                  <blockquote className="text-xl text-gray-300 mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-400">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-cyan-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join hundreds of companies that have already transformed their operations with our cutting-edge solutions. 
                  Get started with a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                  >
                    Get Free Consultation
                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="inline-block mr-2 w-5 h-5" />
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
