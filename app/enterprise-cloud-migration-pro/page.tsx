import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Award,
  Shield,
  Brain,
  Code,
  Database,
  Mail,
  Smartphone,
  Monitor,
  Globe,
  Target,
  TrendingUp,
  DollarSign,
  Settings,
  FileText,
  MessageSquare,
  Calendar,
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
  BarChart3,
  Clock,
  Users,
  Zap,
  Sparkles
} from "lucide-react";
import SEOOptimizer from "@/components/SEOOptimizer";
import FuturisticCard from "@/components/FuturisticCard";
import FuturisticButton from "@/components/FuturisticButton";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import ResponsiveGrid from "@/components/ResponsiveGrid";

export default function EnterpriseCloudMigrationPro() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Multi-Cloud Strategy",
      description: "Comprehensive cloud migration strategy supporting AWS, Azure, Google Cloud, and hybrid environments"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security-First Approach",
      description: "Enterprise-grade security with zero-downtime migration and compliance validation"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Optimization",
      description: "Machine learning algorithms optimize resource allocation and cost management automatically"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Migration",
      description: "Seamless data migration with integrity validation and minimal business disruption"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Application Modernization",
      description: "Legacy application modernization and containerization for cloud-native deployment"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Monitoring",
      description: "Real-time monitoring and optimization of cloud infrastructure performance and costs"
    }
  ];

  const pricingPlans = [
    {
      name: "Assessment",
      price: "$15,000",
      period: "one-time",
      originalPrice: "$25,000",
      discount: "40% OFF",
      features: [
        "Cloud readiness assessment",
        "Migration strategy planning",
        "Cost analysis & optimization",
        "Security audit",
        "Timeline estimation",
        "Risk assessment"
      ],
      popular: false
    },
    {
      name: "Standard Migration",
      price: "$75,000",
      period: "project",
      originalPrice: "$125,000",
      discount: "40% OFF",
      features: [
        "Everything in Assessment",
        "Complete cloud migration",
        "Data migration & validation",
        "Application modernization",
        "Security implementation",
        "Performance optimization",
        "30-day support",
        "Documentation & training"
      ],
      popular: true
    },
    {
      name: "Enterprise Migration",
      price: "$200,000",
      period: "project",
      originalPrice: "$350,000",
      discount: "43% OFF",
      features: [
        "Everything in Standard",
        "Multi-cloud architecture",
        "Advanced security & compliance",
        "Custom integrations",
        "24/7 monitoring setup",
        "Disaster recovery planning",
        "90-day support",
        "Dedicated project manager",
        "Custom training programs"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Reduce Costs",
      description: "Average 40% reduction in infrastructure costs with optimized cloud resources"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Improve Performance",
      description: "3x faster application performance with cloud-native architecture"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Security",
      description: "Enterprise-grade security with automated compliance monitoring"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Faster Deployment",
      description: "50% faster time-to-market with cloud-native development practices"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CTO",
      company: "Financial Services Corp",
      content: "Zion's cloud migration service was exceptional. We reduced our infrastructure costs by 45% while improving performance significantly.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Chen",
      role: "IT Director",
      company: "Healthcare Systems Inc",
      content: "The migration was seamless with zero downtime. Our applications now run 3x faster and we have better security than ever.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Sarah Johnson",
      role: "VP of Technology",
      company: "E-commerce Platform",
      content: "Best cloud migration experience we've had. The team was professional, knowledgeable, and delivered exactly what they promised.",
      rating: 5,
      avatar: "SJ"
    }
  ];

  const migrationSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of current infrastructure, applications, and data to create migration roadmap",
      icon: <Search className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Detailed migration strategy with timeline, resource allocation, and risk mitigation plans",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Security & Compliance",
      description: "Security assessment and compliance validation to ensure enterprise-grade protection",
      icon: <Shield className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Migration Execution",
      description: "Phased migration with minimal downtime and continuous monitoring throughout the process",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      step: "05",
      title: "Optimization & Monitoring",
      description: "Performance optimization and 24/7 monitoring setup for ongoing cloud management",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      step: "06",
      title: "Training & Support",
      description: "Comprehensive training and ongoing support to ensure successful cloud adoption",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const cloudProviders = [
    { name: "Amazon Web Services", icon: <Cloud className="w-8 h-8" />, features: ["EC2", "S3", "RDS", "Lambda"] },
    { name: "Microsoft Azure", icon: <Cloud className="w-8 h-8" />, features: ["Virtual Machines", "Blob Storage", "SQL Database", "Functions"] },
    { name: "Google Cloud Platform", icon: <Cloud className="w-8 h-8" />, features: ["Compute Engine", "Cloud Storage", "Cloud SQL", "Cloud Functions"] },
    { name: "Hybrid Cloud", icon: <Globe className="w-8 h-8" />, features: ["Multi-cloud", "On-premise", "Edge computing", "Hybrid connectivity"] }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Cloud Migration Pro - Professional Cloud Migration Services | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your infrastructure with our enterprise cloud migration services. Multi-cloud strategy, AI optimization, zero-downtime migration. Get free assessment!"
        />
        <meta
          name="keywords"
          content="cloud migration, AWS migration, Azure migration, Google Cloud migration, enterprise cloud, cloud strategy, cloud optimization"
        />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise-cloud-migration-pro" />
      </Helmet>
      <SEOOptimizer />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Enterprise Cloud Migration
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Enterprise Cloud Migration
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your infrastructure with our comprehensive cloud migration services. 
                Multi-cloud strategy, AI-powered optimization, and zero-downtime migration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Get Free Assessment
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
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Migrations Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-gray-300">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime During Migration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Migration Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven 6-step process that ensures successful cloud migration with minimal risk
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationSteps.map((step, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-blue-900/30 border border-blue-500/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-2xl font-bold text-blue-400 mr-4">{step.step}</div>
                    <div className="text-blue-400">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-blue-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Multi-Cloud Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We support all major cloud providers and hybrid environments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudProviders.map((provider, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 text-center bg-gradient-to-br from-slate-800/50 to-blue-900/30 border border-blue-500/20"
                >
                  <div className="text-blue-400 mb-4 mx-auto w-fit">{provider.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{provider.name}</h3>
                  <ul className="space-y-2">
                    {provider.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive Migration Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for a successful cloud migration
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
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-blue-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the migration package that fits your organization's needs
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
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Migration Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven expertise and comprehensive support for successful cloud adoption
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
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-blue-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations have transformed their infrastructure with our migration services
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
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a free cloud migration assessment and discover how much you can save 
                while improving performance and security. No obligation, just expert insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Get Free Assessment
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