import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Brain, Shield, Cloud, Database, Globe, Zap, TrendingUp, Users, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export function CategoriesSection() {
  const categories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions for business automation and insights",
      link: "/micro-saas-services",
      color: "from-zion-cyan to-zion-purple",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Machine Learning Models"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      link: "/micro-saas-services",
      color: "from-zion-red to-zion-orange",
      features: ["Threat Detection", "Vulnerability Assessment", "Security Monitoring", "Incident Response"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and management solutions",
      link: "/micro-saas-services",
      color: "from-zion-blue to-zion-cyan",
      features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Cost Optimization"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable business insights",
      link: "/micro-saas-services",
      color: "from-zion-green to-zion-teal",
      features: ["Real-time Analytics", "Data Visualization", "Business Intelligence", "Predictive Modeling"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern web applications with cutting-edge technologies",
      link: "/micro-saas-services",
      color: "from-zion-purple to-zion-pink",
      features: ["React/Next.js", "Progressive Web Apps", "API Development", "Performance Optimization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation",
      description: "Streamline workflows with intelligent automation tools",
      link: "/micro-saas-services",
      color: "from-zion-yellow to-zion-orange",
      features: ["Workflow Automation", "Process Optimization", "Integration Tools", "Smart Scheduling"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Data-driven insights to accelerate business growth",
      link: "/micro-saas-services",
      color: "from-zion-indigo to-zion-blue",
      features: ["KPI Dashboards", "Market Analysis", "Growth Strategies", "Performance Metrics"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Experience",
      description: "Enhance customer engagement and satisfaction",
      link: "/micro-saas-services",
      color: "from-zion-pink to-zion-rose",
      features: ["CRM Solutions", "Customer Support", "Feedback Systems", "Personalization"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent mb-6">
            Explore Our Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover comprehensive micro SAAS services across multiple domains, 
            designed to accelerate your digital transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Link
                to={category.link}
                className="block h-full"
              >
                <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-zion-cyan/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/20">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center text-zion-cyan group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2">
                      {category.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {category.features.length > 3 && (
                        <li className="text-sm text-zion-cyan/70">
                          +{category.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/micro-saas-services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
          >
            View All Services
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}