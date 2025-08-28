import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Cpu, 
  Lock, 
  ShoppingCart, 
  MessageCircle, 
  BookOpen, 
  DollarSign,
  Gauge,
  HelpCircle,
  Code,
  Rocket,
  Atom,
  ArrowRight
} from 'lucide-react';

export function ServicesShowcase() {
  const services = [
    {
      icon: Brain,
      title: "AI & Business Intelligence",
      description: "Machine Learning & Data Science solutions",
      href: "/services/comprehensive-2025",
      category: "AI & Analytics",
      color: "from-purple-500 to-pink-600",
      featured: true
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infrastructure & Automation",
      href: "/services/comprehensive-2025",
      category: "Infrastructure",
      color: "from-blue-500 to-cyan-600",
      featured: true
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "AI-Powered Security solutions",
      href: "/services/comprehensive-2025",
      category: "Security",
      color: "from-red-500 to-orange-600",
      featured: true
    },
    {
      icon: Cpu,
      title: "IoT & Edge Computing",
      description: "Smart Devices & Networks",
      href: "/services/comprehensive-2025",
      category: "IoT",
      color: "from-green-500 to-emerald-600",
      featured: true
    },
    {
      icon: Lock,
      title: "Blockchain & Web3",
      description: "DeFi & Smart Contracts",
      href: "/services/comprehensive-2025",
      category: "Blockchain",
      color: "from-yellow-500 to-orange-600",
      featured: true
    },
    {
      icon: Users,
      title: "AI Healthcare",
      description: "Medical AI & Diagnostics",
      href: "/services/comprehensive-2025",
      category: "Healthcare",
      color: "from-pink-500 to-rose-600",
      featured: true
    },
    {
      icon: Globe,
      title: "Sustainable Technology",
      description: "Green IT & Environmental Solutions",
      href: "/services/comprehensive-2025",
      category: "Green Tech",
      color: "from-emerald-500 to-teal-600",
      featured: true
    },
    {
      icon: ShoppingCart,
      title: "Micro SaaS Products",
      description: "Productized SaaS for niches",
      href: "/services/micro-saas",
      category: "SaaS",
      color: "from-indigo-500 to-purple-600",
      featured: true
    },
    {
      icon: MessageCircle,
      title: "AI Customer Support",
      description: "Intelligent customer service automation",
      href: "/services/comprehensive-2025",
      category: "Customer Support",
      color: "from-cyan-500 to-blue-600",
      featured: true
    },
    {
      icon: Users,
      title: "AI HR Solutions",
      description: "Talent acquisition & management",
      href: "/services/comprehensive-2025",
      category: "HR Tech",
      color: "from-indigo-500 to-blue-600",
      featured: true
    },
    {
      icon: BookOpen,
      title: "AI Education",
      description: "Personalized learning & analytics",
      href: "/services/comprehensive-2025",
      category: "Education",
      color: "from-blue-500 to-indigo-600",
      featured: true
    },
    {
      icon: DollarSign,
      title: "FinTech Solutions",
      description: "Financial risk management & analytics",
      href: "/services/comprehensive-2025",
      category: "FinTech",
      color: "from-emerald-500 to-green-600",
      featured: true
    },
    {
      icon: Gauge,
      title: "AI Operations",
      description: "Process optimization & automation",
      href: "/services/comprehensive-2025",
      category: "Operations",
      color: "from-gray-500 to-slate-600",
      featured: true
    },
    {
      icon: Code,
      title: "AI Development",
      description: "Code generation & DevOps automation",
      href: "/services/comprehensive-2025",
      category: "Development",
      color: "from-cyan-500 to-blue-600",
      featured: true
    },
    {
      icon: Rocket,
      title: "Space Technology",
      description: "Satellite management & space operations",
      href: "/services/comprehensive-2025",
      category: "Space Tech",
      color: "from-purple-500 to-pink-600",
      featured: true
    },
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Quantum algorithms & machine learning",
      href: "/services/comprehensive-2025",
      category: "Quantum Tech",
      color: "from-indigo-500 to-purple-600",
      featured: true
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Comprehensive
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI-powered solutions to enterprise infrastructure, we provide end-to-end technology services that drive business transformation
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <Link to={service.href}>
                <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-white/10 text-gray-400 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Explore Our Complete Service Portfolio
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover hundreds of AI-powered solutions designed to transform every aspect of your business. 
            From cutting-edge quantum computing to sustainable technology, we have the expertise to drive your success.
          </p>
          <Link
            to="/services/comprehensive-2025"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <Globe className="w-5 h-5 mr-2" />
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}