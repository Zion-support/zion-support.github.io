import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cloud, Database, Cpu, Globe, Users } from 'lucide-react';

const categories = [
  {
    title: "AI Services",
    link: "/ai-services",
    icon: Zap,
    description: "Artificial Intelligence solutions"
  },
  {
    title: "Cybersecurity Services",
    link: "/cybersecurity-services",
    icon: Shield,
    description: "Advanced security solutions"
  },
  {
    title: "Cloud Solutions",
    link: "/cloud-solutions",
    icon: Cloud,
    description: "Scalable cloud infrastructure"
  },
  {
    title: "Data Analytics",
    link: "/data-analytics",
    icon: Database,
    description: "Business intelligence and insights"
  },
  {
    title: "IoT Solutions",
    link: "/iot-solutions",
    icon: Cpu,
    description: "Internet of Things integration"
  },
  {
    title: "Web Development",
    link: "/web-development",
    icon: Globe,
    description: "Modern web applications"
  },
  {
    title: "Consulting Services",
    link: "/consulting",
    icon: Users,
    description: "Expert technology consulting"
  }
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-zion-gray-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive technology solutions tailored to your business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link to={category.link}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-zion-gray-light mb-4 group-hover:text-white transition-colors duration-300">
                    {category.description}
                  </p>
                  <div className="flex items-center text-zion-cyan group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/services"
            className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;