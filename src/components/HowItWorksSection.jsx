import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageSquare, Code, Rocket, CheckCircle } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Discovery & Analysis",
      description: "We analyze your business needs and technical requirements to create a tailored solution",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Planning & Design",
      description: "Our experts design the architecture and create a detailed project roadmap",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development & Testing",
      description: "We build your solution using cutting-edge technologies and rigorous testing",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deployment & Launch",
      description: "Seamless deployment and launch with zero-downtime and full monitoring",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to ensure optimal performance",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven process ensures successful delivery of your projects from concept to completion
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center group"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                {/* Icon container */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};