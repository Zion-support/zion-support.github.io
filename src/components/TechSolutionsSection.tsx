import React from 'react';
import { motion    } from 'framer-motion';
import { Link    } from 'react-router-dom';
import { Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Rocket, 
  Cpu, 
  Database,
  Lock,
  Network,
  Code,
  Server
   } from 'lucide-react';

const techSolutions = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description: "Intelligent automation, predictive analytics, and cognitive computing solutions",
    benefits: ["Increase efficiency by 300%", "Reduce costs by 40%", "24/7 operation"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    description: "Scalable, secure, and high-performance cloud solutions for modern businesses",
    benefits: ["99.9% uptime guarantee", "Global scalability", "Advanced security"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description: "Comprehensive security solutions protecting your digital assets and data",
    benefits: ["Real-time threat detection", "Compliance ready", "Zero-trust architecture"],
    color: "from-red-500 to-orange-500"
  },
  {
    icon: "📱",
    title: "Mobile Solutions",
    description: "Cross-platform mobile applications and responsive web solutions",
    benefits: ["Native performance", "Cross-platform", "Offline capability"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: "🌐",
    title: "Web Development",
    description: "Modern, responsive web applications and e-commerce solutions",
    benefits: ["SEO optimized", "Fast loading", "Mobile-first design"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: "📊",
    title: "Data Analytics",
    description: "Business intelligence and data-driven insights for strategic decision making",
    benefits: ["Real-time dashboards", "Predictive analytics", "Custom reporting"],
    color: "from-yellow-500 to-orange-500"
  }
];

export function TechSolutionsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technology Solutions
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive innovation
          </p>
        </motion.div>

        <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index)    => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} mr-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {solution.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span>Ready to transform your business?</span>
            <span className="text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}