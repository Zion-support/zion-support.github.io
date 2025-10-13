import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Video, 
  Play, 
  Pause, 
  Download, 
  Upload, 
  Share, 
  Star, 
  CheckCircle, 
  Sparkles, 
  Camera, 
  Mic, 
  Image, 
  FileText, 
  Globe, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Headphones, 
  Volume2, 
  VolumeX, 
  Settings, 
  Palette, 
  Layers, 
  Zap, 
  Award, 
  Users, 
  Clock, 
  BarChart3, 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin,
  Brain,
  Shield,
  Cloud,
  Database,
  Code,
  Workflow,
  Target,
  Calendar,
  MessageSquare,
  Heart,
  ThumbsUp,
  Eye,
  Edit,
  Copy,
  RefreshCw,
  RotateCcw,
  RotateCw,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume1,
  Volume2 as Volume2Icon,
  Mic as MicIcon,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  Camera as CameraIcon,
  CameraOff,
  Image as ImageIcon,
  ImageOff,
  File as FileIcon,
  FileText as FileTextIcon,
  FileImage,
  FileVideo,
  FileAudio,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileZip,
  FileCode,
  FileJson,
  FileCss,
  FileHtml,
  FileXml,
  FileYaml,
  FileMarkdown,
  FileSpreadsheet,
  FileDatabase,
  FileArchive,
  FileBinary,
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
  FileKey,
  FileShield,
  FileAlert,
  FileInfo,
  FileQuestion,
  FileHeart,
  FileStar,
  FileBookmark,
  FileTag,
  FileFlag,
  FileClock,
  FileCalendar,
  FileUser,
  FileUsers,
  FileFolder,
  FileHome,
  FileGlobe,
  FileWifi,
  FileBluetooth,
  FileUsb,
  FileHdmi,
  FileEthernet,
  FileCloud,
  FileCloudDownload,
  FileCloudUpload,
  FileCloudSync,
  FileCloudCheck,
  FileCloudX,
  FileCloudPlus,
  FileCloudMinus,
  FileCloudEdit,
  FileCloudSearch,
  FileCloudShare,
  FileCloudCopy,
  FileCloudMove,
  FileCloudTrash,
  FileCloudLock,
  FileCloudUnlock,
  FileCloudKey,
  FileCloudShield,
  FileCloudAlert,
  FileCloudInfo,
  FileCloudQuestion,
  FileCloudHeart,
  FileCloudStar,
  FileCloudBookmark,
  FileCloudTag,
  FileCloudFlag,
  FileCloudClock,
  FileCloudCalendar,
  FileCloudUser,
  FileCloudUsers,
  FileCloudFolder,
  FileCloudHome,
  FileCloudGlobe,
  FileCloudWifi,
  FileCloudBluetooth,
  FileCloudUsb,
  FileCloudHdmi,
  FileCloudEthernet,
  BookOpen,
  ShoppingCart
} from "lucide-react";

export default function ZionAIVideoGeneratorPro() {
  const features = [
    {
      title: "AI Video Generation from Text",
      description: "Transform your ideas into professional videos using advanced AI technology. Simply input your text and watch as our AI creates stunning visuals.",
      icon: <FileText className="w-6 h-6" />,
      benefits: [
        "90% faster video production",
        "Professional quality output",
        "No technical skills required",
        "Unlimited video variations"
      ]
    },
    {
      title: "Multi-language Voice Synthesis",
      description: "Generate natural-sounding voiceovers in 50+ languages with customizable voices, accents, and speaking styles.",
      icon: <Mic className="w-6 h-6" />,
      benefits: [
        "50+ language support",
        "Natural-sounding voices",
        "Customizable voice styles",
        "Real-time voice generation"
      ]
    },
    {
      title: "Professional Templates Library",
      description: "Access 1000+ professionally designed video templates for every industry and use case. Customize colors, fonts, and layouts.",
      icon: <Layers className="w-6 h-6" />,
      benefits: [
        "1000+ professional templates",
        "Industry-specific designs",
        "Fully customizable",
        "Regular template updates"
      ]
    },
    {
      title: "Auto-editing & Transitions",
      description: "AI-powered automatic editing with smooth transitions, perfect timing, and professional effects. No manual editing required.",
      icon: <Workflow className="w-6 h-6" />,
      benefits: [
        "Automatic video editing",
        "Smooth transitions",
        "Perfect timing",
        "Professional effects"
      ]
    },
    {
      title: "Brand Kit Integration",
      description: "Maintain consistent branding across all videos with your custom logos, colors, fonts, and brand guidelines.",
      icon: <Palette className="w-6 h-6" />,
      benefits: [
        "Consistent branding",
        "Custom brand elements",
        "Brand guideline compliance",
        "Team collaboration"
      ]
    },
    {
      title: "4K Video Export",
      description: "Export your videos in stunning 4K resolution with multiple format options for different platforms and use cases.",
      icon: <Monitor className="w-6 h-6" />,
      benefits: [
        "4K video quality",
        "Multiple export formats",
        "Platform optimization",
        "High-quality output"
      ]
    },
    {
      title: "Social Media Optimization",
      description: "Automatically optimize videos for different social media platforms with the right dimensions, aspect ratios, and formats.",
      icon: <Share className="w-6 h-6" />,
      benefits: [
        "Platform-specific optimization",
        "Automatic aspect ratio adjustment",
        "Social media best practices",
        "Multi-platform publishing"
      ]
    },
    {
      title: "Collaborative Editing",
      description: "Work with your team in real-time with collaborative editing features, comments, and approval workflows.",
      icon: <Users className="w-6 h-6" />,
      benefits: [
        "Real-time collaboration",
        "Comment system",
        "Approval workflows",
        "Version control"
      ]
    }
  ];

  const useCases = [
    {
      title: "Marketing Videos",
      description: "Create compelling marketing videos for social media, websites, and advertising campaigns.",
      icon: <Target className="w-8 h-8" />,
      examples: ["Product demos", "Brand stories", "Social media ads", "Website banners"]
    },
    {
      title: "Educational Content",
      description: "Develop engaging educational videos for training, tutorials, and online courses.",
      icon: <BookOpen className="w-8 h-8" />,
      examples: ["Training videos", "Tutorials", "Online courses", "How-to guides"]
    },
    {
      title: "Corporate Communications",
      description: "Produce professional corporate videos for internal communications and client presentations.",
      icon: <Users className="w-8 h-8" />,
      examples: ["Company updates", "Client presentations", "Internal training", "Announcements"]
    },
    {
      title: "E-commerce Videos",
      description: "Generate product showcase videos and promotional content for online stores.",
      icon: <ShoppingCart className="w-8 h-8" />,
      examples: ["Product showcases", "Promotional videos", "Customer testimonials", "Unboxing videos"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$179/month",
      originalPrice: "$359/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "50 video generations/month",
        "HD video export",
        "10 voice options",
        "100+ templates",
        "Basic brand kit",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299/month",
      originalPrice: "$599/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "200 video generations/month",
        "4K video export",
        "50+ voice options",
        "500+ templates",
        "Advanced brand kit",
        "Priority support",
        "Team collaboration",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499/month",
      originalPrice: "$999/month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited video generations",
        "4K+ video export",
        "100+ voice options",
        "1000+ templates",
        "Custom brand kit",
        "24/7 support",
        "Advanced collaboration",
        "Full API access",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "90%", label: "Faster Video Production", icon: <Zap className="w-6 h-6" /> },
    { number: "50+", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "1000+", label: "Professional Templates", icon: <Layers className="w-6 h-6" /> },
    { number: "4K", label: "Video Quality", icon: <Monitor className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Digital Marketing Agency",
      role: "Creative Director",
      content: "Zion AI Video Generator Pro has revolutionized our video production process. We can now create professional marketing videos in minutes instead of hours.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-learning Platform",
      role: "Content Manager",
      content: "The multi-language voice synthesis is incredible. We can create educational content in multiple languages without hiring voice actors.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Store",
      role: "Marketing Manager",
      content: "The social media optimization feature saves us so much time. Our videos are perfectly formatted for each platform automatically.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Video Generator Pro - AI-Powered Video Creation | Zion Tech Group</title>
        <meta
          name="description"
          content="Create professional videos in minutes with Zion AI Video Generator Pro. AI-powered video creation from text, multi-language voice synthesis, 1000+ templates, and 4K export. Start your free trial today."
        />
        <meta
          name="keywords"
          content="AI video generator, video creation, video marketing, AI video maker, video templates, voice synthesis, video automation, social media videos, marketing videos, video production"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-video-generator-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                  <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">#1 AI Video Generator 2024</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    Zion AI Video Generator Pro
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Create professional videos in minutes with our revolutionary AI video generator. 
                  Transform text into stunning videos with multi-language voice synthesis, professional templates, and 4K export quality.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                    <Play className="w-16 h-16 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">See It In Action</h3>
                  <p className="text-gray-300 mb-6">
                    Watch how our AI transforms your text into professional videos in just minutes.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-cyan-400">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm">No technical skills required</span>
                    </div>
                    <div className="flex items-center text-cyan-400">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm">Professional quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Features for Professional Video Creation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create stunning videos with AI-powered technology and professional tools.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-cyan-400">
                        <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect for Every Use Case
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From marketing videos to educational content, our AI video generator adapts to your needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="text-xs text-cyan-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your video creation needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-500 line-through">{plan.originalPrice}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 group-hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Content Creators Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Video Generator Pro.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Amazing Videos?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of content creators using Zion AI Video Generator Pro to create professional videos in minutes. 
                Start your free trial today and see the difference AI can make.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}