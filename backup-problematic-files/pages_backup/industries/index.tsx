        <section className="py-20 bg-white">"
        <section className="py-20 bg-white">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              className="text-center mb-16""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Our Industry Solutions?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We combine deep industry knowledge with cutting-edge technology to deliver solutions that truly understand your business.
              </p>
            </motion.div>

            >,
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">";
                Why Choose Our Industry Solutions?;
              </h2>;
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">";
                We combine deep industry knowledge with cutting-edge technology to deliver solutions that truly understand your business.;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}

              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
                <p className="text-gray-600">

              >,
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <Users className="w-8 h-8 text-blue-600" />";
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>";
                <p className="text-gray-600">";
                  Our team includes specialists with deep experience in each industry we serve, 
                  ensuring solutions that address real-world challenges.
                </p>
              </motion.div>

              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Security</h3>
                <p className="text-gray-600">

              >,
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <Shield className="w-8 h-8 text-green-600" />";
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Security</h3>";
                <p className="text-gray-600">";
                  We ensure all solutions meet industry-specific regulatory requirements and;
                  maintain the highest security standards.;
                </p>;
              </motion.div>;

              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}

              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cloud className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>
                <p className="text-gray-600">

              >,
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <Cloud className="w-8 h-8 text-purple-600" />";
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>";
                <p className="text-gray-600">";
                  Our solutions are designed to grow with your business, from startup to enterprise scale, 
                  with flexible deployment options.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"

        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">";
              {stats.map((stat, index) => (,
                <motion.div}),
                  key={index}
                  className="text-center""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div

                >,
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">";
                    {stat.number}
                  </div>,
                  <div className="text-gray-600 font-medium">{stat.label}</div>"
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* CTA Section */}

};

export default Index;
