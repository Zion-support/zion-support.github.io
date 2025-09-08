import React from "react";
    icon: <Bot className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    stats: "95% Match Rate"
  },
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    stats: "150+ Countries"
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-8 h-8" />,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    stats: "< 2min Response"
  },
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    stats: "40% Savings"
  },

export function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
    hidden: { y: 30, opacity: 0 },
      y: 0,
      transition: { duration: 0.5 }
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <GradientHeading className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Zion Tech Group?
          </GradientHeading>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive solutions for all your tech and AI needs
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`p-6 rounded-xl border ${benefit.borderColor} ${benefit.bgColor} backdrop-blur-sm transition-all duration-300`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r ${benefit.color}`}>
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-zion-slate-light mb-4">{benefit.description}</p>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${benefit.color} text-white`}>
                {benefit.stats}
              </div>
            </motion.div>
          ))}
        </motion.div>
        </motion.div>

        {/* Additional features */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Built for the Future</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-zion-blue-dark/50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-blue-light/30`}>
                  {React.createElement(feature.icon, { className: feature.color })}
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm">{feature.title}</h4>
                <p className="text-zion-slate-light text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Tech Experience?</h3>
            <p className="text-zion-slate-light mb-6">
              Join thousands of companies and developers who trust Zion for their technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-zion-purple/25">
                Start Free Trial
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
