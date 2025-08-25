<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
<<<<<<< HEAD
import { Bot, Clock, Globe, TrendingDown, Zap, Shield, Users, Award } from "lucide-react";
=======
import { GradientHeading } from "./GradientHeading";
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
import { motion } from "framer-motion";
<<<<<<< HEAD
import React from "react";
=======
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======
import { Bot, Clock, Globe, TrendingDown, Shield, Zap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
<<<<<<< HEAD
    icon: <Bot className="w-10 h-10" />,
    color: "from-zion-purple to-zion-purple-dark",
    stats: "95% Match Rate"
=======
    icon: <Bot className="w-8 h-8" />,
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "bg-zion-purple/10",
    features: ["Smart Algorithms", "Instant Results", "Perfect Matches"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  },
  {
    title: "Global Network",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
<<<<<<< HEAD
    icon: <Globe className="w-10 h-10" />,
    color: "from-zion-cyan to-zion-blue",
    stats: "150+ Countries"
=======
    icon: <Globe className="w-8 h-8" />,
    color: "from-zion-cyan to-zion-cyan-dark",
    bgColor: "bg-zion-cyan/10",
    features: ["150+ Countries", "Local Expertise", "Global Network"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  },
  {
    title: "24/7 Premium Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
<<<<<<< HEAD
    icon: <Clock className="w-10 h-10" />,
    color: "from-zion-blue to-zion-blue-dark",
    stats: "<2min Response"
=======
    icon: <Clock className="w-8 h-8" />,
    color: "from-zion-blue to-zion-blue-dark",
    bgColor: "bg-zion-blue/10",
    features: ["Always Available", "Expert Team", "Instant Response"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
  },
  {
    title: "Cost Optimization",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
<<<<<<< HEAD
    icon: <TrendingDown className="w-10 h-10" />,
    color: "from-zion-cyan-light to-zion-cyan",
    stats: "40% Savings"
=======
    icon: <TrendingDown className="w-8 h-8" />,
    color: "from-zion-purple-light to-zion-purple",
    bgColor: "bg-zion-purple-light/10",
    features: ["40% Savings", "Direct Connect", "No Hidden Fees"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
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
<<<<<<< HEAD
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance",
=======
    title: "Verified Quality",
    description: "All providers are vetted and quality-assured",
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
    icon: <Shield className="w-6 h-6" />,
    color: "text-zion-cyan"
  },
  {
<<<<<<< HEAD
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
=======
    title: "Lightning Fast",
    description: "Get results in minutes, not days",
    icon: <Zap className="w-6 h-6" />,
    color: "text-zion-purple"
  },
  {
    title: "Community Driven",
    description: "Built by tech professionals, for tech professionals",
    icon: <Users className="w-6 h-6" />,
    color: "text-zion-blue"
  },
  {
    title: "Award Winning",
    description: "Recognized for innovation and excellence",
    icon: <Award className="w-6 h-6" />,
    color: "text-zion-purple-light"
  }
];
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e

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
=======
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
    }
  };

  return (
<<<<<<< HEAD
    <section className="py-24 bg-gradient-to-br from-zion-blue-light via-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
=======
    <section className="py-20 bg-gradient-to-br from-zion-blue-light via-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-zion-cyan rounded-full blur-2xl"></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
<<<<<<< HEAD
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
=======
          className="text-center mb-16"
          variants={headerVariants}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
<<<<<<< HEAD
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
=======
          <GradientHeading className="mb-4">Why Choose Zion?</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of tech marketplace with features designed to maximize efficiency, 
            value, and success in your tech endeavors
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className={`rounded-xl overflow-hidden h-full border border-zion-blue-light/30 ${benefit.bgColor} p-8 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-zion-purple/20`}>
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{benefit.description}</p>
                
                {/* Feature highlights */}
                <div className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional features grid */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Built for the Future</h3>
=======
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Built for Success</h3>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center"
<<<<<<< HEAD
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-zion-blue-dark/50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-blue-light/30`}>
                  {React.createElement(feature.icon, { className: feature.color })}
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm">{feature.title}</h4>
=======
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className={`w-12 h-12 bg-zion-blue-dark/50 rounded-lg flex items-center justify-center mx-auto mb-3 border border-zion-blue-light/20`}>
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{feature.title}</h4>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
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
<<<<<<< HEAD
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
=======
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-zion-slate-light mb-6">
              Join thousands of tech professionals who trust Zion for their tech needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25 transform hover:scale-105">
                Start Exploring
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">
                Learn More
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
              </button>
            </div>
          </div>
        </motion.div>
<<<<<<< HEAD
=======
        </div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
      </div>
    </section>
  );
}