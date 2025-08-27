import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, HardDrive, Lightbulb, Users, Brain, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Comprehensive Services",
    description: "Micro SAAS, IT services, and AI solutions",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/comprehensive-services",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI and machine learning services",
    icon: <Brain className="w-10 h-10" />,
    link: "/ai-solutions",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
  },
];

const specialServices = [
  {
    title: "Enhanced AI & IT Services",
    link: "/enhanced-services"
  },
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services"
  },
  {
    title: "AI Development",
    link: "/ai-development"
  },
  {
    title: "Cloud Migration",
    link: "/cloud-migration"
  },
  {
    title: "Cybersecurity",
    link: "/cybersecurity"
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
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

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
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
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Categories
            </h2>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation.
              Everything you need to accelerate your digital transformation in one place.
            </p>
          </motion.div>
        )}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={category.link} className="group block h-full">
                <motion.div
                  className="rounded-2xl overflow-hidden h-full border border-zion-blue-light/30 bg-zion-blue-dark/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-zion-purple/50 hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:bg-zion-blue-dark"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Icon with enhanced background */}
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Services Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-8">Premium Services</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {specialServices.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border border-blue-400/30 hover:border-blue-400/50 rounded-2xl text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20 backdrop-blur-sm"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-light transition-colors text-lg font-medium py-2"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
