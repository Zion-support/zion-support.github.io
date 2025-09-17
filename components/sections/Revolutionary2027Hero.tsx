        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.08),transparent_50%)]"></div>
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
          }}
        >
          <item.icon className="w-8 h-8" />
        </motion.div>
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future
              </span>
              <br />
              <span className="text-white">is Now</span>
            </h1>
            <div className="flex items-center justify-center space-x-4 text-2xl md:text-3xl text-gray-300">
              <span>2027</span>
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
              <span>Revolutionary</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              <span>Technology</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Space Tech</h3>
              <p className="text-gray-300 text-sm">Autonomous mining and debris management</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TestTube className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Biotech</h3>
              <p className="text-gray-300 text-sm">DNA computing and molecular biology</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="https://ziontechgroup.com/services"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span>Explore Services</span>
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400 text-sm">Revolutionary Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$50T+</div>
              <div className="text-gray-400 text-sm">Total Market Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-400 text-sm">Global Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

        }}
      >
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2"
            animate={{
        ))}
      </div>
    </section>
  );
