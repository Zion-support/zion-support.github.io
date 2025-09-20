=======

import React from 'react';
import { motion } from 'framer-motion';
import { 
=======
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
  Zap as ZapIcon
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

  Zap, 
  Users, 
  Shield, 
  Globe, 
  Clock, 
  TrendingUp,
  Award,
  Heart
} from 'lucide-react';

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

=======
=======
export function FeatureHighlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
=======
        staggerChildren: 0.2,
=======
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
=======
    hidden: { opacity: 0, y: 30, scale: 0.95 },
=======
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

=======
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
          className="text-center mb-20"
  return (
    <section className="py-20 bg-gradient-to-b from-zion-slate/5 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
=======
=======
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
=======
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Why Industry Leaders
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
              Choose Zion Tech Group
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover the cutting-edge features and capabilities that make us the preferred choice for forward-thinking organizations
          </p>
        </motion.div>

        {/* Feature Highlights Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          className="text-center mb-16"
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

        <motion.div
=======
=======
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
=======
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

        {/* Achievements Section */}
        <motion.div 
          className="bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 rounded-3xl p-8 md:p-12 border border-zion-blue-light/20 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Proven Track Record
            </h3>
            <p className="text-zion-slate-light text-lg">
              Our achievements speak volumes about our commitment to excellence
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={achievementVariants}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`inline-flex p-4 rounded-full bg-white/10 mb-4 ${achievement.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-zion-slate-light text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Cutting-Edge Technology Stack
          </h3>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={techVariants}
                className="px-6 py-3 bg-zion-blue/20 border border-zion-blue-light/30 rounded-full text-zion-cyan hover:bg-zion-blue/30 hover:border-zion-blue-light/50 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-10 py-4 rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Explore Our Technology
              <ArrowRight className="w-6 h-6" />
            </div>
          </motion.div>
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-purple/10">
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon container with enhanced styling */}
                  <div className={`relative z-10 w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg`}>
                    <IconComponent className={`w-10 h-10 ${feature.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-zion-slate-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-zion-purple/10 via-zion-cyan/10 to-zion-blue/10 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-zion-purple animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Join Thousands of Satisfied Users
              </h3>
              <Heart className="w-8 h-8 text-zion-cyan animate-pulse" />
            </div>
            
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Experience the difference that AI-powered matching and global talent access can make for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
=======
=======
        </motion.div>
      </div>
    </section>
  );
}
=======
import React from 'react';
import { Brain, Shield, Zap, Globe, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';

export const FeatureHighlights: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions that transform business operations and drive innovation.",
      benefits: ["Predictive analytics", "Automated processes", "Intelligent decision making", "Scalable AI infrastructure"]
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Comprehensive cybersecurity solutions with AI-powered threat detection and proactive defense mechanisms.",
      benefits: ["Real-time monitoring", "Threat prevention", "Compliance management", "Incident response"]
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized systems and infrastructure designed for maximum performance, scalability, and reliability.",
      benefits: ["Fast response times", "Scalable architecture", "99.9% uptime", "Performance optimization"]
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide presence with local expertise and 24/7 support across multiple time zones and regions.",
      benefits: ["Global support", "Local expertise", "Multi-language", "Cultural understanding"]
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with deep expertise in cutting-edge technologies and industry best practices.",
      benefits: ["Certified experts", "Industry veterans", "Continuous training", "Innovation focus"]
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focus on delivering measurable business outcomes and ROI through technology solutions and strategic consulting.",
      benefits: ["ROI measurement", "Business impact", "Performance tracking", "Success metrics"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the key features and capabilities that make us the preferred 
            technology partner for businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-center">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience These Features?
            </h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of businesses that have already transformed their operations 
              with Zion Tech Group's innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
=======
=======
