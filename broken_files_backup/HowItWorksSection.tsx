<<<<<<< HEAD:src/components/HowItWorksSection.tsx

import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Post",
    description: "Publish your service, job, or equipment in minutes with our AI-powered form.",
    icon: Send,
  },
  {
    title: "Match",
    description: "Our AI automatically matches your needs with the perfect providers or opportunities.",
    icon: Search,
  },
  {
    title: "Hire/Buy",
    description: "Connect directly with matched providers and complete your transaction securely.",
    icon: Handshake,
  },
  {
    title: "Done",
    description: "Enjoy hassle-free delivery and support for your technology solutions.",
    icon: Check,
  },
];

export interface HowItWorksSectionProps extends React.HTMLAttributes<HTMLElement> {}

export function HowItWorksSection({ className, style, ...props }: HowItWorksSectionProps) {
=======
import React from 'react';
export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We begin by understanding your business needs, current infrastructure, and goals for transformation.',
      icon: '🔍',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Our experts develop a comprehensive roadmap tailored to your specific requirements and timeline.',
      icon: '📋',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, ensuring minimal disruption to your ongoing operations.',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and performance optimization to ensure everything works flawlessly.',
      icon: '🧪',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'Go-live with confidence, backed by our ongoing support and maintenance services.',
      icon: '🚀',
      color: 'from-red-500 to-pink-500'
    }
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HowItWorksSection.tsx
  return (
    <section
      className={cn("py-20 bg-zion-blue", className)}
      style={style}
      {...props}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>How It Works</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            A simple four-step process to connect technology providers with clients
          </p>
<<<<<<< HEAD:src/components/HowItWorksSection.tsx
        </motion.div>

        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={statsVariants}
              className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
            >
              <div className="text-zion-cyan mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue transform -translate-y-1/2 hidden lg:block">
            <motion.div 
              className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>
          
=======
        </div>
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2 z-0"></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HowItWorksSection.tsx
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="relative"
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center h-full">
                  {/* Step number with enhanced styling */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border-2 border-zion-cyan text-white font-bold text-xl mb-6 relative z-10 shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300">
                    {index + 1}
                  </div>
<<<<<<< HEAD:src/components/HowItWorksSection.tsx
                  
                  {/* Icon with enhanced background */}
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Duration and success rate */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center gap-2 text-zion-cyan/80 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{step.duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-zion-purple/80 text-xs">
                      <Target className="w-3 h-3" />
                      <span>{step.success}</span>
                    </div>
                  </div>

                  {/* Interactive details on hover */}
                  <AnimatePresence>
                    {hoveredStep === index && (
                      <motion.div 
                        className="mt-4 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30"
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-center gap-2 text-zion-slate-light/80 text-xs"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                              <span>{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover indicator */}
                  <div className="mt-4 text-zion-cyan/60 text-xs">
                    {hoveredStep === index ? "Hover to see details" : "Hover for details"}
=======
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-md border-2 border-gray-200">
                    {step.icon}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HowItWorksSection.tsx
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD:src/components/HowItWorksSection.tsx
        
        {/* Enhanced bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to start your project journey?
              </p>
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25">
                Get Started Today
                <Rocket className="w-5 h-5" />
              </button>
=======
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is ready to guide you through every step of your digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Schedule Consultation
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Our Services
              </a>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HowItWorksSection.tsx
            </div>
          </div>
        </motion.div>

        {/* Additional features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-purple mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Fast Setup</h4>
            <p className="text-zion-slate-light text-sm">Get started in minutes, not days</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-purple to-zion-cyan mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Secure & Reliable</h4>
            <p className="text-zion-slate-light text-sm">Enterprise-grade security and uptime</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-cyan-light to-zion-blue mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Expert Support</h4>
            <p className="text-zion-slate-light text-sm">24/7 support from our team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}