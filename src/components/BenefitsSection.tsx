import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  Zap,
  Brain,
  Globe,
  CheckCircle,
  Star,
  Award,
  Heart
} from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  gradient: string;
  features: string[];
  stats: { value: string; label: string }[];
}

const benefits: Benefit[] = [
  {
    title: "Accelerated Growth",
    description: "Transform your business with AI-powered solutions that drive exponential growth and market leadership",
    icon: Rocket,
    color: "from-cyan-500 to-blue-600",
    gradient: "from-cyan-500/20 to-blue-500/20",
    features: [
      "10x faster market entry",
      "Automated scaling processes",
      "Predictive growth modeling",
      "Real-time performance optimization"
    ],
    stats: [
      { value: "450%", label: "ROI Increase" },
      { value: "10x", label: "Faster Growth" },
      { value: "85%", label: "Cost Reduction" }
    ]
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security protocols with AI-powered threat detection and zero-trust architecture",
    icon: Shield,
    color: "from-red-500 to-orange-600",
    gradient: "from-red-500/20 to-orange-500/20",
    features: [
      "99.9% threat detection rate",
      "Zero-trust security model",
      "24/7 automated monitoring",
      "Compliance automation"
    ],
    stats: [
      { value: "99.9%", label: "Threat Detection" },
      { value: "<5min", label: "Response Time" },
      { value: "100%", label: "Compliance Rate" }
    ]
  },
  {
    title: "Operational Excellence",
    description: "Streamline operations with intelligent automation and data-driven decision making",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-600",
    gradient: "from-green-500/20 to-emerald-500/20",
    features: [
      "80% process automation",
      "Real-time analytics dashboard",
      "Predictive maintenance",
      "Intelligent resource allocation"
    ],
    stats: [
      { value: "80%", label: "Automation Rate" },
      { value: "60%", label: "Efficiency Gain" },
      { value: "24/7", label: "Uptime" }
    ]
  },
  {
    title: "Global Expertise",
    description: "Access world-class technology expertise from our international team of specialists",
    icon: Globe,
    color: "from-purple-500 to-pink-600",
    gradient: "from-purple-500/20 to-pink-500/20",
    features: [
      "15+ years experience",
      "500+ global clients",
      "24/7 expert support",
      "Local market knowledge"
    ],
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "500+", label: "Global Clients" },
      { value: "98%", label: "Satisfaction Rate" }
    ]
  },
  {
    title: "Innovation Leadership",
    description: "Stay ahead of the curve with cutting-edge technology and forward-thinking solutions",
    icon: Brain,
    color: "from-yellow-500 to-orange-600",
    gradient: "from-yellow-500/20 to-orange-500/20",
    features: [
      "AI-first approach",
      "Quantum computing ready",
      "Edge computing solutions",
      "Sustainable tech practices"
    ],
    stats: [
      { value: "95%", label: "Innovation Index" },
      { value: "100+", label: "Patents Filed" },
      { value: "24/7", label: "R&D Focus" }
    ]
  },
  {
    title: "Customer Success",
    description: "Deliver exceptional customer experiences with AI-powered engagement and personalization",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    gradient: "from-pink-500/20 to-rose-500/20",
    features: [
      "AI-powered personalization",
      "Omnichannel engagement",
      "Predictive customer insights",
      "Automated support systems"
    ],
    stats: [
      { value: "98%", label: "Customer Satisfaction" },
      { value: "300%", label: "Engagement Increase" },
      { value: "85%", label: "Retention Rate" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Zion Tech</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience the transformative power of our AI-driven solutions and unlock unprecedented business potential
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-md rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-grow">
                    <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {benefit.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="mb-6">
                    <div className="grid grid-cols-3 gap-4">
                      {benefit.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                          <div className="text-xs text-slate-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-auto">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-md rounded-3xl border border-cyan-500/30 p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their business with our AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}