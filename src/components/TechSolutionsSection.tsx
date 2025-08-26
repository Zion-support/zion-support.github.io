import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Lock, 
  Globe, 
  Heart,
  Zap,
  Database,
  Network,
  Code
} from 'lucide-react';

const techSolutions = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI & Machine Learning",
    description: "Advanced artificial intelligence solutions for business automation and decision-making",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning"],
    color: "from-zion-cyan to-zion-blue",
    href: "/services/ai-analytics"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets",
    features: ["Threat Detection", "Data Encryption", "Compliance Management", "Incident Response"],
    color: "from-zion-purple to-zion-red",
    href: "/services/cybersecurity"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions",
    features: ["Multi-cloud Strategy", "Container Orchestration", "CI/CD Pipelines", "Infrastructure as Code"],
    color: "from-zion-blue to-zion-cyan",
    href: "/services/cloud-devops"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "IoT & Edge Computing",
    description: "Connected devices and edge processing for real-time data insights",
    features: ["Sensor Networks", "Edge Analytics", "Device Management", "Real-time Processing"],
    color: "from-zion-green to-zion-blue",
    href: "/services/iot-edge"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Quantum Computing",
    description: "Next-generation computing solutions for complex problem-solving",
    features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Simulation"],
    color: "from-zion-purple to-zion-pink",
    href: "/services/quantum-computing"
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Blockchain",
    description: "Distributed ledger technology for secure and transparent transactions",
    features: ["Smart Contracts", "DeFi Solutions", "Supply Chain Tracking", "Digital Identity"],
    color: "from-zion-orange to-zion-yellow",
    href: "/services/blockchain"
  }
];

export function TechSolutionsSection() {
  return (
    <section className="py-20 bg-zion-slate-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
            Cutting-Edge Technology Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our comprehensive suite of innovative technology solutions designed to transform your business
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techSolutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-zion-slate-light/5 to-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full group-hover:shadow-2xl group-hover:shadow-zion-cyan/20">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {solution.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                  {solution.title}
                </h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  to={solution.href}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold group-hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <Zap className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-slate-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to explore our technology solutions?
              </p>
              <Link 
                to="/services"
                className="inline-block px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}