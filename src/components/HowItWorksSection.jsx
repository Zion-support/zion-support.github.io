import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description: "We analyze your business needs and current technology infrastructure to identify opportunities for improvement.",
    icon: "🔍"
  },
  {
    number: "02",
    title: "Solution Design",
    description: "Our experts design a customized solution that aligns with your business goals and technical requirements.",
    icon: "🎨"
  },
  {
    number: "03",
    title: "Implementation",
    description: "We deploy the solution with minimal disruption to your operations, ensuring smooth transition.",
    icon: "⚡"
  },
  {
    number: "04",
    title: "Support & Optimization",
    description: "Ongoing support and continuous optimization to ensure your solution evolves with your business needs.",
    icon: "🔄"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our proven process ensures successful implementation and maximum value from your technology investments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold">
            <span>Ready to get started?</span>
            <span className="text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}