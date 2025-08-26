import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Users, CheckCircle, ArrowRight } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Assessment',
      description: 'We analyze your current technology landscape and identify opportunities for improvement and innovation.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Strategic Planning',
      description: 'Our experts develop a comprehensive roadmap tailored to your business goals and requirements.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Implementation & Deployment',
      description: 'We execute the plan with precision, ensuring minimal disruption to your operations.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: CheckCircle,
      title: 'Ongoing Support',
      description: 'Continuous monitoring, maintenance, and optimization to ensure long-term success.',
      color: 'from-orange-500 to-red-500'
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
            Our proven methodology ensures successful project delivery and maximum value for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 h-full text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl mb-6 mx-auto`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-2xl font-bold text-white mb-4">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can transform your business with cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}