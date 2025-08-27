import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GradientHeading } from './GradientHeading';

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
    title: "Enhanced AI & IT Services",
    link: "/enhanced-services"
  },
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
  }
];

export function CategoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-zion-blue-dark to-slate-900">
      <div className="container mx-auto px-4">
        <GradientHeading
          title="Explore Our Categories"
          subtitle="Discover comprehensive solutions across all technology domains"
          className="text-center mb-16"
        />

        {/* Main Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={category.link}>
                <div className={`bg-gradient-to-br ${category.gradient} backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 h-full`}>
                  {/* Icon */}
                  <div className={`text-${category.color.split('-')[1]} mb-4`}>
                    {category.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="text-zion-cyan font-semibold text-sm">
                    {category.stats}
                  </div>

                  {/* Arrow */}
                  <div className="mt-4 flex justify-end">
                    <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Special Services */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Services</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={service.link}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105 text-center">
                    {service.icon && (
                      <div className="text-zion-cyan mb-3 flex justify-center">
                        {service.icon}
                      </div>
                    )}
                    <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                    {service.description && (
                      <p className="text-zion-slate-light text-sm">{service.description}</p>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Icon components
const Building = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default CategoriesSection;
