import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Users, 
  Target, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Sparkles, 
  Star, 
  Award,
  Shield,
  Cloud,
  Brain,
  Code,
  Database,
  Mail,
  Smartphone,
  Monitor,
  Globe,
  TrendingUp,
  DollarSign,
  Settings,
  FileText,
  MessageSquare,
  Search,
  Filter,
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
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
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
  Hourglass,
  AlertTriangle,
  Bell,
  Bookmark,
  Briefcase,
  Building,
  Clipboard,
  Command,
  Compass as CompassIcon,
  Download,
  Edit,
  ExternalLink,
  Flag,
  Folder,
  Home,
  Info,
  Key,
  Lock,
  Maximize2,
  Minimize2,
  MoreHorizontal,
  MoreVertical,
  Plus,
  Save,
  Send,
  Share,
  Trash2,
  Upload,
  User,
  UserCheck,
  UserPlus,
  UserX,
  X,
  AlertTriangle
} from "lucide-react";
import SEOOptimizer from "@/components/SEOOptimizer";
import FuturisticCard from "@/components/FuturisticCard";
import FuturisticButton from "@/components/FuturisticButton";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import ResponsiveGrid from "@/components/ResponsiveGrid";

export default function ZionAiProjectManagerPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Task Automation",
      description: "Automatically assign tasks, predict deadlines, and optimize workflows using machine learning"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Goal Tracking",
      description: "AI-powered goal setting and progress tracking with intelligent milestone suggestions"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast project outcomes, identify risks, and suggest optimizations before issues arise"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Real-time collaboration with AI-powered communication suggestions and conflict resolution"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Tracking",
      description: "Automatic time tracking with AI insights on productivity patterns and optimization opportunities"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management",
      description: "AI-driven risk assessment and mitigation strategies to keep projects on track"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      originalPrice: "$59",
      discount: "51% OFF",
      features: [
        "Up to 5 projects",
        "10 team members",
        "Basic AI features",
        "5GB storage",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      originalPrice: "$159",
      discount: "50% OFF",
      features: [
        "Unlimited projects",
        "50 team members",
        "Advanced AI features",
        "100GB storage",
        "Priority support",
        "API access",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      originalPrice: "$399",
      discount: "50% OFF",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Premium AI features",
        "1TB storage",
        "24/7 dedicated support",
        "White-label solution",
        "Custom AI training",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increase Productivity",
      description: "AI optimization increases team productivity by 40% on average"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Automated task management saves 15+ hours per week per team"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Better Outcomes",
      description: "95% of projects completed on time with AI-powered planning"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Reduce Costs",
      description: "Eliminate project overruns and reduce management overhead by 60%"
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "CTO",
      company: "TechStart Inc",
      content: "Zion AI Project Manager Pro revolutionized how we manage projects. The AI predictions are incredibly accurate and have saved us thousands of hours.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      role: "Project Director",
      company: "Global Solutions",
      content: "The automated task assignment and risk prediction features are game-changers. Our project success rate increased from 70% to 95%.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "James Wilson",
      role: "Team Lead",
      company: "Digital Agency Pro",
      content: "Best project management tool we've ever used. The AI insights help us make better decisions and avoid common pitfalls.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const aiCapabilities = [
    {
      title: "Intelligent Task Assignment",
      description: "AI analyzes team member skills, workload, and preferences to automatically assign tasks for optimal efficiency",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Predictive Risk Analysis",
      description: "Machine learning algorithms identify potential project risks and suggest mitigation strategies before they become issues",
      icon: <AlertTriangle className="w-8 h-8" />
    },
    {
      title: "Smart Resource Optimization",
      description: "AI optimizes resource allocation across projects to maximize productivity and minimize bottlenecks",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Automated Progress Tracking",
      description: "AI continuously monitors project progress and provides real-time insights and recommendations",
      icon: <Activity className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Project Manager Pro - Intelligent Project Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your project management with Zion AI Project Manager Pro. AI-powered task automation, predictive analytics, and intelligent resource optimization. Start free trial!"
        />
        <meta
          name="keywords"
          content="AI project management, project management software, task automation, predictive analytics, team collaboration, project tracking"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-project-manager-pro" />
      </Helmet>
      <SEOOptimizer />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Project Management
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Zion AI Project Manager
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your project management with AI-powered automation, predictive analytics, 
                and intelligent resource optimization. Complete projects faster and more efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </FuturisticButton>
                <FuturisticButton
                  href="#demo"
                  variant="outline"
                  className="border-blue-500 text-blue-300 hover:bg-blue-500/20 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </FuturisticButton>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
                <div className="text-gray-300">Projects Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-gray-300">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4.8★</div>
                <div className="text-gray-300">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your project management
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {aiCapabilities.map((capability, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-blue-900/30 border border-blue-500/20"
                >
                  <div className="text-blue-400 mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300">
                    {capability.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-blue-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage projects efficiently with AI assistance
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-blue-900/30 border border-blue-500/20"
                >
                  <div className="text-blue-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and project needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard
                  key={index}
                  className={`p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/50 scale-105'
                      : 'bg-gradient-to-br from-slate-800/50 to-blue-900/30 border-blue-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-400 line-through">{plan.originalPrice}</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        {plan.discount}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <FuturisticButton
                    href="/contact"
                    className={`w-full py-3 font-semibold rounded-xl ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white'
                        : 'border border-blue-500 text-blue-300 hover:bg-blue-500/20'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-blue-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Zion AI Project Manager Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of teams who have transformed their project management
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {benefits.map((benefit, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 text-center bg-gradient-to-br from-slate-800/50 to-blue-900/30 border border-blue-500/20"
                >
                  <div className="text-blue-400 mb-4 mx-auto w-fit">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how teams are achieving better results with AI-powered project management
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-blue-900/30 border border-blue-500/20"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <FuturisticCard className="p-12 text-center bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/50">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of teams who are already using AI to manage projects more efficiently. 
                Start your free trial today - no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </FuturisticButton>
                <FuturisticButton
                  href="tel:+13024640950"
                  variant="outline"
                  className="border-blue-500 text-blue-300 hover:bg-blue-500/20 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Call: +1 302 464 0950
                  <Phone className="ml-2 h-5 w-5" />
                </FuturisticButton>
              </div>
            </FuturisticCard>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}