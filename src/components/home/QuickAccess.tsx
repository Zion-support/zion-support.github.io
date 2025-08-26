import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  CubeIcon,
  CubeTransparentIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export function QuickAccess() {
  const quickLinks = [
    {
      id: 1,
      title: "AI Solutions",
      description: "Advanced AI and machine learning services",
      icon: CpuChipIcon,
      path: "/services",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation",
      icon: CloudIcon,
      path: "/services",
      color: "from-purple-500 to-pink-500",
      hoverColor: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions",
      icon: ShieldCheckIcon,
      path: "/services",
      color: "from-green-500 to-emerald-500",
      hoverColor: "from-green-600 to-emerald-600"
    },
    {
      id: 4,
      title: "Quantum Computing",
      description: "Next-generation quantum solutions",
      icon: CubeIcon,
      path: "/services",
      color: "from-indigo-500 to-purple-500",
      hoverColor: "from-indigo-600 to-purple-600"
    },
    {
      id: 5,
      title: "Blockchain & Web3",
      description: "Decentralized technology solutions",
      icon: CubeTransparentIcon,
      path: "/services",
      color: "from-orange-500 to-red-500",
      hoverColor: "from-orange-600 to-red-600"
    },
    {
      id: 6,
      title: "Get Started",
      description: "Start your transformation journey",
      icon: RocketLaunchIcon,
      path: "/contact",
      color: "from-yellow-500 to-orange-500",
      hoverColor: "from-yellow-600 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Access to Our Services
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore our comprehensive range of technology solutions designed to drive your business forward
          </p>
        </motion.div>

        {/* Quick Access Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {quickLinks.map((link) => (
            <motion.div
              key={link.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Link
                to={link.path}
                className="block h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r ${link.hoverColor} transition-all duration-300`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {link.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="mt-4 flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-300">
            <span>Need something specific?</span>
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 font-medium">
              Contact our experts
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}