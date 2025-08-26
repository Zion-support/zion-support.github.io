import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Building, 
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
  Network,
  Cloud,
  Lock,
  Eye,
  Sparkles,
  TrendingUp,
  Settings,
  Cpu,
  Brain,
  DollarSign,
  ChartBar,
  Clock,
  Award
} from 'lucide-react';
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
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
  Car,
  Building,
  Factory,
  Hospital,
  ShoppingCart
} from 'lucide-react';
import SEOHead from '../components/SEOHead.jsx';
import React from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Star } from 'lucide-react';
const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
  Building, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Award, 
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  Target,
  BarChart3,
  Cpu,
  Database
} from 'lucide-react';
const CaseStudies = () => {
  const caseStudies = [
    {
      company: "Global Financial Services",
      industry: "Financial Services",
      challenge: "Complex legacy systems and compliance requirements",
      solution: "AI-powered digital transformation and SOC2 compliance automation",
      results: [
        "40% reduction in operational costs",
        "100% SOC2 compliance achievement",
        "60% faster time-to-market for new products"
      ],
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Healthcare Technology Provider",
      industry: "Healthcare",
      challenge: "Patient data security and HIPAA compliance",
      solution: "Advanced cybersecurity suite with AI-powered threat detection",
      results: [
        "99.9% security incident prevention",
        "50% reduction in security response time",
        "Full HIPAA compliance certification"
      ],
      metrics: {
        roi: '320%',
        timeframe: '12 months',
        teamSize: '20 people'
      },
      image: '/api/placeholder/400/300',
      tags: ['Quantum Security', 'Financial Trading', 'AI Prediction', 'Risk Management']
    },
    {
      company: "Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Supply chain inefficiencies and quality control",
      solution: "AI-powered supply chain optimization and predictive maintenance",
      results: [
        "30% improvement in supply chain efficiency",
        "25% reduction in equipment downtime",
        "20% increase in product quality"
      ],
      icon: Cpu,
      color: "from-orange-500 to-red-500"
    },
    {
      company: "E-commerce Platform",
      industry: "Retail",
      challenge: "Customer experience and operational scalability",
      solution: "AI-powered customer analytics and autonomous operations",
      results: [
        "35% increase in customer satisfaction",
        "45% improvement in conversion rates",
        "24/7 autonomous customer support"
      ],
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "Cloud Infrastructure Provider",
      industry: "Technology",
      challenge: "Multi-cloud management and cost optimization",
      solution: "Intelligent cloud orchestration and cost management",
      results: [
        "50% reduction in cloud costs",
        "99.99% uptime achievement",
        "Automated scaling and optimization"
      ],
      icon: Database,
      color: "from-indigo-500 to-blue-500"
    },
    {
      company: "Research Institution",
      industry: "Education",
      challenge: "Research data management and collaboration",
      solution: "AI-powered research platform and collaborative tools",
      results: [
        "3x faster research completion",
        "Enhanced collaboration capabilities",
        "Automated data analysis and insights"
      ],
      icon: Users,
      color: "from-teal-500 to-cyan-500"
    }
  ];
  const testimonials = [
    {
      quote: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions have given us a competitive edge we never thought possible.",
      author: "Sarah Johnson",
      title: "CTO",
      company: "Global Financial Services"
    },
    {
      quote: "The cybersecurity implementation exceeded our expectations. We've achieved unprecedented security levels while maintaining operational efficiency.",
      author: "Michael Chen",
      title: "Security Director",
      company: "Healthcare Technology Provider"
    },
    {
      quote: "Our supply chain optimization has revolutionized our manufacturing process. The AI insights are invaluable for strategic decision-making.",
      author: "David Rodriguez",
      title: "Operations Manager",
      company: "Manufacturing Corporation"
  Star, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Brain,
  Shield,
  Cpu,
  Database,
  Network,
  Target,
  BarChart3,
  Zap,
  Heart,
  Building,
  Globe,
  Award,
  Briefcase,
  Rocket,
  Lightbulb,
  CheckSquare,
  ShoppingCart,
  GraduationCap
} from 'lucide-react';
import { CASE_STUDIES } from "@/data/case-studies";
import SEOHead from "../components/SEOHead.jsx";
import { GradientHeading } from "@/components/GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Transformation",
      company: "MetroHealth Medical Center",
      industry: "Healthcare",
      challenge: "MetroHealth was struggling with inefficient patient data analysis, leading to delayed diagnoses and increased costs.",
      solution: "Implemented our AI healthcare analytics platform with predictive modeling and real-time monitoring capabilities.",
      results: [
        "85% improvement in diagnostic accuracy",
        "40% reduction in treatment costs",
        "70% faster patient data analysis",
        "60% improvement in patient outcomes"
      ],
      technologies: ["AI Analytics", "Machine Learning", "Predictive Modeling", "Real-time Monitoring"],
      icon: Heart,
      color: "from-red-500 to-pink-500",
      featured: true
    },
    {
      id: 2,
      title: "Enterprise AI Automation Platform",
      company: "GlobalTech Solutions",
      industry: "Technology",
      challenge: "GlobalTech needed to automate complex business processes and reduce operational costs across multiple departments.",
      solution: "Deployed our autonomous business operations platform with AI workflow automation and intelligent decision-making.",
      results: [
        "300% increase in operational efficiency",
        "50% reduction in operational costs",
        "80% automation of repetitive tasks",
        "Real-time business intelligence"
      ],
      technologies: ["AI Automation", "Workflow Optimization", "Business Intelligence", "Process Mining"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      id: 3,
      title: "Quantum Neural Network Implementation",
      company: "Quantum Research Labs",
      industry: "Research & Development",
      challenge: "Quantum Research Labs required advanced neural network capabilities for complex scientific computations.",
      solution: "Implemented our quantum neural network platform with hybrid quantum-classical algorithms.",
      results: [
        "1000x faster computation speed",
        "90% improvement in accuracy",
        "Real-time quantum processing",
        "Advanced research capabilities"
      ],
      technologies: ["Quantum Computing", "Neural Networks", "Hybrid Algorithms", "Scientific Computing"],
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      featured: false
    },
    {
      id: 4,
      title: "Cybersecurity & Compliance Automation",
      company: "SecureBank Financial",
      industry: "Financial Services",
      challenge: "SecureBank needed to automate SOC2 compliance processes and enhance threat detection capabilities.",
      solution: "Deployed our SOC2 compliance automation platform with advanced cybersecurity monitoring.",
      results: [
        "95% automation of compliance tasks",
        "99.9% threat detection accuracy",
        "60% reduction in compliance costs",
        "Real-time security monitoring"
      ],
      technologies: ["SOC2 Compliance", "Threat Detection", "Automation", "Security Monitoring"],
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      featured: false
    },
    {
      id: 5,
      title: "5G Enterprise Network Solutions",
      company: "ConnectCorp Telecommunications",
      industry: "Telecommunications",
      challenge: "ConnectCorp needed to deploy high-speed 5G networks for enterprise clients with minimal downtime.",
      solution: "Implemented our 5G enterprise solutions with intelligent network optimization and management.",
      results: [
        "10x faster network speeds",
        "99.9% network uptime",
        "50% reduction in deployment time",
        "Advanced network analytics"
      ],
      technologies: ["5G Networks", "Network Optimization", "Enterprise Solutions", "Network Management"],
      icon: Network,
      color: "from-indigo-500 to-purple-500",
      featured: false
    },
    {
      id: 6,
      title: "AI Marketing Automation Success",
      company: "GrowthMarketing Inc",
      industry: "Marketing",
      challenge: "GrowthMarketing struggled with manual campaign management and poor ROI tracking across multiple channels.",
      solution: "Deployed our AI marketing automation platform with intelligent campaign optimization.",
      results: [
        "300% increase in conversion rates",
        "60% reduction in marketing costs",
        "200% improvement in customer engagement",
        "Real-time campaign optimization"
      ],
      technologies: ["AI Marketing", "Campaign Automation", "ROI Tracking", "Multi-channel Management"],
      icon: Target,
      color: "from-orange-500 to-yellow-500",
      featured: false
  Building2, 
  Shield, 
  Brain, 
  Cloud, 
  Database, 
  Network, 
  Zap,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Globe
} from 'lucide-react';
export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Transformation",
      company: "Fortune 500 Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Complex data silos and manual reporting processes causing 3-week delays in business insights",
      solution: "Implemented AI-driven business intelligence platform with autonomous data processing",
      results: [
        "Reduced reporting time from 3 weeks to 24 hours",
        "Increased data accuracy by 99.7%",
        "Generated $2.3M in cost savings annually",
        "Improved decision-making speed by 85%"
      ],
      technologies: ["AI Business Intelligence", "Data Automation", "Real-time Analytics"],
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Quantum-Safe Cybersecurity Implementation",
      company: "Global Financial Services Inc",
      industry: "Financial Services",
      challenge: "Traditional encryption methods vulnerable to quantum computing threats",
      solution: "Deployed quantum-resistant security framework with AI-powered threat detection",
      results: [
        "Enhanced security posture by 300%",
        "Reduced security incidents by 95%",
        "Achieved SOC2 Type II compliance in 6 months",
        "Protected $50B+ in financial assets"
      ],
      technologies: ["Quantum Cryptography", "AI Security", "SOC2 Compliance"],
      icon: Shield,
import React from 'react';
import SEOHead from '../components/SEOHead.jsx';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  TrendingUp, 
  Shield, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Globe, 
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  BarChart3
} from 'lucide-react';
const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Global Manufacturing Transformation",
      company: "Fortune 500 Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% production delays and 25% quality issues",
      solution: "AI-powered autonomous business operations platform with predictive maintenance",
      results: [
        "60% reduction in production downtime",
        "35% improvement in product quality",
        "$12M annual cost savings",
        "Real-time monitoring of 10,000+ IoT devices"
      ],
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Healthcare AI Revolution",
      company: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Patient wait times averaging 3 hours, diagnostic accuracy below 80%",
      solution: "AI autonomous research assistant with medical imaging analysis",
      results: [
        "85% reduction in patient wait times",
        "95% diagnostic accuracy improvement",
        "40% faster treatment planning",
        "24/7 AI-powered patient monitoring"
      ],
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Financial Services Security Overhaul",
      company: "International Bank Group",
      industry: "Financial Services",
      challenge: "Increasing cyber threats, 15% false positive rate in fraud detection",
      solution: "Quantum-secure cloud infrastructure with AI-powered threat detection",
      results: [
        "99.9% threat detection accuracy",
        "Zero security breaches in 18 months",
        "60% reduction in false positives",
        "Real-time fraud prevention"
      ],
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 4,
      title: "Retail Digital Transformation",
      company: "National Retail Chain",
      industry: "Retail",
      challenge: "Declining foot traffic, poor customer engagement, inventory inefficiencies",
      solution: "AI-powered customer intelligence platform with predictive analytics",
      results: [
        "45% increase in customer engagement",
        "30% improvement in inventory turnover",
        "25% increase in average order value",
        "Personalized shopping experiences"
      ],
      icon: Target,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "Technology Company Innovation",
      company: "Tech Startup Inc",
      industry: "Technology",
      challenge: "Manual development processes, 6-month product release cycles",
      solution: "AI autonomous DevOps platform with automated testing and deployment",
      results: [
        "90% reduction in deployment time",
        "80% fewer production bugs",
        "Continuous integration and deployment",
        "Automated quality assurance"
      ],
      icon: Cpu,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      title: "Government Digital Services",
      company: "Federal Agency",
      industry: "Government",
      challenge: "Citizen service delays, paper-based processes, security vulnerabilities",
      solution: "AI-powered digital transformation with blockchain security",
      results: [
        "70% faster citizen services",
        "100% digital process adoption",
        "Enhanced security compliance",
        "Improved citizen satisfaction"
      ],
      icon: Globe,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Quantum Neural Network Research Platform",
      company: "Research University",
      industry: "Education & Research",
      challenge: "Limited computational power for complex neural network research",
      solution: "Deployed quantum-enhanced neural network platform for advanced AI research",
      results: [
        "Accelerated research by 1000x",
        "Enabled breakthrough discoveries in 6 months",
        "Published 15 peer-reviewed papers",
        "Secured $10M in research funding"
      ],
      technologies: ["Quantum Computing", "Neural Networks", "AI Research"],
      icon: Brain,
      color: "from-violet-500 to-purple-500"
      icon: Building,
      title: "Global Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Complex supply chain optimization and real-time production monitoring across 15 facilities worldwide.",
      solution: "Implemented AI-powered autonomous business operations platform with IoT integration and predictive analytics.",
      results: [
        "40% reduction in operational costs",
        "60% improvement in production efficiency",
        "Real-time visibility across all facilities",
        "Predictive maintenance preventing 85% of downtime"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Financial Services Enterprise",
      industry: "Financial Services",
      challenge: "Complex compliance requirements and security threats requiring 24/7 monitoring and automated response.",
      solution: "Deployed SOC2 compliance automation platform with AI-powered threat detection and automated compliance reporting.",
      results: [
        "90% reduction in compliance audit time",
        "Real-time security threat detection",
        "Automated compliance reporting",
        "Zero security breaches in 18 months"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "Healthcare Research Institute",
      industry: "Healthcare",
      challenge: "Massive data analysis requirements for drug discovery and clinical research across multiple research domains.",
      solution: "Implemented AI autonomous research assistant with quantum neural network capabilities for accelerated research.",
      results: [
        "10x faster research timeline",
        "Discovery of 3 new drug candidates",
        "Automated literature review and analysis",
        "95% accuracy in research findings"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Network,
      title: "Technology Startup",
      industry: "Technology",
      challenge: "Rapid scaling requirements with limited IT resources and need for enterprise-grade infrastructure.",
      solution: "Deployed comprehensive IT infrastructure with AI-powered asset management and 5G enterprise solutions.",
      results: [
        "300% growth in user base",
        "99.9% system uptime",
        "Automated infrastructure scaling",
        "50% reduction in IT operational costs"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Retail Chain",
      industry: "Retail",
      challenge: "Inventory management across 200+ locations with real-time demand forecasting and supply chain optimization.",
      solution: "Implemented AI-powered business intelligence platform with autonomous operations and predictive analytics.",
      results: [
        "25% reduction in inventory costs",
        "Improved customer satisfaction by 35%",
        "Real-time demand forecasting",
        "Automated supply chain optimization"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Cloud,
      title: "Cloud Services Provider",
      industry: "Cloud Services",
      challenge: "Managing complex multi-cloud environments with security compliance and performance optimization requirements.",
      solution: "Deployed comprehensive cloud management platform with AI-powered optimization and security automation.",
      results: [
        "40% improvement in cloud performance",
        "Automated security compliance",
        "Reduced cloud costs by 30%",
        "99.99% service availability"
      ],
      color: "from-teal-500 to-cyan-500"
      title: "Fortune 500 Manufacturing Transformation",
      description: "How we helped a global manufacturing company achieve 40% efficiency improvement with AI-powered automation",
      industry: "Manufacturing",
      icon: Factory,
      results: ["40% efficiency boost", "30% cost reduction", "99.9% uptime"],
      challenge: "Complex legacy systems and manual processes slowing down production",
      solution: "AI-powered automation platform with predictive maintenance",
      impact: "Transformed from traditional manufacturing to Industry 4.0 leader"
    },
    {
      title: "Healthcare AI Implementation",
      description: "Revolutionizing patient care with AI-powered diagnostic tools and automated workflows",
      industry: "Healthcare",
      icon: Hospital,
      results: ["50% faster diagnosis", "90% accuracy improvement", "24/7 availability"],
      challenge: "Long wait times and diagnostic errors affecting patient outcomes",
      solution: "AI diagnostic assistant with automated patient monitoring",
      impact: "Improved patient outcomes and reduced healthcare costs"
    },
    {
      title: "Financial Services Security",
      description: "Bank-grade security implementation with SOC2 compliance automation",
      industry: "Financial Services",
      icon: Shield,
      results: ["99.9% security uptime", "SOC2 compliance", "Zero security breaches"],
      challenge: "Complex compliance requirements and evolving security threats",
      solution: "Automated SOC2 compliance platform with AI threat detection",
      impact: "Achieved industry-leading security posture and compliance"
    },
    {
      title: "Retail Digital Transformation",
      description: "Omnichannel retail transformation with AI-powered customer insights",
      industry: "Retail",
      icon: ShoppingCart,
      results: ["35% sales increase", "60% customer satisfaction", "Real-time analytics"],
      challenge: "Disconnected customer experiences across channels",
      solution: "AI-powered omnichannel platform with predictive analytics",
      impact: "Became market leader in digital retail innovation"
  Target,
  Award,
  BarChart3,
  Shield,
  Zap,
  Brain,
  Globe,
  ShoppingBag
} from 'lucide-react';
const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Transformation",
      client: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Manual patient data analysis was taking 40+ hours per week, leading to delayed treatment decisions and increased operational costs.",
      solution: "Implemented AI-powered analytics platform with real-time patient monitoring and predictive diagnosis capabilities.",
      results: [
        "Reduced data analysis time by 85%",
        "Improved patient outcomes by 23%",
        "Saved $2.4M annually in operational costs",
        "Enhanced staff productivity by 60%"
      ],
      metrics: {
        efficiency: "85%",
        costSavings: "$2.4M",
        timeReduction: "40hrs → 6hrs",
        roi: "340%"
      },
      technologies: ["AI Analytics", "Machine Learning", "Real-time Monitoring", "Predictive Modeling"],
      duration: "6 months",
      teamSize: "8 specialists"
    },
    {
      id: 2,
      title: "Quantum-Safe Cybersecurity Implementation",
      client: "Global Financial Institution",
      industry: "Financial Services",
      challenge: "Traditional encryption methods were vulnerable to quantum computing threats, requiring immediate future-proofing of security infrastructure.",
      solution: "Deployed quantum-resistant cryptography and AI-powered threat detection systems across all digital assets.",
      results: [
        "Enhanced security posture by 95%",
        "Reduced security incidents by 78%",
        "Achieved SOC2 Type II compliance",
        "Future-proofed against quantum threats"
      ],
      metrics: {
        securityImprovement: "95%",
        incidentReduction: "78%",
        compliance: "100%",
        threatDetection: "99.9%"
      },
      technologies: ["Quantum Cryptography", "AI Security", "SOC2 Automation", "Threat Intelligence"],
      duration: "8 months",
      teamSize: "12 specialists"
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      client: "Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Manual business processes were causing bottlenecks, errors, and inefficiencies across 15 departments.",
      solution: "Built comprehensive autonomous business operations platform with AI-driven process automation and decision-making capabilities.",
      results: [
        "Automated 70% of business processes",
        "Reduced operational errors by 92%",
        "Increased productivity by 45%",
        "Cut operational costs by $1.8M annually"
      ],
      metrics: {
        automation: "70%",
        errorReduction: "92%",
        productivity: "45%",
        costSavings: "$1.8M"
      },
      technologies: ["AI Automation", "Process Mining", "RPA", "Business Intelligence"],
      duration: "10 months",
      teamSize: "15 specialists"
    },
    {
      id: 4,
      title: "5G Enterprise Network Infrastructure",
      client: "Technology Startup",
      industry: "Technology",
      challenge: "Legacy network infrastructure couldn't support growing data demands and IoT device proliferation.",
      solution: "Designed and implemented enterprise-grade 5G network with edge computing capabilities and IoT integration.",
      results: [
        "Increased network speed by 20x",
        "Reduced latency by 90%",
        "Supported 10,000+ IoT devices",
        "Enhanced scalability for future growth"
      ],
      metrics: {
        speedIncrease: "20x",
        latencyReduction: "90%",
        deviceSupport: "10,000+",
        uptime: "99.99%"
      },
      technologies: ["5G Networks", "Edge Computing", "IoT Integration", "Network Security"],
      duration: "7 months",
      teamSize: "10 specialists"
    },
    {
      id: 5,
      title: "AI-Powered IT Asset Management",
      client: "Enterprise Corporation",
      industry: "Technology",
      challenge: "Manual IT asset tracking was inefficient, leading to lost equipment, compliance issues, and unnecessary purchases.",
      solution: "Implemented AI-driven IT asset management system with automated tracking, predictive maintenance, and cost optimization.",
      results: [
        "Reduced asset loss by 95%",
        "Optimized IT spending by 30%",
        "Improved compliance reporting by 100%",
        "Enhanced asset lifecycle management"
      ],
      metrics: {
        assetRecovery: "95%",
        costOptimization: "30%",
        compliance: "100%",
        efficiency: "85%"
      },
      technologies: ["AI Analytics", "IoT Sensors", "Predictive Maintenance", "Compliance Automation"],
      duration: "5 months",
      teamSize: "6 specialists"
    }
  ];
  const industries = [
import { 
  Building, 
  Users, 
  TrendingUp, 
  Shield, 
  Cpu, 
  Brain,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';
export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Digital Transformation for Fortune 500 Manufacturing",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy system modernization and AI integration for predictive maintenance",
      solution: "Implemented AI-powered IoT platform with predictive analytics",
      results: [
        "30% reduction in downtime",
        "25% increase in production efficiency",
        "$2M annual cost savings"
      ],
      technologies: ["AI/ML", "IoT", "Cloud Computing", "Predictive Analytics"],
      image: "/images/case-studies/manufacturing-ai.jpg",
      category: "AI & Digital Transformation"
    },
    {
      id: 2,
      title: "Cybersecurity Overhaul for Healthcare Provider",
      company: "Metro Health Systems",
      industry: "Healthcare",
      challenge: "Compliance with HIPAA and SOC2 requirements while improving security posture",
      solution: "Comprehensive security assessment and automated compliance platform",
      results: [
        "100% SOC2 compliance achieved",
        "Zero security breaches in 18 months",
        "40% reduction in security incidents"
      ],
      technologies: ["SOC2 Automation", "Threat Detection", "Compliance Management"],
      image: "/images/case-studies/healthcare-security.jpg",
      category: "Cybersecurity & Compliance"
    },
    {
      id: 3,
      title: "Quantum Computing Implementation for Financial Services",
      company: "Quantum Finance Solutions",
      industry: "Financial Services",
      challenge: "Optimization of complex financial modeling and risk assessment",
      solution: "Quantum neural network platform for portfolio optimization",
      results: [
        "50% faster risk calculations",
        "15% improvement in portfolio returns",
        "Real-time market analysis capabilities"
      ],
      technologies: ["Quantum Computing", "Neural Networks", "Financial Modeling"],
      image: "/images/case-studies/quantum-finance.jpg",
      category: "Quantum Technology"
    },
    {
      id: 4,
      title: "5G Enterprise Network for Smart City Infrastructure",
      company: "Smart City Initiative",
      industry: "Government & Infrastructure",
      challenge: "High-speed connectivity for IoT devices and smart city applications",
      solution: "Private 5G network with edge computing capabilities",
      results: [
        "10x faster data transmission",
        "99.9% network uptime",
        "Support for 100,000+ IoT devices"
      ],
      technologies: ["5G Networks", "Edge Computing", "IoT", "Network Optimization"],
      image: "/images/case-studies/5g-smart-city.jpg",
      category: "5G & Infrastructure"
    },
    {
      id: 5,
      title: "Micro SAAS Platform for Small Business Automation",
      company: "Local Business Alliance",
      industry: "Retail & Services",
      challenge: "Affordable automation solutions for small businesses",
      solution: "Custom micro SAAS platform with AI-powered automation",
      results: [
        "60% reduction in manual processes",
        "25% increase in customer satisfaction",
        "ROI achieved in 6 months"
      ],
      technologies: ["Micro SAAS", "AI Automation", "Business Process Automation"],
      image: "/images/case-studies/micro-saas.jpg",
      category: "Micro SAAS Solutions"
    },
    {
      id: 6,
      title: "AI Research Assistant for Academic Institution",
      company: "Tech University Research Center",
      industry: "Education & Research",
      challenge: "Accelerating research processes and collaboration across departments",
      solution: "AI-powered research assistant with autonomous capabilities",
      results: [
        "40% faster research completion",
        "Improved cross-department collaboration",
        "Enhanced research quality and reproducibility"
      ],
      technologies: ["AI Research", "Natural Language Processing", "Collaboration Tools"],
      image: "/images/case-studies/ai-research.jpg",
      category: "AI Research & Development"
    }
  ];
  const categories = [
    "All",
    "AI & Digital Transformation",
    "Cybersecurity & Compliance",
    "Quantum Technology",
    "5G & Infrastructure",
    "Micro SAAS Solutions",
    "AI Research & Development"
  ];
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, DollarSign, Clock, Target } from 'lucide-react';
const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Transformation",
      client: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and predictive modeling for improved care outcomes",
      solution: "Implemented AI-powered analytics platform with machine learning algorithms for patient risk assessment",
      results: [
        "30% improvement in patient outcome predictions",
        "25% reduction in readmission rates",
        "40% faster diagnosis turnaround time",
        "$2.5M annual cost savings"
      ],
      metrics: {
        roi: "450%",
        timeframe: "18 months",
        teamSize: "8 specialists"
      }
    },
    {
      id: 2,
      title: "Quantum Neural Network for Financial Risk Assessment",
      client: "Global Investment Bank",
      industry: "Financial Services",
      challenge: "Complex market risk modeling requiring quantum-level computational power",
      solution: "Deployed quantum neural network platform for real-time risk assessment and portfolio optimization",
      results: [
        "60% faster risk calculations",
        "35% improvement in prediction accuracy",
        "Real-time portfolio rebalancing",
        "$15M additional trading profits"
      ],
      metrics: {
        roi: "320%",
        timeframe: "24 months",
        teamSize: "12 quantum specialists"
      }
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      client: "Manufacturing Conglomerate",
      industry: "Manufacturing",
      challenge: "Manual business processes causing delays and inefficiencies across 15 facilities",
      solution: "Implemented autonomous business operations platform with AI-driven process automation",
      results: [
        "70% reduction in manual processing time",
        "45% improvement in operational efficiency",
        "24/7 autonomous operations",
        "$8M annual operational cost savings"
      ],
      metrics: {
        roi: "280%",
        timeframe: "12 months",
        teamSize: "15 automation experts"
      }
    },
    {
      id: 4,
      title: "SOC2 Compliance Automation Suite",
      client: "SaaS Technology Company",
      industry: "Technology",
      challenge: "Manual compliance processes taking 3+ months annually with high error rates",
      solution: "Deployed automated SOC2 compliance platform with continuous monitoring and reporting",
      results: [
        "90% reduction in compliance preparation time",
        "100% accuracy in compliance reporting",
        "Real-time compliance monitoring",
        "Zero compliance violations in 2 years"
      ],
      metrics: {
        roi: "600%",
        timeframe: "6 months",
        teamSize: "6 compliance specialists"
      }
    },
    {
      id: 5,
      title: "5G Enterprise Network Infrastructure",
      client: "Smart City Initiative",
      industry: "Government",
      challenge: "Legacy network infrastructure unable to support IoT devices and smart city applications",
      solution: "Designed and deployed enterprise-grade 5G network with edge computing capabilities",
      results: [
        "10x faster network speeds",
        "Support for 100,000+ IoT devices",
        "99.99% network uptime",
        "40% reduction in infrastructure costs"
      ],
      metrics: {
        roi: "380%",
        timeframe: "36 months",
        teamSize: "25 network engineers"
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, TrendingUp, Users, Globe, Shield } from 'lucide-react';
export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Digital Transformation for Fortune 500 Manufacturing",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiency and $2M annual losses",
      solution: "Implemented AI-autonomous business operations platform with predictive analytics",
      results: [
        "65% reduction in operational costs",
        "3x faster decision-making processes",
        "$5M annual savings achieved",
        "99.9% system uptime maintained"
      ],
      metrics: {
        roi: "450%",
        timeframe: "18 months",
        teamSize: "25+ stakeholders"
      }
    },
    {
      id: 2,
      title: "Quantum Neural Network Implementation for Financial Services",
      company: "Quantum Finance Solutions",
      industry: "Financial Services",
      challenge: "Complex risk modeling taking weeks to process, limiting trading opportunities",
      solution: "Deployed quantum neural network platform for real-time risk assessment",
      results: [
        "1000x faster risk calculations",
        "Real-time trading decisions enabled",
        "Risk prediction accuracy improved by 35%",
        "Trading volume increased by 200%"
      ],
      metrics: {
        roi: "320%",
        timeframe: "12 months",
        teamSize: "15+ developers"
      }
    },
    {
      id: 3,
      title: "AI-Autonomous Research Assistant for Pharmaceutical R&D",
      company: "BioTech Innovations Inc",
      industry: "Healthcare & Life Sciences",
      challenge: "Drug discovery process taking 5+ years with 90% failure rate",
      solution: "Integrated AI-autonomous research assistant with machine learning algorithms",
      results: [
        "Drug discovery timeline reduced by 60%",
        "Success rate improved to 25%",
        "Research costs reduced by $50M annually",
        "Patent applications increased by 300%"
      ],
      metrics: {
        roi: "280%",
        timeframe: "24 months",
        teamSize: "40+ researchers"
      }
    },
    {
      id: 4,
      title: "Cybersecurity & SOC2 Compliance Automation",
      company: "SecureTech Enterprises",
      industry: "Technology",
      challenge: "Manual compliance processes taking 6+ months annually with security gaps",
      solution: "Implemented automated SOC2 compliance platform with AI-powered security monitoring",
      results: [
        "Compliance time reduced to 2 weeks",
        "Security incidents decreased by 80%",
        "Audit preparation automated 95%",
        "Annual compliance costs reduced by 70%"
      ],
      metrics: {
        roi: "380%",
        timeframe: "9 months",
        teamSize: "20+ security professionals"
      }
    },
    {
      id: 5,
      title: "5G Enterprise Solutions for Smart City Infrastructure",
      company: "SmartCity Municipal Corp",
      industry: "Government & Infrastructure",
      challenge: "Outdated communication infrastructure limiting smart city capabilities",
      solution: "Deployed comprehensive 5G enterprise solution with IoT integration",
      results: [
        "City-wide connectivity improved by 500%",
        "Smart traffic management reduced congestion by 40%",
        "Emergency response time improved by 60%",
        "Energy efficiency increased by 35%"
      ],
      metrics: {
        roi: "520%",
        timeframe: "30 months",
        teamSize: "50+ engineers"
      }
    { name: "Healthcare", icon: Heart, count: 12 },
    { name: "Financial Services", icon: DollarSign, count: 8 },
    { name: "Technology", icon: Cpu, count: 15 },
    { name: "Manufacturing", icon: Building, count: 6 },
    { name: "Retail", icon: ShoppingCart, count: 4 },
    { name: "Education", icon: GraduationCap, count: 3 }
    { name: "Manufacturing", count: 12, icon: Building2 },
    { name: "Financial Services", count: 8, icon: Shield },
    { name: "Healthcare", count: 15, icon: Users },
    { name: "Technology", count: 20, icon: Globe },
    { name: "Retail", count: 6, icon: TrendingUp },
    { name: "Education", count: 4, icon: Brain }
    { name: "Manufacturing", count: 15, icon: Building },
    { name: "Healthcare", count: 12, icon: Users },
    { name: "Financial Services", count: 18, icon: Shield },
    { name: "Retail", count: 9, icon: Target },
    { name: "Technology", count: 22, icon: Cpu },
    { name: "Government", count: 8, icon: Globe },
    { name: "Energy", count: 6, icon: Zap },
    { name: "Transportation", count: 11, icon: Network }
    "Manufacturing",
    "Financial Services",
    "Healthcare",
    "Technology",
    "Retail",
    "Cloud Services",
    "Education",
    "Government",
    "Energy",
    "Transportation"
    { name: "Healthcare", icon: Users, count: 12, color: "from-blue-500 to-cyan-500" },
    { name: "Financial Services", icon: DollarSign, count: 8, color: "from-green-500 to-emerald-500" },
    { name: "Manufacturing", icon: Target, count: 15, color: "from-orange-500 to-red-500" },
    { name: "Technology", icon: Zap, count: 20, color: "from-purple-500 to-pink-500" },
    { name: "Retail", icon: ShoppingBag, count: 6, color: "from-indigo-500 to-blue-500" },
    { name: "Government", icon: Shield, count: 4, color: "from-gray-500 to-slate-500" }
  ];
  const metrics = [
    {
      icon: DollarSign,
      title: "Cost Reduction",
      value: "40%",
      description: "Average cost savings across all implementations"
    },
    {
      icon: ChartBar,
      title: "Efficiency Gain",
      value: "60%",
      description: "Average improvement in operational efficiency"
    },
    {
      icon: Clock,
      title: "Time Savings",
      value: "10x",
      description: "Average acceleration in project timelines"
    },
    {
      icon: Award,
      title: "Success Rate",
      value: "98%",
      description: "Successful project completion rate"
    }
  ];
  const testimonials = [
    {
      quote: "Zion Tech Group's AI solutions transformed our healthcare operations completely. The results exceeded our expectations.",
      author: "Dr. Sarah Johnson",
      position: "CTO, MetroHealth Medical Center",
      rating: 5
    },
    {
      quote: "The autonomous business platform reduced our operational costs by 50% while improving efficiency by 300%.",
      author: "Michael Chen",
      position: "CEO, GlobalTech Solutions",
      rating: 5
    },
    {
      quote: "Implementing their quantum neural network platform accelerated our research capabilities by 1000x.",
      author: "Dr. Robert Kim",
      position: "Research Director, Quantum Research Labs",
      rating: 5
    }
  ];
      }
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, TrendingUp, Users, Award, Clock, DollarSign, CheckCircle, Star, Zap, Shield, Globe, Target, Brain, Rocket } from 'lucide-react';
import SEOHead from "../components/SEOHead.jsx";
const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Global Manufacturing Company Digital Transformation",
      client: "Fortune 500 Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Legacy systems integration and real-time production monitoring",
      solution: "AI-powered IoT platform with predictive maintenance",
      results: [
        "35% reduction in downtime",
        "28% increase in production efficiency",
        "$2.3M annual cost savings",
        "99.8% system uptime achieved"
      ],
      technologies: ["AI/ML", "IoT", "Cloud Computing", "Predictive Analytics"],
      duration: "8 months",
      teamSize: "12 specialists",
      image: "/api/placeholder/600/400",
      category: "Digital Transformation",
      icon: Building2,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Healthcare Network Cybersecurity Enhancement",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Protecting patient data and ensuring HIPAA compliance",
      solution: "Zero-trust security architecture with AI threat detection",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security breaches in 18 months",
        "45% faster threat response",
        "Risk assessment improved by 60%"
      ],
      technologies: ["Cybersecurity", "AI Threat Detection", "Zero Trust", "Compliance"],
      duration: "6 months",
      teamSize: "8 specialists",
      image: "/api/placeholder/600/400",
      category: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "Financial Services AI Trading Platform",
      client: "Mid-Market Investment Firm",
      industry: "Financial Services",
      challenge: "Manual trading processes and market analysis inefficiencies",
      solution: "AI-powered algorithmic trading and risk management platform",
      results: [
        "40% increase in trading accuracy",
        "67% faster market analysis",
        "$5.1M increase in annual revenue",
        "Risk exposure reduced by 32%"
      ],
      technologies: ["AI/ML", "Algorithmic Trading", "Risk Management", "Real-time Analytics"],
      duration: "10 months",
      teamSize: "15 specialists",
      image: "/api/placeholder/600/400",
      category: "AI Solutions",
      icon: Brain,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Retail Chain Inventory Optimization",
      client: "National Retail Chain",
      industry: "Retail",
      challenge: "Inventory management across 200+ locations",
      solution: "AI-driven demand forecasting and automated inventory system",
      results: [
        "25% reduction in inventory costs",
        "90% improvement in stock accuracy",
        "15% increase in customer satisfaction",
        "30% reduction in out-of-stock incidents"
      ],
      technologies: ["AI Forecasting", "Inventory Management", "Supply Chain", "Analytics"],
      duration: "7 months",
      teamSize: "10 specialists",
      image: "/api/placeholder/600/400",
      category: "Supply Chain",
      icon: Target,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 5,
      title: "Smart City Infrastructure Platform",
      client: "Metropolitan City Government",
      industry: "Government",
      challenge: "Modernizing city infrastructure and improving citizen services",
      solution: "Integrated IoT platform for traffic, utilities, and public services",
      results: [
        "22% reduction in traffic congestion",
        "18% decrease in energy consumption",
        "95% citizen satisfaction rating",
        "40% faster emergency response"
      ],
      technologies: ["IoT", "Smart Infrastructure", "Data Analytics", "Public Services"],
      duration: "14 months",
      teamSize: "20 specialists",
      image: "/api/placeholder/600/400",
      category: "Smart Cities",
      icon: Globe,
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 6,
      title: "Startup Quantum Computing Research Platform",
      client: "Quantum Technology Startup",
      industry: "Technology",
      challenge: "Building scalable quantum computing research infrastructure",
      solution: "Hybrid quantum-classical computing platform with AI optimization",
      results: [
        "50x improvement in computation speed",
        "3 research breakthroughs achieved",
        "$15M Series A funding secured",
        "5 patent applications filed"
      ],
      technologies: ["Quantum Computing", "AI Optimization", "Research Platform", "Innovation"],
      duration: "12 months",
      teamSize: "18 specialists",
      image: "/api/placeholder/600/400",
      category: "Quantum Technology",
      icon: Rocket,
      color: "from-pink-500 to-rose-500"
    }
  ];
  const metrics = [
    { icon: Building2, value: "150+", label: "Projects Completed" },
    { icon: Users, value: "98%", label: "Client Satisfaction" },
    { icon: DollarSign, value: "$50M+", label: "Cost Savings Generated" },
    { icon: Award, value: "25+", label: "Industry Awards" }
  ];
  const testimonials = [
    {
      quote: "Zion Tech Group transformed our manufacturing operations with their AI-powered solutions. The results exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, Global Manufacturing Corp",
      company: "Fortune 500 Company"
    },
    {
      quote: "Their cybersecurity expertise helped us achieve complete HIPAA compliance while improving our operational efficiency.",
      author: "Dr. Michael Chen",
      position: "Chief Information Officer",
      company: "Regional Healthcare Network"
    },
    {
      quote: "The AI trading platform delivered exceptional results and significantly improved our market performance.",
      author: "Robert Williams",
      position: "Head of Technology",
      company: "Investment Firm"
    }
<>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world case studies and success stories from Zion Tech Group clients. See how we've helped businesses transform through technology." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Success Stories
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                & Case Studies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how our AI-powered solutions have transformed businesses across industries. 
              Real results, measurable impact, and proven success stories from organizations 
              that trusted Zion Tech Group.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25">
                View All Case Studies
              </button>
              <button className="px-8 py-4 border-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 font-semibold rounded-xl transition-all duration-300">
                Share Your Story
              </button>
            </div>
          </div>
        </section>
        {/* Metrics Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions deliver measurable, impactful results across all industries 
                and business sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-yellow-400" />
                      </div>
                      <div className="text-4xl font-bold text-yellow-400 mb-2">{metric.value}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{metric.title}</h3>
                      <p className="text-gray-300 text-sm">{metric.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Case Studies Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore detailed case studies showcasing real implementations, 
                challenges overcome, and measurable results achieved.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-yellow-400 mb-1">Challenge</h4>
                          <p className="text-gray-300 text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-cyan-400 mb-1">Solution</h4>
                          <p className="text-gray-300 text-sm">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-2">Results</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Industries Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions have been successfully implemented across diverse industries, 
                delivering measurable results and transformative impact.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                    <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {industry}
                    </h3>
                  </div>
                </div>
              ))}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover how organizations across industries have transformed their operations 
              with Zion Tech Group's AI-powered solutions. Real results, real impact.
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Success Stories & Case Studies
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Real Results from
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                {" "}Real Clients
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how leading organizations across industries have transformed their operations 
              with Zion Tech Group's AI-powered solutions. See the measurable impact and real ROI.
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories That
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Transform Industries
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how leading organizations leverage Zion Tech Group's cutting-edge AI and quantum technologies 
              to achieve breakthrough results and competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
import React from 'react';
import { 
  Building, 
  TrendingUp, 
  Users, 
  Clock, 
  ArrowRight,
  Filter,
  Search,
  Star,
  CheckCircle,
  BarChart3
} from 'lucide-react';
export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI-powered chatbots and automated ticket routing',
      results: [
        'Reduced response time by 85%',
        'Cut customer service costs by 60%',
        'Improved customer satisfaction to 94%'
      ],
      duration: '3 months',
      teamSize: '8 people',
      technologies: ['AI/ML', 'NLP', 'Automation'],
      image: '🤖',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum-Safe Cybersecurity Implementation',
      company: 'GlobalBank International',
      industry: 'Financial Services',
      challenge: 'Vulnerability to quantum computing attacks',
      solution: 'Deployed quantum-resistant cryptography and security protocols',
      results: [
        'Enhanced security against future threats',
        'Compliant with new regulatory requirements',
        'Zero security breaches in 18 months'
      ],
      duration: '6 months',
      teamSize: '12 people',
      technologies: ['Quantum Cryptography', 'Security', 'Compliance'],
      image: '🔒',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Migration',
      company: 'ManufacturePro Inc.',
      industry: 'Manufacturing',
      challenge: 'Outdated on-premise systems limiting scalability',
      solution: 'Migrated to hybrid cloud infrastructure with automation',
      results: [
        'Increased system performance by 300%',
        'Reduced infrastructure costs by 40%',
        'Enabled 24/7 global operations'
      ],
      duration: '8 months',
      teamSize: '15 people',
      technologies: ['Cloud Migration', 'DevOps', 'Automation'],
      image: '☁️',
      featured: false
    },
    {
      id: 4,
      title: 'AI Business Intelligence Platform',
      company: 'RetailChain Corp',
      industry: 'Retail',
      challenge: 'Poor data visibility and decision-making capabilities',
      solution: 'Built comprehensive AI-powered BI platform',
      results: [
        'Improved decision-making speed by 70%',
        'Increased revenue by 25%',
        'Enhanced inventory optimization'
      ],
      duration: '5 months',
      teamSize: '10 people',
      technologies: ['AI/ML', 'Data Analytics', 'Business Intelligence'],
      image: '📊',
      featured: false
    },
    {
      id: 5,
      title: 'Autonomous Manufacturing Systems',
      company: 'AutoTech Industries',
      industry: 'Automotive',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'Implemented AI-driven autonomous manufacturing systems',
      results: [
        'Increased production efficiency by 45%',
        'Reduced defects by 80%',
        'Lowered operational costs by 35%'
      ],
      duration: '10 months',
      teamSize: '20 people',
      technologies: ['AI/ML', 'IoT', 'Robotics'],
      image: '🏭',
      featured: false
    },
    {
      id: 6,
      title: 'Healthcare Data Analytics Platform',
      company: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and poor insights',
      solution: 'Developed unified healthcare analytics platform',
      results: [
        'Improved patient outcomes by 30%',
        'Reduced administrative overhead by 50%',
        'Enhanced diagnostic accuracy'
      ],
      duration: '7 months',
      teamSize: '18 people',
      technologies: ['Data Analytics', 'Healthcare IT', 'AI/ML'],
      image: '🏥',
      featured: false
    }
  ];
  const industries = [
    'All Industries',
    'Technology',
    'Financial Services',
    'Manufacturing',
    'Retail',
    'Healthcare',
    'Government'
  ];
  const technologies = [
    'All Technologies',
    'AI/ML',
    'Quantum Technology',
    'Cybersecurity',
    'Cloud Computing',
    'Data Analytics',
    'IoT'
  ];
  CheckCircle, 
  TrendingUp, 
  Users, 
  Building, 
  Shield, 
  Brain,
  Zap,
  Globe,
  Award,
  ArrowRight
} from 'lucide-react';
const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Transformation",
      client: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and predictive modeling for improved care outcomes",
      solution: "Implemented AI-powered analytics platform with machine learning algorithms for patient risk assessment",
      results: [
        "40% improvement in early disease detection",
        "25% reduction in readmission rates",
        "30% faster diagnosis times",
        "$2.5M annual cost savings"
      ],
      technologies: ["AI/ML", "Healthcare Analytics", "Predictive Modeling", "Data Integration"],
      image: "/images/case-studies/healthcare-analytics.jpg",
      category: "AI Solutions"
    },
    {
      id: 2,
      title: "Quantum-Safe Cybersecurity Implementation",
      client: "Global Financial Institution",
      industry: "Financial Services",
      challenge: "Need for future-proof cybersecurity against quantum computing threats",
      solution: "Deployed quantum-resistant encryption and advanced threat detection systems",
      results: [
        "100% quantum-safe encryption coverage",
        "60% reduction in security incidents",
        "99.99% uptime for security systems",
        "Compliance with international security standards"
      ],
      technologies: ["Quantum Cryptography", "Advanced Threat Detection", "Zero-Trust Architecture", "Compliance Automation"],
      image: "/images/case-studies/quantum-security.jpg",
      category: "Cybersecurity"
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      client: "Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Manual business processes causing delays and inefficiencies in operations",
      solution: "Implemented AI-powered autonomous business operations platform with intelligent automation",
      results: [
        "70% reduction in manual processing time",
        "45% improvement in operational efficiency",
        "90% automation of routine tasks",
        "$3.2M annual operational cost savings"
      ],
      technologies: ["AI Automation", "Process Optimization", "Business Intelligence", "Workflow Management"],
      image: "/images/case-studies/autonomous-operations.jpg",
      category: "Business Operations"
    },
    {
      id: 4,
      title: "5G Enterprise Network Infrastructure",
      client: "Technology Company",
      industry: "Technology",
      challenge: "Legacy network infrastructure limiting growth and innovation capabilities",
      solution: "Designed and deployed enterprise-grade 5G network with edge computing capabilities",
      results: [
        "10x faster network speeds",
        "99.9% network reliability",
        "50% reduction in latency",
        "Support for 10,000+ concurrent users"
      ],
      technologies: ["5G Networks", "Edge Computing", "Network Security", "Infrastructure Management"],
      image: "/images/case-studies/5g-network.jpg",
      category: "Infrastructure"
    },
    {
      id: 5,
      title: "AI-Powered IT Asset Management",
      client: "Enterprise Corporation",
      industry: "Technology",
      challenge: "Inefficient IT asset tracking and management leading to cost overruns",
      solution: "Implemented intelligent IT asset management system with predictive analytics",
      results: [
        "80% improvement in asset utilization",
        "30% reduction in IT costs",
        "Real-time asset tracking and monitoring",
        "Automated compliance reporting"
      ],
      technologies: ["AI Analytics", "Asset Management", "Predictive Maintenance", "Compliance Automation"],
      image: "/images/case-studies/it-asset-management.jpg",
      category: "IT Management"
    },
    {
      id: 6,
      title: "SOC2 Compliance Automation",
      client: "SaaS Startup",
      industry: "Technology",
      challenge: "Manual compliance processes consuming significant time and resources",
      solution: "Automated SOC2 compliance framework with continuous monitoring and reporting",
      results: [
        "95% automation of compliance processes",
        "60% reduction in audit preparation time",
        "100% compliance score achievement",
        "Real-time compliance monitoring"
      ],
      technologies: ["Compliance Automation", "Security Monitoring", "Audit Management", "Risk Assessment"],
      image: "/images/case-studies/soc2-compliance.jpg",
      category: "Compliance"
    }
  ];
  const categories = ["All", "AI Solutions", "Cybersecurity", "Business Operations", "Infrastructure", "IT Management", "Compliance"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const filteredCaseStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      title: "AI-Powered Manufacturing Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Inefficient production processes, high defect rates, and limited predictive maintenance capabilities.",
      solution: "Implemented AI autonomous systems with predictive analytics and automated quality control.",
      results: [
        "Production efficiency increased by 45%",
        "Defect rates reduced by 78%",
        "Maintenance costs decreased by 60%",
        "ROI achieved in 8 months"
      ],
      icon: CpuChipIcon,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      title: "5G Network Infrastructure Overhaul",
      company: "TechConnect Solutions",
      industry: "Telecommunications",
      challenge: "Outdated network infrastructure unable to support modern enterprise demands and IoT deployments.",
      solution: "Deployed comprehensive 5G enterprise solutions with network slicing and edge computing.",
      results: [
        "Network speed increased by 100x",
        "Latency reduced to under 1ms",
        "IoT device support increased by 500%",
        "Customer satisfaction improved by 85%"
      ],
      icon: GlobeAltIcon,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Autonomous Security Implementation",
      company: "SecureBank Financial",
      industry: "Financial Services",
      challenge: "Increasing cyber threats, manual security monitoring, and compliance requirements.",
      solution: "Deployed AI autonomous security platform with 24/7 threat detection and automated response.",
      results: [
        "Security incidents reduced by 95%",
        "Threat response time reduced to under 30 seconds",
        "Compliance automation achieved 100%",
        "Security operations costs reduced by 70%"
      ],
      icon: ShieldCheckIcon,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Quantum Computing Research Platform",
      company: "Quantum Research Institute",
      industry: "Research & Development",
      challenge: "Limited computational power for complex scientific simulations and research projects.",
      solution: "Implemented quantum neural network platform with advanced AI algorithms.",
      results: [
        "Research speed increased by 300%",
        "Complex simulations completed 10x faster",
        "Breakthrough discoveries accelerated",
        "Research funding success rate improved by 150%"
      ],
      icon: RocketLaunchIcon,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "IoT Data Analytics Revolution",
      company: "SmartCity Municipal",
      industry: "Government",
      challenge: "Inefficient city services, limited data insights, and poor resource allocation.",
      solution: "Deployed comprehensive IoT data analytics platform with AI-powered insights.",
      results: [
        "City services efficiency improved by 65%",
        "Resource allocation optimized by 40%",
        "Public safety response time reduced by 50%",
        "Citizen satisfaction increased by 75%"
      ],
      icon: ChartBarIcon,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      title: "AI Content Generation Automation",
      company: "MediaCorp International",
      industry: "Media & Entertainment",
      challenge: "High content production costs, slow turnaround times, and inconsistent quality.",
      solution: "Implemented AI content generation platform with automated creation and optimization.",
      results: [
        "Content production speed increased by 400%",
        "Production costs reduced by 65%",
        "Content quality improved by 85%",
        "Market reach expanded by 200%"
      ],
      icon: LightBulbIcon,
      color: "from-yellow-500 to-orange-600"
    }
  ];
  const industries = [
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Telecommunications",
    "Government",
    "Retail",
    "Education",
    "Transportation"
  ];
  const technologies = [
    "AI & Machine Learning",
    "5G Networks",
    "IoT & Edge Computing",
    "Quantum Computing",
    "Cybersecurity",
    "Cloud Infrastructure",
    "Blockchain",
    "Robotic Process Automation"
  ];
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  TrendingUp, 
  Shield, 
  Cpu, 
  Brain,
  CheckCircle,
  ArrowRight,
  Star,
  Award
} from 'lucide-react';
export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Transformation",
      company: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and predictive modeling for improved care outcomes",
      solution: "Implemented AI-powered analytics platform with machine learning algorithms for patient risk assessment",
      results: [
        "30% improvement in patient outcome predictions",
        "25% reduction in readmission rates",
        "40% faster diagnosis processing"
      ],
      technologies: ["AI/ML", "Healthcare Analytics", "Predictive Modeling"],
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Quantum-Safe Cybersecurity Implementation",
      company: "Global Financial Institution",
      industry: "Financial Services",
      challenge: "Need for future-proof security against quantum computing threats",
      solution: "Deployed quantum-resistant encryption and advanced threat detection systems",
      results: [
        "100% quantum-safe encryption coverage",
        "60% reduction in security incidents",
        "Enhanced compliance with regulatory requirements"
      ],
      technologies: ["Quantum Security", "Cybersecurity", "Compliance"],
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      company: "Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Manual business processes causing delays and inefficiencies",
      solution: "Implemented AI-driven autonomous business operations platform",
      results: [
        "45% reduction in process execution time",
        "35% increase in operational efficiency",
        "Real-time decision making capabilities"
      ],
      technologies: ["AI Automation", "Business Process Management", "IoT"],
      icon: Building,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "5G Enterprise Network Infrastructure",
      company: "Technology Enterprise",
      industry: "Technology",
      challenge: "Legacy network infrastructure limiting growth and innovation",
      solution: "Designed and deployed enterprise-grade 5G network with edge computing",
      results: [
        "10x faster data transfer speeds",
        "99.9% network uptime reliability",
        "Scalable infrastructure for future growth"
      ],
      technologies: ["5G Networks", "Edge Computing", "Network Infrastructure"],
      icon: Cpu,
      color: "from-purple-500 to-violet-500"
    },
    {
      id: 5,
      title: "AI Research Assistant Implementation",
      company: "Research Institute",
      industry: "Research & Development",
      challenge: "Manual research processes slowing down innovation cycles",
      solution: "Deployed AI-powered research assistant with autonomous capabilities",
      results: [
        "50% faster research completion",
        "Enhanced data analysis accuracy",
        "Automated literature review processes"
      ],
      technologies: ["AI Research", "Natural Language Processing", "Data Analytics"],
      icon: Brain,
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 6,
      title: "SOC2 Compliance Automation",
      company: "SaaS Platform",
      industry: "Software as a Service",
      challenge: "Complex compliance requirements and manual audit processes",
      solution: "Implemented automated SOC2 compliance monitoring and reporting",
      results: [
        "90% reduction in compliance audit time",
        "Continuous compliance monitoring",
        "Automated report generation"
      ],
      technologies: ["Compliance Automation", "Security Monitoring", "Audit Management"],
      icon: Shield,
      color: "from-indigo-500 to-blue-500"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories and case studies from Zion Tech Group. See how our AI, 5G, and technology solutions transform businesses across industries." />
        <meta name="keywords" content="case studies, success stories, AI transformation, 5G implementation, technology ROI, business transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>
      {/* Hero Section */}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Success Stories
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
  const stats = [
    { label: "Successful Projects", value: "150+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Average ROI", value: "350%", icon: TrendingUp },
    { label: "Global Clients", value: "25+", icon: Globe },
    { label: "Team Members", value: "100+", icon: Users },
    { label: "Security Certifications", value: "15+", icon: Shield }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate-darker">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Success Stories That
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"> Transform Industries</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
          >
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how Zion Tech Group has transformed businesses across industries with cutting-edge AI, quantum computing, and autonomous solutions.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              AI & Machine Learning
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Quantum Computing
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Autonomous Systems
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Cybersecurity
            </span>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover how leading organizations across industries are transforming their 
              operations with Zion Tech Group's cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Success Story
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Download Case Studies
              </button>
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
            Discover how Zion Tech Group's innovative solutions have revolutionized businesses across industries, 
            delivering measurable results and sustainable growth.
          </motion.p>
        </div>
      </section>
import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, DollarSign, Clock, Target, Award, CheckCircle, Lightbulb, Zap, Shield, Globe, Database, Cloud, Brain, Atom, Rocket, Wifi, Building2 } from 'lucide-react';
const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Transformation",
      company: "Fortune 500 Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Complex data silos and manual reporting processes causing 40% delays in decision-making",
      solution: "Implemented AI-driven business intelligence platform with autonomous data processing",
      results: [
        "85% reduction in reporting time",
        "40% improvement in decision accuracy",
        "$2.3M annual cost savings",
        "Real-time insights across 12 departments"
      ],
      technologies: ["AI Business Intelligence", "Data Analytics", "Machine Learning"],
      duration: "6 months",
      teamSize: "8 specialists",
      icon: Brain,
      category: "AI & Analytics"
    },
    {
      id: 2,
      title: "Quantum Neural Network Implementation",
      company: "Global Financial Services Ltd",
      industry: "Financial Services",
      challenge: "Traditional algorithms unable to handle complex market prediction scenarios",
      solution: "Deployed quantum neural network platform for advanced financial modeling",
      results: [
        "300% improvement in prediction accuracy",
        "60% faster risk assessment",
        "$15M additional revenue generated",
        "Competitive advantage in algorithmic trading"
      ],
      technologies: ["Quantum Computing", "Neural Networks", "Financial Modeling"],
      duration: "8 months",
      teamSize: "12 specialists",
      icon: Atom,
      category: "Quantum Technology"
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      company: "Healthcare Network Alliance",
      industry: "Healthcare",
      challenge: "Manual patient scheduling and resource allocation causing 30% inefficiency",
      solution: "AI autonomous business operations platform with intelligent resource management",
      results: [
        "45% improvement in resource utilization",
        "25% reduction in patient wait times",
        "$1.8M operational cost savings",
        "24/7 autonomous operations"
      ],
      technologies: ["AI Automation", "Resource Management", "Healthcare AI"],
      duration: "7 months",
      teamSize: "10 specialists",
      icon: Rocket,
      category: "AI Automation"
    },
    {
      id: 4,
      title: "Cybersecurity SOC2 Compliance Automation",
      company: "Tech Startup Accelerator",
      industry: "Technology",
      challenge: "Manual compliance processes taking 6+ months and high error rates",
      solution: "Automated SOC2 compliance platform with continuous monitoring",
      results: [
        "90% reduction in compliance time",
        "99.9% accuracy in compliance reporting",
        "Real-time security monitoring",
        "Zero compliance violations"
      ],
      technologies: ["Cybersecurity", "Compliance Automation", "SOC2"],
      duration: "4 months",
      teamSize: "6 specialists",
      icon: Shield,
      category: "Security & Compliance"
    },
    {
      id: 5,
      title: "5G Enterprise Infrastructure Deployment",
      company: "Smart City Initiative",
      industry: "Government & Infrastructure",
      challenge: "Legacy infrastructure unable to support smart city IoT requirements",
      solution: "5G enterprise infrastructure with edge computing capabilities",
      results: [
        "10x faster data transmission",
        "Support for 100,000+ IoT devices",
        "Real-time city monitoring",
        "Future-ready infrastructure"
      ],
      technologies: ["5G Technology", "Edge Computing", "IoT Infrastructure"],
      duration: "12 months",
      teamSize: "15 specialists",
      icon: Wifi,
      category: "Infrastructure"
    },
    {
      id: 6,
      title: "AI Content Generation Revolution",
      company: "Global Media Corporation",
      industry: "Media & Entertainment",
      challenge: "Content creation bottlenecks limiting production capacity by 50%",
      solution: "AI content generation platform with autonomous creative capabilities",
      results: [
        "500% increase in content production",
        "70% reduction in creation time",
        "Consistent brand voice across all content",
        "Multi-language content generation"
      ],
      technologies: ["AI Content Generation", "Natural Language Processing", "Creative AI"],
      duration: "5 months",
      teamSize: "9 specialists",
      icon: Lightbulb,
      category: "AI Content"
    }
  ];
  const categories = [
    { name: "All", count: caseStudies.length, icon: Globe },
    { name: "AI & Analytics", count: caseStudies.filter(cs => cs.category === "AI & Analytics").length, icon: Brain },
    { name: "Quantum Technology", count: caseStudies.filter(cs => cs.category === "Quantum Technology").length, icon: Atom },
    { name: "AI Automation", count: caseStudies.filter(cs => cs.category === "AI Automation").length, icon: Rocket },
    { name: "Security & Compliance", count: caseStudies.filter(cs => cs.category === "Security & Compliance").length, icon: Shield },
    { name: "Infrastructure", count: caseStudies.filter(cs => cs.category === "Infrastructure").length, icon: Wifi },
    { name: "AI Content", count: caseStudies.filter(cs => cs.category === "AI Content").length, icon: Lightbulb }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories That
              <span className="text-gradient block">Transform Businesses</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Discover how leading organizations leverage Zion Tech Group's innovative solutions 
              to achieve breakthrough results and competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <CheckCircle className="h-5 w-5" />
                <span className="text-white">Proven Results</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Award className="h-5 w-5" />
                <span className="text-white">Industry Recognition</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <TrendingUp className="h-5 w-5" />
                <span className="text-white">Measurable Impact</span>
              </div>
            </div>
          </div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover how Zion Tech Group has transformed businesses across industries with cutting-edge AI, 
              quantum technology, and innovative solutions that drive real results.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Filters Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            {/* Industry Filter */}
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-600 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  <industry.icon className="w-4 h-4" />
                  <span>{industry.name}</span>
                </button>
              ))}
            </div>
            {/* Service Filter */}
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedService === service.id
                      ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                      : 'border-gray-600 text-gray-400 hover:border-purple-500/50 hover:text-purple-400'
                  }`}
                >
                  <service.icon className="w-4 h-4" />
                  <span>{service.name}</span>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover how Zion Tech Group has transformed businesses across industries with cutting-edge technology solutions
            </p>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how organizations are transforming their businesses with Zion Tech Group's 
              cutting-edge solutions and achieving remarkable results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          </motion.div>
        </div>
      </section>
      {/* Case Studies Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Transform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how Zion Tech Group has empowered organizations across industries with cutting-edge AI solutions, 
              quantum technology, and digital transformation services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">50+</span> Successful Projects
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">95%</span> Client Satisfaction
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">$15M+</span> Client ROI
              </div>
            </div>
          </motion.div>
      title: 'Healthcare AI Transformation',
      company: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'Needed to reduce diagnostic errors and improve patient outcomes while maintaining HIPAA compliance.',
      solution: 'Implemented AI-powered diagnostic assistance system with real-time image analysis and predictive analytics.',
      results: [
        'Reduced diagnostic errors by 35%',
        'Improved patient outcomes by 28%',
        'Achieved 99.9% HIPAA compliance',
        'Reduced diagnostic time by 40%'
      ],
      technologies: ['AI/ML', 'Computer Vision', 'HIPAA Compliance', 'Predictive Analytics'],
      image: '🏥',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Financial Services Automation',
      company: 'Global Investment Bank',
      industry: 'Finance',
      challenge: 'Required automated risk assessment and fraud detection across multiple global markets.',
      solution: 'Developed comprehensive AI-driven risk management platform with real-time monitoring and automated alerts.',
      results: [
        'Reduced fraud incidents by 60%',
        'Improved risk assessment accuracy by 45%',
        'Automated 80% of compliance processes',
        'Saved $2.5M annually in operational costs'
      ],
      technologies: ['AI/ML', 'Risk Management', 'Fraud Detection', 'Compliance Automation'],
      image: '🏦',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Manufacturing IoT Integration',
      company: 'Automotive Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Needed to optimize production efficiency and reduce downtime through predictive maintenance.',
      solution: 'Implemented IoT-based monitoring system with AI-powered predictive analytics and automated maintenance scheduling.',
      results: [
        'Reduced unplanned downtime by 55%',
        'Increased production efficiency by 32%',
        'Reduced maintenance costs by 40%',
        'Improved product quality by 25%'
      ],
      technologies: ['IoT', 'Predictive Analytics', 'Automation', 'Quality Control'],
      image: '🏭',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Retail Digital Transformation',
      company: 'National Retail Chain',
      industry: 'Retail',
      challenge: 'Required omnichannel customer experience with personalized recommendations and inventory optimization.',
      solution: 'Built comprehensive e-commerce platform with AI-powered personalization and real-time inventory management.',
      results: [
        'Increased online sales by 150%',
        'Improved customer satisfaction by 45%',
        'Reduced inventory costs by 30%',
        'Enhanced customer retention by 60%'
      ],
      technologies: ['E-commerce', 'AI Personalization', 'Inventory Management', 'Omnichannel'],
      image: '🛍️',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Government Cybersecurity',
      company: 'Federal Agency',
      industry: 'Government',
      challenge: 'Needed to protect sensitive data from advanced cyber threats while maintaining compliance standards.',
      solution: 'Implemented multi-layered cybersecurity framework with AI-powered threat detection and automated response.',
      results: [
        'Prevented 99.9% of cyber attacks',
        'Reduced incident response time by 70%',
        'Achieved 100% compliance standards',
        'Protected 10M+ citizen records'
      ],
      technologies: ['Cybersecurity', 'AI Threat Detection', 'Compliance', 'Automated Response'],
      image: '🏛️',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Education AI Platform',
      company: 'University System',
      industry: 'Education',
      challenge: 'Required personalized learning experiences and automated assessment for 50,000+ students.',
      solution: 'Developed AI-powered learning management system with adaptive content and intelligent tutoring.',
      results: [
        'Improved student performance by 35%',
        'Reduced administrative workload by 50%',
        'Enhanced learning engagement by 60%',
        'Scaled to support 100,000+ students'
      ],
      technologies: ['AI/ML', 'Learning Analytics', 'Adaptive Learning', 'Automated Assessment'],
      image: '🎓',
      readTime: '7 min read'
    }
  ];
  const industries = [
    'All Industries',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Government',
    'Education',
    'Technology'
  ];
  const technologies = [
    'All Technologies',
    'AI/ML',
    'Cybersecurity',
    'IoT',
    'Cloud Computing',
    'Data Analytics',
    'Automation',
    'Blockchain'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how organizations across industries are transforming their businesses with Zion Tech Group solutions.
          </p>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <select className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
              {industries.map((industry) => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
            <select className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
              {technologies.map((tech) => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      </div>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            All Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(cs => !cs.featured).map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
              >
                {/* Case Study Image */}
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {caseStudy.image}
                </div>
                {/* Case Study Content */}
                <div className="p-6">
                  {/* Company and Industry */}
                  <div className="flex items-center space-x-2 mb-3">
                    <Building className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-400">{caseStudy.company}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-400">{caseStudy.industry}</span>
                      </span>
                    ))}
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {caseStudy.title}
                  </h3>
                  {/* Challenge */}
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {caseStudy.challenge}
                  </p>
                  {/* Key Results */}
                  <div className="mb-4">
                    <h4 className="font-medium text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 line-clamp-1">{result}</span>
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">Client: {study.client}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Challenge</h4>
                    <p className="text-gray-400 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Solution</h4>
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
      {/* Industry Overview */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-300">
              Our solutions have delivered measurable results across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
              >
                <CardContent className="p-6 flex-1 flex flex-col gap-4">
                  <img loading="lazy" src={study.companyLogo} alt={`${study.company} logo`} className="h-10 w-auto" />
                  <h3 className="text-xl font-bold text-white">{study.title}</h3>
                  <p className="text-zion-slate-light line-clamp-3">{study.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" className="text-zion-cyan p-0" asChild>
                    <Link href={`/case-studies/${study.slug}`}>Read More →</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore real-world examples of how our AI solutions have delivered 
              measurable results for organizations like yours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center mr-3`}>
                    <study.icon className="w-6 h-6 text-white" />
                  </div>
                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{caseStudy.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{caseStudy.teamSize}</span>
                    </div>
                  </div>
                  {/* Read More Button */}
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-cyan-400">{study.metrics.roi}</div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400">{study.metrics.timeframe}</div>
                        <div className="text-xs text-gray-400">Timeline</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400">{study.metrics.teamSize}</div>
                        <div className="text-xs text-gray-400">Team</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore detailed case studies showcasing the transformative power of our 
              technology solutions across diverse industries and use cases.
            </p>
          </motion.div>
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                      {study.industry}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">{study.metrics.roi}</div>
                      <div className="text-xs text-zion-slate-light">ROI</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-zion-slate-light mb-4">{study.company}</p>
      {/* Category Filter */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-zion-slate-dark hover:bg-zion-cyan/20 border border-zion-cyan/30 text-white hover:text-zion-cyan transition-all duration-300 group"
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
              <span className="bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/10 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-zion-cyan/20 rounded-lg group-hover:bg-zion-cyan/30 transition-colors">
                    <study.icon className="h-6 w-6 text-zion-cyan" />
                  </div>
                  <div>
                    <span className="text-zion-cyan text-sm font-medium">{study.category}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                      {study.title}
                    </h3>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              {/* Company Info */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-4 w-4" />
                    <span>{study.company}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <span>{study.industry}</span>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-sm rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
                  >
                    Learn More About This Solution
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
      {/* Featured Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our most impactful client transformations and the technologies that made them possible.
            </p>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(cs => cs.featured).map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${caseStudy.color} flex items-center justify-center`}>
                    <caseStudy.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{caseStudy.industry}</div>
                    <div className="text-lg font-semibold text-white">{caseStudy.company}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Challenge</h4>
                  <p className="text-gray-300">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Solution</h4>
                  <p className="text-gray-300">{caseStudy.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Results</h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link
                  to={`/case-studies/${caseStudy.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${study.color} p-3 mb-4`}>
                  <study.icon className="w-full h-full text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{study.company}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-300 mb-2">Challenge:</h4>
                  <p className="text-gray-400 text-sm mb-3">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-300 mb-2">Solution:</h4>
                  <p className="text-gray-400 text-sm mb-3">{study.solution}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-300 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study) => (
            <div key={study.id} className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50">
              <div className="mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Building className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">{study.industry}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {study.category}
                  </span>
                  <span className="text-gray-400 text-sm">{study.client}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{study.title}</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-300">Real results from real clients across various industries</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {study.client}
                      </span>
                      <span className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-2">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                </div>
                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-cyan-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
                {/* Technologies & Details */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Duration: {study.duration}</span>
                  <span>Team: {study.teamSize}</span>
                </div>
              </motion.div>
            ))}
          </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-700/50">
                <Link
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* All Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              All Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete collection of client success stories across all industries and technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${caseStudy.color} flex items-center justify-center`}>
                    <caseStudy.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">{caseStudy.industry}</div>
                    <div className="text-sm font-semibold text-white">{caseStudy.company}</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{caseStudy.title}</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-1">Challenge</h4>
                  <p className="text-gray-300 text-sm line-clamp-2">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-1">Results</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={`/case-studies/${caseStudy.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Industry Breakdown */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Success Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI solutions have delivered measurable results across diverse industry sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400">{industry.count} success stories</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear directly from the leaders who have experienced our AI transformation firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>Timeline: {study.metrics.timeframe}</span>
                    <span>Team: {study.metrics.teamSize}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">No Case Studies Found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Deploy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies that drive innovation and deliver measurable 
              business results for our clients.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-semibold text-white">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our AI and technology solutions can transform your business 
            and deliver measurable results like the ones you see above.
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the organizations that have already transformed their operations with 
            Zion Tech Group's AI-powered solutions. Let's discuss how we can help you achieve similar results.
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the growing list of organizations that have transformed their operations with Zion Tech Group's AI solutions.
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the ranks of industry leaders who have transformed their operations with our AI and quantum technologies.
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can drive your success story. 
            Schedule a consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Your Transformation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Our Services
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Explore Solutions
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
            >
              Schedule Demo
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore Our Solutions
            </Link>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our technology solutions can help you achieve similar 
            results and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              <span>View Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                  <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                  <p className="text-zion-slate-light text-sm">{study.solution}</p>
                </div>
              </div>
              {/* Results */}
              <div className="mb-6">
                <h4 className="text-zion-cyan font-semibold mb-3">Results</h4>
                <div className="grid grid-cols-1 gap-2">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Technologies & Metrics */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-zion-cyan mx-auto mb-1" />
                    <div className="text-zion-slate-light">Duration</div>
                    <div className="text-white font-semibold">{study.duration}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-zion-cyan mx-auto mb-1" />
                    <div className="text-zion-slate-light">Team Size</div>
                    <div className="text-white font-semibold">{study.teamSize}</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-5 w-5 text-zion-cyan mx-auto mb-1" />
                    <div className="text-zion-slate-light">Success Rate</div>
                    <div className="text-white font-semibold">100%</div>
                  </div>
                </div>
              </div>
              {/* CTA */}
              <div className="flex items-center justify-between">
                <Link
                  to={`/case-studies/${study.id}`}
                  className="text-zion-cyan hover:text-white transition-colors font-medium group-hover:underline"
                >
                  Read Full Case Study
                </Link>
                <ArrowRight className="h-4 w-4 text-zion-cyan group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-zion-slate-light mb-8 text-lg">
              Let's discuss how Zion Tech Group can transform your business with cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ];
  return (
<>
      <SEOHead 
        title="Case Studies | Success Stories - Zion Tech Group"
        description="Explore our client success stories and case studies. See how Zion Tech Group has helped businesses transform with AI, cybersecurity, and innovative technology solutions."
        keywords="case studies, client success stories, digital transformation, AI solutions, cybersecurity, technology consulting"
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
                <Award className="w-4 h-4 mr-2" />
                Proven Results & Success Stories
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Client
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Success Stories
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              >
                Discover how we've helped businesses across industries achieve remarkable results through innovative technology solutions and strategic digital transformation.
              </motion.p>
            </div>
          </div>
        </motion.section>
        {/* Metrics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-gray-300">{metric.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Case Studies Grid */}
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
                Featured Case Studies
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Real results from real clients across diverse industries
              </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <motion.div
                    key={study.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${study.color} mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-blue-300 font-medium">{study.category}</div>
                        <h3 className="text-xl font-bold text-white">{study.title}</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-400 font-medium">Client</div>
                        <div className="text-gray-300">{study.client}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-medium">Challenge</div>
                        <div className="text-gray-300">{study.challenge}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-medium">Solution</div>
                        <div className="text-gray-300">{study.solution}</div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 font-medium mb-3">Key Results</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <div>
                        <Clock className="w-4 h-4 inline mr-1" />
                        {study.duration}
                      </div>
                      <div>
                        <Users className="w-4 h-4 inline mr-1" />
                        {study.teamSize}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
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
                What Our Clients Say
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Hear directly from the leaders who trusted us with their digital transformation
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.position}</div>
                    <div className="text-sm text-blue-300">{testimonial.company}</div>
                  </div>
                </motion.div>
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  {category}
                </button>
              ))}
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
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can help transform your business with innovative technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20"
          >
            <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the growing list of companies that have transformed their business with Zion Tech Group's 
              innovative solutions. Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                View More Case Studies
              </button>
            </div>
          </motion.div>
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
              Join the ranks of successful organizations that have transformed their business with Zion Tech Group's 
              cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
<>
      <SEOHead 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories of how our AI and technology solutions have transformed businesses across industries. See measurable results and ROI."
        keywords="case studies, success stories, AI transformation, digital transformation, business results, ROI, customer success"
        type="website"
        url="https://ziontechgroup.com/case-studies"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success Stories That Inspire
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how organizations across industries have transformed their businesses 
                with our AI-powered solutions. Real results, measurable impact, proven success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Success Story
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
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the growing list of organizations that have transformed their business 
                with Zion Tech Group's AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 font-semibold rounded-xl transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
    { name: "Manufacturing", icon: Factory, count: "25+ projects" },
    { name: "Healthcare", icon: Hospital, count: "15+ projects" },
    { name: "Financial Services", icon: Shield, count: "20+ projects" },
    { name: "Retail", icon: ShoppingCart, count: "18+ projects" },
    { name: "Technology", icon: Cpu, count: "30+ projects" },
    { name: "Energy", icon: Zap, count: "12+ projects" }
  ];
  const stats = [
    { icon: Users, value: "200+", label: "Successful Projects", description: "Delivered across industries" },
    { icon: TrendingUp, value: "95%", label: "Client Satisfaction", description: "Exceeding expectations" },
    { icon: Award, value: "50+", label: "Industry Awards", description: "Recognition for excellence" },
    { icon: Globe, value: "25+", label: "Countries", description: "Global project delivery" }
  ];
  return (
<>
      <SEOHead 
        customData={{
          title: "Case Studies - Zion Tech Group",
          description: "Explore real-world success stories and case studies from our AI-powered technology solutions. See how we've transformed businesses across industries with cutting-edge technology.",
          keywords: ["case studies", "success stories", "AI implementation", "digital transformation", "business transformation", "technology solutions", "client results"],
          type: "website",
          url: "https://ziontechgroup.com/case-studies"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Discover how our AI-powered solutions have transformed businesses across industries. Real results, real impact, real success stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Explore Services
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
        {/* Case Studies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results, real transformation. See how our solutions have delivered measurable impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0">
                      <study.icon className="h-12 w-12 text-cyan-400" />
                    </div>
                    <div className="ml-4">
                      <div className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                        {study.industry}
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{study.title}</h3>
                      <p className="text-gray-300 mb-4">{study.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Impact</h4>
                      <p className="text-gray-300 text-sm">{study.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Industries Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expertise spans across multiple industries, delivering tailored solutions for unique business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <industry.icon className="h-12 w-12 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-sm text-cyan-300">{industry.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have transformed their business with our AI-powered solutions.
      {/* Case Studies Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                {/* Header */}
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{study.image}</div>
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                      {study.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{study.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{study.company}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <span className="text-cyan-400 mr-2">✓</span>
                          {result}
import React from 'react';
import SEOHead from "../components/SEOHead.jsx";
import { Link } from 'react-router-dom';
export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare AI Diagnostics Platform',
      client: 'Major Regional Hospital Network',
      industry: 'Healthcare',
      challenge: 'Need for faster, more accurate diagnostic tools to improve patient outcomes and reduce wait times.',
      solution: 'Deployed AI-powered diagnostic platform with quantum-enhanced image processing capabilities.',
      results: [
        '95% reduction in diagnostic time',
        '99.2% accuracy rate in preliminary diagnoses',
        '40% improvement in patient satisfaction scores',
        '30% reduction in operational costs'
      ],
      image: '/images/case-studies/healthcare-ai.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Financial Risk Management System',
      client: 'Global Investment Bank',
      industry: 'Financial Services',
      challenge: 'Complex risk assessment requiring real-time analysis of multiple data streams and market conditions.',
      solution: 'Implemented quantum-powered risk management platform with autonomous decision-making capabilities.',
      results: [
        '60% faster risk assessment',
        '45% reduction in false positives',
        'Real-time monitoring of 1000+ risk factors',
        '$50M+ in risk mitigation savings'
      ],
      image: '/images/case-studies/financial-risk.jpg'
    },
    {
      id: 3,
      title: 'Manufacturing AI Optimization',
      client: 'Automotive Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues affecting output and customer satisfaction.',
      solution: 'AI-driven production optimization system with predictive maintenance and quality control.',
      results: [
        '25% increase in production efficiency',
        '90% reduction in quality defects',
        'Predictive maintenance preventing 95% of breakdowns',
        '15% reduction in operational costs'
      ],
      image: '/images/case-studies/manufacturing-ai.jpg'
    },
    {
      id: 4,
      title: 'Cybersecurity Threat Intelligence',
      client: 'Government Agency',
      industry: 'Government',
      challenge: 'Advanced persistent threats requiring sophisticated detection and response capabilities.',
      solution: 'Zero-trust network architecture with AI-powered threat detection and automated response.',
      results: [
        '99.9% threat detection rate',
        'Real-time response to 99% of incidents',
        'Zero successful breaches since implementation',
        '50% reduction in security team workload'
      ],
      image: '/images/case-studies/cybersecurity.jpg'
    },
    {
      id: 5,
      title: 'Retail Customer Experience Platform',
      client: 'International Retail Chain',
      industry: 'Retail',
      challenge: 'Personalized customer experience across multiple channels and locations.',
      solution: 'AI-powered customer experience platform with predictive analytics and autonomous optimization.',
      results: [
        '35% increase in customer engagement',
        'Personalized recommendations with 85% accuracy',
        '20% increase in average order value',
        'Real-time optimization across 500+ locations'
      ],
      image: '/images/case-studies/retail-cx.jpg'
    },
    {
      id: 6,
      title: 'Energy Grid Optimization',
      client: 'Utility Company',
      industry: 'Energy & Utilities',
      challenge: 'Grid efficiency and renewable energy integration requiring complex optimization algorithms.',
      solution: 'Quantum computing-powered grid optimization system with AI-driven demand forecasting.',
      results: [
        '30% improvement in grid efficiency',
        '40% increase in renewable energy integration',
        'Predictive maintenance reducing outages by 60%',
        '$100M+ in operational savings annually'
      ],
      image: '/images/case-studies/energy-grid.jpg'
    }
  ];
  const industries = ['All', 'Healthcare', 'Financial Services', 'Manufacturing', 'Government', 'Retail', 'Energy & Utilities'];
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Case Studies - Zion Tech Group" 
        description="Explore real-world success stories and results from Zion Tech Group's innovative technology solutions"
        keywords="case studies, success stories, results, implementations, Zion Tech Group"
        canonical="https://ziontechgroup.com/case-studies"
      />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how our innovative AI, quantum computing, and autonomous solutions 
            are transforming businesses across industries. Real results, measurable impact, 
            and proven success stories.
          </p>
        </div>
        {/* Featured Case Study */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Success Story</h2>
          {caseStudies.filter(study => study.featured).map((study) => (
            <div key={study.id} className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 border border-cyan-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">Featured Case Study</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
      title: 'AI-Powered Financial Services Transformation',
      company: 'Global Bank Corp',
      industry: 'Financial Services',
      challenge: 'Complex legacy systems and manual processes causing delays and errors',
      solution: 'Implemented AI-powered automation platform with quantum computing capabilities',
      results: {
        efficiency: '85%',
        costReduction: '60%',
        timeToMarket: '70%',
        customerSatisfaction: '95%'
      },
      image: '/api/placeholder/400/250',
      category: 'AI & Automation'
    },
    {
      id: 2,
      title: 'Healthcare AI Implementation Success',
      company: 'Metro Health Systems',
      industry: 'Healthcare',
      challenge: 'Patient data analysis taking weeks, affecting treatment decisions',
      solution: 'Deployed AI-powered diagnostic and treatment recommendation system',
      results: {
        efficiency: '90%',
        costReduction: '45%',
        timeToMarket: '80%',
        customerSatisfaction: '98%'
      },
      image: '/api/placeholder/400/250',
      category: 'Healthcare AI'
    },
    {
      id: 3,
      title: 'Manufacturing Process Optimization',
      company: 'Tech Manufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'Integrated AI-powered predictive maintenance and quality control systems',
      results: {
        efficiency: '75%',
        costReduction: '55%',
        timeToMarket: '65%',
        customerSatisfaction: '92%'
      },
      image: '/api/placeholder/400/250',
      category: 'Industrial AI'
    },
    {
      id: 4,
      title: 'Retail Customer Experience Revolution',
      company: 'Smart Retail Chain',
      industry: 'Retail',
      challenge: 'Poor customer engagement and inventory management',
      solution: 'AI-powered customer analytics and inventory optimization platform',
      results: {
        efficiency: '80%',
        costReduction: '40%',
        timeToMarket: '75%',
        customerSatisfaction: '96%'
      },
      image: '/api/placeholder/400/250',
      category: 'Retail AI'
    },
    {
      id: 5,
      title: 'Government Digital Transformation',
      company: 'City Government',
      industry: 'Government',
      challenge: 'Slow citizen services and outdated systems',
      solution: 'Modernized infrastructure with AI-powered citizen service platform',
      results: {
        efficiency: '70%',
        costReduction: '50%',
        timeToMarket: '85%',
        customerSatisfaction: '94%'
      },
      image: '/api/placeholder/400/250',
      category: 'Government Tech'
    },
    {
      id: 6,
      title: 'Education Technology Innovation',
      company: 'University Network',
      industry: 'Education',
      challenge: 'Limited student engagement and outdated learning methods',
      solution: 'AI-powered personalized learning platform with adaptive content',
      results: {
        efficiency: '85%',
        costReduction: '35%',
        timeToMarket: '90%',
        customerSatisfaction: '97%'
      },
      image: '/api/placeholder/400/250',
      category: 'EdTech'
    }
  ];
  const categories = ['All', 'AI & Automation', 'Healthcare AI', 'Industrial AI', 'Retail AI', 'Government Tech', 'EdTech'];
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gray-800/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover how organizations across industries are transforming their operations 
              with our cutting-edge AI and technology solutions.
            </p>
          </div>
        </div>
      </section>
      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-xl border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Case Studies Grid */}
                  <Link 
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
                  >
                    Read Full Case Study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                <div className="w-full h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* All Case Studies Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">All Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => !study.featured).map((study) => (
              <div key={study.id} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-full h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-t-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {study.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-sm mb-3">{study.client}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {study.challenge}
                  </p>
                  <Link 
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium group"
                  >
                    Read Case Study
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of successful organizations that have transformed their operations with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 inline-flex items-center"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
};
export default CaseStudies;
        </div>
        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-3xl p-8 border border-green-500/20 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Zion Tech Group has helped businesses across industries achieve their digital transformation goals.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Case studies coming soon. We're working on showcasing our client success stories.
            </p>
          </div>
        </div>
      </div>
</>
  );
}
        </div>
      </section>
    </div>
  );
};
export default CaseStudies;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                  {study.category}
                </span>
              </div>
              {/* Company Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{study.company}</h3>
                  <p className="text-sm text-gray-400">{study.industry}</p>
                </div>
              </div>
              {/* Title */}
              <h4 className="text-xl font-bold text-white mb-4 leading-tight">
                {study.title}
              </h4>
              {/* Challenge */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h5>
                <p className="text-gray-300 text-sm">{study.challenge}</p>
              </div>
              {/* Solution */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h5>
                <p className="text-gray-300 text-sm">{study.solution}</p>
              </div>
              {/* Results */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Results</h5>
                <ul className="space-y-1">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Technologies */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                View Full Case Study
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can transform your business and deliver 
              measurable results like the ones you see above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Helmet } from 'react-helmet-async';
const CaseStudies: React.FC = () => {
  return (
<>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world case studies and success stories from Zion Tech Group clients. See how we've helped businesses transform through technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Zion Tech Group has helped businesses across industries achieve their digital transformation goals.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Case studies coming soon. We're working on showcasing our client success stories.
            </p>
          </div>
        </div>
      </div>
</>
  );
};
export default CaseStudies;
