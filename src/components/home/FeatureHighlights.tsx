
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
    icon: Zap,
    title: 'AI-Powered Matching',
    description: 'Advanced algorithms connect you with the perfect talent and services',
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    iconColor: 'text-zion-purple'
  },
  {
    icon: Users,
    title: 'Global Talent Network',
    description: 'Access skilled professionals from 150+ countries worldwide',
    color: 'from-zion-cyan to-zion-blue',
    bgColor: 'bg-zion-cyan/10',
    iconColor: 'text-zion-cyan'
  },
  {
    icon: Shield,
    title: 'Verified & Secure',
    description: 'All profiles and transactions are verified and secure',
    color: 'from-zion-green to-zion-green-dark',
    bgColor: 'bg-zion-green/10',
    iconColor: 'text-zion-green'
  },
  {
    icon: Globe,
    title: '24/7 Global Support',
    description: 'Round-the-clock support in multiple languages',
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    iconColor: 'text-zion-blue'
  },
  {
    icon: Clock,
    title: 'Instant Response',
    description: 'Get responses within minutes, not days',
    color: 'from-zion-orange to-zion-orange-dark',
    bgColor: 'bg-zion-orange/10',
    iconColor: 'text-zion-orange'
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    description: 'Track your success with detailed insights and metrics',
    color: 'from-zion-pink to-zion-pink-dark',
    bgColor: 'bg-zion-pink/10',
    iconColor: 'text-zion-pink'
  }
];

const achievements = [
  { icon: Award, number: '50+', label: 'Industry Awards', color: 'text-yellow-400' },
  { icon: Users, number: '1M+', label: 'Active Users', color: 'text-zion-cyan' },
  { icon: TrendingUp, number: '300%', label: 'Growth Rate', color: 'text-green-400' },
  { icon: Star, number: '4.9/5', label: 'User Rating', color: 'text-zion-purple' }
];

const technologies = [
  'Machine Learning', 'Blockchain', 'Cloud Computing', 'IoT', 'Cybersecurity', 'Data Analytics'
];

export function FeatureHighlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const achievementVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-slate-dark to-zion-slate relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-zion-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
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
            </motion.div>
          ))}
        </motion.div>

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
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of organizations already transforming their business with Zion Tech Group's innovative solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple-dark hover:to-zion-cyan-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


