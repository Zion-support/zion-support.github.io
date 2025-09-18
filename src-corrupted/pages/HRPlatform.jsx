import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Users,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Code,
  FileText,
  Wrench,
  Cpu,
  Brain,
  Target,
  Rocket,
  Lightbulb,
  Gauge,
  Network,
  Server,
  Building,
  Car,
  Plane,
  Factory,
  Cog,
  BarChart3,
  TrendingUp,
  MapPin,
  Layers,
  RefreshCw,
  AlertTriangle,
  Package,
  Warehouse,
  Route,
  Navigation,
  Box,
  Ship,
  Train,
  Plane,
  Car,
  Truck,
  Globe,
  Shield,
  Zap,
  Users,
  Settings,
  Palette,
  Smartphone,
  Tablet,
  Monitor,
  Cloud,
  Database,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Users,
  Settings,
  Palette,
  User,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserList,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserList,
  Calendar,
  Clock,
  Tag,
  Bookmark,
  Heart,
  MessageCircle,
  Send,
  Mail,
  Phone,
  MapPin,
  Globe,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Briefcase,
  GraduationCap,
  Award,
  Target,
  PieChart,
  LineChart,
  BarChart,
  TrendingUp,
  TrendingDown,
  Activity,
  Zap,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Key,
  Fingerprint,
  Smartphone,
  Tablet,
  Monitor,
  Cloud,
  Database,
  Server,
  Network,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal} from 'lucide-react';

    technologies["Business Intelligence", "Machine Learning", "Data Mining", "Visualization Tools"]
  }
];

const hrTechnologies = [
  {name: "Employee Management",
    description: "Comprehensive employee lifecycle management",
    icon: Users,
    useCase: "HR Operations",
    reliability: "Critical"},
  {name: "AI & Automation",
    description: "Intelligent automation for HR processes",
    icon: Brain,
    useCase: "Process Automation",
    reliability: "High"},
  {name: "Data Security",
    description: "Enterprise-grade security and compliance",
    icon: Shield,
    useCase: "Data Protection",
    reliability: "Critical"},
  {
    name: "Cloud Platform",
    description: "Scalable cloud infrastructure for HR applications",
    icon: Cloud,
    useCase: "Infrastructure",
    reliability: "High"

];

const successStories = [
  {
    id: 1,
    comp: "Global Corporation",
    industry: "Technology",
    challenge: "Needed unified HR platform for 10,000+ employees across 20 countries",
    solution: "Built comprehensive HR platform with localization, compliance, and automation features",
    results: "40% reduction in HR processing time, 60% improvement in employee satisfaction, streamlined global operations",
    logo: "GC"
  },
  {id: 2,
    comp: "Healthcare Network",
    industry: "Healthcare",
    challenge: "Required automated recruitment and onboarding for 500+ annual hires",
    solution: "Implemented AI-powered recruitment system with automated workflows and compliance tracking",
    results: "70% faster hiring process, 50% reduction in administrative overhead, improved compliance",
    logo: "HN"},
  {
    id: 3,
    comp: "Manufacturing Comp",
    industry: "Manufacturing",
    challenge: "Needed performance management system for 2000+ production workers",
    solution: "Built performance tracking platform with goal setting and development planning",
    results: "35% improvement in productivity, 45% increase in employee engagement, better retention",
    logo: "MC"

];

const processSteps = [
  {
    step: 1,
    title: "HR Assessment",
    description: "Evaluate current HR processes and identify improvement opportunities",
    icon: FileText,
    duration: "2-4 weeks"
  },
  {step: 2,
    title: "Platform Design",
    description: "Design HR platform architecture and user experience",
    icon: Code,
    duration: "4-8 weeks"},
  {step: 3,
    title: "Development",
    description: "Build and integrate HR platform components",
    icon: Wrench,
    duration: "16-32 weeks"},
  {
    step: 4,
    title: "Deployment & Training",
    description: "Deploy platform and train HR teams and employees",
    icon: Users,
    duration: "2-6 weeks"

];

const hrBenefits = [
  {
    title: "Operational Efficiency",
    description: "Streamlined HR processes reduce administrative overhead and improve productivity",
    icon: Zap,
    examples["Automated workflows", "Reduced paperwork", "Faster processing", "Better accuracy"];
  },;
  {title: "Employee Experience",
    description: "Improved self-service capabilities and better communication enhance employee satisfaction",
    icon: Users,
    examples["Self-service portals", "Mobile access", "Real-time updates", "Better communication"];},;
  {title: "Data-Driven Decisions",
    description: "Advanced analytics provide insights for better workforce planning and HR strategy",
    icon: BarChart3,
    examples["Workforce analytics", "Performance insights", "Trend analysis", "Predictive modeling"];},;
  {title: "Compliance & Security",
    description: "Built-in compliance features and enterprise-grade security protect sensitive HR data",
    icon: Shield,
    examples["Regulatory compliance", "Data encryption", "Access controls", "Audit trails"];}
];

export default function HRPlatform
export {HRPlatform}() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Employee Management', 'Recruitment', 'Performance', 'Learning', 'Payroll', 'Analytics'];

  const filteredSolutions = selectedCategory === 'All'
    ? hrPlatformSolutions
    : hrPlatformSolutions.filter(solution => solution.category === selectedCategory);

const HRPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>HRPlatform | Zion Tech Group</title>
        <meta name="description" content="HRPlatform - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">HRPlatform</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default HRPlatform;
