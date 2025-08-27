import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Cloud, Zap, Users, Globe, Server, Lock } from 'lucide-react';

export function TechSolutionsSection() {
  const solutions = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business automation and insights",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Decision Making"],
      color: "from-purple-500 to-pink-500",
      link: "/services/ai"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions to protect your digital assets",
      features: ["Threat Detection", "Incident Response", "Compliance Management", "Security Training"],
      color: "from-red-500 to-orange-500",
      link: "/services/cybersecurity"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services for modern business needs",
      features: ["Cloud Migration", "DevOps Automation", "Multi-Cloud Strategy", "Cost Optimization"],
      color: "from-blue-500 to-cyan-500",
      link: "/services/cloud"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end business transformation services for the digital age",
      features: ["Process Automation", "Legacy Modernization", "Change Management", "Digital Strategy"],
      color: "from-yellow-500 to-orange-500",
      link: "/services/digital-transformation"
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology consulting and planning for business growth",
      features: ["Technology Assessment", "Roadmap Planning", "Vendor Selection", "Implementation Support"],
      color: "from-green-500 to-teal-500",
      link: "/services/consulting"
    },
    {
      icon: Globe,
      title: "Global Solutions",
      description: "Worldwide technology deployment and support services",
      features: ["Multi-Region Deployment", "Local Compliance", "24/7 Support", "Cultural Adaptation"],
      color: "from-indigo-500 to-purple-500",
      link: "/services/global"
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
            Technology Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation, efficiency, and competitive advantage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Link to={solution.link} className="block">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 h-full transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/70">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team of experts can design and implement tailored technology solutions that perfectly fit your business requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}