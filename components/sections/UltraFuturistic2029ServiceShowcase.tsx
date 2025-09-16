  services: Service[];
  title?: string;
  subtitle?: string;
  maxServices?: number;
  'AI & Consciousness': Brain,
  'Quantum & Neuroscience': Cpu,
  'Space Colonization': Rocket,
  'Space Mining': Zap,
  'Space Architecture': Globe,
  'Space Energy': Sparkles,
  'AI & Business': Database,
  'Quantum & Time': Timer,
    .sort((a, b) => {
      switch (sortBy) {
        case 'innovation':
          // Default to 'Advanced' if innovationLevel is not available
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6"
          >
          >
            {subtitle}
          </motion.p>
        </motion.div>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-300 text-sm font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500"
            >
              <option value="innovation">Innovation Level</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </motion.div>
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
            >
              <UltraFuturisticServiceCard
                service={service}
                className="h-full transform group-hover:shadow-xl hover:shadow-cyan-500/30 transition-transform duration-300"
            </motion.div>
          ))}
        </motion.div>

                className="px-8 py-4 bg-gray-900/50 text-white rounded-xl hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50 transition-all duration-200 text-lg font-semibold"
              >
                View Pricing
              </a>
            </div>
          </div>
        </motion.div>

        {/* Innovation Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
