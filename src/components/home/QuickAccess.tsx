<<<<<<< HEAD

import React from 'react';
=======
<<<<<<< HEAD

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Settings, 
  ShoppingCart, 
  MessageSquare, 
  BarChart3,
  Zap,
  Globe,
  Shield,
  Clock
} from 'lucide-react';

const quickAccessItems = [
  {
    title: 'Find Talent',
    description: 'Discover skilled professionals',
    icon: Users,
    href: '/talent',
    color: 'from-zion-cyan to-zion-blue',
    bgColor: 'bg-zion-cyan/10',
    iconColor: 'text-zion-cyan'
  },
  {
    title: 'Hire AI',
    description: 'AI-powered hiring solutions',
    icon: Zap,
    href: '/zion-hire-ai',
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    iconColor: 'text-zion-purple'
  },
  {
    title: 'IT Services',
    description: '24/7 global IT support',
    icon: Settings,
    href: '/it-onsite-services',
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    iconColor: 'text-zion-blue'
  },
  {
    title: 'Marketplace',
    description: 'Browse products & services',
    icon: ShoppingCart,
    href: '/marketplace',
    color: 'from-zion-green to-zion-green-dark',
    bgColor: 'bg-zion-green/10',
    iconColor: 'text-zion-green'
  },
  {
    title: 'Community',
    description: 'Connect with peers',
    icon: MessageSquare,
    href: '/community',
    color: 'from-zion-orange to-zion-orange-dark',
    bgColor: 'bg-zion-orange/10',
    iconColor: 'text-zion-orange'
  },
  {
    title: 'Analytics',
    description: 'Track your performance',
    icon: BarChart3,
    href: '/analytics',
    color: 'from-zion-pink to-zion-pink-dark',
    bgColor: 'bg-zion-pink/10',
    iconColor: 'text-zion-pink'
  }
];

export function QuickAccess() {
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

  return (
    <section className="py-20 bg-gradient-to-b from-background to-zion-slate/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Quick Access to Everything
          </h2>
          <p className="text-lg md:text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Everything you need to grow your business, find talent, and access IT services 
            is just one click away.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {quickAccessItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Link
                  to={item.href}
                  className="block h-full"
                >
                  <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-purple/10">
                    {/* Background glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Icon container */}
                    <div className={`relative z-10 w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${item.iconColor}`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-zion-slate-light mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Hover indicator */}
                      <div className="flex items-center gap-2 text-zion-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                        <span className="text-sm font-medium">Get Started</span>
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 border border-zion-purple/20 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Global Coverage</span>
            </div>
            <div className="w-px h-6 bg-zion-purple/30"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-purple font-medium">Secure & Reliable</span>
            </div>
            <div className="w-px h-6 bg-zion-purple/30"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-zion-blue" />
              <span className="text-zion-blue font-medium">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
=======
import React from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
import { Zap, Brain, Shield, Cloud, Database, Users, ArrowRight } from 'lucide-react';

export const QuickAccess: React.FC = () => {
  const quickLinks = [
    {
      title: "AI Solutions",
      description: "Transform your business with AI",
      icon: Brain,
      href: "/services/ai-solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets",
      icon: Shield,
      href: "/services/cybersecurity",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Scale your infrastructure",
      icon: Cloud,
      href: "/services/cloud-devops",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from data",
      icon: Database,
      href: "/solutions/ai-business-intelligence",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Team & Talent",
      description: "Find expert professionals",
      icon: Users,
      href: "/team",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Get Started",
      description: "Start your project today",
      icon: Zap,
      href: "/contact",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Access
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started quickly with our most popular services and solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {link.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
