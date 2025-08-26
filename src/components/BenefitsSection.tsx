import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Zap, Shield, Users, Clock, TrendingUp, Star, Award, Globe, Lock } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Get your projects delivered in record time with our efficient development process",
    color: "from-zion-cyan to-zion-blue",
    bgColor: "from-zion-cyan/20 to-zion-blue/20",
    stats: "3x Faster",
    features: ["Rapid Prototyping", "Quick Deployment", "Fast Iteration"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security measures to protect your data and applications",
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "from-zion-purple/20 to-zion-purple-dark/20",
    stats: "99.99% Uptime",
    features: ["SOC 2 Compliant", "GDPR Ready", "End-to-End Encryption"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Team",
    description: "Work with certified professionals with years of industry experience",
    color: "from-zion-cyan-light to-zion-cyan",
    bgColor: "from-zion-cyan-light/20 to-zion-cyan/20",
    stats: "500+ Experts",
    features: ["Certified Professionals", "Global Network", "Industry Veterans"]
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need help or have questions",
    color: "from-zion-purple-light to-zion-purple",
    bgColor: "from-zion-purple-light/20 to-zion-purple/20",
    stats: "24/7",
    features: ["Live Chat", "Phone Support", "Email Response"]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Scalable Solutions",
    description: "Built to grow with your business, from startup to enterprise",
    color: "from-zion-cyan to-zion-purple",
    bgColor: "from-zion-cyan/20 to-zion-purple/20",
    stats: "10x Growth",
    features: ["Auto-scaling", "Load Balancing", "Performance Monitoring"]
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee with our comprehensive testing process",
    color: "from-zion-purple to-zion-cyan",
    bgColor: "from-zion-purple/20 to-zion-cyan/20",
    stats: "100% Success",
    features: ["Comprehensive Testing", "Quality Assurance", "Satisfaction Guarantee"]
  }
];

const additionalStats = [
  { icon: <Star className="w-6 h-6" />, value: "4.9/5", label: "Customer Rating" },
  { icon: <Award className="w-6 h-6" />, value: "50+", label: "Industry Awards" },
  { icon: <Globe className="w-6 h-6" />, value: "100+", label: "Countries Served" },
  { icon: <Lock className="w-6 h-6" />, value: "1000+", label: "Projects Completed" }
];

export function BenefitsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with proven expertise to deliver exceptional results that drive your business forward
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-zion-blue">
                    {benefit.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-zion-blue transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Stats */}
                <div className="text-2xl font-bold text-zion-blue mb-4">
                  {benefit.stats}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-zion-blue/5 to-zion-purple/5 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {additionalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statsVariants}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-full flex items-center justify-center">
                <div className="text-zion-blue">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their businesses with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Get Started Today
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
