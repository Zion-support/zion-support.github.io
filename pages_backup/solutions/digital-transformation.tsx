import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { RefreshCw, Target, Rocket, TrendingUp } from 'lucide-react';
import React from 'react';  const transformationServices = [;
    {}
      title: "Process Automation","
      description: "Streamline operations with intelligent automation","
      icon: RefreshCw,
      features: ["Workflow Automation", "Document Processing", "Task Optimization"]"
    },
    {}
      title: "Digital Strategy","
      description: "Comprehensive digital transformation roadmap","
      icon: Target,
      features: ["Strategic Planning", "Technology Assessment", "Change Management"]"
    },
    {}
      title: "Technology Integration","
      description: "Seamlessly integrate new technologies with existing systems","
      icon: Rocket,
      features: ["System Integration", "API Development", "Data Migration"]"
    },
    {}
      title: "Performance Optimization","
      description: "Enhance efficiency and drive measurable results","
      icon: TrendingUp,
      features: ["KPI Tracking", "Performance Analytics", "Continuous Improvement"]"
    }
;  ];
  return (
    <Layout)
      title="Digital Transformation - Zion Tech Group""
      description="Complete digital transformation solutions to modernize your business and drive innovation."">;
      <div className="min-h-screen bg-gray-50">";          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              </p>;
            </motion.div>;
          </div>;
        </section>;              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6>
                Digital{' }

                <span className=bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Transformation;
                </span>
              </h1>"
              <p className=text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto>
                Transform your business with cutting-edge technology solutions. From AI implementation to cloud migration, we help you stay ahead of the competition.
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <Link href="/contact" className=px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold>
                  Start Your Transformation;
                </Link>"
                <Link href="/case-studies className=px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies;
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
:pages/solutions/digital-transformation.tsx
              className="text-center";
            >;
              <h1 className=text-4xl md:text-6xl font-bold mb-6>;
                Digital{ '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
                  Transformation;
                </span>;
              </h1>;
              <p className=text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto>;
                Transform your business with cutting-edge technology solutions. From AI implementation to cloud migration, we help you stay ahead of the competition.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link href=/contact className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">;
                  Start Your Transformation;
                </Link>;
                <Link href=/case-studies className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">;
                  View Case Studies;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
:pages/solutions/digital-transformation && transformation.tsx;
        {/* Transformation Process */}
        <section className=py-20 bg-white>;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className=text-center mb-16
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                return (
                  <motion&& motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 text-center"        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {transformationServices.map((service, index) => {}
                const IconComponent = service.icon;
                return (;
                  <motion.div);
        <section className="py-20">";
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">",;
              {transformationServices && transformationServices.map((service, index) => {}
                const IconComponent = service && service.icon;
                return (
                  <motion&& motion.div)                    <div className="text-purple-600 mb-4">";
                      <IconComponent className="w-10 h-10" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";
                      {service.title}
                    </h3>,
                    <p className="text-gray-600 mb-4">";
                      {service.description}
                    </p>,
                    <ul className="space-y-2">";
                      {service.features.map((feature, featureIndex) => (,
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          {feature}
                        </li>,
                      ))}
                    </ul>,
                  </motion.div>;
                );
              })}
            </div>,
          </div>;
        </section>;
            </div>
          </div>
        </section>
:pages/solutions/digital-transformation.tsx

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transformation Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See the measurable impact of digital transformation on your business performance.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We have experience transforming businesses across various industries with tailored solutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </motion.div>
                );
              })}            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Ready to transform your business? Let our experts guide you through your digital transformation journey.;
            </p>;
            <motion.a;
              href="/contact"";
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
              whileHover={{ scale: 1.05 }}
            >,
              Begin Transformation;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
}'"