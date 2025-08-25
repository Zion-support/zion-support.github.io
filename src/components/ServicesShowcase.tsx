<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  LightBulbIcon,
  RocketLaunchIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
=======
import { useState } from 'react';

// Mock data for services since the comprehensiveServices file was removed
const SERVICE_CATEGORIES = [
  { id: 1, name: "AI Services", count: 10, icon: "🤖" },
  { id: 2, name: "Micro SAAS", count: 8, icon: "💻" },
  { id: 3, name: "IT Services", count: 12, icon: "🖥️" },
  { id: 4, name: "Blockchain & Web3", count: 5, icon: "⛓️" },
  { id: 5, name: "IoT & Edge Computing", count: 6, icon: "🌐" },
  { id: 6, name: "Emerging Technologies", count: 4, icon: "🔮" },
  { id: 7, name: "Cybersecurity Services", count: 3, icon: "🔒" },
  { id: 8, name: "Data Science & Analytics", count: 4, icon: "📊" }
];

const COMPREHENSIVE_SERVICES = [
  {
    id: "ai-1",
    name: "AI-Powered Chatbot Development",
    description: "Custom AI chatbots for customer service, sales, and support with natural language processing capabilities",
    category: "AI Services",
    price: 2999,
    rating: 4.8,
    features: ["Natural language processing", "Multi-language support", "Integration APIs", "Analytics dashboard", "24/7 availability"]
  },
  {
    id: "ai-2",
    name: "Machine Learning Model Development",
    description: "Custom ML models for predictive analytics, pattern recognition, and data-driven decision making",
    category: "AI Services",
    price: 5999,
    rating: 4.9,
    features: ["Custom algorithm development", "Data preprocessing", "Model training", "Performance optimization", "Deployment support"]
  },
  {
    id: "micro-1",
    name: "Project Management Platform",
    description: "Comprehensive project management solution with task tracking, team collaboration, and reporting",
    category: "Micro SAAS",
    price: 199,
    rating: 4.7,
    features: ["Task management", "Team collaboration", "Time tracking", "Reporting", "Mobile app"]
  },
  {
    id: "it-1",
    name: "Cloud Infrastructure Setup",
    description: "Complete cloud infrastructure design and implementation for scalable applications",
    category: "IT Services",
    price: 3999,
    rating: 4.8,
    features: ["Architecture design", "Security implementation", "Monitoring setup", "Backup solutions", "24/7 support"]
  }
];

const SERVICE_ADDONS = [
  {
    id: "custom-model",
    name: "Custom AI Model Training",
    description: "Specialized training for your specific use case and data",
    price: 2499,
    category: "AI Services"
  },
  {
    id: "api-access",
    name: "API Access & Documentation",
    description: "Full API access with comprehensive documentation and support",
    price: 999,
    category: "All Services"
  },
  {
    id: "24-7-support",
    name: "24/7 Priority Support",
    description: "Round-the-clock technical support with guaranteed response times",
    price: 1999,
    category: "All Services"
  }
];
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

export function ServicesShowcase() {
  const services = [
    {
      icon: CpuChipIcon,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions for automation, decision-making, and predictive analytics",
      color: "from-zion-cyan to-zion-blue",
      href: "/ai-solutions"
    },
    {
      icon: CloudIcon,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment pipelines",
      color: "from-zion-purple to-zion-cyan",
      href: "/cloud-devops"
    },
    {
      icon: ShieldCheckIcon,
      title: "Cybersecurity",
      description: "Comprehensive security solutions for threat detection and prevention",
      color: "from-zion-purple to-zion-blue",
      href: "/cybersecurity"
    },
    {
      icon: LightBulbIcon,
      title: "Digital Transformation",
      description: "End-to-end digital strategy and implementation services",
      color: "from-zion-cyan to-zion-purple",
      href: "/digital-transformation"
    },
    {
      icon: RocketLaunchIcon,
      title: "Micro SaaS Solutions",
      description: "Custom SaaS platforms for specific business needs",
      color: "from-zion-blue to-zion-cyan",
      href: "/micro-saas"
    },
    {
      icon: ChartBarIcon,
      title: "Business Intelligence",
      description: "Data analytics and insights for informed decision-making",
      color: "from-zion-purple to-zion-blue",
      href: "/business-intelligence"
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
    <section className="py-20 bg-zion-slate-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-zion-purple/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Link to={service.href} className="block">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/30"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}