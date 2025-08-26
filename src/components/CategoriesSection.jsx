import React from 'react';
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, ArrowRight, Sparkles, Zap, Shield, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Comprehensive Services",
    description: "Micro SAAS, IT services, and AI solutions",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-zion-purple to-zion-purple-dark",
    gradient: "from-zion-purple/20 to-zion-purple-dark/20",
    features: ["24/7 Support", "Expert Team", "Custom Solutions"],
    stats: "500+ Services"
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-zion-cyan to-zion-blue",
    gradient: "from-zion-cyan/20 to-zion-blue/20",
    features: ["AI Experts", "Global Network", "Verified Profiles"],
    stats: "10K+ Experts"
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-zion-cyan-light to-zion-cyan",
    gradient: "from-zion-cyan-light/20 to-zion-cyan/20",
    features: ["High-Performance", "Flexible Rental", "24/7 Monitoring"],
    stats: "1000+ Devices"
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-zion-purple-light to-zion-purple",
    gradient: "from-zion-purple-light/20 to-zion-purple/20",
    features: ["Latest Tech", "AI Solutions", "Future-Ready"],
    stats: "100+ Innovations"
  },
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    icon: <Shield className="w-5 h-5" />,
    description: "Professional on-site technical support"
  },
  {
    title: "Comprehensive Services",
    link: "/comprehensive-services",
    icon: <Rocket className="w-5 h-5" />,
    description: "End-to-end technology solutions"
  },
  {
    title: "AI Integration",
    link: "/ai-integration",
    icon: <Sparkles className="w-5 h-5" />,
    description: "Seamless AI implementation"
  },
  {
    title: "Cloud Solutions",
    link: "/cloud-solutions",
    icon: <Zap className="w-5 h-5" />,
    description: "Scalable cloud infrastructure"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function CategoriesSection() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>Our Core Categories</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
            Discover comprehensive solutions across technology, talent, and innovation
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group"
            >
              <Link
                to={category.link}
                className="block p-6 rounded-xl bg-zion-blue-light/10 border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300 hover:bg-zion-blue-light/20 group-hover:scale-105"
              >
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.gradient} mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-zion-cyan">
                        • {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-zion-cyan font-semibold text-sm">
                    {category.stats}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Specialized Services
          </h3>
          <p className="text-zion-slate-light">
            Tailored solutions for your specific needs
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {specialServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <Link
                to={service.link}
                className="block p-6 rounded-lg bg-zion-blue-light/5 border border-zion-blue-light/10 hover:border-zion-cyan/30 transition-all duration-300 hover:bg-zion-blue-light/10 group-hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-zion-cyan">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {service.title}
                  </h4>
                </div>
                <p className="text-zion-slate-light text-sm">
                  {service.description}
                </p>
                <div className="flex items-center text-zion-cyan mt-4 group-hover:translate-x-1 transition-transform duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple-dark hover:to-zion-cyan-dark transition-all duration-300 transform hover:scale-105"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
