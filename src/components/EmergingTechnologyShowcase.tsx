import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Shield, 
  Lightbulb, 
  Zap, 
  Target, 
  Award, 
  Star, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  DollarSign,
  Clock,
  Globe,
  Cpu,
  Lock,
  Server,
  Building,
  Users,
  Code
} from 'lucide-react';
import { SPECIALIZED_SERVICES } from '@/data/innovativeMicroSaasServices2025';

interface EmergingTechService {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  marketPrice: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  innovationLevel: string;
  marketSize: string;
  icon: any;
  color: string;
}

export function EmergingTechnologyShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const emergingTechServices: EmergingTechService[] = [
    {
      id: "quantum-financial-trading",
      title: "Quantum Financial Trading Platform",
      description: "Advanced trading platform using quantum algorithms for portfolio optimization, risk assessment, and high-frequency trading strategies.",
      category: "Quantum Finance",
      price: 8000,
      marketPrice: "$8,000 - $25,000/month",
      features: [
        "Quantum portfolio optimization",
        "Real-time risk assessment",
        "High-frequency trading algorithms",
        "Market prediction models",
        "Regulatory compliance"
      ],
      benefits: [
        "Exponential speedup for complex calculations",
        "Superior risk management",
        "Competitive advantage in trading",
        "Future-proof technology investment"
      ],
      useCases: [
        "Portfolio optimization",
        "Risk management",
        "Algorithmic trading",
        "Market analysis",
        "Compliance monitoring"
      ],
      innovationLevel: "Cutting-edge",
      marketSize: "$15.2 billion by 2025",
      icon: Rocket,
      color: "from-zion-blue to-zion-cyan"
    },
    {
      id: "neuromorphic-computing",
      title: "Neuromorphic Computing Services",
      description: "Brain-inspired computing platform for edge AI, pattern recognition, and cognitive computing applications.",
      category: "Emerging Technology",
      price: 12000,
      marketPrice: "$12,000 - $35,000/month",
      features: [
        "Brain-inspired algorithms",
        "Edge AI processing",
        "Pattern recognition",
        "Cognitive computing",
        "Low-power consumption"
      ],
      benefits: [
        "Brain-like processing capabilities",
        "Ultra-low power consumption",
        "Real-time pattern recognition",
        "Scalable cognitive computing"
      ],
      useCases: [
        "Edge AI applications",
        "Pattern recognition",
        "Cognitive computing",
        "IoT devices",
        "Autonomous systems"
      ],
      innovationLevel: "Cutting-edge",
      marketSize: "$8.7 billion by 2025",
      icon: Brain,
      color: "from-zion-purple to-zion-pink"
    },
    {
      id: "quantum-machine-learning",
      title: "Quantum Machine Learning Platform",
      description: "Quantum-enhanced machine learning platform for complex optimization problems and AI model training.",
      category: "Quantum Computing",
      price: 15000,
      marketPrice: "$15,000 - $50,000/month",
      features: [
        "Quantum ML algorithms",
        "Hybrid classical-quantum models",
        "Complex optimization",
        "AI model training",
        "Quantum feature mapping"
      ],
      benefits: [
        "Solve previously impossible problems",
        "Exponential speedup for ML tasks",
        "Superior optimization capabilities",
        "Future-proof AI technology"
      ],
      useCases: [
        "Drug discovery",
        "Financial modeling",
        "Climate simulation",
        "AI model training",
        "Complex optimization"
      ],
      innovationLevel: "Cutting-edge",
      marketSize: "$12.3 billion by 2025",
      icon: Brain,
      color: "from-zion-cyan to-zion-blue"
    },
    {
      id: "space-technology-platform",
      title: "Space Technology Platform",
      description: "Satellite data analytics, space mission planning, and orbital optimization platform for aerospace applications.",
      category: "Space Technology",
      price: 25000,
      marketPrice: "$25,000 - $75,000/month",
      features: [
        "Satellite data analytics",
        "Mission planning tools",
        "Orbital optimization",
        "Space debris tracking",
        "Launch vehicle optimization"
      ],
      benefits: [
        "Access to space data",
        "Mission optimization",
        "Cost reduction in space operations",
        "Competitive advantage in aerospace"
      ],
      useCases: [
        "Satellite operations",
        "Space mission planning",
        "Orbital mechanics",
        "Space debris management",
        "Launch optimization"
      ],
      innovationLevel: "Cutting-edge",
      marketSize: "$469.8 billion by 2025",
      icon: Rocket,
      color: "from-zion-orange to-zion-red"
    },
    {
      id: "quantum-cryptography",
      title: "Quantum Cryptography Platform",
      description: "Quantum-resistant encryption and secure communication platform for future-proof cybersecurity.",
      category: "Cybersecurity",
      price: 8500,
      marketPrice: "$8,500 - $25,000/month",
      features: [
        "Quantum-resistant algorithms",
        "Post-quantum cryptography",
        "Secure key distribution",
        "Future-proof encryption",
        "Compliance frameworks"
      ],
      benefits: [
        "Future-proof security",
        "Quantum-resistant protection",
        "Regulatory compliance",
        "Long-term security investment"
      ],
      useCases: [
        "Financial services",
        "Government communications",
        "Healthcare data",
        "Critical infrastructure",
        "Long-term data protection"
      ],
      innovationLevel: "Cutting-edge",
      marketSize: "$23.4 billion by 2025",
      icon: Shield,
      color: "from-zion-purple to-zion-red"
    },
    {
      id: "ai-ethics-platform",
      title: "AI Ethics & Governance Platform",
      description: "Comprehensive platform for AI ethics monitoring, bias detection, and responsible AI development.",
      category: "AI & Analytics",
      price: 2200,
      marketPrice: "$2,200 - $6,500/month",
      features: [
        "AI bias detection",
        "Ethics monitoring",
        "Responsible AI guidelines",
        "Compliance frameworks",
        "Stakeholder communication"
      ],
      benefits: [
        "Ensure responsible AI development",
        "Compliance with regulations",
        "Build trust with stakeholders",
        "Mitigate AI risks"
      ],
      useCases: [
        "AI model development",
        "Compliance monitoring",
        "Stakeholder reporting",
        "Risk assessment",
        "Ethics training"
      ],
      innovationLevel: "Advanced",
      marketSize: "$5.8 billion by 2025",
      icon: Brain,
      color: "from-zion-green to-zion-blue"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Technologies', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan' },
    { id: 'emerging-technology', name: 'Emerging Technology', icon: Lightbulb, color: 'from-zion-purple to-zion-orange' },
    { id: 'space-technology', name: 'Space Technology', icon: Rocket, color: 'from-zion-orange to-zion-red' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? emergingTechServices
    : emergingTechServices.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.replace('-', ' '))
      );

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
      <div className="container-responsive">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-responsive font-bold mb-6">
            <span className="text-gradient">Emerging Technology</span>
            <br />
            <span className="text-white">& Quantum Solutions</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
            Explore the cutting edge of technology with our quantum computing, neuromorphic computing, 
            space technology, and emerging technology solutions that define the future of business innovation.
          </p>
        </motion.div>

        {/* Category Selection */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="card-futuristic group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Innovation Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-zion-purple to-zion-pink text-white">
                {service.innovationLevel}
              </div>

              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-zion-slate-light">per month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Details */}
              <div className="space-y-4 mb-6">
                {/* Category & Market Size */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zion-cyan font-medium">{service.category}</span>
                  <span className="text-zion-slate-light">Market: {service.marketSize}</span>
                </div>

                {/* Market Price */}
                <div className="flex items-center justify-between text-sm">
                  <div className="text-zion-slate-light">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-zion-cyan" />
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-zion-purple" />
                    Key Benefits:
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Star className="w-3 h-3 text-zion-purple" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Globe className="w-4 h-4 text-zion-green" />
                    Use Cases:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 3).map((useCase, idx) => (
                      <span key={idx} className="px-2 py-1 bg-zion-slate-light/10 rounded-full text-xs text-zion-slate-light">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-zion-green" />
                    <span>Future-ready</span>
                  </div>
                </div>
                
                <button className="btn-futuristic px-4 py-2 text-sm group-hover:scale-105 transition-transform">
                  Explore Technology
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Impact Summary */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
            <h4 className="text-2xl font-bold text-white mb-6">
              The Future of Technology is Here
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <Rocket className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-1">Quantum Advantage</h5>
                  <p className="text-sm text-zion-slate-light">Access to quantum computing capabilities that solve previously impossible problems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-zion-purple mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-1">Emerging Technologies</h5>
                  <p className="text-sm text-zion-slate-light">Early access to cutting-edge technologies that define the future</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-zion-green mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-1">Future-Proof Security</h5>
                  <p className="text-sm text-zion-slate-light">Quantum-resistant security solutions for long-term protection</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}