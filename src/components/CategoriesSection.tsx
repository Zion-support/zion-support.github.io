import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, HardDrive, Lightbulb, Users, Brain, ArrowRight, Shield, Cloud, Zap, Globe, Cpu, Lock } from 'lucide-react';

const categories = [
  {
    title: "AI Solutions",
    description: "Cutting-edge AI and machine learning services",
    icon: <Brain className="w-10 h-10" />,
    link: "/ai-solutions",
    color: "from-pink-500 to-rose-600",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment",
    icon: <Cloud className="w-10 h-10" />,
    link: "/it-services",
    color: "from-blue-500 to-indigo-600",
    features: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Serverless Architecture"]
  },
  {
    title: "Cybersecurity",
    description: "Advanced security protocols and threat protection",
    icon: <Shield className="w-10 h-10" />,
    link: "/services/ai-compliance-copilot",
    color: "from-red-500 to-orange-600",
    features: ["Threat Detection", "Zero Trust Security", "Compliance Management", "Incident Response"]
  },
  {
    title: "Digital Transformation",
    description: "Strategic technology consulting and implementation",
    icon: <Zap className="w-10 h-10" />,
    link: "/services",
    color: "from-yellow-500 to-orange-500",
    features: ["Process Automation", "Digital Strategy", "Change Management", "Technology Roadmap"]
  },
  {
    title: "IoT & Edge Computing",
    description: "Smart device networks and edge computing solutions",
    icon: <Cpu className="w-10 h-10" />,
    link: "/services/edge-computing-platform",
    color: "from-green-500 to-emerald-500",
    features: ["IoT Platforms", "Edge Analytics", "Device Management", "Smart Cities"]
  },
  {
    title: "Quantum Computing",
    description: "Next-generation quantum solutions for complex problems",
    icon: <Globe className="w-10 h-10" />,
    link: "/services/ai-quantum-hybrid-platform",
    color: "from-purple-500 to-pink-500",
    features: ["Quantum Algorithms", "Quantum Security", "Quantum Simulation", "Quantum ML"]
  }
];

const specialServices = [
  {
    title: "Enhanced AI & IT Services",
    link: "/enhanced-services",
    description: "Advanced AI-powered business solutions"
  },
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    description: "Professional on-site technical support"
  },
  {
    title: "AI Development",
    link: "/ai-development",
    description: "Custom AI solution development"
  },
  {
    title: "Cloud Migration",
    link: "/cloud-migration",
    description: "Seamless cloud infrastructure transition"
  },
  {
    title: "Cybersecurity",
    link: "/cybersecurity",
    description: "Comprehensive security solutions"
  }
];

interface CategoriesSectionProps extends React.PropsWithChildren<{}> {
  showTitle?: boolean;
  className?: string;
}

export function CategoriesSection({ showTitle = true, className = "" }: CategoriesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      scale: 0.95,
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered solutions to quantum computing, we offer the full spectrum of 
              cutting-edge technology services to drive your business forward.
            </p>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group"
            >
              <Link
                to={category.link}
                className="block h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <motion.div
                  variants={cardVariants}
                  className="h-full flex flex-col"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors duration-200 mt-auto">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Specialized Services
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Additional specialized services tailored to meet your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={service.link}
                  className="block p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:bg-white/10"
                >
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Explore Service
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}