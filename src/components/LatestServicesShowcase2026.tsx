import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Rocket, 
  Star, 
  Target, 
  Users, 
  Globe,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';

const LatestServicesShowcase2026: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Consciousness-Level AI Systems",
      description: "Revolutionary AI systems with true consciousness, emotional intelligence, and creative problem-solving capabilities",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-600/20",
      borderColor: "border-purple-400/30",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Thinking"],
      link: "/pages/RevolutionaryAIServices2026",
      badge: "BREAKTHROUGH"
    },
    {
      id: 2,
      title: "Quantum Cybersecurity Platform",
      description: "Multi-dimensional threat detection and prevention across parallel realities using quantum entanglement",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20",
      borderColor: "border-blue-400/30",
      features: ["Quantum Encryption", "Multi-Dimensional Protection", "Predictive Security"],
      link: "/pages/QuantumCybersecurity2026",
      badge: "REVOLUTIONARY"
    },
    {
      id: 3,
      title: "Autonomous Business Operations",
      description: "Fully autonomous business systems that operate independently and achieve 1000% ROI",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-600/20",
      borderColor: "border-green-400/30",
      features: ["1000% ROI", "Autonomous Decision Making", "24/7 Operations"],
      link: "/pages/AutonomousBusinessRevolution2026",
      badge: "1000% ROI"
    },
    {
      id: 4,
      title: "Consciousness Transfer Technology",
      description: "Breakthrough technology enabling seamless consciousness transfer between biological and artificial systems",
      icon: <Star className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-red-600/20",
      borderColor: "border-orange-400/30",
      features: ["Human-AI Integration", "Consciousness Transfer", "Enhanced Capabilities"],
      link: "/pages/ConsciousnessTransfer2026",
      badge: "NEXT FRONTIER"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Rocket className="w-8 h-8 text-cyan-400" />
            <span className="text-cyan-400 font-bold text-lg tracking-wide">LATEST 2026</span>
            <Rocket className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Revolutionary Services
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Redefining Reality
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of technology services that are transforming industries and reshaping the future of business operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${service.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${service.borderColor} hover:scale-105 transition-all duration-300 group overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`}></div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {service.badge}
                </span>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="text-xs bg-white/10 text-white px-3 py-1 rounded-full border border-white/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={service.link}
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.color} text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group/btn`}
                >
                  <span>Explore Service</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span className="text-3xl font-bold text-white">1000%</span>
              </div>
              <p className="text-gray-300 font-semibold">Average ROI</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-6 h-6 text-blue-400" />
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-gray-300 font-semibold">Enterprise Clients</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-6 h-6 text-purple-400" />
                <span className="text-3xl font-bold text-white">50+</span>
              </div>
              <p className="text-gray-300 font-semibold">Countries Served</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="text-3xl font-bold text-white">24/7</span>
              </div>
              <p className="text-gray-300 font-semibold">Autonomous Operations</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution and experience the power of consciousness-level AI and quantum technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/pages/ComprehensiveServices2025"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Services
            </Link>
            <Link
              to="/pages/Contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestServicesShowcase2026;