
import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send, Clock, Target, Zap, Shield, Users, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const steps = [
  { title: "Post", description: "Publish your service, job, or equipment in minutes with our AI-powered form.", icon: <Send className="w-6 h-6" />, color: "from-zion-cyan to-zion-blue", duration: "~5 min", success: "98% match" },
  { title: "Match", description: "Our AI automatically matches your needs with the perfect providers or opportunities.", icon: <Search className="w-6 h-6" />, color: "from-zion-purple to-zion-blue", duration: "<24 hrs", success: "Top 3 matches" },
  { title: "Hire/Buy", description: "Connect directly with matched providers and complete your transaction securely.", icon: <Handshake className="w-6 h-6" />, color: "from-zion-blue to-zion-cyan", duration: "Fast", success: "Secure checkout" },
  { title: "Done", description: "Enjoy hassle-free delivery and support for your technology solutions.", icon: <Check className="w-6 h-6" />, color: "from-zion-cyan to-zion-purple", duration: "On-time", success: "SLA-backed" },
];

const stats = [
  { value: "12k+", label: "Listings", icon: <Zap className="w-5 h-5" /> },
  { value: "4.9/5", label: "Avg. Rating", icon: <Shield className="w-5 h-5" /> },
  { value: "60+", label: "Countries", icon: <Users className="w-5 h-5" /> },
  { value: "24/7", label: "Support", icon: <Shield className="w-5 h-5" /> },
];

const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const itemVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };
const statsVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } };

export interface HowItWorksSectionProps extends React.HTMLAttributes<HTMLElement> {}

export function HowItWorksSection({ className, style, ...props }: HowItWorksSectionProps) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className={cn("py-20 bg-zion-blue", className)} style={style} {...props}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>How It Works</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            A simple four-step process to connect technology providers with clients
          </p>
        </div>

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
              <div className="text-zion-cyan mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView={{ opacity: 1, y: 0 }}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border-2 border-zion-cyan text-white font-bold text-xl mb-6 relative z-10 shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300">
                    {index + 1}
                  </div>

                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <div className="text-white">{step.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">{step.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed text-sm mb-4">{step.description}</p>

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
                          {(step as any).details?.map((detail: string, idx: number) => (
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              <p className="text-white text-lg mb-4">Ready to start your project journey?</p>
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25">
                Get Started Today
                <Rocket className="w-5 h-5" />
              </button>
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-blue mb-4">
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