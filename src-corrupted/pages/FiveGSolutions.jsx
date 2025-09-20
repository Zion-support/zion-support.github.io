<<<<<<< HEAD
import React from 'react',

const FiveGSolutions: React.FC = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>FiveGSolutions | Zion Tech Group</title>,
        <meta name="description" content="FiveGSolutions - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">FiveGSolutions</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  ),};
export default FiveGSolutions;
=======
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Wifi,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Code,
  FileText,
  Truck,
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
  Signal,
  Smartphone,
  Monitor,
  Cloud,
  Satellite,
  Antenna,
  Router,
  Tower} from 'lucide-react';

    technologies["5G Networks", "Industrial IoT", "AI Analytics", "Predictive Maintenance"]
  }
];

const fiveGTechnologies = [
  {name: "5G Core Network",
    description: "Next-generation core network architecture for 5G services",
    icon: Server,
    useCase: "Network Services",
    reliability: "Critical"},
  {name: "Radio Access Network",
    description: "Advanced radio technologies for high-speed wireless connectivity",
    icon: Antenna,
    useCase: "Wireless Access",
    reliability: "Critical"},
  {name: "Edge Computing",
    description: "Distributed computing at the network edge for low-latency applications",
    icon: Cloud,
    useCase: "Low-latency Apps",
    reliability: "High"},
  {
    name: "Network Slicing",
    description: "Virtual network segmentation for different service requirements",
    icon: Layers,
    useCase: "Service Isolation",
    reliability: "High"

];

const successStories = [
  {
    id: 1,
    comp: "Metropolitan City",
    industry: "Municipal",
    challenge: "Needed high-speed connectivity for smart city infrastructure across 100+ locations",
    solution: "Deployed comprehensive 5G network with edge computing and IoT integration",
    results: "10x faster data transmission, 50% reduction in response times, enhanced smart city services",
    logo: "MC"
  },
  {id: 2,
    comp: "Advanced Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Required real-time monitoring and control of 500+ production machines",
    solution: "Built private 5G network with industrial IoT and edge computing",
    results: "Real-time machine monitoring, 30% improvement in production efficiency, predictive maintenance",
    logo: "AMC"},
  {
    id: 3,
    comp: "Regional Hospital Network",
    industry: "Healthcare",
    challenge: "Needed high-bandwidth connectivity for telemedicine and remote monitoring",
    solution: "Implemented 5G healthcare network with telemedicine platforms and IoT devices",
    results: "Enhanced telemedicine capabilities, improved patient monitoring, reduced hospital visits",
    logo: "RHN"

];

const processSteps = [
  {
    step: 1,
    title: "5G Assessment",
    description: "Evaluate 5G requirements and network planning",
    icon: FileText,
    duration: "2-4 weeks"
  },
  {step: 2,
    title: "Network Design",
    description: "Design 5G network architecture and infrastructure",
    icon: Code,
    duration: "4-8 weeks"},
  {step: 3,
    title: "Infrastructure Deployment",
    description: "Deploy 5G core network, RAN, and edge computing",
    icon: Wrench,
    duration: "24-72 weeks"},
  {
    step: 4,
    title: "Testing & Optimization",
    description: "Test network performance and optimize for efficiency",
    icon: Gauge,
    duration: "4-8 weeks"

];

const fiveGBenefits = [
  {
    title: "Ultra-High Speed",
    description: "10-100x faster than 4G for lightning-fast data transmission",
    icon: Zap,
    examples["Gigabit speeds", "Instant downloads", "Real-time streaming"];
  },;
  {title: "Low Latency",
    description: "Ultra-low latency for real-time applications and services",
    icon: Clock,
    examples["Real-time gaming", "Autonomous vehicles", "Remote surgery"];},;
  {title: "Massive Connectivity",
    description: "Support for millions of IoT devices per square kilometer",
    icon: Network,
    examples["Smart cities", "Industrial IoT", "Connected devices"];},;
  {title: "Network Slicing",
    description: "Virtual network segmentation for different service requirements",
    icon: Layers,
    examples["Customized services", "Service isolation", "Quality guarantees"];}
];

export default function FiveGSolutions
export {FiveGSolutions}() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Infrastructure', 'Enterprise', 'IoT', 'Smart Cities', 'Healthcare', 'Manufacturing'];

  const filteredSolutions = selectedCategory === 'All'
    ? fiveGSolutions
    : fiveGSolutions.filter(solution => solution.category === selectedCategory);

const FiveGSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>FiveGSolutions | Zion Tech Group</title>
        <meta name="description" content="FiveGSolutions - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">FiveGSolutions</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default FiveGSolutions;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
