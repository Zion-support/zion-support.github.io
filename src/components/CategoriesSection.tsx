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
  }
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading
            title="Explore Our Categories"
            subtitle="Discover comprehensive solutions across all technology domains"
            description="From AI-powered services to on-site IT support, we've got everything you need to transform your business"
          />
        </div>

        {/* Main Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative"
            >
              <Link
                to={category.link}
                className="block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-zion-blue transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="text-sm font-semibold text-zion-blue mb-4">
                  {category.stats}
                </div>

                {/* Arrow */}
                <div className="flex items-center text-zion-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Services Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Specialized Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our specialized offerings designed to meet your unique business needs
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {specialServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <Link
                to={service.link}
                className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-zion-blue">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-zion-blue transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust Zion Tech Group for their technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
