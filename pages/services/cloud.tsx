import React from 'react';
import Layout from "../components/Layout";
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export default function CloudServicesPage() {
  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamless migration of your infrastructure to the cloud",
      icon: Cloud,
      features: ["Zero Downtime", "Data Integrity", "Cost Optimization"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure setup",
      icon: Server,
      features: ["Auto Scaling", "High Availability", "Disaster Recovery"]
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions for cloud environments",
      icon: Shield,
      features: ["Identity Management", "Data Encryption", "Compliance"]
    },
    {
      title: "Cloud Optimization",
      description: "Performance and cost optimization for cloud resources",
      icon: Zap,
      features: ["Cost Analysis", "Performance Tuning", "Resource Management"]
    }
  ];

  return (
    <Layout 
      title="Cloud Solutions - Zion Tech Group"
      description="Comprehensive cloud solutions including migration, infrastructure, security, and optimization services."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive cloud solutions. 
                From migration to optimization, we help you leverage the power of the cloud.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our cloud experts help you transform your infrastructure and unlock new possibilities.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </section>
      </div>
    </Layout>
  );
}