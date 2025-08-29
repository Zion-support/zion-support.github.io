import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Handshake, 
  Rocket, 
  CheckCircle,
  ArrowRight,
  Users,
  Brain,
  Shield,
  Zap,
  Star,
  Clock
} from 'lucide-react';

interface Step {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  gradient: string;
  features: string[];
  duration: string;
}

const steps: Step[] = [
  {
    title: "Discovery & Assessment",
    description: "We begin by understanding your unique business challenges and technology requirements",
    icon: Search,
    color: "from-cyan-500 to-blue-600",
    gradient: "from-cyan-500/20 to-blue-500/20",
    features: [
      "Business needs analysis",
      "Technology audit",
      "Gap identification",
      "ROI assessment"
    ],
    duration: "1-2 weeks"
  },
  {
    title: "Solution Design",
    description: "Our experts craft a tailored solution that aligns with your business objectives",
    icon: Brain,
    color: "from-green-500 to-emerald-600",
    gradient: "from-green-500/20 to-emerald-500/20",
    features: [
      "Custom architecture design",
      "Technology stack selection",
      "Implementation roadmap",
      "Risk mitigation plan"
    ],
    duration: "2-3 weeks"
  },
  {
    title: "Implementation",
    description: "We execute the solution with precision, ensuring minimal disruption to your operations",
    icon: Rocket,
    color: "from-purple-500 to-pink-600",
    gradient: "from-purple-500/20 to-pink-500/20",
    features: [
      "Agile development",
      "Quality assurance",
      "Testing & validation",
      "Performance optimization"
    ],
    duration: "4-12 weeks"
  },
  {
    title: "Launch & Support",
    description: "We ensure smooth deployment and provide ongoing support for long-term success",
    icon: Shield,
    color: "from-yellow-500 to-orange-600",
    gradient: "from-yellow-500/20 to-orange-500/20",
    features: [
      "Go-live support",
      "Training & documentation",
      "24/7 monitoring",
      "Continuous improvement"
    ],
    duration: "Ongoing"
  }
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            How We <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Our proven methodology ensures successful project delivery and maximum business value
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform -translate-y-1/2 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-sm"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-20">
                  {index + 1}
                </div>

                <div className="relative h-full bg-slate-800/50 backdrop-blur-md rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col text-center">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 mb-6 leading-relaxed flex-grow">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-sm font-medium mb-6">
                      <Clock className="w-4 h-4 mr-2" />
                      {step.duration}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <ul className="space-y-2 text-left">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-slate-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow for next step */}
                    {index < steps.length - 1 && (
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                        <ArrowRight className="w-6 h-6 text-cyan-400" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-md rounded-3xl border border-cyan-500/30 p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Success Metrics
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "98%", label: "Project Success Rate", icon: Star },
                { value: "95%", label: "Client Satisfaction", icon: Users },
                { value: "40%", label: "Average Cost Reduction", icon: Zap },
                { value: "10x", label: "Performance Improvement", icon: Rocket }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-slate-300 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-slate-300 text-lg mb-6">
            Ready to start your transformation journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}