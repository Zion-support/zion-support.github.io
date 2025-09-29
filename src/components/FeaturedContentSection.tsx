import React from "react";
import { motion } from "framer-motion";

const FeaturedContentSection: React.FC = () => {
  const features = [
    {
      title: "Advanced Analytics",
      description: "Get insights with our powerful analytics dashboard.",
      icon: "📊",
    },
    {
      title: "Secure Platform",
      description: "Enterprise-grade security for your peace of mind.",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-900 mb-16"
        >
          Featured Content
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContentSection;
