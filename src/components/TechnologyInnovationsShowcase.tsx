import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Search,
  Users,
  TrendingUp,
  Globe,
  Lock,
  Cpu,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  Eye
} from 'lucide-react';

const TechnologyInnovationsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const innovations = [
    {
      id: 1,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces for seamless human-AI interaction. Control devices with thought alone.",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      category: "AI/ML",
      status: "In Development",
      timeline: "2026",
      impact: "Revolutionary",
      features: ["Thought Control", "Neural Learning", "Mind-Computer Sync", "Enhanced Cognition"]
    },
    {
      id: 2,
      title: "Quantum Cloud Computing",
      description: "Harness quantum mechanics for exponentially faster computation. Solve complex problems in seconds.",
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
      category: "Quantum",
      status: "Beta Testing",
      timeline: "2025",
      impact: "Transformative",
      features: ["Quantum Algorithms", "Superposition Computing", "Entanglement Networks", "Quantum Security"]
    },
    {
      id: 3,
      title: "Autonomous AI Agents",
      description: "Self-learning AI systems that operate independently, making decisions and executing tasks without human intervention.",
      icon: <Users className="h-8 w-8 text-green-500" />,
      category: "AI/ML",
      status: "Live",
      timeline: "2025",
      impact: "High",
      features: ["Self-Learning", "Decision Making", "Task Execution", "Continuous Improvement"]
    },
    {
      id: 4,
      title: "Holographic Displays",
      description: "3D holographic interfaces that project digital content into physical space for immersive interactions.",
      icon: <Monitor className="h-8 w-8 text-cyan-500" />,
      category: "Display",
      status: "Prototype",
      timeline: "2027",
      impact: "Revolutionary",
      features: ["3D Projection", "Gesture Control", "Spatial Computing", "Immersive UI"]
    },
    {
      id: 5,
      title: "Edge AI Processing",
      description: "Ultra-fast AI processing at the network edge, reducing latency to milliseconds for real-time applications.",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      category: "Infrastructure",
      status: "Live",
      timeline: "2025",
      impact: "High",
      features: ["Ultra-Low Latency", "Real-time Processing", "Edge Computing", "IoT Integration"]
    },
    {
      id: 6,
      title: "Blockchain AI Fusion",
      description: "Combining blockchain security with AI intelligence for decentralized, trustless smart systems.",
      icon: <Lock className="h-8 w-8 text-red-500" />,
      category: "Blockchain",
      status: "In Development",
      timeline: "2026",
      impact: "Transformative",
      features: ["Decentralized AI", "Smart Contracts", "Cryptographic Security", "Trustless Systems"]
    },
    {
      id: 7,
      title: "Predictive Cybersecurity",
      description: "AI systems that predict and prevent cyber attacks before they happen using advanced threat modeling.",
      icon: <Shield className="h-8 w-8 text-indigo-500" />,
      category: "Security",
      status: "Beta Testing",
      timeline: "2025",
      impact: "High",
      features: ["Threat Prediction", "Proactive Defense", "Behavioral Analysis", "Zero-Day Protection"]
    },
    {
      id: 8,
      title: "Spatial Computing Platform",
      description: "Mixed reality platform that seamlessly blends digital and physical worlds for enhanced productivity.",
      icon: <Eye className="h-8 w-8 text-pink-500" />,
      category: "AR/VR",
      status: "Prototype",
      timeline: "2027",
      impact: "Revolutionary",
      features: ["Mixed Reality", "Spatial Mapping", "Gesture Recognition", "Contextual Computing"]
    }
  ];

  const categories = ["All", "AI/ML", "Quantum", "Infrastructure", "Security", "Display", "Blockchain", "AR/VR"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-800";
      case "Beta Testing": return "bg-blue-100 text-blue-800";
      case "In Development": return "bg-yellow-100 text-yellow-800";
      case "Prototype": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Revolutionary": return "bg-red-100 text-red-800";
      case "Transformative": return "bg-orange-100 text-orange-800";
      case "High": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredInnovations = selectedCategory === "All" 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
            🔬 Innovation Lab
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technology Innovations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge technologies we're developing to shape the future. 
            From quantum computing to neural interfaces, explore tomorrow's innovations today.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full ${
                selectedCategory === category 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Innovations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredInnovations.map((innovation) => (
            <Card key={innovation.id} className="group hover:shadow-2xl transition-all duration-300 bg-gray-800 border-gray-700 hover:border-blue-500">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  {innovation.icon}
                  <div className="flex gap-2">
                    <Badge className={getStatusColor(innovation.status)}>
                      {innovation.status}
                    </Badge>
                    <Badge className={getImpactColor(innovation.impact)}>
                      {innovation.impact}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-400 transition-colors">
                  {innovation.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {innovation.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Timeline:</span>
                    <span className="font-semibold text-blue-400">{innovation.timeline}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {innovation.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Innovation by Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Active Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2M+</div>
              <div className="text-blue-100">R&D Investment</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-blue-100">Patents Filed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-blue-100">Years Ahead</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyInnovationsShowcase;