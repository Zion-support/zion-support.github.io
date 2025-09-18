import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CpuChipIcon, CloudIcon, ShieldCheckIcon, LightBulbIcon, RocketLaunchIcon, ChartBarIcon } from '@heroicons/react/24/outline';
export function ServicesShowcase() {
    const services = [
        {
            icon: CpuChipIcon,
            title: "AI & Machine Learning",
            description: "Advanced AI solutions for automation, decision-making, and predictive analytics",
            color: "from-zion-cyan to-zion-blue",
            href: "/ai-solutions"
        },
        {
            icon: CloudIcon,
            title: "Cloud & DevOps",
            description: "Scalable cloud infrastructure and automated deployment pipelines",
            color: "from-zion-purple to-zion-cyan",
            href: "/cloud-devops"
        },
        {
            icon: ShieldCheckIcon,
            title: "Cybersecurity",
            description: "Comprehensive security solutions for threat detection and prevention",
            color: "from-zion-purple to-zion-blue",
            href: "/cybersecurity"
        },
        {
            icon: LightBulbIcon,
            title: "Digital Transformation",
            description: "End-to-end digital strategy and implementation services",
            color: "from-zion-cyan to-zion-purple",
            href: "/digital-transformation"
        },
        {
            icon: RocketLaunchIcon,
            title: "Micro SaaS Solutions",
            description: "Custom SaaS platforms for specific business needs",
            color: "from-zion-blue to-zion-cyan",
            href: "/micro-saas"
        },
        {
            icon: ChartBarIcon,
            title: "Business Intelligence",
            description: "Data analytics and insights for informed decision-making",
            color: "from-zion-purple to-zion-blue",
            href: "/business-intelligence"
        }
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    return (<section className="py-20 bg-zion-slate-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-zion-purple/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </motion.div>
=======

const ServicesShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ServicesShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default ServicesShowcase;
