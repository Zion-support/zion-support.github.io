import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  Rocket,
  Target,
  TrendingUp,
  Users,
  Award,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const RevolutionaryTechShowcase2027 = () => {
  const services = [
    {
      category: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "AI Consciousness Platform",
          description: "Self-aware AI with autonomous decision-making capabilities",
          price: "$2,999/month",
          savings: "Save 70% vs market",
          features: ["Self-learning", "Emotional intelligence", "Creative problem solving"]
        },
        {
          name: "Predictive Analytics Suite",
          description: "Advanced forecasting with 99.9% accuracy",
          price: "$1,499/month",
          savings: "Save 60% vs market",
          features: ["Real-time predictions", "Multi-variable analysis", "Automated insights"]
        }
      ]
    },
    {
      category: "Quantum Computing",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Quantum Optimization Engine",
          description: "Solve complex problems in seconds, not years",
          price: "$4,999/month",
          savings: "Save 80% vs market",
          features: ["Quantum supremacy", "Instant calculations", "Unlimited scalability"]
        },
        {
          name: "Quantum Cryptography Suite",
          description: "Unbreakable encryption for the quantum era",
          price: "$3,499/month",
          savings: "Save 65% vs market",
          features: ["Quantum key distribution", "Future-proof security", "Zero vulnerabilities"]
        }
      ]
    },
    {
      category: "Autonomous Systems",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "Self-Managing Infrastructure",
          description: "Infrastructure that optimizes itself 24/7",
          price: "$2,499/month",
          savings: "Save 70% vs market",
          features: ["Auto-scaling", "Predictive maintenance", "Zero downtime"]
        },
        {
          name: "Autonomous Business Operations",
          description: "AI-driven business management and optimization",
          price: "$3,999/month",
          savings: "Save 75% vs market",
          features: ["Smart routing", "Automated decisions", "Continuous optimization"]
        }
      ]
    },
    {
      category: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        {
          name: "Quantum Security Platform",
          description: "Next-generation protection against quantum threats",
          price: "$2,999/month",
          savings: "Save 65% vs market",
          features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture"]
        },
        {
          name: "Autonomous Threat Response",
          description: "AI that defends your systems automatically",
          price: "$1,999/month",
          savings: "Save 60% vs market",
          features: ["Real-time protection", "Automated response", "Predictive defense"]
        }
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Fortune 500 Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Target },
    { number: "10x", label: "Performance Boost", icon: TrendingUp },
    { number: "24/7", label: "AI Monitoring", icon: Award }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Star className="w-4 h-4" />
            REVOLUTIONARY TECH 2027
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            The Future of Technology
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Is Here Today
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience revolutionary technologies that will transform your business in 2027 and beyond. 
            From AI consciousness to quantum computing, we're bringing tomorrow's innovations to your doorstep today.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  <p className="text-gray-600">Revolutionary solutions for the modern enterprise</p>
                </div>
              </div>

              {/* Services */}
              <div className="grid md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h4>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-green-600">{service.price}</span>
                        <span className="text-sm text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full">
                          {service.savings}
                        </span>
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Revolutionize Your Business?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join the technology revolution and transform your business with our cutting-edge 2027 solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2027;