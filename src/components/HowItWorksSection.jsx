import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users, FileText, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Discover",
      description: "Browse our comprehensive catalog of AI services and solutions",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Connect",
      description: "Get matched with the perfect AI solution for your business needs",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Plan",
      description: "Work with our experts to create a customized implementation plan",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch",
      description: "Deploy your AI solution and start transforming your business",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our streamlined process ensures you get the perfect AI solution for your business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white mb-6 mx-auto`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;