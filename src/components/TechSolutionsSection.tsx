import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {;
  Brain,;
  Shield,;
  Cloud,;
  Zap,;
  Globe,;
  Rocket,;
  Cpu,;
  Database,;
  Lock,;
  Network,;
  Code,;
  Server;
} from "lucide-react"
const techSolutions = [;
  {;
    icon: "🤖",title: "AI & Machine Learning",description: "Intelligent automation, predictive analytics, and cognitive computing solutions",;
    benefits: ["Increase efficiency by 300%", "Reduce costs by 40%", "24/7 operation"],;
    color: "from-purple-500 to-pink-500"
  };
  {;
    icon: "☁️",title: "Cloud Infrastructure",description: "Scalable, secure, and high-performance cloud solutions for modern businesses",;
    benefits: ["99.9% uptime guarantee", "Global scalability", "Advanced security"],;
    color: "from-blue-500 to-cyan-500"
  };
  {;
    icon: "🔒",title: "Cybersecurity",description: "Comprehensive security solutions protecting your digital assets and data",benefits: ["Real-time threat detection", "Compliance ready", "Zero-trust architecture"],;
    color: "from-red-500 to-orange-500"
  };
  {;
    icon: "📱",title: "Mobile Solutions",description: "Cross-platform mobile applications and responsive web solutions",benefits: ["Native performance", "Cross-platform", "Offline capability"],;
    color: "from-green-500 to-emerald-500"
  };
  {;
    icon: "🌐",title: "Web Development",description: "Modern, responsive web applications and e-commerce solutions",;
    benefits: ["SEO optimized", "Fast loading", "Mobile-first design"],;
    color: "from-indigo-500 to-purple-500"
  };
  {;
    icon: "📊",title: "Data Analytics",description: "Business intelligence and data-driven insights for strategic decision making",benefits: ["Real-time dashboards", "Predictive analytics", "Custom reporting"],;
    color: "from-yellow-500 to-orange-500"
  };
];
export function TechSolutionsSection() {;
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <div className="max-w-7xl mx-auto px-6">;
        <motion.div ;
          className="[^"]*"
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6 }};
        >;
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">;
            Technology Solutions;
          </[^>]*>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Comprehensive technology solutions designed to drive innovation;
            enhance security, and accelerate your digital transformation journey.;
          </[^>]*>
        </[^>]*>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {techSolutions.map((solution, index) => (;
            <motion.div
              key={solution.title};
              className="[^"]*"
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              viewport={{ once: true }};
              transition={{ duration: 0.6, delay: index * 0.1 }};
            >;
              <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                <span className="text-3xl">{solution.icon}</[^>]*>
              </[^>]*>
              ;
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">;
                {solution.title};
              </[^>]*>
              ;
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">;
                {solution.description};
              </[^>]*>
              ;
              <ul className="space-y-2">;
                {solution.benefits.map((benefit, benefitIndex) => (;
                  <li key={benefitIndex} className="flex items-center gap-2 text-sm">;
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></[^>]*>
                    <span className="text-gray-300">{benefit}</[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
              ;
              <div className="mt-6 pt-4 border-t border-slate-700">;
                <div className="text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors duration-200">;
                  Learn More →;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        <motion.div ;
          className="[^"]*"
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6, delay: 0.4 }};
        >;
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">;
            <h3 className="text-2xl font-bold text-gray-900 mb-4">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">;
              Let's discuss how our technology solutions can help you achieve;
              your business goals and stay ahead of the competition.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Get Started;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/services"
                className="[^"]*"
              >;
                View All Services;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};