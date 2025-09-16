import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Rocket, 
  ArrowRight, 
  Star, 
  Check, 
  TrendingUp,
  Shield,
  Clock,
  Users,
  Sparkles
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  category: string;
  isNew?: boolean;
  featured: boolean;
  icon: string;
}

const NewServicesShowcase2026: React.FC = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'pro' | 'enterprise'>('pro');

  const services: Service[] = [
    {
      id: "quantum-ai-consulting",
      title: "Quantum AI Consulting Services",
      description: "Revolutionary consulting services leveraging quantum computing principles to solve complex AI challenges and unlock unprecedented computational capabilities.",
      features: [
        "Quantum algorithm development for AI applications",
        "Quantum consciousness AI implementation",
        "Multi-dimensional data processing solutions",
        "Quantum neural network architecture design",
        "Quantum machine learning optimization",
        "Interdimensional AI system integration",
        "Quantum security protocols for AI systems",
        "24/7 quantum AI specialist support"
      ],
      pricing: {
        basic: 50000,
        pro: 150000,
        enterprise: 500000
      },
      category: "Quantum AI",
      isNew: true,
      featured: true,
      icon: "quantum-brain"
    },
    {
      id: "neural-reality-platform",
      title: "Neural Reality Platform",
      description: "Complete platform for building brain-computer interfaces and neural reality applications that enable direct thought-to-digital communication.",
      features: [
        "Non-invasive neural signal capture",
        "Real-time brain pattern recognition",
        "Universal digital device integration",
        "Haptic feedback systems",
        "Multi-user neural networks",
        "Advanced security and privacy protection",
        "Developer SDK and APIs",
        "Comprehensive training and support"
      ],
      pricing: {
        basic: 25000,
        pro: 75000,
        enterprise: 250000
      },
      category: "Neural Technology",
      isNew: true,
      featured: true,
      icon: "neural-network"
    },
    {
      id: "autonomous-business-ecosystem",
      title: "Autonomous Business Ecosystem",
      description: "Complete AI-powered business automation platform that enables companies to operate autonomously with minimal human intervention.",
      features: [
        "Fully autonomous business operations",
        "AI-driven strategic decision making",
        "Automated customer service and sales",
        "Intelligent supply chain management",
        "Predictive market analysis",
        "Self-optimizing business processes",
        "Real-time performance monitoring",
        "Scalable enterprise architecture"
      ],
      pricing: {
        basic: 100000,
        pro: 300000,
        enterprise: 1000000
      },
      category: "Business Automation",
      isNew: true,
      featured: true,
      icon: "autonomous-robot"
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "quantum-brain":
        return <Brain className="w-8 h-8" />;
      case "neural-network":
        return <Zap className="w-8 h-8" />;
      case "autonomous-robot":
        return <Rocket className="w-8 h-8" />;
      default:
        return <Sparkles className="w-8 h-8" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Quantum AI":
        return "from-purple-500 to-indigo-600";
      case "Neural Technology":
        return "from-blue-500 to-cyan-600";
      case "Business Automation":
        return "from-emerald-500 to-teal-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(0)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            NEW SERVICES LAUNCHED
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-6">
            Revolutionary AI Services
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Now Available
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology with our cutting-edge AI services that are transforming industries and reshaping possibilities
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedService === index
                  ? `bg-gradient-to-r ${getCategoryColor(service.category)} text-white shadow-lg transform scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <div className="flex items-center gap-2">
                {getIcon(service.icon)}
                <span>{service.category}</span>
                {service.isNew && (
                  <div className="px-2 py-1 bg-emerald-500 text-white text-xs rounded-full">
                    NEW
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Service Content */}
        <motion.div
          key={selectedService}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Service Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(services[selectedService].category)}`}>
                {getIcon(services[selectedService].icon)}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  {services[selectedService].title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-400">{services[selectedService].category}</span>
                  {services[selectedService].isNew && (
                    <div className="px-2 py-1 bg-emerald-500 text-white text-xs rounded-full animate-pulse">
                      NEW SERVICE
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {services[selectedService].description}
            </p>

            <div className="space-y-4 mb-8">
              {services[selectedService].features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-white mb-6">Choose Your Plan</h4>
            
            {/* Plan Selector */}
            <div className="flex bg-gray-800/50 rounded-xl p-1 mb-6">
              {(['basic', 'pro', 'enterprise'] as const).map((plan) => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedPlan === plan
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {plan.charAt(0).toUpperCase() + plan.slice(1)}
                </button>
              ))}
            </div>

            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-white mb-2">
                  {formatPrice(services[selectedService].pricing[selectedPlan])}
                </div>
                <div className="text-gray-400">
                  {selectedPlan === 'basic' && 'Perfect for startups'}
                  {selectedPlan === 'pro' && 'Ideal for growing businesses'}
                  {selectedPlan === 'enterprise' && 'For large organizations'}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Unlimited team members</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>24/7 priority support</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Enterprise-grade security</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  <span>Advanced analytics & insights</span>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of companies already using our revolutionary AI services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewServicesShowcase2026;