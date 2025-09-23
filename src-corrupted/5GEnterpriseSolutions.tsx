import React from 'react';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Wifi, 
  Shield, 
  Zap, 
  Building, 
  Globe, 
  BarChart3, 
  Cpu, 
  Network,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react';
=======
=======
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  SignalIcon, 
  CpuChipIcon, 
  GlobeAltIcon, 
  RocketLaunchIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
=======
import { 
  Network, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  BarChart3, 
  Users, 
  Building,
  ArrowRight,
  CheckCircle,
  Star,
=======
import { Helmet } from 'react-helmet-async';
import { 
  Network, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Rocket, 
  Target,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Cloud,
  Server,
  Workflow,
  BarChart,
  Settings as SettingsIcon,
  BarChart3 as Intelligence,
  Wifi,
  Signal,
  Smartphone,
  Monitor,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Settings,
  Eye,
  Heart,
  DollarSign,
  ShoppingCart,
  Palette,
  Users2,
  Briefcase
} from 'lucide-react';
=======
import { Helmet } from 'react-helmet-async';
import { 
  Network, 
  Zap, 
  Target, 
  Shield, 
  Rocket, 
  Globe,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Lock,
  Eye,
  Sparkles,
  TrendingUp,
  Settings,
  Cpu,
  Brain,
  Wifi,
  Smartphone,
  Server,
  Router,
  Satellite
} from 'lucide-react';
=======
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Cloud,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Settings,
  Workflow,
  BarChart,
  PieChart,
  Monitor,
  HardDrive,
  Server,
  FileCheck,
  AlertTriangle,
  Search,
  BookOpen,
  Microscope,
  TestTube,
  Wifi,
  Signal,
  Smartphone,
  Car
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const FiveGEnterpriseSolutions = () => {
=======
import { 
  Wifi, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Users, 
  Building2, 
  Smartphone,
  Cloud,
  Database,
  Network,
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Target
} from 'lucide-react';

export default function FiveGEnterpriseSolutions() {
  const features = [
    {
      description: "Lightning-fast 5G networks with ultra-low latency for real-time applications"
=======
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, TrendingUp, Globe, Lock, CheckCircle, Star, Cpu, Database, Building2, Network, Server, Monitor, Rocket, Code, Settings, Wifi, Signal, Smartphone, Cloud } from 'lucide-react';
import { SEO } from '@/components/SEO';

const FiveGEnterpriseSolutions = () => {
  const solutions = [
    {
      title: "Private 5G Networks",
      description: "Custom private 5G infrastructure for enterprise environments with complete control and security.",
      icon: Network,
      features: ["Dedicated spectrum", "On-premises deployment", "Ultra-low latency", "Guaranteed bandwidth"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Edge Computing Integration",
      description: "Combine 5G connectivity with edge computing for real-time data processing and AI applications.",
      icon: Server,
      features: ["Multi-access edge computing", "Real-time analytics", "AI at the edge", "Distributed processing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "IoT and Industrial Automation",
      description: "Enable massive IoT deployments with 5G for smart factories and industrial automation.",
      icon: Settings,
      features: ["Massive machine-type communications", "Critical communications", "Industrial IoT", "Remote control"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AR/VR and Mixed Reality",
      description: "Power immersive experiences with 5G's high bandwidth and low latency capabilities.",
      icon: Monitor,
      features: ["Ultra-HD streaming", "Real-time rendering", "Collaborative environments", "Remote training"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Network Slicing",
      description: "Create customized network slices for different enterprise applications and use cases.",
      icon: Wifi,
      features: ["Dedicated virtual networks", "Service level agreements", "Quality of service", "Resource allocation"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Security and Compliance",
      description: "Enterprise-grade security features built into 5G networks for data protection and compliance.",
      icon: Shield,
      description: "Advanced security protocols and private network solutions for enterprise needs"
=======
      icon: Network,
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G networks with speeds up to 10 Gbps for enterprise applications"
    },
    {
      icon: Zap,
      title: "Low Latency",
      icon: Zap,
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G speeds up to 10 Gbps for seamless enterprise operations"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Advanced security protocols and encryption for sensitive business data"
=======
      description: "Experience lightning-fast 5G speeds with ultra-low latency for seamless enterprise operations."
=======
      description: "Ultra-low latency of less than 1ms for real-time applications and IoT devices"
=======
      icon: Network,
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G networks delivering unprecedented speed and low latency for enterprise applications."
    },
    {
      icon: Zap,
      title: "Real-time Performance",
      description: "Ultra-low latency connections enabling real-time applications and instant data transmission."
    },
    {
      icon: Target,
      title: "Massive IoT Support",
      description: "Support for millions of connected devices with reliable, high-bandwidth connectivity."
=======
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G networks with ultra-low latency for enterprise applications",
      icon: Signal,
      benefits: ["10x faster speeds", "1ms latency", "Massive bandwidth"]
    },
    {
      title: "Network Slicing",
      description: "Customized network segments for different enterprise use cases",
      icon: Network,
      benefits: ["Custom networks", "QoS guarantees", "Isolated traffic"]
    },
    {
      title: "Edge Computing Integration",
      description: "Seamless integration with edge computing for real-time processing",
      icon: Cpu,
      benefits: ["Edge processing", "Real-time analytics", "Local intelligence"]
    },
    {
      title: "Enterprise Security",
      description: "Advanced security protocols and network slicing for enterprise-grade protection"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Distributed edge computing infrastructure for faster data processing"
    },
    {
      icon: Database,
      title: "Massive IoT Support",
      description: "Support for millions of connected devices per square kilometer"
=======
      description: "Advanced security protocols and network slicing for isolated, secure enterprise communications."
    },
    {
      icon: Rocket,
      title: "Scalable Infrastructure",
      description: "Flexible 5G infrastructure that scales with your business needs and growth requirements."
    },
    {
      icon: Globe,
      title: "Global Coverage",
=======
      icon: SignalIcon,
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G networks with speeds up to 10 Gbps for enterprise applications and real-time operations."
    },
    {
      icon: CpuChipIcon,
      title: "Low Latency",
      description: "Ultra-low latency of less than 1ms enabling real-time applications like autonomous vehicles and remote surgery."
    },
    {
      icon: GlobeAltIcon,
      title: "Massive IoT Support",
      description: "Support for millions of connected devices per square kilometer for comprehensive IoT deployments."
    },
    {
      icon: RocketLaunchIcon,
      title: "Network Slicing",
      description: "Customized network segments for different enterprise applications with guaranteed performance."
    },
    {
      icon: ChartBarIcon,
      title: "Advanced Analytics",
      description: "Real-time network analytics and performance monitoring for optimal enterprise operations."
    },
    {
      icon: ShieldCheckIcon,
      title: "Enhanced Security",
      description: "Enterprise-grade security with advanced encryption and threat protection for 5G networks."
=======
      description: "Worldwide 5G network coverage with seamless roaming capabilities"
    },
    {
      icon: Cpu,
      title: "Low Latency",
      description: "Ultra-low latency (<1ms) for real-time applications and IoT devices"
    },
    {
      icon: Users,
      title: "Massive IoT Support",
      description: "Support for millions of connected devices per square kilometer"
    },
    {
      icon: Building,
      title: "Enterprise Integration",
      description: "Seamless integration with existing enterprise infrastructure and systems"
    }
  ];

  const solutions = [
    {
      title: "5G Private Networks",
      description: "Dedicated 5G networks for enterprise campuses, factories, and offices",
      features: ["Custom network slicing", "Enhanced security", "Predictable performance", "Full control"]
    },
    {
      title: "5G Edge Computing",
      description: "Distributed computing infrastructure at the network edge for faster processing",
      features: ["Reduced latency", "Bandwidth optimization", "Real-time analytics", "Local processing"]
    },
    {
      title: "5G IoT Platforms",
      description: "Comprehensive IoT management with 5G connectivity",
      features: ["Device management", "Data analytics", "Automation", "Scalability"]
    },
    {
      title: "5G Network Optimization",
      description: "AI-powered network optimization for maximum performance and efficiency",
      features: ["Predictive maintenance", "Traffic optimization", "Resource allocation", "Performance monitoring"]
=======
      features: ["End-to-end encryption", "Network authentication", "Zero trust architecture", "Compliance frameworks"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Smart factories with connected machinery and real-time monitoring",
      icon: Building2,
      applications: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Digital twins"]
    },
    {
      name: "Healthcare",
      description: "Remote patient monitoring and telemedicine applications",
      icon: Users,
      applications: ["Remote surgery", "Patient monitoring", "Medical IoT", "Emergency response"]
    },
    {
      name: "Transportation",
      description: "Connected vehicles and intelligent transportation systems",
      icon: Rocket,
      applications: ["Autonomous vehicles", "Traffic management", "Fleet tracking", "Smart logistics"]
    },
    {
      name: "Energy",
      description: "Smart grid management and renewable energy optimization",
      icon: Zap,
      applications: ["Grid monitoring", "Energy trading", "Predictive analytics", "Asset management"]
=======
      description: "Worldwide 5G network coverage with seamless roaming and consistent performance."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time network monitoring and predictive analytics for optimal performance."
    },
    {
      icon: Users,
      title: "Scalable Solutions",
      description: "Flexible infrastructure that grows with your business needs and user demands."
=======
      description: "Worldwide 5G network coverage with seamless roaming capabilities"
=======
  Clock,
  Target
} from 'lucide-react';

export default function FiveGEnterpriseSolutions() {
  const features = [
    {
      icon: Network,
      title: 'Ultra-Fast Connectivity',
      description: 'Lightning-fast 5G networks with ultra-low latency for enterprise applications'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Advanced security protocols and encryption for mission-critical operations'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Worldwide 5G infrastructure with seamless roaming capabilities'
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Distributed edge computing for real-time data processing'
=======
      description: "Worldwide 5G network coverage with seamless roaming and consistent performance."
=======
      description: "Bank-grade security with advanced encryption and threat protection",
      icon: Shield,
      benefits: ["End-to-end encryption", "Threat detection", "Compliance ready"]
    }
  ];

  const solutions = [
    {
      title: "5G Private Networks",
      description: "Dedicated 5G networks for enterprise campuses and industrial facilities",
      icon: Building,
      features: ["Network slicing", "Custom security policies", "Dedicated bandwidth", "Low latency"]
    },
    {
      title: "5G Edge Computing",
      description: "Distributed computing infrastructure for faster application performance",
      icon: Cloud,
      features: ["Edge data centers", "Local processing", "Reduced latency", "Bandwidth optimization"]
    },
    {
      title: "5G IoT Solutions",
      description: "Comprehensive IoT connectivity and management for enterprise applications",
      icon: Workflow,
      features: ["Device management", "Real-time monitoring", "Data analytics", "Automation"]
    },
    {
      title: "5G Mobile Solutions",
      description: "Enterprise mobile solutions with 5G connectivity and security",
      icon: Smartphone,
      features: ["Mobile device management", "Secure connectivity", "App optimization", "Performance monitoring"]
=======
      icon: Smartphone,
      title: "Mobile Workforce",
      description: "High-speed mobile connectivity for remote workers, field teams, and mobile applications."
    },
    {
      icon: Server,
      title: "Edge Computing",
      description: "Distributed computing infrastructure with ultra-low latency for real-time processing."
    },
    {
      icon: Router,
      title: "Network Infrastructure",
      description: "High-capacity network backbone for data centers, offices, and distributed locations."
    },
    {
      icon: Wifi,
      title: "Wireless Connectivity",
      description: "Enterprise-grade wireless networks with gigabit speeds and reliable coverage."
    },
    {
      icon: Satellite,
      title: "Remote Locations",
      description: "5G connectivity for remote offices, manufacturing sites, and field operations."
    },
    {
      icon: Database,
      title: "Data Centers",
      description: "High-speed interconnections between data centers and cloud infrastructure."
    }
  ];

  const benefits = [
=======
    "Increase network speed by 100x compared to 4G",
    "Reduce latency by 90% for real-time applications",
    "Support 100x more connected devices per area",
    "Improve network reliability and uptime",
    "Enable new enterprise applications and services",
    "Reduce infrastructure costs through virtualization"
  ];

  const useCases = [
    {
      description: "Worldwide 5G deployment with seamless roaming and connectivity"
    },
    {
      icon: BarChart3,
      title: "Network Analytics",
      description: "Advanced monitoring and analytics for optimal network performance"
=======
      title: "Smart Manufacturing",
      description: "5G-powered smart factories with real-time monitoring, autonomous robots, and predictive maintenance."
    },
    {
      title: "Autonomous Vehicles",
      description: "Connected autonomous vehicles with real-time communication and ultra-low latency control systems."
    },
    {
      title: "Remote Healthcare",
      description: "Telemedicine and remote surgery with real-time high-definition video and haptic feedback."
    },
    {
      title: "Smart Cities",
      description: "Intelligent city infrastructure with connected sensors, traffic management, and public safety systems."
    }
=======
    "10x faster data transfer speeds",
    "99.9% network reliability",
    "50% reduction in operational costs",
    "Real-time data processing",
    "Enhanced mobile workforce productivity",
    "Future-proof technology infrastructure"
  ];

  const solutions = [
    {
      metric: "Peak Data Rate",
      value: "10 Gbps",
      description: "Maximum download speed"
    },
    {
      title: "Healthcare & Telemedicine",
      description: "Support remote surgeries and real-time patient monitoring",
      benefits: ["Remote consultations", "Real-time diagnostics", "Emergency response systems"]
    },
    {
      title: "Autonomous Vehicles",
      description: "Power connected and autonomous vehicle networks",
      benefits: ["V2X communication", "Traffic optimization", "Safety systems"]
    },
    {
    { icon: Signal, title: "Ultra-Low Latency", description: "Sub-millisecond response times for mission-critical applications" },
    { icon: Wifi, title: "High Bandwidth", description: "Multi-gigabit speeds for data-intensive operations" },
    { icon: Network, title: "Massive Connectivity", description: "Connect millions of devices per square kilometer" },
    { icon: Shield, title: "Enhanced Security", description: "Built-in security features and encryption protocols" },
    { icon: Cloud, title: "Edge Computing", description: "Process data closer to the source for faster insights" },
    { icon: Settings, title: "Network Flexibility", description: "Configurable network slices for different use cases" }
  ];

  const benefits = [
      title: "Smart Manufacturing",
      description: "5G-powered smart factories with real-time monitoring, autonomous robots, and predictive maintenance."
    },
    {
      title: "Autonomous Vehicles",
      description: "Connected autonomous vehicles with real-time communication and ultra-low latency control systems."
    },
    {
      title: "Remote Healthcare",
      description: "Telemedicine and remote surgery with real-time high-definition video and haptic feedback."
    },
    {
      title: "Smart Cities",
      description: "Intelligent city infrastructure with connected sensors, traffic management, and public safety systems."
    }
=======
    "10x faster data transfer speeds compared to 4G",
    "99.9% network uptime guarantee",
    "24/7 enterprise support and monitoring",
    "Custom network configurations for your business",
    "Seamless integration with existing infrastructure",
    "Compliance with industry security standards"
  ];

  const networkMetrics = [
    {
      metric: "Peak Data Rate",
      value: "10 Gbps",
      description: "Maximum download speed"
    },
    {
      metric: "Latency",
      value: "<1ms",
      description: "Network response time"
    },
    {
      metric: "Device Density",
      value: "1M/km²",
      description: "Connected devices per area"
    },
    {
      metric: "Mobility",
      value: "500 km/h",
      description: "Maximum movement speed support"
=======
      title: "Manufacturing",
      description: "Smart factories with real-time monitoring and automation",
      icon: Building,
      benefits: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Worker safety"]
    },
    {
      title: "Healthcare",
      description: "Telemedicine and remote patient monitoring",
      icon: Heart,
      benefits: ["Remote consultations", "Patient monitoring", "Medical imaging", "Emergency response"]
    },
    {
      title: "Transportation",
      description: "Connected vehicles and smart transportation systems",
      icon: Rocket,
      benefits: ["Traffic management", "Fleet optimization", "Passenger safety", "Route planning"]
    },
    {
      title: "Retail",
      description: "Smart retail with personalized customer experiences",
      icon: ShoppingCart,
      benefits: ["Customer analytics", "Inventory management", "Personalized marketing", "Checkout optimization"]
=======
      industry: 'Manufacturing',
      applications: ['Smart factories', 'Predictive maintenance', 'Quality control', 'Supply chain optimization']
    },
    {
      industry: 'Healthcare',
      applications: ['Telemedicine', 'Remote monitoring', 'Medical imaging', 'Emergency response']
    },
    {
      industry: 'Transportation',
      applications: ['Connected vehicles', 'Traffic management', 'Logistics optimization', 'Public safety']
    },
    {
      industry: 'Retail',
      applications: ['Smart stores', 'Inventory management', 'Customer analytics', 'Omnichannel experiences']
=======
    "10x faster data transmission compared to 4G",
    "Ultra-low latency for real-time applications",
    "Massive IoT device support and management",
    "Enhanced security with network slicing",
    "Scalable infrastructure for business growth",
    "Global coverage with seamless roaming"
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "AI-Powered Optimization",
      description: "Intelligent network optimization and traffic management using AI algorithms."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive network performance monitoring and analytics dashboards."
    },
    {
      icon: Settings,
      title: "Network Management",
      description: "Centralized network management with automated configuration and optimization."
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of network performance, security, and user experience."
    },
    {
      icon: Lock,
      title: "Security Management",
      description: "Advanced security features including network slicing and threat detection."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous optimization of network performance and user experience."
    }
=======
      description: "Real-time monitoring and control of industrial IoT devices",
      icon: Settings,
      impact: "40% efficiency boost"
    },
    {
      title: "Autonomous Vehicles",
      description: "Ultra-low latency communication for connected and autonomous vehicles",
      icon: Car,
      impact: "99.9% reliability"
    },
    {
      title: "Remote Healthcare",
      description: "High-bandwidth telemedicine and remote patient monitoring",
      icon: Heart,
      impact: "Real-time diagnostics"
    },
    {
      title: "Smart Cities",
      description: "Connected infrastructure and intelligent urban management",
      icon: Globe,
      impact: "30% cost reduction"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Enterprise Clients", description: "Trusted by Fortune 500 companies" },
    { icon: TrendingUp, value: "10x", label: "Speed Increase", description: "Compared to 4G networks" },
    { icon: Award, value: "99.9%", label: "Uptime", description: "Enterprise-grade reliability" },
    { icon: Globe, value: "25+", label: "Countries", description: "Global 5G deployment" }
  ];

  const industries = [
    {
      title: "Manufacturing",
      icon: Building,
      description: "Industry 4.0 transformation with 5G connectivity"
    },
    {
      title: "Healthcare",
      icon: Heart,
      description: "Next-generation healthcare with 5G telemedicine"
    },
    {
      title: "Transportation",
      icon: Rocket,
      description: "Connected transportation and smart cities"
    },
    {
      title: "Retail",
      icon: ShoppingCart,
      description: "Smart retail and customer experience optimization"
    },
    {
      title: "Energy",
      icon: Zap,
      description: "Smart grid and energy management systems"
    },
    {
      title: "Finance",
      icon: DollarSign,
      description: "High-frequency trading and financial services"
    }
  ];
=======
import { Link } from 'react-router-dom';
import { Network, Zap, Shield, ArrowRight, Users, Target, Clock, BarChart3, Globe, Cpu } from 'lucide-react';

  const solutions = [
    {
      title: "Private 5G Networks",
      description: "Dedicated 5G infrastructure for enterprise use",
      icon: Network
    },
    {
      title: "Network Slicing",
      description: "Isolated network segments for different applications",
      icon: Shield
    },
    {
      title: "Edge Computing",
      description: "Local data processing for reduced latency",
      icon: Cpu
    },
    {
      title: "IoT Integration",
      description: "Seamless connectivity for smart devices",
      icon: Wifi
=======
      metric: "Mobility",
      value: "500 km/h",
      description: "Maximum movement speed support"
    }
=======
    "10x faster than 4G networks",
    "Ultra-low latency for real-time applications",
    "Massive IoT device connectivity",
    "Enhanced mobile broadband",
    "Network slicing for different use cases",
    "Improved energy efficiency"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>5G Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your enterprise with our cutting-edge 5G solutions. Ultra-fast connectivity, low latency, and enterprise-grade security for the next generation of business." />
        <meta name="keywords" content="5G enterprise, 5G solutions, enterprise 5G, 5G networks, 5G private networks, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-enterprise-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Wifi className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                5G Enterprise Solutions
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your enterprise with cutting-edge 5G technology. Experience ultra-fast connectivity, 
              ultra-low latency, and massive IoT capabilities for the next generation of business operations.
=======
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                5G Enterprise Solutions
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your enterprise with cutting-edge 5G technology. Experience ultra-fast connectivity, 
              ultra-low latency, and massive IoT support for the next generation of business operations.
=======
import { Network, Zap, Shield, ArrowRight, Users, Target, Clock, BarChart3, Globe, Cpu } from 'lucide-react';

export default function FiveGEnterpriseSolutions() {
  return (
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              5G Enterprise
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your enterprise with next-generation 5G connectivity. Experience ultra-fast speeds, 
              ultra-low latency, and massive IoT connectivity for the future of business.
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Wifi className="w-12 h-12 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
                5G Enterprise Solutions
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with next-generation 5G connectivity. 
              Experience ultra-fast speeds, ultra-low latency, and enterprise-grade security.
=======
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              5G Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with next-generation 5G technology. 
              Ultra-fast connectivity, enterprise-grade security, and seamless integration.
=======
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Network, Zap, Shield, Cpu, Globe, Users, Target, BarChart3, Cloud, Lock, Wifi, Smartphone } from 'lucide-react';

const FiveGEnterpriseSolutions = () => {
  return (
    <>
      <SEOHead 
        title="5G Enterprise Solutions - Zion Tech Group"
        description="Transform your enterprise with cutting-edge 5G technology solutions. High-speed connectivity, low latency, and massive IoT support for modern businesses."
        keywords="5G enterprise solutions, 5G technology, enterprise connectivity, IoT solutions, low latency networks, high-speed internet"
        type="website"
        url="https://ziontechgroup.com/5g-enterprise-solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Network className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                5G Enterprise Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Unlock the full potential of 5G technology with our enterprise-grade solutions. 
                Experience ultra-fast connectivity, ultra-low latency, and massive IoT support for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  to="/demo"
                  className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose 5G for Your Enterprise?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented speed, reliability, and connectivity that transforms 
                how your business operates and serves customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Ultra-Fast Speeds</h3>
                <p className="text-gray-300">
                  Experience download speeds up to 10 Gbps - 100x faster than 4G, 
                  enabling instant file transfers and seamless streaming.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Ultra-Low Latency</h3>
                <p className="text-gray-300">
                  Sub-1ms latency enables real-time applications like autonomous vehicles, 
                  remote surgery, and instant gaming experiences.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Massive IoT Support</h3>
                <p className="text-gray-300">
                  Connect up to 1 million devices per square kilometer, enabling 
                  comprehensive smart city and industrial IoT deployments.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enhanced Security</h3>
                <p className="text-gray-300">
                  Advanced encryption and network slicing provide enterprise-grade security 
                  for sensitive business communications and data.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Network Slicing</h3>
                <p className="text-gray-300">
                  Create virtual networks tailored to specific business needs, 
                  ensuring optimal performance for critical applications.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Analytics</h3>
                <p className="text-gray-300">
                  Monitor network performance, user experience, and business metrics 
                  in real-time for data-driven decision making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-gray-800/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G technology is revolutionizing industries and creating 
                new opportunities for business innovation and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Smart Manufacturing</h3>
                    <p className="text-gray-300">
                      Enable real-time monitoring, predictive maintenance, and autonomous 
                      robotics with ultra-low latency 5G connectivity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Edge Computing</h3>
                    <p className="text-gray-300">
                      Deploy edge computing solutions closer to users and devices, 
                      reducing latency and improving application performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Remote Work & Collaboration</h3>
                    <p className="text-gray-300">
                      Enable seamless video conferencing, virtual reality meetings, 
                      and collaborative workspaces with high-bandwidth 5G.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">IoT & Smart Cities</h3>
                    <p className="text-gray-300">
                      Connect thousands of sensors and devices for smart traffic management, 
                      environmental monitoring, and public safety systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Healthcare & Telemedicine</h3>
                    <p className="text-gray-300">
                      Enable high-quality remote consultations, medical imaging, 
                      and emergency response with reliable 5G connectivity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Network className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Autonomous Vehicles</h3>
                    <p className="text-gray-300">
                      Support connected and autonomous vehicles with real-time 
                      communication, navigation, and safety systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our 5G Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G solutions designed to meet the unique needs of modern enterprises, 
                from infrastructure deployment to application development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">5G Infrastructure</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>5G Core Network Deployment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Small Cell & DAS Solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Network Slicing Configuration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Edge Computing Integration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-xl p-8 border border-green-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">5G Applications</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>IoT Platform Development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Real-time Analytics Solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>AR/VR Applications</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Autonomous System Integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-800/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise with 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking organizations that are already leveraging 5G technology 
              to gain competitive advantages and drive innovation.
=======
    <>
      <Helmet>
        <title>5G Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary 5G enterprise solutions that deliver ultra-fast connectivity, ultra-low latency, and massive IoT support. Transform your business with next-generation 5G technology." />
        <meta name="keywords" content="5G enterprise, 5G solutions, enterprise connectivity, 5G networks, IoT connectivity, network infrastructure" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-enterprise-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              5G Enterprise
              <span className="block bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of enterprise connectivity with our revolutionary 5G solutions. 
              Ultra-fast speeds, ultra-low latency, and massive IoT support for the next generation 
              of business applications.
=======
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
=======
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Helmet>
        <title>5G Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary 5G enterprise solutions with ultra-fast connectivity, low latency, and massive IoT support. Transform your business with next-generation network technology." />
        <meta name="keywords" content="5G enterprise, 5G solutions, network infrastructure, IoT connectivity, low latency, enterprise networking" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-enterprise-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              5G Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Next-generation 5G networks designed for enterprise transformation with ultra-fast 
              connectivity, ultra-low latency, and massive IoT support for the future of business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Network Assessment
=======
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Network className="h-12 w-12 text-blue-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              5G Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Transform your enterprise with next-generation 5G connectivity, ultra-low latency, and enterprise-grade security
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started
=======
              <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-teal-500/50 text-teal-400 hover:bg-teal-500/10 font-semibold rounded-xl transition-all duration-300">
                Schedule Demo
              </button>
              <button className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Demo
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/5g-network-optimization"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
=======
=======
                to="/services/it-infrastructure"
                className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                Learn More
                className="bg-white text-zion-blue px-8 py-4 rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                Schedule Demo
=======
              </Link>
            </div>
          </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Our 5G Solutions?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our enterprise-grade 5G solutions deliver unmatched performance, security, and reliability 
              to power your digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <>
      <SEO 
        title="5G Enterprise Solutions | Next-Generation Connectivity"
        description="Transform your business with Zion Tech Group's 5G enterprise solutions. Private networks, edge computing, IoT integration, and industrial automation."
        keywords="5G enterprise, private 5G networks, edge computing, industrial automation, network slicing, 5G security"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8"
              >
                <Signal className="w-4 h-4 mr-2" />
                Next-Generation Enterprise Connectivity
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                5G Enterprise
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Solutions
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              >
                Transform your business operations with cutting-edge 5G technology. From private networks to edge computing integration, unlock unprecedented connectivity and performance.
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-300 font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  Request Demo
                </Link>
              </motion.div>
=======
            </div>
          </div>
        </motion.section>

            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Healthcare & Telemedicine</h3>
                  <p className="text-gray-400">
                    Remote surgery, real-time patient monitoring, and high-quality video consultations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Network className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Cities & Infrastructure</h3>
                  <p className="text-gray-400">
                    Connected traffic systems, smart grids, and environmental monitoring networks.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Autonomous Vehicles</h3>
                  <p className="text-gray-400">
                    Vehicle-to-vehicle communication, real-time navigation, and fleet management systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Edge Computing</h3>
                  <p className="text-gray-400">
                    Distributed computing infrastructure for real-time data processing and analytics.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Retail & E-commerce</h3>
                  <p className="text-gray-400">
                    Augmented reality shopping experiences, inventory management, and customer analytics.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary 5G Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our 5G enterprise solutions combine cutting-edge network technology with 
              advanced enterprise features to deliver unprecedented connectivity and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our 5G Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade 5G technology designed for reliability, security, and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
=======
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G enterprise solutions deliver unprecedented capabilities 
                that redefine how businesses connect and communicate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-teal-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G technology is revolutionizing various business operations 
                and creating new possibilities for innovation and growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge 5G technology with comprehensive network management 
                to deliver unprecedented connectivity excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose 5G Enterprise Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the competitive advantage that 5G technology provides 
                for your organization's connectivity and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-2xl p-8">
                <div className="text-center">
                  <Star className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Technology Pioneer</h3>
                  <p className="text-gray-300 mb-6">
                    Be among the first to experience the power of 5G enterprise solutions 
                    and gain a significant competitive advantage in your industry.
                  </p>
                  <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-500 hover:to-cyan-500 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Enterprise Use Cases
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Discover how 5G technology is revolutionizing industries and transforming business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose 5G for Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our 5G solutions deliver unprecedented speed, reliability, and capabilities 
              that will revolutionize how your business operates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
=======
=======
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Network Infrastructure
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented network performance and capabilities with our 5G 
              enterprise solutions that enable the future of business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-8 border border-cyan-500/30"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Network Performance</h3>
              <div className="space-y-4">
                {networkMetrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{metric.metric}</span>
                    <span className="text-cyan-400 font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose 5G for Your Enterprise?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our 5G solutions deliver unprecedented performance, security, and scalability for modern enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
=======
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {useCase.description}
                  </p>
=======
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-6 h-6 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float">
          <div className="w-3 h-3 bg-indigo-400 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              5G Technology Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of 5G with our enterprise-grade solutions designed for performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
=======
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how 5G technology is transforming industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center text-gray-300">
                      <Target className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise 5G Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 5G solutions designed specifically for enterprise needs and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <solution.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose 5G Enterprise Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented performance and capabilities with next-generation 5G technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
=======
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From smart manufacturing to autonomous vehicles, our 5G enterprise solutions 
              enable revolutionary applications across all industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive 5G Solutions
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our enterprise 5G solutions are designed to meet the unique needs of modern businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={solution.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${solution.color} mb-6`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                5G Enterprise Benefits
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Discover the transformative advantages of 5G technology for your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                5G technology is transforming industries across the board
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={industry.name}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
                  >
                    <div className="flex items-center mb-6">
                      <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                        <p className="text-gray-300">{industry.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {industry.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {app}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with 5G?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact our experts to discuss your 5G enterprise solution requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                >
                  Contact Our Experts
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific 5G Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored 5G solutions designed for your specific industry needs and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
=======
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how 5G technology can revolutionize your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-800/30 rounded-lg border border-gray-700"
              >
                <Star className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
=======
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              5G Technology Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the transformative benefits that 5G technology brings to your enterprise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
              >
                <Star className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
=======
      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how 5G technology is transforming industries and enabling new business models
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{useCase.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
=======
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
=======
      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From smart manufacturing to autonomous vehicles, our 5G enterprise solutions 
              enable revolutionary applications across all industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            ))}
=======
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Operational Excellence</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Increase operational efficiency by up to 50%</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Real-time data processing and analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Seamless remote work and collaboration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Enhanced customer experiences</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Competitive Advantage</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>First-mover advantage in 5G adoption</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Innovation in products and services</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Future-ready business infrastructure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Scalable growth opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise with 5G?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the 5G revolution and unlock unprecedented business opportunities. 
            Our expert team is ready to help you implement cutting-edge 5G solutions.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with 5G?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the 5G revolution and unlock new possibilities for your enterprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
      <section className="py-20 bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business with 5G?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Join the future of connectivity. Our expert team is ready to help you implement 
              cutting-edge 5G solutions that will revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue px-8 py-4 rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
=======
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
=======
      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From manufacturing to healthcare, our 5G solutions are transforming businesses across all sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-xs">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
=======
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-teal-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience 5G?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey toward next-generation connectivity today 
                and discover the unlimited potential of 5G enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-teal-500/50 text-teal-400 hover:bg-teal-500/10 font-semibold rounded-xl transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
=======
    <>
      <SEOHead 
        customData={{
          title: "5G Enterprise Solutions - Zion Tech Group",
          description: "Revolutionary 5G enterprise solutions with ultra-fast connectivity, network slicing, and edge computing integration. Transform your business with next-generation network technology.",
          keywords: ["5G enterprise", "5G solutions", "network slicing", "edge computing", "IoT connectivity", "smart manufacturing", "autonomous vehicles", "smart cities"],
          type: "website",
          url: "https://ziontechgroup.com/5g-enterprise-solutions"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                5G Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Transform your enterprise with next-generation 5G technology. Experience ultra-fast connectivity, network slicing, and edge computing integration for unprecedented business capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services/it-infrastructure"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-cyan-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G enterprise solutions combine cutting-edge network technology with deep enterprise expertise to deliver unprecedented connectivity capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transformative Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our 5G solutions are revolutionizing industries across the globe.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0">
                      <useCase.icon className="h-12 w-12 text-cyan-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <div className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {useCase.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform with 5G?
=======
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-2xl p-12 text-center border border-blue-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Embrace 5G Enterprise Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading enterprises that have transformed their operations with our 5G solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services/it-infrastructure"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Infrastructure Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
=======
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your 5G Journey
              </Link>
              <Link
                to="/demo"
                className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
=======
              to="/cybersecurity"
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Cybersecurity
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Protect your 5G infrastructure with enterprise-grade security solutions.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/it-infrastructure"
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                IT Infrastructure
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Build a robust foundation for your 5G enterprise network.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
            </Link>
=======
=======
      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced 5G Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the latest 5G standards and technologies for maximum performance, 
              reliability, and future-proof enterprise solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <CogIcon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Network Slicing</h3>
              <p className="text-gray-300">Customized network segments for different enterprise applications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <LightBulbIcon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Edge Computing</h3>
              <p className="text-gray-300">Distributed computing for ultra-low latency applications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <ShieldCheckIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Security & Privacy</h3>
              <p className="text-gray-300">Enterprise-grade security with advanced encryption</p>
            </motion.div>
      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your business operations with 5G technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Operational Excellence</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Increase operational efficiency by up to 50%</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Real-time data processing and analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Seamless remote work and collaboration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Enhanced customer experiences</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Competitive Advantage</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>First-mover advantage in 5G adoption</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Innovation in products and services</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Future-ready business infrastructure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Scalable growth opportunities</span>
                </li>
              </ul>
            </div>
=======
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise with 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of enterprise connectivity. Our experts are ready to help you implement 
              cutting-edge 5G solutions that will drive your business forward.
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-2xl p-12 text-center border border-blue-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Embrace 5G Enterprise Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with next-generation 5G connectivity, ultra-fast speeds, 
              and revolutionary enterprise applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
=======
        </section>
      </div>
    </>
=======
    </div>
  );
=======
}