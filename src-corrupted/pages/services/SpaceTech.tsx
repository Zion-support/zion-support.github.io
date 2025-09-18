<<<<<<< HEAD
import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Rocket, 
  Satellite, 
  CheckCircle, 
  Users, 
  Clock, 
  ArrowRight,
  Play,
  Settings,
  Target,
  Activity,
  Sparkles,
  Search,
  Zap,
  Globe,
  Building,
  DollarSign,
  BarChart3,
  TrendingUp,
  Key,
  Fingerprint,
  Monitor,
  AlertTriangle,
  ShieldCheck,
  Globe2,
  Server,
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
  Shield,
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
  Sun
 } from 'lucide-react.ts';

const SpaceTech = () => {
  const features = [
    {
      icon: Satellite,
      title: 'Satellite Technology',
      description: 'Advanced satellite design, deployment, and management solutions'
    },
    {
      icon: Orbit,
      title: 'Orbital Mechanics',
      description: 'Precise orbital calculations and trajectory optimization'
    },
    {
      icon: Antenna,
      title: 'Ground Station Systems',
      description: 'Earth-based communication and control infrastructure'
    },
    {
      icon: Signal,
      title: 'Space Communications',
      description: 'Reliable data transmission between space and ground'
    },
    {
      icon: Navigation,
      title: 'Space Navigation',
      description: 'Advanced positioning and navigation systems for space missions'
    },
    {
      icon: Telescope,
      title: 'Space Observation',
      description: 'Earth observation and space monitoring capabilities'
    }
  ];

  const benefits = [
    'Enable global connectivity and coverage',
    'Provide critical Earth observation data',
    'Support space exploration missions',
    'Enable advanced navigation systems',
    'Support disaster response and monitoring',
    'Drive innovation in space technology'
  ];

  const services = [
    {
      icon: Rocket,
      title: 'Launch Services',
      description: 'Satellite launch coordination and mission planning'
    },
    {
      icon: Planet,
      title: 'Earth Observation',
      description: 'Satellite imagery and environmental monitoring'
    },
    {
      icon: Star,
      title: 'Space Research',
      description: 'Scientific research and space exploration support'
    },
    {
      icon: Globe2,
      title: 'Global Communications',
      description: 'Satellite communications and internet services'
    }
  ];

  const useCases = [
    {
      industry: 'Telecommunications',
      description: 'Global satellite communications and internet services'
    },
    {
      industry: 'Environmental Monitoring',
      description: 'Climate change tracking and natural disaster monitoring'
    },
    {
      industry: 'Agriculture',
      description: 'Crop monitoring and precision agriculture support'
    },
    {
      industry: 'Defense & Security',
      description: 'Surveillance and national security applications'
    }
  ];
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const SpaceTech: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>SpaceTech | Zion Tech Group</title>
        <meta name="description" content="SpaceTech - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">SpaceTech</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default SpaceTech;
