        {/* Stats Section */}
        <section className="py-16 bg-white">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">";
              {stats.map((stat, index) => (,
                <motion.div}),
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center""
                >;
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>"
                  <div className="text-gray-600 font-medium">{stat.label}</div>"
                </motion.div>;
              ))}

        {/* Features Section */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-8""
                >;
                  <div className="flex items-center mb-6">";
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">";
                      <feature.icon className="w-8 h-8 text-white" />";
                    </div>;
                    <div>;
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>"
                      <p className="text-gray-600">{feature.description}</p>"
                    </div>;
                  </div>;

                  <ul className="space-y-3">";
                    {feature.benefits.map((benefit, benefitIndex) => (,
                      <li key={benefitIndex} className="flex items-center text-gray-600">"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />";
                        {benefit}
                      </li>,
                    ))}
                  </ul>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* Capabilities Section */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
