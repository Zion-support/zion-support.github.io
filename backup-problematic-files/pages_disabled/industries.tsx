
;
const industries = [;
  {title: 'Healthcare',icon: Heart,}
];
const technologies = [;
  { name: 'AI & Machine Learning', icon: Brain, description: 'Advanced AI solutions for every industry' },{ name: 'Cloud Infrastructure', icon: Cloud, description: 'Scalable and secure cloud solutions' },{ name: 'Cybersecurity', icon: Shield, description: 'Enterprise-grade security solutions' },{ name: 'Data Analytics', icon: BarChart3, description: 'Insights-driven decision making' },{ name: 'IoT & Edge Computing', icon: Network, description: 'Connected and intelligent systems' },{ name: 'Blockchain', icon: Globe, description: 'Secure and transparent solutions' }
];
export default function IndustriesPage() {return (<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">";
            {industries.map((industry, index) => {}
              const IconComponent = industry.icon;
              return (<motion.div)key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"";
          >;
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">;
              Industries We Serve;
            </h2>;
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">;
              We understand the unique challenges and opportunities in each industry. Our solutions are designed to address specific sector needs while driving innovation and growth.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">;
            {industries.map((industry, index) => {const IconComponent = industry.icon;
              return (<motion.div;
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group";
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >,<div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>,<IconComponent className="w-8 h-8 text-white" />";
                  </div>;<h3 className="text-2xl font-bold text-gray-900 mb-4">";
                    {industry.title}
                  </h3>,<p className="text-gray-600 mb-6 leading-relaxed">";
                    {industry.description}
                  </p>,<div className="mb-6">";
                    <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>";
                    <ul className="space-y-2">";
                      {industry.services.map((service, serviceIndex) => (,<li key={serviceIndex} className="flex items-center text-sm text-gray-600">";
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />";
                          {service}
                        </li>,))}
                    </ul>,</div>;<div className="mb-6">";
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>";
                    <ul className="space-y-2">";
                      {industry.benefits.map((benefit, benefitIndex) => (,<li key={benefitIndex} className="flex items-center text-sm text-gray-600">";
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />";
                          {benefit}
                        </li>,))}
                    </ul>,</div>;<div className="mb-6 p-4 bg-gray-50 rounded-lg">";
                    <p className="text-sm text-gray-600 italic">";
                      <strong>Case Study:</strong> {industry.caseStudy}
                    </p>,</div>;<div className="flex items-center justify-between">";
                    <span className="text-lg font-semibold text-blue-600">{industry.pricing}</span>";
                    <Link;
                      href="/contact"";
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"";
                    >;
                      <span>Learn More</span>;
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />";
                    </Link>;
                  </div>;
                </motion.div>;
              )})}
          </div>,</div>;
      </section>;{/* Technologies Section */}
      <section className="py-20 bg-white">";
        <div className="container mx-auto px-4">";
          <motion.div;
            className="text-center mb-16"";
                >;
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>;
                    <IconComponent className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">;
                    {industry.title}
                  </h3>;
                  <p className="text-gray-600 mb-6 leading-relaxed">;
                    {industry.description}
                  </p>;
                  <div className="mb-6">;
                    <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>;
                    <ul className="space-y-2">;
                      {industry.services.map((service, serviceIndex) => (<li key={serviceIndex} className="flex items-center text-sm text-gray-600">;
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                          {service}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  <div className="mb-6">;
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>;
                    <ul className="space-y-2">;
                      {industry.benefits.map((benefit, benefitIndex) => (<li key={benefitIndex} className="flex items-center text-sm text-gray-600">;
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />;
                          {benefit}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">;
                    <p className="text-sm text-gray-600 italic">;
                      <strong>Case Study:</strong> {industry.caseStudy}
                    </p>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-lg font-semibold text-blue-600">{industry.pricing}</span>;
                    <Link;
                      href="/contact";
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group";
                    >;
                      <span>Learn More</span>;
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />;
                    </Link>;
                  </div>;
                </motion.div>;
              )})}
          </div>;
        </div>;
      </section>;
      {/* Technologies Section */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >,<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">";
              Technologies We Use;
            </h2>;
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">";
              We leverage cutting-edge technologies to deliver innovative solutions across all industries.;
            </p>;
          </motion.div>;<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
            {technologies.map((tech, index) => {}
              const IconComponent = tech.icon;
              return (<motion.div)key={index}
                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"";
          >;
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">;
              Technologies We Use;
            </h2>;
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
              We leverage cutting-edge technologies to deliver innovative solutions across all industries.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {technologies.map((tech, index) => {const IconComponent = tech.icon;
              return (<motion.div;
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors";
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >,<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <IconComponent className="w-8 h-8 text-blue-600" />";
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-2">";
                    {tech.name}
                  </h3>,<p className="text-gray-600">";
                    {tech.description}
                  </p>,</motion.div>;
              )})}
          </div>,</div>;
      </section>;{/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">";
        <div className="container mx-auto px-4 text-center">";
          <motion.div;
                >;
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <IconComponent className="w-8 h-8 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-2">;
                    {tech.name}
                  </h3>;
                  <p className="text-gray-600">;
                    {tech.description}
                  </p>;
                </motion.div>;
              )})}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >,<h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Ready to Transform Your Industry?;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Let our industry experts help you implement the right technology solutions for your specific sector.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                Get Industry Consultation;
              </Link>;
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">";
                Learn About Our Expertise;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
          >;
            <h2 className="text-3xl md:text-4xl font-bold mb-6">;
              Ready to Transform Your Industry?;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">;
              Let our industry experts help you implement the right technology solutions for your specific sector.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">;
                Get Industry Consultation;
              </Link>;
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">;
                Learn About Our Expertise;
              </Link>;
            </div>;
  )}