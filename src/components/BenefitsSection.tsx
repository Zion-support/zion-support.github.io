        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with proven expertise to deliver exceptional results that drive your business forward
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-zion-blue">
                    {benefit.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-zion-blue transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Stats */}
                <div className="text-2xl font-bold text-zion-blue mb-4">
                  {benefit.stats}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-zion-blue/5 to-zion-purple/5 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {additionalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statsVariants}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-full flex items-center justify-center">
                <div className="text-zion-blue">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their businesses with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Get Started Today
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
=======
import React from 'react';
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react';

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-8 h-8" />,
  },
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-8 h-8" />,
  },
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />,
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-zion-slate-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Zion?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-zion-slate border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
