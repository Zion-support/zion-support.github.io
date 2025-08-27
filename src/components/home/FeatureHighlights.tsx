import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  ShoppingCart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the next generation of technology solutions with features designed to maximize efficiency and value
          </p>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Choose Zion Tech Group?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto"
          >
            Experience the future of technology with our cutting-edge solutions and unparalleled expertise
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className={`h-full p-8 rounded-2xl ${highlight.bgColor} border ${highlight.borderColor} backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {highlight.description}
                </p>

                <ul className="space-y-2">
                  {highlight.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={achievementVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-zion-slate-dark/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-zion-cyan/20">
                  <achievement.icon className={`w-10 h-10 ${achievement.color}`} />
                </div>
                <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                  {achievement.number}
                </div>
                <div className="text-gray-300 text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">Technologies We Master</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                variants={techVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="px-6 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-zion-cyan hover:bg-zion-cyan/10 transition-colors duration-300">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
