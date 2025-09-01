import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Check } from 'lucide-react';
import { allServices, contactInfo } from '../data/services';

const ServiceShowcase: React.FC = () => {
  // Get featured services (first 6)
  const featuredServices: any = allServices.slice(0, 6);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {' '}Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular and innovative technology solutions designed to accelerate your business growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-300 ml-1">4.9</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400 ml-1">/{service.period}</span>
                </div>
                <div className="text-xs text-cyan-400">
                  Market: {service.marketPrice}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Top Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-xs text-green-400">
                      <Check className="w-3 h-3 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="flex items-center justify-between">
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                  Learn More
                </button>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-300 mb-6">
            Ready to transform your business? Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              Call Now
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceShowcase;