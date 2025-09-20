import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Wifi,
  Server,
  Smartphone,
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
  Monitor,
  Code,
  FileText,
  Truck,
  Wrench,
  Cpu} from 'lucide-react';

    technologies["TLS/SSL", "OAuth 2.0", "JWT", "Zero Trust"]
  }
];

const iotTechnologies = [
  {name: "MQTT Protocol",
    description: "Lightweight messaging protocol for IoT devices",
    icon: Wifi,
    useCase: "Device Communication",
    reliability: "High"},
  {name: "Edge Computing",
    description: "Distributed computing at the network edge",
    icon: Server,
    useCase: "Real-time Processing",
    reliability: "Critical"},
  {name: "5G Networks",
    description: "High-speed, low-latency wireless connectivity",
    icon: Globe,
    useCase: "High-bandwidth IoT",
    reliability: "High"},
  {
    name: "LoRaWAN",
    description: "Long-range, low-power wireless protocol",
    icon: Wifi,
    useCase: "Wide-area IoT",
    reliability: "Medium"

];

const successStories = [
  {
    id: 1,
    comp: "Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Needed real-time monitoring of 1000+ production machines",
    solution: "Built IIoT platform with edge computing and predictive analytics",
    results: "30% reduction in downtime, 25% energy savings, improved quality control",
    logo: "MC"
  },
  {id: 2,
    comp: "Smart City Initiative",
    industry: "Municipal",
    challenge: "Required IoT infrastructure for city-wide monitoring",
    solution: "Implemented smart city platform with edge nodes and real-time analytics",
    results: "40% improvement in traffic flow, 20% reduction in energy consumption",
    logo: "SC"},
  {
    id: 3,
    comp: "Logistics Network",
    industry: "Transportation",
    challenge: "Needed real-time tracking and monitoring of fleet vehicles",
    solution: "Built IoT fleet management system with edge computing",
    results: "50% improvement in delivery times, 35% reduction in fuel costs",
    logo: "LN"

];

const processSteps = [
  {
    step: 1,
    title: "IoT Assessment",
    description: "Evaluate current infrastructure and IoT requirements",
    icon: FileText,
    duration: "1-2 weeks"
  },
  {step: 2,
    title: "Architecture Design",
    description: "Design IoT and edge computing architecture",
    icon: Code,
    duration: "2-3 weeks"},
  {step: 3,
    title: "Implementation",
    description: "Build and deploy IoT infrastructure and edge nodes",
    icon: Wrench,
    duration: "16-48 weeks"},
  {
    step: 4,
    title: "Integration & Testing",
    description: "Integrate systems and conduct comprehensive testing",
    icon: CheckCircle,
    duration: "2-4 weeks"

];

export default function IoTEdge
export { IoTEdge }() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'IoT Platform', 'Edge Computing', 'Analytics', 'Smart Cities', 'Industrial IoT', 'Security'];

  const filteredSolutions = selectedCategory === 'All'
    ? iotEdgeSolutions
    : iotEdgeSolutions.filter(solution => solution.category === selectedCategory);

const IoTEdge: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>IoTEdge | Zion Tech Group</title>
        <meta name="description" content="IoTEdge - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">IoTEdge</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default IoTEdge;
