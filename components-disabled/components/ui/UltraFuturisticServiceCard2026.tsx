  marketPrice?: string;
  competitors?: string[];
  targetMarket?: string;
  useCases?: string[];
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full shadow-lg"
          >
            <Star className="w-4 h-4 inline mr-1" />
            Popular
          </motion.div>
        )}
        {/* Enhanced Market Information */}
        {service.marketPrice && (
          <div className="border-t border-white/10 pt-4 mb-6 space-y-3 relative z-10">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Market Price:</span>
              <span className="text-green-400 font-semibold">{service.marketPrice}</span>
            </div>
        {/* Target Market & Use Cases */}
        {service.targetMarket && (
          <div className="border-t border-white/10 pt-4 mb-6 space-y-3 relative z-10">
            <div className="text-xs">
              <div className="text-gray-400 mb-2">Target Market:</div>
              <div className="text-gray-300">{service.targetMarket}</div>
            </div>
        {/* Benefits Section */}
        {service.benefits && (
          <div className="border-t border-white/10 pt-4 mb-6 relative z-10">
            <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
              Key Benefits
            </h4>
            <div className="space-y-2">
              {service.benefits.slice(0, 3).map((benefit, idx) => (
                <div key={idx} className="text-xs text-gray-400 flex items-start space-x-2">
                  <Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* CTA Button */}
        <div className="relative z-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r ${styles.gradient} text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-${styles.textColor}/25 border border-white/20 hover:border-white/40`}
          >
            Get Started
          </motion.button>
        </div>
