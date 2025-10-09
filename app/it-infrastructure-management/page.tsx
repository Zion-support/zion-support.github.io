'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Server, 
  Cloud, 
  Shield, 
  Zap, 
  CheckCircle,
  Star,
  ArrowRight,
  TrendingUp,
  Eye,
  MousePointer,
  Clock,
  Calendar,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Settings,
  Bell,
  Globe,
  Smartphone,
  Monitor,
  Lock,
  Award,
  Activity,
  PieChart,
  LineChart,
  MessageSquare,
  AtSign,
  Hash,
  Image,
  Video,
  FileText,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Square,
  RotateCcw,
  Copy,
  Share2,
  Heart,
  ThumbsUp,
  AlertCircle,
  Info,
  Check,
  X,
  DollarSign,
  Percent,
  TrendingDown,
  Phone,
  Mail,
  MapPin,
  Building,
  User,
  UserPlus,
  UserCheck,
  UserX,
  CreditCard,
  ShoppingCart,
  Package,
  Truck,
  Headphones,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  Car,
  Plane,
  Ship,
  Train,
  Factory,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen as Book,
  Calculator,
  Compass,
  Navigation,
  Target,
  Shield as Security,
  Users,
  Star as StarIcon,
  CheckCircle as CheckIcon,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Database,
  HardDrive,
  Cpu,
  MemoryStick,
  Network,
  Wifi,
  Router,
  Cable,
  HardDrive as Storage,
  Monitor as Display,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Camera,
  Microphone,
  Headphones as Headset,
  Speaker,
  Battery,
  Power,
  Thermometer,
  Gauge,
  BarChart3,
  PieChart as Pie,
  LineChart as Line,
  TrendingUp as Trending,
  TrendingDown as TrendingDownIcon,
  Activity as ActivityIcon,
  Zap as Lightning,
  Target as Crosshair,
  Shield as SecurityIcon,
  Users as People,
  Star as StarIconAlt,
  CheckCircle as CheckIconAlt,
  ArrowRight as ArrowIcon,
  Phone as PhoneIconAlt,
  Mail as MailIconAlt,
  MapPin as LocationIcon
} from 'lucide-react';

const ItInfrastructureManagementPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "24/7 Infrastructure Monitoring",
      description: "Real-time monitoring of servers, networks, and applications with AI-powered anomaly detection",
      benefits: ["99.9% uptime guarantee", "Proactive issue resolution", "Real-time alerts"]
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Enterprise Security Management",
      description: "Comprehensive security solutions including firewall management, intrusion detection, and compliance monitoring",
      benefits: ["SOC 2 compliance", "Advanced threat protection", "Regular security audits"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      title: "Cloud Infrastructure Optimization",
      description: "Optimize cloud resources and costs with intelligent scaling and performance monitoring",
      benefits: ["30% cost reduction", "Auto-scaling", "Performance optimization"]
    },
    {
      icon: <Server className="w-8 h-8 text-orange-400" />,
      title: "Server Management & Maintenance",
      description: "Complete server lifecycle management including provisioning, updates, and maintenance",
      benefits: ["Automated updates", "Performance tuning", "Hardware monitoring"]
    },
    {
      icon: <Network className="w-8 h-8 text-blue-400" />,
      title: "Network Infrastructure Design",
      description: "Design and implement robust network architectures with redundancy and failover capabilities",
      benefits: ["High availability", "Load balancing", "Disaster recovery"]
    },
    {
      icon: <Database className="w-8 h-8 text-pink-400" />,
      title: "Database Administration",
      description: "Expert database management including optimization, backup, and recovery strategies",
      benefits: ["Performance optimization", "Automated backups", "Data recovery"]
    }
  ];

  const itServices = [
    {
      name: "Server Management",
      description: "Complete server lifecycle management and maintenance",
      icon: <Server className="w-6 h-6" />,
      features: ["Server provisioning", "OS updates", "Performance monitoring", "Hardware maintenance"]
    },
    {
      name: "Network Management",
      description: "Network design, implementation, and ongoing management",
      icon: <Network className="w-6 h-6" />,
      features: ["Network design", "Firewall management", "VPN setup", "Traffic monitoring"]
    },
    {
      name: "Cloud Services",
      description: "Cloud migration, optimization, and management services",
      icon: <Cloud className="w-6 h-6" />,
      features: ["Cloud migration", "Cost optimization", "Auto-scaling", "Multi-cloud management"]
    },
    {
      name: "Security Services",
      description: "Comprehensive cybersecurity and compliance management",
      icon: <Shield className="w-6 h-6" />,
      features: ["Security audits", "Threat monitoring", "Compliance management", "Incident response"]
    },
    {
      name: "Database Services",
      description: "Database administration, optimization, and backup services",
      icon: <Database className="w-6 h-6" />,
      features: ["Database optimization", "Backup strategies", "Performance tuning", "Data recovery"]
    },
    {
      name: "Help Desk Support",
      description: "24/7 technical support and help desk services",
      icon: <Headphones className="w-6 h-6" />,
      features: ["24/7 support", "Remote assistance", "Issue tracking", "Knowledge base"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$999",
      period: "/month",
      description: "Perfect for small businesses with basic IT needs",
      features: [
        "Up to 10 servers",
        "Basic monitoring",
        "Email support",
        "Monthly reports",
        "Standard security",
        "Business hours support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "/month",
      description: "Ideal for growing businesses with complex IT requirements",
      features: [
        "Up to 50 servers",
        "Advanced monitoring",
        "Priority support",
        "Real-time reporting",
        "Advanced security",
        "24/7 support",
        "Cloud management",
        "Database administration"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large organizations with mission-critical infrastructure",
      features: [
        "Unlimited servers",
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "White-label support",
        "SLA guarantee",
        "Custom training",
        "On-site support"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "James Wilson",
      role: "CTO",
      company: "TechCorp Solutions",
      content: "IT Infrastructure Management reduced our downtime by 80% and cut our IT costs by 35%. The 24/7 monitoring gives us peace of mind and the team is incredibly responsive.",
      rating: 5,
      improvement: "80% downtime reduction"
    },
    {
      name: "Maria Garcia",
      role: "IT Director",
      company: "Global Manufacturing Inc.",
      content: "The cloud optimization alone saved us $50,000 annually. The team's expertise in cloud architecture and security has transformed our entire IT infrastructure.",
      rating: 5,
      improvement: "$50K annual savings"
    },
    {
      name: "David Kim",
      role: "VP of Operations",
      company: "Financial Services Group",
      content: "Our compliance requirements are complex, but they handle everything seamlessly. We passed our SOC 2 audit with flying colors thanks to their security management.",
      rating: 5,
      improvement: "SOC 2 compliance achieved"
    }
  ];

  const stats = [
    { number: "500+", label: "Servers Managed", icon: <Server className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
    { number: "35%", label: "Average Cost Reduction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "4.9/5", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Infrastructure Assessment",
      description: "Comprehensive analysis of your current IT infrastructure and identification of improvement opportunities",
      icon: <Eye className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Custom Solution Design",
      description: "Design a tailored infrastructure solution that meets your specific business requirements and goals",
      icon: <Settings className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Implementation & Migration",
      description: "Seamless implementation of the new infrastructure with minimal disruption to your business operations",
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Ongoing Management",
      description: "24/7 monitoring, maintenance, and optimization to ensure peak performance and security",
      icon: <Activity className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Infrastructure Management - Enterprise IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT infrastructure management with 24/7 monitoring, security, and optimization. Reduce costs by 35% and achieve 99.9% uptime with our expert IT services." />
        <meta name="keywords" content="IT infrastructure management, server management, network management, cloud services, IT support, infrastructure monitoring" />
        <link rel="canonical" href="https://ziontechgroup.com/it-infrastructure-management" />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Enterprise IT Infrastructure Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Infrastructure Management
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Complete IT Infrastructure Solutions
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your IT infrastructure with our comprehensive management services. 
            Achieve 99.9% uptime, reduce costs by 35%, and ensure enterprise-grade security 
            with our expert IT infrastructure management solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="cyber-button px-8 py-4 text-lg">
              Start Free Trial
            </button>
            <button 
              onClick={() => setShowPricing(true)}
              className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg font-medium"
            >
              View Pricing
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comprehensive IT Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Complete IT infrastructure management tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itServices.map((service, index) => (
            <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{service.name}</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                {service.description}
              </p>
              <ul className="space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs text-cyan-400">
                    <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Our IT Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our comprehensive IT infrastructure management delivers enterprise-grade 
            reliability, security, and performance optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our proven 4-step process ensures seamless IT infrastructure management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust us with their IT infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card p-8">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star className="w-5 h-5 text-yellow-400 fill-current" key={i} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-cyan-400">{testimonial.role}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
                <div className="text-sm text-green-400 font-medium mt-2">
                  {testimonial.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      {showPricing && (
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your infrastructure needs. All plans include a 30-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-cyan-400 border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'cyber-button' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="cyber-card p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of clients who have transformed their IT infrastructure 
            with our comprehensive management services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="cyber-button px-8 py-4 text-lg">
              Start Your Free Trial
            </button>
            <a 
              href="tel:+13024640950"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg font-medium"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItInfrastructureManagementPage;