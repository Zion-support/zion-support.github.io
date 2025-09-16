  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
interface UltraFuturisticServiceShowcase2029Props {
  services: Service[];
  title?: string;
  subtitle?: string;
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-sm text-cyan-400 font-medium">NEW</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-300">5.0</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <Shield className="w-4 h-4 text-green-400" />
                  <Brain className="w-4 h-4 text-purple-400" />
                </div>
              </div>

              <Link
                href={service.link}
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          >
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
