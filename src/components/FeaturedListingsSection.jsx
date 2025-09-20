import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, ArrowRight } from 'lucide-react';

const FeaturedListingsSection = () => {
  const featuredServices = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with AI-driven product recommendations and personalized shopping experience",
      rating: 4.9,
      reviews: 127,
      price: 2500,
      duration: "2-3 weeks",
      image: "/images/ai-ecommerce.jpg"
    },
    {
      id: 2,
      title: "Advanced Analytics Dashboard",
      category: "Data Analytics",
      description: "Comprehensive business intelligence platform with real-time insights and predictive analytics",
      rating: 4.8,
      reviews: 89,
      price: 1800,
      duration: "1-2 weeks",
      image: "/images/analytics-dashboard.jpg"
    },
    {
      id: 3,
      title: "Cybersecurity Assessment Suite",
      category: "Security",
      description: "Complete security audit and protection implementation for enterprise-level businesses",
      rating: 4.9,
      reviews: 156,
      price: 3200,
      duration: "3-4 weeks",
      image: "/images/cybersecurity.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Featured Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our most popular and highly-rated AI solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-6xl">🤖</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                    <span className="text-sm text-gray-500">({service.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Team</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    ${service.price.toLocaleString()}
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedListingsSection;