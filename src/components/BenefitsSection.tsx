<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown, Zap, Shield, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
<<<<<<< HEAD
import React from "react";
=======
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-10 h-10" />,
    color: "from-zion-purple to-zion-purple-dark",
    stats: "95% Match Rate"
  },
  {
    title: "Global Network",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-10 h-10" />,
    color: "from-zion-cyan to-zion-blue",
    stats: "150+ Countries"
  },
  {
    title: "24/7 Premium Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-10 h-10" />,
    color: "from-zion-blue to-zion-blue-dark",
    stats: "<2min Response"
  },
  {
    title: "Cost Optimization",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-10 h-10" />,
    color: "from-zion-cyan-light to-zion-cyan",
    stats: "40% Savings"
  },
  {
    title: "Quality Assurance",
    description: "Every service provider and product is thoroughly vetted and quality-tested to ensure you receive only the best solutions.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-pink-600",
    features: ["Background Checks", "Portfolio Reviews", "Client Feedback"]
  },
  {
    title: "Community Network",
    description: "Join a thriving community of tech professionals, share knowledge, and collaborate on innovative projects.",
    icon: <Users className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    features: ["Expert Forums", "Networking Events", "Knowledge Sharing"]
  }
];
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276

const stats = [
  { number: "50K+", label: "Happy Clients" },
  { number: "100K+", label: "Projects Completed" },
  { number: "150+", label: "Countries Served" },
  { number: "99.9%", label: "Uptime" }
];

const additionalFeatures = [
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance",
    icon: <Shield className="w-6 h-6" />,
    color: "text-zion-cyan"
  },
  {
    title: "Expert Verification",
    description: "All talents are pre-vetted",
    icon: <Award className="w-6 h-6" />,
    color: "text-zion-purple-light"
  },
  {
    title: "Instant Deployment",
    description: "Get started in minutes",
    icon: <Zap className="w-6 h-6" />,
    color: "text-zion-blue-light"
  },
  {
    title: "Community Driven",
    description: "Built by developers, for developers",
    icon: <Users className="w-6 h-6" />,
    color: "text-zion-cyan-light"
  }
];
=======

import { CheckCircle, Zap, Shield, Users, Globe, TrendingUp } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

export function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
<<<<<<< HEAD
      y: 0,
      transition: { duration: 0.5 }
=======
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-zion-blue-light via-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GradientHeading className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Why Choose Zion?
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed">
            Experience the next generation of tech marketplace with features designed to maximize efficiency, 
            security, and value for businesses and individuals worldwide
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group bg-gradient-to-br from-zion-blue/20 to-zion-blue-dark/20 hover:from-zion-blue/30 hover:to-zion-blue-dark/30 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-purple/50 rounded-2xl p-8 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-zion-cyan transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed text-lg">
                  {benefit.description}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full">
                  <span className="text-zion-cyan font-semibold text-sm">{benefit.stats}</span>
                </div>
=======

export function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "All services and talent are verified and quality-checked"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times for all projects and services"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security for your business needs"
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Access to top-tier tech professionals worldwide"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with talent and services from anywhere"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Grow your business with flexible, scalable services"
    }
  ];

  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We provide the most comprehensive tech marketplace experience with unmatched quality, security, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
>>>>>>> origin/cursor/build-and-fix-errors-e276
              </div>
            </motion.div>
          ))}
<<<<<<< HEAD
        </motion.div>

        {/* Additional features */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Built for the Future</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-zion-blue-dark/50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-blue-light/30`}>
                  {React.createElement(feature.icon, { className: feature.color })}
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm">{feature.title}</h4>
                <p className="text-zion-slate-light text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Tech Experience?</h3>
            <p className="text-zion-slate-light mb-6">
              Join thousands of companies and developers who trust Zion for their technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-zion-purple/25">
                Start Free Trial
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
=======
        </div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
      </div>
    </section>
  );
}