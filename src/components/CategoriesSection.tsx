
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
  },
];

const specialServices = [
  {
    title: "Enhanced AI & IT Services",
    link: "/enhanced-services"
  },
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services"
  },
  {
    title: "Services Pricing",
    description: "Compare pricing and ROI for all our services",
    icon: <TrendingUp className="w-10 h-10" />,
    link: "/services-pricing",
    color: "from-green-500 to-emerald-600",
    features: ["Transparent Pricing", "ROI Calculator", "Custom Quotes", "Volume Discounts"]
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI and machine learning services",
    icon: <Brain className="w-10 h-10" />,
    link: "/ai-services",
    color: "from-cyan-500 to-blue-600",
    features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "Cybersecurity",
    description: "Advanced security and threat protection services",
    icon: <Shield className="w-10 h-10" />,
    link: "/cybersecurity-services",
    color: "from-red-500 to-pink-600",
    features: ["Threat Detection", "Penetration Testing", "Compliance", "Incident Response"]
  },
  {
    title: "Cost Calculator",
    link: "/service-calculator"
  },
  {
    title: "Service Analytics",
    link: "/service-analytics"
  },
  {
    title: "Service Marketplace",
    link: "/service-marketplace"
  }
];

const advancedCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    description: "Process automation, NLP, computer vision",
    link: "/expanded-services?category=AI%20%26%20Machine%20Learning",
    color: "from-purple-500 to-pink-600",
    features: ["Neural Networks", "Deep Learning", "Natural Language Processing"]
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="w-6 h-6" />,
    description: "Zero-trust, threat detection, compliance",
    link: "/expanded-services?category=Cybersecurity",
    color: "from-red-500 to-orange-600",
    features: ["Zero Trust", "Threat Intelligence", "SOC Services"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Globe className="w-6 h-6" />,
    description: "Multi-cloud, automation, orchestration",
    link: "/expanded-services?category=Cloud%20%26%20DevOps",
    color: "from-blue-500 to-cyan-600",
    features: ["Multi-Cloud", "Infrastructure as Code", "Monitoring"]
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6" />,
    description: "Big data, BI, predictive analytics",
    link: "/expanded-services?category=Data%20%26%20Analytics",
    color: "from-green-500 to-emerald-600",
    features: ["Data Warehousing", "ETL Pipelines", "Real-time Analytics"]
  },
  {
    title: "IoT & Edge Computing",
    icon: <Network className="w-6 h-6" />,
    description: "Connected devices, real-time processing",
    link: "/expanded-services?category=IoT%20%26%20Edge%20Computing",
    color: "from-indigo-500 to-purple-600",
    features: ["IoT Platforms", "Edge Computing", "Sensor Networks"]
  },
  {
    title: "Blockchain & Web3",
    icon: <Zap className="w-6 h-6" />,
    description: "Smart contracts, decentralized solutions",
    link: "/expanded-services?category=Blockchain%20%26%20Web3",
    color: "from-yellow-500 to-orange-600",
    features: ["Smart Contracts", "DeFi", "NFTs", "DApps"]
  },
  {
    title: "Quantum Computing",
    icon: <Leaf className="w-6 h-6" />,
    description: "Quantum algorithms, optimization",
    link: "/expanded-services?category=Quantum%20Computing",
    color: "from-teal-500 to-blue-600",
    features: ["Quantum Algorithms", "Optimization", "Simulation"]
  },
  {
    title: "AR/VR & Metaverse",
    icon: <Eye className="w-6 h-6" />,
    description: "Immersive experiences, virtual worlds",
    link: "/expanded-services?category=AR%2FVR%20%26%20Metaverse",
    color: "from-pink-500 to-rose-600",
    features: ["Virtual Reality", "Augmented Reality", "3D Modeling"]
  },
  {
    title: "FinTech & Digital Banking",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Digital banking, payments, lending",
    link: "/expanded-services?category=FinTech%20%26%20Digital%20Banking",
    color: "from-blue-600 to-indigo-600",
    features: ["Digital Banking", "Payment Systems", "Lending Platforms"]
