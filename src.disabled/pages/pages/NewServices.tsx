import React from 'react';
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

const NewServices = () => {
  const newServices = [
    {
      title: "AI-Powered Business Intelligence Suite",
      description: "Transform your data into actionable insights with our advanced AI analytics platform. Get real-time dashboards, predictive analytics, and automated reporting.",
      price: "$899/month",
      features: ["Real-time analytics", "Predictive modeling", "Automated insights", "Custom dashboards"],
      icon: "📊"
    },
    {
      title: "Quantum-Safe Cybersecurity Solutions",
      description: "Future-proof your security infrastructure with quantum-resistant encryption and advanced threat detection systems.",
      price: "$1,299/month",
      features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture", "24/7 monitoring"],
      icon: "🔒"
    },
    {
      title: "Autonomous Cloud Migration Platform",
      description: "Seamlessly migrate your infrastructure to the cloud with our AI-driven migration tools and automated optimization.",
      price: "$1,599/month",
      features: ["Automated migration", "Cost optimization", "Performance tuning", "Risk assessment"],
      icon: "☁️"
    },
    {
      title: "Blockchain Supply Chain Transparency",
      description: "Ensure complete transparency and traceability across your supply chain with our blockchain-based solution.",
      price: "$799/month",
      features: ["End-to-end tracking", "Smart contracts", "Quality assurance", "Compliance reporting"],
      icon: "⛓️"
    },
    {
      title: "IoT Predictive Maintenance System",
      description: "Reduce downtime and maintenance costs with AI-powered predictive analytics for your IoT devices and machinery.",
      price: "$599/month",
      features: ["Predictive analytics", "Real-time monitoring", "Automated alerts", "Maintenance scheduling"],
      icon: "🔧"
    },
    {
      title: "AI Customer Experience Optimization",
      description: "Enhance customer satisfaction with personalized experiences powered by advanced AI and machine learning.",
      price: "$699/month",
      features: ["Personalization engine", "Sentiment analysis", "Behavior prediction", "A/B testing"],
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="New AI & Technology Services - Zion Tech Group" 
        description="Discover our latest cutting-edge AI and technology services designed to transform your business operations and drive innovation." 
        keywords="AI services, technology solutions, business intelligence, cybersecurity, cloud migration, blockchain, IoT, customer experience"
        canonical="https://ziontechgroup.com/new-services"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary New Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
              Cutting-edge AI and technology solutions designed to transform your business and drive unprecedented growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold">
                🚀 Launch Special
              </span>
              <span className="px-6 py-3 bg-purple-500 text-white rounded-full font-semibold">
                💰 50% Off First Month
              </span>
              <span className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold">
                ⚡ Instant Setup
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Latest Technology Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the competition with our innovative services that leverage the latest in AI, quantum computing, and emerging technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-cyan-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                  <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Get started with our revolutionary services today and experience the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
                View All Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewServices;