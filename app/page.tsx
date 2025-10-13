import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Database, Lock, Cpu, Wifi, Target, TrendingUp, CheckCircle, Rocket, Lightbulb, Code, Settings, Headphones, MessageCircle, FileText, Search, Filter, Download, Upload, Share, Bookmark, Heart, ThumbsUp, Eye, Clock, Calendar, MapPin, Phone, Mail as MailIcon, ExternalLink, ChevronRight, ChevronDown, Menu, X, Play, Pause, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RefreshCw, Plus, Minus, Edit, Trash2, Save, Copy, Scissors, Undo, Redo, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, Grid, Layout, Palette, Type, Image, Video, Music, File, Folder, Archive, Inbox, Send, Reply, Forward, Flag, Tag, Star as StarIcon, Bookmark as BookmarkIcon, Heart as HeartIcon, ThumbsUp as ThumbsUpIcon, Eye as EyeIcon, Clock as ClockIcon, Calendar as CalendarIcon, MapPin as MapPinIcon, Phone as PhoneIcon, ExternalLink as ExternalLinkIcon, ChevronRight as ChevronRightIcon, ChevronDown as ChevronDownIcon, Menu as MenuIcon, X as XIcon, Play as PlayIcon, Pause as PauseIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, RotateCcw as RotateCcwIcon, RefreshCw as RefreshCwIcon, Plus as PlusIcon, Minus as MinusIcon, Edit as EditIcon, Trash2 as Trash2Icon, Save as SaveIcon, Copy as CopyIcon, Scissors as ScissorsIcon, Undo as UndoIcon, Redo as RedoIcon, Bold as BoldIcon, Italic as ItalicIcon, Underline as UnderlineIcon, AlignLeft as AlignLeftIcon, AlignCenter as AlignCenterIcon, AlignRight as AlignRightIcon, List as ListIcon, Grid as GridIcon, Layout as LayoutIcon, Palette as PaletteIcon, Type as TypeIcon, Image as ImageIcon, Video as VideoIcon, Music as MusicIcon, File as FileIcon, Folder as FolderIcon, Archive as ArchiveIcon, Inbox as InboxIcon, Send as SendIcon, Reply as ReplyIcon, Forward as ForwardIcon, Flag as FlagIcon, Tag as TagIcon } from "lucide-react";

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to automate and optimize your business processes."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Cybersecurity Excellence",
      description: "Protect your digital assets with our comprehensive security solutions and best practices."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Lightning-Fast Performance",
      description: "Experience blazing-fast applications with our optimized infrastructure and deployment strategies."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "Global Reach",
      description: "Scale your business worldwide with our cloud-native solutions and global infrastructure."
    }
  ];

  const services = [
    {
      title: "AI Services",
      description: "Transform your business with artificial intelligence solutions",
      icon: <Brain className="w-6 h-6" />,
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions for modern businesses",
      icon: <Monitor className="w-6 h-6" />,
      link: "/it-services"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and IoT solutions",
      icon: <Wifi className="w-6 h-6" />,
      link: "/5g-solutions"
    },
    {
      title: "Micro SAAS",
      description: "Scalable software-as-a-service solutions",
      icon: <Cloud className="w-6 h-6" />,
      link: "/micro-saas"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/about" 
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let our experts help you leverage the power of AI and cutting-edge technology to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link 
              to="/demo" 
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
