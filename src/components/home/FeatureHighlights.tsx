import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Globe,
  Shield,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Heart
} from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Advanced machine learning algorithms that continuously learn and adapt to provide smarter solutions.',
    features: ['Predictive Analytics', 'Smart Recommendations', 'Automated Workflows'],
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    borderColor: 'border-zion-purple/20'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Connect with professionals and businesses from over 150 countries worldwide.',
    features: ['Multi-language Support', 'Local Expertise', '24/7 Availability'],
    color: 'from-zion-cyan to-zion-cyan-dark',
    bgColor: 'bg-zion-cyan/10',
    borderColor: 'border-zion-cyan/20'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption.',
    features: ['Data Protection', 'Access Control', 'Audit Trails'],
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    borderColor: 'border-zion-blue/20'
  }
];

const features = [
  {
    icon: "🚀",
    title: "Cutting-Edge Technology",
    description: "Leverage the latest advancements in AI, quantum computing, and blockchain technology"
  },
  {
    icon: "⚡",
    title: "Lightning Fast Performance",
    description: "Optimized solutions that deliver exceptional speed and efficiency for your business needs"
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "Bank-level security protocols and compliance standards to protect your valuable data"
  },
  {
    icon: "🌐",
    title: "Global Scalability",
    description: "Solutions that scale seamlessly from startup to enterprise across multiple regions"
  },
  {
    icon: "🤖",
    title: "AI-Powered Intelligence",
    description: "Smart automation and predictive analytics that adapt to your business requirements"
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    description: "Comprehensive insights and reporting to make data-driven decisions instantly"
  }
];

export function FeatureHighlights() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-purple/10 border border-zion-purple/20 rounded-full text-zion-purple text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Why Choose Zion</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Built for the Future of Work
          </h2>

          <p className="text-lg md:text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of talent marketplace with cutting-edge AI,
            global reach, and enterprise-grade security.
          </p>
        </motion.div>

        {/* Feature Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className={`h-full p-8 rounded-3xl ${highlight.bgColor} ${highlight.borderColor} border-2 hover:border-opacity-40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden`}>
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-white/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-200">
                    {highlight.title}
                  </h3>

                  <p className="text-zion-slate-light leading-relaxed mb-6">
                    {highlight.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {highlight.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-12">
            Trusted by Industry Leaders
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={achievementVariants}
                className="text-center"
              >
                <div className={`inline-flex p-4 rounded-full bg-white/5 mb-4`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                  {achievement.number}
                </div>
                <div className="text-zion-slate-light text-sm">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Cutting-Edge Technology Stack
          </h3>

          <motion.div
            variants={techVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium hover:bg-zion-cyan/20 transition-colors duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span>Experience the difference</span>
            <span className="text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


