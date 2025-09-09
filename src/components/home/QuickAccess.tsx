
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Search, 
  Users, 
  Briefcase, 
  Settings, 
  MessageSquare, 
  Smartphone,
  Zap,
  TrendingUp
} from "lucide-react";

export function QuickAccess() {
  const quickLinks = [
    {
      title: 'AI Services',
      description: 'Machine learning, automation, and AI consulting',
      icon: '🤖',
      path: '/ai-services',
      color: 'from-zion-cyan to-blue-500'
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
    }
  ];

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Quick Access</h2>
          <p className="text-zion-slate-light text-lg">
            Get started with our most popular services
          </p>
        </div>
        
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
              </Link>
            </motion.div>
          ))}
        </motion.div>

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
              key={link.title}
              to={link.path}
              className="group bg-zion-blue border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20 transform hover:-translate-y-1"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center text-3xl mb-4 mx-auto`}>
                {link.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors text-center">
                {link.title}
              </h3>
              <p className="text-zion-slate-light text-sm text-center">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
