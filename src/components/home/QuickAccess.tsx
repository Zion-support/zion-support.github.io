<<<<<<< HEAD
=======
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

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
      title: "AI Services",
      description: "Machine Learning & Analytics",
      icon: Brain,
      color: "from-zion-cyan to-zion-blue",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/20",
      path: "/ai-services",
      features: ["Machine Learning", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      stats: { projects: "150+", accuracy: "95%", clients: "50+" }
    },
    {
      title: "IT Infrastructure",
      description: "Cloud & DevOps Solutions",
      icon: Server,
      color: "from-zion-blue to-zion-purple",
      bgColor: "bg-zion-blue/10",
      borderColor: "border-zion-blue/20",
      path: "/it-services",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "24/7 Monitoring"],
      stats: { uptime: "99.99%", savings: "40%", response: "<5min" }
    },
    {
      title: "Cybersecurity",
      description: "Advanced Security Solutions",
      icon: Shield,
      color: "from-zion-purple to-zion-cyan",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/20",
      path: "/services/cybersecurity",
      features: ["Zero Trust Architecture", "Threat Detection", "Incident Response", "Compliance"],
      stats: { threats: "1000+", response: "<2min", coverage: "100%" }
    },
    {
      title: "Digital Transformation",
      description: "Business Process Optimization",
      icon: Rocket,
      color: "from-zion-cyan to-zion-purple",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/20",
      path: "/services/digital-transformation",
      features: ["Process Automation", "Workflow Optimization", "Change Management", "ROI Tracking"],
      stats: { efficiency: "300%", cost: "60%", time: "80%" }
    },
    {
      title: "Green IT",
      description: "Sustainable Technology",
      icon: Globe,
      color: "from-zion-blue to-zion-cyan",
      bgColor: "bg-zion-blue/10",
      borderColor: "border-zion-blue/20",
      path: "/services/green-it",
      features: ["Energy Efficiency", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],
      stats: { energy: "60%", carbon: "75%", savings: "40%" }
    },
    {
      title: 'Security',
      description: 'Cybersecurity & compliance',
      link: '/services',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-zion-blue/20 to-zion-blue/10',
      borderColor: 'border-zion-blue/30',
      iconBg: 'bg-zion-blue/20'
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.1,
=======
<<<<<<< HEAD
        staggerChildren: 0.15,
=======
        staggerChildren: 0.1,
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        delayChildren: 0.2
      }
    }
  };

<<<<<<< HEAD
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
=======
<<<<<<< HEAD
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
<<<<<<< HEAD
        duration: 0.3,
=======
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
    }
  };

  const hoverVariants = {
    hover: { 
      y: -8, 
      scale: 1.02,
      transition: {
        duration: 0.3,
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        ease: "easeOut"
      }
    }
  };

  return (
<<<<<<< HEAD
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
=======
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
<<<<<<< HEAD
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto"
=======
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        >
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
<<<<<<< HEAD
=======
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
                    <span className="text-xs text-gray-400 bg-slate-600 px-2 py-1 rounded-full">
                      {link.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {link.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {link.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              </Link>
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Additional Quick Actions */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-wrap justify-center gap-4">
=======
<<<<<<< HEAD
        {/* Enhanced bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-purple hover:bg-zion-purple hover:text-white transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              Get Support
            </Link>
<<<<<<< HEAD
=======
          </motion.div>
=======
        {/* Additional Quick Actions */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500"
        >
          <div className="inline-flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-purple hover:bg-zion-purple hover:text-white transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              Get Support
            </Link>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        </motion.div>
      </div>
    </section>
  );
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      <div className="container-responsive relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Quick Access</span>
            <Star className="w-4 h-4" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Explore Our Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started quickly with our most popular services and solutions
          </p>
        </div>
          {quickLinks.map((link, index) => (
            <Link              key={index}
              href={link.link}

              </p>;
              <div className='flex items - center text - zion - cyan text - xs mt - auto'>;
                <span>{t ('general.explore')}</span>;
                <ArrowRight className='ml - 1 h - 3 w - 3 transition - transform group - hover:translate - x-1' />;
              </div>;
            </Link>;
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
export default /**
 * Page - Function description
 */
function Page() {";
    { name: "Consulting", count: 6, color: "from - yellow - 500 to - orange - 500" }, ";
    { name: "Innovation", count: 10, color: "from - green - 500 to - teal - 500" }, ";
    { name: "Business", count: 14, color: "from - indigo - 500 to - purple - 500" }      scale: 1,

import { motion  } from 'framer-motion';
export default function Page() {";
    { name: "Consulting", count: 6, color: "from-yellow-500 to-orange-500" },";
    { name: "Innovation", count: 10, color: "from-green-500 to-teal-500" },";
    { name: "Business", count: 14, color: "from-indigo-500 to-purple-500" };      scale: 1,

      transition: {
        duration: 0.5, ";
        ease: "ease_out"}}}
  const hover_variants = {
  hover: {

      coordinate_y: -8,      scale: 1.02,

      transition: {
        duration: 0.3, "  ease: "ease_out";
}}}
}
}
}
  return (    <section className="py - 20 bg - gradient - to - br from - zion - slate via - zion - slate - dark to - black relative overflow-hidden">;
      {/* Background Elements */}";
      <div className="absolute inset - 0 opacity-30">";
        <div className="absolute top - 20 left - 20 w - 64 h - 64 bg - zion - cyan / 10 rounded - full blur-3xl"></div>";
        <div className="absolute bottom - 20 right - 20 w - 80 h - 80 bg - zion - purple / 10 rounded - full blur-3xl"></div>";
        <div className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 96 h - 96 bg - zion - blue / 10 rounded - full blur-3xl"></div>;
      </div>;
";
      <div className="container - responsive relative z-10">;
        {/* Header */}
        <motion.div;
          initial = {

  { opacity: 0,
  coordinate_y: 30;
}}
          whileInView = {
  { opacity: 1,
  coordinate_y: 0;

}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}";
          className="text - center mb-16">;
          <motion.div;
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition = {

  { duration: 0.6,
  delay: 0.2;

}}
            viewport={{ once: true }}";
            className="inline - flex items - center gap - 2 px - 4 py - 2 bg - zion - cyan / 10 border border - zion - cyan / 20 rounded - full text - zion - cyan mb-6">;
            Quick Access to Our Services;
          </motion.h2>;
          <motion.p;
            initial = {

  { opacity: 0,
  coordinate_y: 20;
}}
            whileInView = {
  { opacity: 1,
  coordinate_y: 0;
}}
            transition = {
  { duration: 0.6,
  delay: 0.2;
}}";
            className="text - lg text - gray - 300 max - w-2xl mx-auto">;
            Find the perfect solution for your business needs with our organized service categories;
          </motion.p>;
        </div>;
        {/* Quick Links Grid */}";
        <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 3 gap - 6 mb-12">;
          {quick_links.map ((link, index <motion.div;

              key={link.title}
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCategory(link.title)}
              onHoverEnd={() => setHoveredCategory(null)}
              onClick={() => setSelectedCategory(selectedCategory === link.title ? null : link.title)}
              className={`group cursor-pointer ${link.bgColor} ${link.borderColor} border rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/25`}
            >
              {/* Icon and Header */}
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  className={`p-3 rounded-xl bg-gradient-to-r ${link.color} bg-opacity-20`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >";
                  <link.icon className="w - 6 h - 6 text-white" />;
                </motion.div>;
                <motion.div;
                  animate={{ rotate: hovered_category === link.title ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >";
                  <ChevronRight className="w - 5 h - 5 text - gray - 400 group - hover:text - zion - cyan transition-colors"  />                </motion.div>;
              </div>;
              {/* Content */}";
              <div className="mb-4">";
                <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - zion - cyan transition-colors">;
                  {link.title}
                </h3>";
                <p className="text - gray - 300 text - sm leading-relaxed">;
                  {link.description}
                </p>;
              </div>;
              {/* Features Preview */}";
              <div className="mb-4">";
                <div className="grid grid - cols - 2 gap-2">;
                  {link.features.slice (0, 2).map (feature: unknown, idx: unknown (
                    <motion.div;
                      key={feature}
                      initial = {

  { opacity: 0,
  coordinate_x: -10;
}}
                      whileInView = {
  { opacity: 1,
  coordinate_x: 0;
}}
                      transition = {
  { duration: 0.4,
  delay: 0.1 + idx * 0.1;

}}
                      viewport={{ once: true }}";
                      className="flex items - center gap - 2 text - xs text - gray-400">";
                      <div className="w - 1.5 h - 1.5 bg - zion - cyan rounded-full"></div>";
                      <span className="truncate">{feature}</span>;
                    </motion.div>))}
                </div>;
              </div>;
              {/* Stats */}";
              <div className="mb-4">";
                <div className="flex items - center justify - between text-sm">;
                  {Object.entries (link.stats).slice (0, 2).map ([key: unknown, value]: unknown, idx: unknown (
                    <motion.div;
                      key={key}
                      initial = {

  style?: React && React.CSSProperties;

export function QuickAccess(): any ({ className, style }: QuickAccessProps) {;
  const { t } = useTranslation();
  const quickLinks = [;
    {;
      title: t('home && home.tool_ai_matcher'),,
  description: t('home && home.tool_ai_matcher_desc'),;
      icon: <Search className='h-6 w-6 text-zion-cyan' />,;
      link: '/marketplace',;
    },;
    {;
      title: t('home && home.tool_talent'),,
  description: t('home && home.tool_talent_desc'),;
      icon: <Users className='h-6 w-6 text-zion-purple' />,;
      link: '/talent',;
    },;
    {;
      title: t('home && home.tool_services'),,
  description: t('home && home.tool_services_desc'),;
      icon: <Briefcase className='h-6 w-6 text-zion-cyan' />,;
      link: '/services',;
    },;
    {;
      title: t('home && home.tool_equipment'),,
  description: t('home && home.tool_equipment_desc'),;
      icon: <Settings className='h-6 w-6 text-zion-purple' />,;
      link: '/equipment',;
    },;
    {;
      title: t('nav && nav.community'),,
  description: t('home && home.tool_chat_desc'),;
      icon: <MessageSquare className='h-6 w-6 text-zion-cyan' />,;
      link: '/community',;
    },;
    {;
      title: t('home && home.tool_mobile_app', 'Mobile App'),,
  description: t('home && home.tool_mobile_app_desc', 'Zion on the go'),;
      icon: <Smartphone className='h-6 w-6 text-zion-purple' />,;
      link: '/mobile-launch',;
    },;
  ];

  return (
    <section className={cn('py-12 bg-zion-blue-dark', className)} style={style}>;
      <div className='container mx-auto px-4'>;
        <div className='text-center mb-8'>;
          <h2 className='text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2'>;
            {t('home && home.quick_access_title', 'Quick Access')}
          </h2>;
          <p className='text-zion-slate-light text-lg'>;
            {t(;
              'home && home.quick_access_subtitle',;
              'Jump directly to our most popular features';
            )}
          </p>;
        </div>;

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto'>;
          {quickLinks && quickLinks.map((link, index) => (;
            <Link
              key={index}
              href={link && link.link}
              className='group bg-zion-blue relative border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-md hover:bg-zion-blue-light/20'>;
              <div className='bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110'>;
                {link && link.icon}
              </div>;
              <h3 className='text-white font-medium mb-1'>{link && link.title}</h3>;
              <p className='text-zion-slate-light text-xs mb-2'>;
                {link && link.description}
              </p>;
              <div className='flex items-center text-zion-cyan text-xs mt-auto'>;
                <span>{t('general && general.explore')}</span>;
                <ArrowRight className='ml-1 h-3 w-3 transition-transform group-hover:translate-x-1' />;
              </div>;
            </Link>;
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
export default function Page() {;";
    { name: "Consulting", count: 6, color: "from-yellow-500 to-orange-500" },";
    { name: "Innovation", count: 10, color: "from-green-500 to-teal-500" },";
    { name: "Business", count: 14, color: "from-indigo-500 to-purple-500" };      scale: 1,;
      transition: {;
        duration: 0 && 0.5,";
        ease: "easeOut"}}};
  const hoverVariants = {;
  hover: {;
      y: -8,      scale: 1 && 1.02,;
      transition: {;

        duration: 0 && 0.3,"  ease: "easeOut";
}}}
};
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
