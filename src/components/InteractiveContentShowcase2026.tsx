import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Code, 
  Zap, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Shield, 
  Target,
  Sparkles,
  Rocket,
  Cpu,
  Database,
  Globe,
  BarChart3,
  Users,
  CheckCircle,
  Play,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Heart,
  Home,
  Activity,
  Settings,
  Building,
  MessageSquare,
  Calculator,
  Lock
} from 'lucide-react';

interface InteractiveContentShowcase2026Props {
  className?: string;
  children?: React.ReactNode;
}

export default function InteractiveContentShowcase2026({ 
  className = '', 
  children 
}: InteractiveContentShowcase2026Props) {
  const [activeTab, setActiveTab] = useState('ai');
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: 'ai', label: 'AI Solutions', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'micro', label: 'Micro SAAS', icon: Code, color: 'from-cyan-500 to-blue-500' },
    { id: 'it', label: 'IT Services', icon: Cloud, color: 'from-green-500 to-emerald-500' },
    { id: 'quantum', label: 'Quantum', icon: Zap, color: 'from-yellow-500 to-orange-500' }
  ];

  const aiSolutions = [
    {
      title: "AI Drug Discovery Pro",
      description: "Revolutionary AI platform accelerating pharmaceutical research and drug development",
      price: "$4,500/mo",
      features: ["Molecular Modeling", "Drug Interaction Analysis", "Clinical Trial Optimization"],
      icon: Brain,
      category: "Healthcare AI",
      link: "/ai-drug-discovery-pro",
      enterprise: true,
      stats: { accuracy: "99.7%", speed: "60x faster", clients: "50+" }
    },
    {
      title: "AI Climate Solutions Pro",
      description: "Advanced environmental monitoring and carbon footprint optimization platform",
      price: "$3,200/mo",
      features: ["Carbon Analysis", "Weather Prediction", "Sustainability Planning"],
      icon: Globe,
      category: "Environmental AI",
      link: "/ai-climate-solutions-pro",
      stats: { accuracy: "95.2%", reduction: "40%", impact: "Global" }
    },
    {
      title: "AI Space Technology Pro",
      description: "Cutting-edge space exploration and satellite management solutions",
      price: "$5,500/mo",
      features: ["Satellite Operations", "Mission Planning", "Data Analysis"],
      icon: Rocket,
      category: "Space Technology",
      link: "/ai-space-technology-pro",
      enterprise: true,
      stats: { missions: "100+", satellites: "500+", accuracy: "99.9%" }
    },
    {
      title: "AI Financial Crime Detection Pro",
      description: "Real-time fraud detection and financial security monitoring system",
      price: "$2,800/mo",
      features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring"],
      icon: Shield,
      category: "Financial AI",
      link: "/ai-financial-crime-detection-pro",
      stats: { prevented: "$5M+", accuracy: "99.7%", response: "<1ms" }
    }
  ];

  const microSaasSolutions = [
    {
      title: "AI Project Manager Pro",
      description: "Intelligent project management with predictive analytics and automation",
      price: "$99/mo",
      features: ["Smart Scheduling", "Risk Prediction", "Team Optimization"],
      icon: BarChart3,
      category: "Productivity",
      link: "/ai-project-manager",
      popular: true,
      stats: { efficiency: "85%", time: "50% saved", projects: "1000+" }
    },
    {
      title: "AI Voice Cloning Studio Pro",
      description: "Professional voice synthesis and cloning for content creators",
      price: "$149/mo",
      features: ["Voice Synthesis", "Emotion Control", "Multi-language"],
      icon: Users,
      category: "Creative",
      link: "/ai-voice-cloning-studio",
      stats: { voices: "100+", languages: "50+", quality: "Studio" }
    },
    {
      title: "AI Code Security Auditor Pro",
      description: "Automated code security analysis and vulnerability detection",
      price: "$199/mo",
      features: ["Vulnerability Scanning", "Code Quality", "Auto-fix"],
      icon: Shield,
      category: "Security",
      link: "/ai-code-security-auditor",
      stats: { vulnerabilities: "1000+", accuracy: "98.5%", fixes: "Auto" }
    },
    {
      title: "AI Mental Health Companion Pro",
      description: "AI-powered mental health support and wellness tracking",
      price: "$79/mo",
      features: ["Mood Tracking", "Therapy Sessions", "Crisis Support"],
      icon: Heart,
      category: "Health",
      link: "/ai-mental-health-companion",
      stats: { users: "10K+", satisfaction: "94%", support: "24/7" }
    }
  ];

  const itSolutions = [
    {
      title: "AI Infrastructure Monitoring Pro",
      description: "Intelligent monitoring and optimization of IT infrastructure",
      price: "$1,800/mo",
      features: ["Real-time Monitoring", "Predictive Maintenance", "Performance Optimization"],
      icon: Activity,
      category: "Infrastructure",
      link: "/ai-infrastructure-monitoring",
      stats: { uptime: "99.9%", incidents: "-70%", efficiency: "90%" }
    },
    {
      title: "Blockchain Integration Services Pro",
      description: "Complete blockchain integration and smart contract development",
      price: "$2,500/mo",
      features: ["Smart Contracts", "Blockchain Migration", "Security Audits"],
      icon: Shield,
      category: "Blockchain",
      link: "/blockchain-integration-services",
      stats: { contracts: "500+", security: "100%", uptime: "99.9%" }
    },
    {
      title: "AI API Management Pro",
      description: "Intelligent API management with automated scaling and security",
      price: "$1,400/mo",
      features: ["API Gateway", "Rate Limiting", "Security Monitoring"],
      icon: Settings,
      category: "API Management",
      link: "/ai-api-management",
      stats: { apis: "1000+", requests: "1B+", latency: "<50ms" }
    },
    {
      title: "Intelligent Database Migration Pro",
      description: "AI-powered database migration with zero downtime",
      price: "$2,200/mo",
      features: ["Zero Downtime", "Data Integrity", "Performance Optimization"],
      icon: Database,
      category: "Database",
      link: "/intelligent-database-migration",
      stats: { migrations: "500+", downtime: "0s", success: "100%" }
    }
  ];

  const quantumSolutions = [
    {
      title: "Quantum Computing Solutions",
      description: "Revolutionary quantum computing power for complex problem solving",
      price: "$5,000/mo",
      features: ["Quantum Algorithms", "Optimization", "Simulation"],
      icon: Zap,
      category: "Quantum Computing",
      link: "/quantum-computing",
      enterprise: true,
      stats: { qubits: "1000+", speed: "1000x", problems: "Complex" }
    },
    {
      title: "Autonomous Systems",
      description: "AI-powered autonomous systems for various industries",
      price: "$4,000/mo",
      features: ["Self-Driving", "Robotics", "Drones"],
      icon: Settings,
      category: "Autonomous",
      link: "/autonomous-systems",
      stats: { systems: "100+", autonomy: "95%", safety: "99.9%" }
    },
    {
      title: "Blockchain & Web3",
      description: "Advanced blockchain and Web3 solutions for the decentralized future",
      price: "$2,500/mo",
      features: ["DeFi", "NFTs", "Smart Contracts"],
      icon: Lock,
      category: "Web3",
      link: "/blockchain-web3",
      stats: { transactions: "1M+", security: "100%", decentralized: "Yes" }
    },
    {
      title: "IoT & Edge Computing",
      description: "Intelligent IoT and edge computing solutions for connected devices",
      price: "$1,800/mo",
      features: ["Edge AI", "Device Management", "Real-time Processing"],
      icon: Globe,
      category: "IoT",
      link: "/iot-edge-computing",
      stats: { devices: "10K+", latency: "<10ms", efficiency: "95%" }
    }
  ];

  const getCurrentSolutions = () => {
    switch (activeTab) {
      case 'ai': return aiSolutions;
      case 'micro': return microSaasSolutions;
      case 'it': return itSolutions;
      case 'quantum': return quantumSolutions;
      default: return aiSolutions;
    }
  };

  const currentSolutions = getCurrentSolutions();

  return (
    <div className={`relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
            Interactive Solutions Showcase 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive suite of AI, micro SAAS, IT, and quantum solutions. 
            Interactive demos and real-time statistics showcase the power of our technology.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl shadow-cyan-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-30"></div>
              )}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {currentSolutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                solution.popular ? 'ring-2 ring-cyan-400/30' : ''
              } ${solution.enterprise ? 'ring-2 ring-purple-400/30' : ''}`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {solution.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              {solution.enterprise && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Enterprise
                  </span>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {solution.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Interactive Stats */}
                {hoveredService === index && solution.stats && (
                  <div className="mb-4 p-3 bg-white/5 rounded-lg border border-cyan-400/20">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(solution.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-cyan-400 font-bold">{value}</div>
                          <div className="text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{solution.price}</div>
                  <Link
                    to={solution.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-1 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 neon-text">
              Try Our Interactive Demo
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience the power of our AI solutions with our interactive demonstration. 
              See real-time results and understand how our technology can transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                <Play className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Live Demo</h4>
              <p className="text-gray-400 text-sm mb-4">
                Watch our AI solutions in action with real-time demonstrations
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all"
              >
                Start Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                <Calculator className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">ROI Calculator</h4>
              <p className="text-gray-400 text-sm mb-4">
                Calculate your potential return on investment with our AI solutions
              </p>
              <Link
                to="/roi-calculator"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all"
              >
                Calculate ROI
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Expert Consultation</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get personalized recommendations from our AI experts
              </p>
              <Link
                to="/consultation"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking companies already using our cutting-edge solutions 
              to achieve unprecedented growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </Link>
              
              <div className="flex items-center space-x-6 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-cyan-400 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}