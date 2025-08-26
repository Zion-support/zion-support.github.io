import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Category {
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
  features: string[];
}

interface SpecialService {
  title: string;
  link: string;
}

interface CategoriesSectionProps {
  showTitle?: boolean;
}

const categories: Category[] = [
  {
    title: "AI Solutions",
    description: "Cutting-edge artificial intelligence services for business transformation",
    icon: "🤖",
    color: "from-zion-cyan to-zion-blue",
    link: "/ai-solutions",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions",
    icon: "☁️",
    color: "from-zion-blue to-zion-purple",
    link: "/cloud-devops",
    features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"]
  },
  {
    title: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems",
    icon: "🔒",
    color: "from-zion-red to-zion-orange",
    link: "/cybersecurity",
    features: ["Threat Detection", "Penetration Testing", "Compliance", "Incident Response"]
  },
  {
    title: "Digital Transformation",
    description: "End-to-end business process modernization and optimization",
    icon: "🚀",
    color: "from-zion-green to-zion-cyan",
    link: "/digital-transformation",
    features: ["Process Automation", "Legacy Migration", "Change Management", "ROI Optimization"]
  }
];

const specialServices: SpecialService[] = [
  { title: "Quantum Computing Solutions", link: "/quantum-computing" },
  { title: "5G Enterprise Networks", link: "/5g-solutions" },
  { title: "Blockchain Integration", link: "/blockchain" },
  { title: "IoT Edge Computing", link: "/iot-edge" }
];

export default function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Explore Our Service Categories
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Discover comprehensive solutions across multiple domains
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={category.link} className="group block h-full">
                <div className="rounded-2xl overflow-hidden h-full border border-blue-400/30 bg-gradient-to-br from-slate-800/50 to-slate-800 p-8 transition-all duration-500 hover:border-blue-400/60 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-blue-400/20 backdrop-blur-sm">
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white text-3xl">
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-white mb-8">Premium Services</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border border-blue-400/30 hover:border-blue-400/50 rounded-2xl text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20 backdrop-blur-sm"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link 
              to="/comprehensive-services-showcase-2025"
              className="group inline-flex items-center gap-3 text-blue-400 border-b-2 border-blue-400 hover:border-blue-300 transition-colors text-lg font-medium py-2"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
