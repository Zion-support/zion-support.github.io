import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Database, Code } from 'lucide-react';

export function CategoriesSection() {
  const categories = [
    {
      icon: Brain,
      title: "AI & Autonomous Systems",
      description: "Revolutionary AI platforms and autonomous business solutions",
      color: "from-blue-600 to-purple-600",
      link: "/services"
    },
    {
      icon: Database,
      title: "IT Infrastructure & Enterprise",
      description: "Enterprise-grade IT infrastructure and cloud solutions",
      color: "from-green-600 to-emerald-600",
      link: "/services"
    },
    {
      icon: Code,
      title: "Micro SAAS Solutions",
      description: "Innovative micro software-as-a-service solutions",
      color: "from-orange-600 to-red-600",
      link: "/services"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Service Categories
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Explore our comprehensive range of technology solutions organized into three main categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={category.link}>
                <div className={`p-8 bg-gradient-to-br ${category.color} rounded-xl text-white text-center transform transition-all duration-300 group-hover:scale-105`}>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                    <category.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <p className="text-lg opacity-90">{category.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;