import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Users, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Play,
  Settings,
  Activity,
  BarChart3,
  TrendingUp,
  Shield,
  Database,
  Smartphone,
  Code,
  FileText,
  AlertCircle,
  CheckSquare,
  Calculator,
  PieChart,
  LineChart,
  Target2,
  Wallet,
  PiggyBank,
  CreditCard,
  Receipt,
  Cloud,
  Zap2,
  Gauge,
  BarChart4,
  TrendingUp2,
  Lightbulb,
  Briefcase,
  Strategy,
  Brain,
  Compass,
  RefreshCw,
  TrendingUp3,
  Layers,
  Workflow,
  Scale,
  Award,
  Lock,
  Wifi,
  Bluetooth,
  Radio,
  Sensor,
  Chip,
  Circuit,
  Orbit,
  Planet,
  Star,
  Telescope,
  Antenna,
  Signal,
  Navigation,
  Earth,
  Moon,
  Sun,
  Binary,
  Network,
  Database2,
  Lock2,
  Key2,
  Fingerprint2,
  Eye,
  Brain2,
  Cpu2,
  Memory,
  HardDrive,
  Server2,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  UserPlus,
  UserCheck,
  UserX,
  UserMinus,
  UserEdit,
  UserSearch,
  UserList,
  UserSettings,
  UserCog,
  UserShield,
  UserStar,
  UserHeart,
  UserCheck2,
  UserX2,
  UserMinus2,
  UserPlus2,
  UserEdit2,
  UserSearch2,
  UserList2,
  UserSettings2,
  UserCog2,
  UserShield2,
  UserStar2,
  UserHeart2
 } from 'lucide-react.ts';

const MicroCRM = () => {
  const features = [
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Comprehensive contact database with detailed customer profiles'
    },
    {
      icon: Target,
      title: 'Lead Tracking',
      description: 'Track leads from initial contact to conversion'
    },
    {
      icon: Activity,
      title: 'Sales Pipeline',
      description: 'Visual sales pipeline with customizable stages'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Real-time insights into sales performance and trends'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security for customer data protection'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based',
      description: 'Access your CRM from anywhere with cloud synchronization'
    }
  ];

  const benefits = [
    'Increase sales productivity by 40%',
    'Improve customer retention by 60%',
    'Reduce lead response time by 80%',
    'Streamline sales processes',
    'Enhance customer relationships',
    'Boost team collaboration'
  ];

  const services = [
    {
      icon: Phone,
      title: 'Communication Tools',
      description: 'Integrated calling, email, and messaging capabilities'
    },
    {
      icon: Calendar,
      title: 'Task Management',
      description: 'Schedule follow-ups and track important activities'
    },
    {
      icon: MessageSquare,
      title: 'Customer Support',
      description: 'Track customer issues and support requests'
    },
    {
      icon: UserPlus,
      title: 'Lead Generation',
      description: 'Tools for capturing and nurturing new leads'
    }
  ];

  const useCases = [
    {
      industry: 'Small Business',
      description: 'Affordable CRM for growing companies'
    },
    {
      industry: 'Sales Teams',
      description: 'Streamline sales processes and tracking'
    },
    {
      industry: 'Real Estate',
      description: 'Manage property listings and client relationships'
    },
    {
      industry: 'Consulting',
      description: 'Track client projects and communications'
    }
  ];

const MicroCRM: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>MicroCRM | Zion Tech Group</title>
        <meta name="description" content="MicroCRM - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">MicroCRM</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default MicroCRM;
