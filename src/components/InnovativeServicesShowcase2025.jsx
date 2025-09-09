import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code,
  Database,
  Network,
  Smartphone,
  Globe,
  Zap,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Rocket,
  Target,
  Award,
  Atom,
  Blockchain,
  Leaf,
  Satellite,
  Activity,
  Robot,
  Eye,
  Cube,
  EyeOff,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Users2,
  Zap as ZapIcon
} from 'lucide-react';

const INNOVATIVE_SERVICES_2025 = [
  {
    id: "quantum-computing-platform",
    title: "Quantum Computing Platform",
    description: "Enterprise-grade quantum computing platform providing access to quantum processors, quantum algorithms, and hybrid classical-quantum workflows.",
    category: "Quantum Computing",
    icon: Atom,
    color: "from-purple-600 to-indigo-700",
    price: "$15,000/month",
    marketPrice: "$15,000 - $50,000/month",
    roi: "500-1000%",
    features: [
      "Access to IBM Quantum, Google Quantum, and AWS Braket",
      "Quantum algorithm library with 500+ pre-built algorithms",
      "Hybrid classical-quantum workflow orchestration",
      "Quantum error correction and noise mitigation",
      "Real-time quantum circuit visualization"
    ],
    benefits: [
      "Solve previously intractable computational problems",
      "Accelerate drug discovery by 1000x",
      "Optimize logistics and supply chains",
      "Breakthrough in materials science"
    ],
    delivery: "8-12 weeks",
    competitors: ["IBM Quantum", "Google Quantum", "Amazon Braket"],
    marketSize: "$1.9 billion by 2025"
  },
  {
    id: "enterprise-blockchain-platform",
    title: "Enterprise Blockchain Platform",
    description: "Scalable enterprise blockchain platform with smart contract automation, DeFi integration, and regulatory compliance for financial institutions.",
    category: "Blockchain & Web3",
    icon: Blockchain,
    color: "from-orange-500 to-red-600",
    price: "$8,500/month",
    marketPrice: "$8,500 - $25,000/month",
    roi: "300-600%",
    features: [
      "Multi-chain support (Ethereum, Polygon, Solana, Polkadot)",
      "Smart contract development and deployment",
      "DeFi protocol integration",
      "Regulatory compliance tools",
      "Cross-chain interoperability"
    ],
    benefits: [
      "Reduce transaction costs by 80%",
      "Increase transparency and trust",
      "Automate complex financial processes",
      "Enable new business models"
    ],
    delivery: "6-10 weeks",
    competitors: ["ConsenSys", "Chainalysis", "Alchemy"],
    marketSize: "$19.9 billion by 2025"
  },
  {
    id: "carbon-tracking-platform",
    title: "Carbon Tracking & ESG Platform",
    description: "Comprehensive carbon footprint tracking and ESG management platform for enterprises committed to sustainability and climate action.",
    category: "Green Tech",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    price: "$4,200/month",
    marketPrice: "$4,200 - $12,000/month",
    roi: "200-400%",
    features: [
      "Real-time carbon footprint calculation",
      "ESG performance tracking",
      "Sustainability reporting automation",
      "Carbon offset marketplace",
      "Supply chain sustainability monitoring"
    ],
    benefits: [
      "Achieve carbon neutrality goals",
      "Improve ESG ratings and investor appeal",
      "Reduce regulatory compliance costs",
      "Enhance brand reputation"
    ],
    delivery: "4-6 weeks",
    competitors: ["Watershed", "Normative", "Persefoni"],
    marketSize: "$8.4 billion by 2025"
  },
  {
    id: "satellite-data-platform",
    title: "Satellite Data & Analytics Platform",
    description: "Advanced satellite data processing platform providing real-time Earth observation, weather forecasting, and geospatial analytics.",
    category: "Space Tech",
    icon: Satellite,
    color: "from-blue-600 to-cyan-700",
    price: "$12,000/month",
    marketPrice: "$12,000 - $35,000/month",
    roi: "400-800%",
    features: [
      "Real-time satellite imagery processing",
      "Weather forecasting and climate modeling",
      "Agricultural monitoring and crop analysis",
      "Urban planning and infrastructure monitoring",
      "Disaster response and emergency mapping"
    ],
    benefits: [
      "Real-time global monitoring capabilities",
      "Predictive analytics for risk management",
      "Cost-effective data collection",
      "Scalable geospatial solutions"
    ],
    delivery: "10-16 weeks",
    competitors: ["Planet Labs", "Maxar", "BlackSky"],
    marketSize: "$5.6 billion by 2025"
  },
  {
    id: "neurotech-platform",
    title: "Neurotechnology Platform",
    description: "Cutting-edge brain-computer interface platform for medical applications, research, and human-computer interaction using advanced neuroscience.",
    category: "Neurotechnology",
    icon: Activity,
    color: "from-pink-500 to-rose-600",
    price: "$25,000/month",
    marketPrice: "$25,000 - $75,000/month",
    roi: "600-1200%",
    features: [
      "Non-invasive brain-computer interfaces",
      "Real-time brain activity monitoring",
      "Neural signal processing algorithms",
      "Medical device integration",
      "AI-powered diagnosis assistance"
    ],
    benefits: [
      "Revolutionary medical treatment options",
      "Improved patient outcomes",
      "Advanced research capabilities",
      "New human-computer interaction methods"
    ],
    delivery: "12-20 weeks",
    competitors: ["Neuralink", "Kernel", "CTRL-labs"],
    marketSize: "$17.1 billion by 2025"
  },
  {
    id: "robotics-automation-platform",
    title: "Advanced Robotics & Automation Platform",
    description: "Comprehensive robotics platform for industrial automation, autonomous systems, and intelligent manufacturing with AI-powered decision making.",
    category: "Robotics",
    icon: Robot,
    color: "from-gray-600 to-slate-700",
    price: "$18,000/month",
    marketPrice: "$18,000 - $50,000/month",
    roi: "350-700%",
    features: [
      "Industrial robot programming and control",
      "Computer vision and object recognition",
      "Autonomous navigation systems",
      "Predictive maintenance algorithms",
      "Quality control automation"
    ],
    benefits: [
      "Increase production efficiency by 40%",
      "Reduce operational costs by 30%",
      "Improve product quality consistency",
      "24/7 operation capability"
    ],
    delivery: "8-14 weeks",
    competitors: ["ABB", "KUKA", "FANUC"],
    marketSize: "$43.8 billion by 2025"
  },
  {
    id: "digital-twin-platform",
    title: "Digital Twin & Simulation Platform",
    description: "Advanced digital twin platform for creating virtual replicas of physical systems, enabling predictive maintenance and optimization.",
    category: "Digital Twin",
    icon: Eye,
    color: "from-indigo-500 to-purple-600",
    price: "$9,500/month",
    marketPrice: "$9,500 - $28,000/month",
    roi: "250-500%",
    features: [
      "3D modeling and visualization",
      "Real-time data synchronization",
      "Predictive analytics engine",
      "IoT sensor integration",
      "Simulation and scenario testing"
    ],
    benefits: [
      "Reduce maintenance costs by 50%",
      "Improve operational efficiency by 35%",
      "Prevent equipment failures",
      "Optimize resource allocation"
    ],
    delivery: "6-10 weeks",
    competitors: ["Siemens", "GE Digital", "PTC"],
    marketSize: "$86.1 billion by 2025"
  },
  {
    id: "metaverse-platform",
    title: "Metaverse & Virtual Reality Platform",
    description: "Comprehensive metaverse platform for creating immersive virtual experiences, virtual events, and digital asset marketplaces.",
    category: "Metaverse",
    icon: Cube,
    color: "from-teal-500 to-green-600",
    price: "$7,500/month",
    marketPrice: "$7,500 - $22,000/month",
    roi: "300-600%",
    features: [
      "3D virtual world creation tools",
      "Avatar customization system",
      "Virtual event hosting platform",
      "NFT marketplace integration",
      "Social networking features"
    ],
    benefits: [
      "Create immersive brand experiences",
      "Host virtual events globally",
      "Generate new revenue streams",
      "Enhance customer engagement"
    ],
    delivery: "8-12 weeks",
    competitors: ["Meta", "Roblox", "Decentraland"],
    marketSize: "$74.4 billion by 2025"
  },
  {
    id: "quantum-cybersecurity",
    title: "Quantum Cybersecurity Platform",
    description: "Next-generation cybersecurity platform using quantum-resistant cryptography, AI-powered threat detection, and zero-trust architecture.",
    category: "Cybersecurity",
    icon: Shield,
    color: "from-red-500 to-pink-600",
    price: "$11,000/month",
    marketPrice: "$11,000 - $32,000/month",
    roi: "400-800%",
    features: [
      "Quantum-resistant encryption algorithms",
      "AI-powered threat detection",
      "Zero-trust network architecture",
      "Advanced persistent threat protection",
      "Behavioral analytics"
    ],
    benefits: [
      "Future-proof against quantum attacks",
      "Reduce security incidents by 90%",
      "Automated threat response",
      "Comprehensive compliance coverage"
    ],
    delivery: "6-10 weeks",
    competitors: ["CrowdStrike", "SentinelOne", "Palo Alto Networks"],
    marketSize: "$376.3 billion by 2025"
  },
  {
    id: "autonomous-ai-platform",
    title: "Autonomous AI Platform",
    description: "Self-learning AI platform that continuously improves and adapts to business needs, providing autonomous decision-making and optimization.",
    category: "AI & Machine Learning",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    price: "$16,000/month",
    marketPrice: "$16,000 - $45,000/month",
    roi: "500-1000%",
    features: [
      "Self-learning algorithms",
      "Autonomous decision making",
      "Continuous model improvement",
      "Multi-modal AI capabilities",
      "Explainable AI framework"
    ],
    benefits: [
      "Automated business optimization",
      "Continuous performance improvement",
      "Reduced human intervention",
      "Adaptive to changing conditions"
    ],
    delivery: "10-16 weeks",
    competitors: ["DataRobot", "H2O.ai", "Dataiku"],
    marketSize: "$190.6 billion by 2025"
  }
];

const CONTACT_INFO = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

export function InnovativeServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const categories = ['all', ...new Set(INNOVATIVE_SERVICES_2025.map(service => service.category))];
  
  const filteredServices = selectedCategory === 'all' 
    ? INNOVATIVE_SERVICES_2025 
    : INNOVATIVE_SERVICES_2025.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Next-Generation
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Micro SAAS Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge technology solutions. From quantum computing to neurotechnology, 
              we deliver innovative micro SAAS services that drive exponential growth and competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Started Today
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-5 w-5 mr-2" />
                Request Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category === 'all' ? 'All Services' : category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all duration-300 hover:scale-105 cursor-pointer border border-slate-700 hover:border-blue-500"
              onClick={() => setSelectedService(service)}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-4 line-clamp-3">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Starting Price:</span>
                  <span className="text-green-400 font-semibold">{service.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Market Range:</span>
                  <span className="text-blue-400 font-semibold">{service.marketPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">ROI:</span>
                  <span className="text-yellow-400 font-semibold">{service.roi}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Delivery:</span>
                  <span className="text-purple-400 font-semibold">{service.delivery}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">{service.category}</span>
                <div className="flex items-center text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm">Innovative</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the future of technology with Zion Tech Group. Our expert team is ready to help you implement 
            these cutting-edge solutions and drive unprecedented growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-blue-100 hover:text-white transition-colors">
                {CONTACT_INFO.phone}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-100 hover:text-white transition-colors">
                {CONTACT_INFO.email}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">{CONTACT_INFO.address}</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={CONTACT_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Globe className="h-5 w-5 mr-2" />
              Visit Website
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-5 w-5 mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center`}>
                <selectedService.icon className="h-10 w-10 text-white" />
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <EyeOff className="h-6 w-6" />
              </button>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">{selectedService.title}</h2>
            <p className="text-slate-300 mb-6">{selectedService.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-slate-700 rounded-lg">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <p className="text-slate-400 text-sm">Starting Price</p>
                <p className="text-white font-semibold">{selectedService.price}</p>
              </div>
              <div className="text-center p-4 bg-slate-700 rounded-lg">
                <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <p className="text-slate-400 text-sm">ROI</p>
                <p className="text-white font-semibold">{selectedService.roi}</p>
              </div>
              <div className="text-center p-4 bg-slate-700 rounded-lg">
                <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-slate-400 text-sm">Delivery</p>
                <p className="text-white font-semibold">{selectedService.delivery}</p>
              </div>
              <div className="text-center p-4 bg-slate-700 rounded-lg">
                <Users2 className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <p className="text-slate-400 text-sm">Support</p>
                <p className="text-white font-semibold">Enterprise</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Quote
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Request Demo
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}