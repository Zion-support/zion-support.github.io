<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Users, Briefcase, Settings, Sparkles, ArrowRight } from 'lucide-react';

export function QuickAccess() {
  const quickActions = [
    {
      title: 'Find Services',
      description: 'Discover AI and tech services',
      icon: Search,
      href: '/services',
      color: 'from-zion-cyan to-zion-blue',
      gradient: 'from-zion-cyan/20 to-zion-blue/20'
    },
    {
      title: 'Hire Talent',
      description: 'Connect with tech experts',
      icon: Users,
      href: '/talent',
      color: 'from-zion-purple to-zion-cyan',
      gradient: 'from-zion-purple/20 to-zion-cyan/20'
    },
    {
      title: 'Browse Equipment',
      description: 'Find hardware and tools',
      icon: Briefcase,
      href: '/equipment',
      color: 'from-zion-blue to-zion-purple',
      gradient: 'from-zion-blue/20 to-zion-purple/20'
    },
    {
      title: 'AI Solutions',
      description: 'Explore AI-powered tools',
      icon: Sparkles,
      href: '/ai-services',
      color: 'from-zion-cyan to-zion-purple',
      gradient: 'from-zion-cyan/20 to-zion-purple/20'
=======
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Briefcase, 
  Settings, 
  Code, 
  Database, 
  Shield,
  Zap,
  Search,
  MessageCircle,
  TrendingUp,
  Globe,
  Rocket
} from 'lucide-react';

export function QuickAccess() {
  const quickLinks = [
    {
      title: 'AI Talent Matcher',
      description: 'Find the perfect tech professional',
      link: '/match',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-zion-purple/20 to-zion-purple/10',
      borderColor: 'border-zion-purple/30',
      iconBg: 'bg-zion-purple/20'
    },
    {
      title: 'Tech Services',
      description: 'Comprehensive IT solutions',
      link: '/services',
      icon: <Settings className="h-8 w-8" />,
      color: 'from-zion-cyan/20 to-zion-cyan/10',
      borderColor: 'border-zion-cyan/30',
      iconBg: 'bg-zion-cyan/20'
    },
    {
      title: 'Talent Directory',
      description: 'Browse verified professionals',
      link: '/talent',
      icon: <Users className="h-8 w-8" />,
      color: 'from-zion-blue/20 to-zion-blue/10',
      borderColor: 'border-zion-blue/30',
      iconBg: 'bg-zion-blue/20'
    },
    {
      title: 'Development',
      description: 'Custom software solutions',
      link: '/services',
      icon: <Code className="h-8 w-8" />,
      color: 'from-zion-purple/20 to-zion-purple/10',
      borderColor: 'border-zion-purple/30',
      iconBg: 'bg-zion-purple/20'
    },
    {
      title: 'Data Solutions',
      description: 'Analytics & infrastructure',
      link: '/services',
      icon: <Database className="h-8 w-8" />,
      color: 'from-zion-cyan/20 to-zion-cyan/10',
      borderColor: 'border-zion-cyan/30',
      iconBg: 'bg-zion-cyan/20'
    },
    {
      title: 'Security',
      description: 'Cybersecurity & compliance',
      link: '/services',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-zion-blue/20 to-zion-blue/10',
      borderColor: 'border-zion-blue/30',
      iconBg: 'bg-zion-blue/20'
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.15,
=======
        staggerChildren: 0.1,
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
        delayChildren: 0.2
      }
    }
  };

<<<<<<< HEAD
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
=======
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
        ease: "easeOut"
      }
    }
  };

  return (
<<<<<<< HEAD
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        ></motion.div>
        
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-32 h-32 bg-zion-blue/5 rounded-full blur-2xl"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-zion-cyan/5 rounded-full blur-2xl"
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Quick Access
          </motion.h2>
          <motion.p 
            className="text-lg text-zion-slate-light max-w-2xl mx-auto"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            Get started quickly with our most popular features and services
          </motion.p>
        </motion.div>

        <motion.div
=======
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quick Access to
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Navigate our comprehensive platform with ease. From AI-powered talent matching 
            to specialized tech services, everything is just a click away.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto"
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
<<<<<<< HEAD
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
            >
              <Link
                to={action.href}
                className="block bg-zion-blue-light/10 border border-zion-blue-light/20 rounded-2xl p-6 backdrop-blur-sm hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full"
              >
                {/* Enhanced Icon with animations */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ 
                    rotate: 360, 
                    scale: 1.15,
                    transition: { duration: 0.6 }
                  }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    <action.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Content with enhanced animations */}
                <motion.h3 
                  className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {action.title}
                </motion.h3>
                
                <motion.p 
                  className="text-zion-slate-light mb-4 text-sm leading-relaxed"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  {action.description}
                </motion.p>

                {/* Enhanced CTA with continuous animation */}
                <motion.div
                  className="flex items-center justify-between"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-zion-cyan text-sm font-medium group-hover:text-zion-cyan-light transition-colors">
                    Get Started
                  </span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 text-zion-cyan group-hover:text-zion-cyan-light transition-colors" />
                  </motion.div>
                </motion.div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
=======
        >
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <Link to={link.link} className="block h-full">
                <div className={`
                  bg-gradient-to-br ${link.color} 
                  border ${link.borderColor} 
                  rounded-2xl p-6 h-full 
                  backdrop-blur-sm
                  hover:shadow-2xl hover:shadow-zion-purple/20
                  transition-all duration-300
                  group-hover:border-opacity-60
                `}>
                  <div className={`
                    ${link.iconBg} 
                    w-16 h-16 rounded-2xl 
                    flex items-center justify-center 
                    mb-4 mx-auto
                    group-hover:scale-110 
                    transition-transform duration-300
                  `}>
                    <div className="group-hover:rotate-12 transition-transform duration-300">
                      {link.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white text-center mb-2 group-hover:text-zion-cyan transition-colors">
                    {link.title}
                  </h3>
                  
                  <p className="text-sm text-zion-slate-light text-center leading-relaxed group-hover:text-zion-slate transition-colors">
                    {link.description}
                  </p>
                  
                  <div className="mt-4 text-center">
                    <span className="text-zion-cyan text-sm font-medium group-hover:text-zion-purple transition-colors">
                      Explore →
                    </span>
                  </div>
                </div>
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
              </Link>
            </motion.div>
          ))}
        </motion.div>

<<<<<<< HEAD
        {/* Enhanced bottom CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Services
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.div>
            </Link>
          </motion.div>
=======
        {/* Additional Quick Actions */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-purple hover:bg-zion-purple hover:text-white transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              Get Support
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              <TrendingUp className="h-5 w-5" />
              Latest Insights
            </Link>
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zion-blue/20 border border-zion-blue/30 rounded-full text-zion-blue hover:bg-zion-blue hover:text-white transition-all duration-300"
            >
              <Globe className="h-5 w-5" />
              Partner Network
            </Link>
          </div>
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
        </motion.div>
      </div>
    </section>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

export const QuickAccess: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quick Access
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started quickly with our most popular services and solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-zion-purple hover:text-white transition-colors cursor-pointer">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="font-semibold mb-2">AI Services</h3>
            <p className="text-sm">Chatbots, ML, Analytics</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-zion-purple hover:text-white transition-colors cursor-pointer">
            <div className="text-3xl mb-4">☁️</div>
            <h3 className="font-semibold mb-2">Cloud Solutions</h3>
            <p className="text-sm">Migration, DevOps, Security</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-zion-purple hover:text-white transition-colors cursor-pointer">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="font-semibold mb-2">IT Services</h3>
            <p className="text-sm">Support, Maintenance, Consulting</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-zion-purple hover:text-white transition-colors cursor-pointer">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="font-semibold mb-2">Startup Solutions</h3>
            <p className="text-sm">MVP, Growth, Scaling</p>
          </div>
        </div>
      </div>
    </section>
  );
};
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
