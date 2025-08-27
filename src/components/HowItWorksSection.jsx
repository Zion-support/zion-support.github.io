import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Users, Zap, Shield, Rocket } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Users,
      title: "Discovery & Assessment",
      description: "We begin with a comprehensive analysis of your current technology infrastructure, business goals, and challenges.",
      details: [
        "Technology audit and gap analysis",
        "Business requirements gathering",
        "Security and compliance review",
        "Performance benchmarking"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Solution Design",
      description: "Our experts design a customized technology solution that aligns with your business objectives and budget.",
      details: [
        "Architecture planning and design",
        "Technology stack selection",
        "Integration strategy development",
        "Implementation roadmap creation"
      ],
      color: "from-cyan-500 to-green-500"
    },
    {
      icon: Shield,
      title: "Implementation & Testing",
      description: "We execute the solution with rigorous testing and quality assurance to ensure optimal performance.",
      details: [
        "Agile development methodology",
        "Continuous integration and testing",
        "Security implementation",
        "Performance optimization"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Deployment & Support",
      description: "Smooth deployment followed by ongoing support, monitoring, and continuous improvement services.",
      details: [
        "Zero-downtime deployment",
        "24/7 monitoring and support",
        "Regular maintenance and updates",
        "Performance analytics and reporting"
      ],
      color: "from-emerald-500 to-teal-500"
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
            Our proven methodology ensures successful project delivery through a structured, 
            collaborative approach that maximizes value and minimizes risk.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-emerald-500/30 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-800 to-slate-700 border-2 border-slate-600 rounded-full mb-6 text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2 text-left">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block mt-8">
                    <ArrowRight className="w-6 h-6 text-cyan-400 mx-auto transform rotate-90 lg:rotate-0" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Why Our Process Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Proven Methodology</h4>
                <p className="text-gray-400 text-sm">
                  Time-tested processes refined over hundreds of successful projects
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Expert Team</h4>
                <p className="text-gray-400 text-sm">
                  Certified professionals with deep industry expertise
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Quality Assurance</h4>
                <p className="text-gray-400 text-sm">
                  Rigorous testing and validation at every stage
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your project and create a customized solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
              <button className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <Zap className="w-5 h-5 mr-2" />
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}