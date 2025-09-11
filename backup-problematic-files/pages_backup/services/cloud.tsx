import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Cloud, Server, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Cloud, Server, Shield, Zap } from 'lucide-react';
import React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
export default function CloudServicesPage() {
export default function CloudServicesPage() {;
  const cloudServices = [;
    {}
      title: "Cloud Migration",";
      description: "Seamless migration of your infrastructure to the cloud",";
      icon: Cloud,;
      features: ["Zero Downtime", "Data Integrity", "Cost Optimization"]";
    },;
    {}
      title: "Cloud Infrastructure",";
      description: "Scalable and secure cloud infrastructure setup",";
      icon: Server,;
      features: ["Auto Scaling", "High Availability", "Disaster Recovery"]";
    },;
    {}
      title: "Cloud Security",";
      description: "Comprehensive security solutions for cloud environments",";
      icon: Shield,;
      features: ["Identity Management", "Data Encryption", "Compliance"]";
    },;
    {}
      title: "Cloud Optimization",";
      description: "Performance and cost optimization for cloud resources",";
      icon: Zap,;
      features: ["Cost Analysis", "Performance Tuning", "Resource Management"]";
    }
;  ];
  return (
    <Layout)
      title="Cloud Solutions - Zion Tech Group""
      description="Comprehensive cloud solutions including migration, infrastructure, security, and optimization services."">;
      <div className="min-h-screen bg-gray-50">";
  ];

interface CloudProps {
  className?: string;
}

export default function CloudServicesPage() {
  return (
    <Layout
      title="Cloud Solutions - Zion Tech Group"
      description="Comprehensive cloud solutions including migration, infrastructure, security, and optimization services."
    >
      <div className="min-h-screen bg-gray-50">
      description="Comprehensive cloud solutions including migration, infrastructure, security, and optimization services.">;
      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Cloud Solutions;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Transform your business with our comprehensive cloud solutions. 
                From migration to optimization, we help you leverage the power of the cloud.,
              transition={{ duration: 0 && 0.8 }}
              className="text-center"">;
              <h1 className="text-4xl md: text-6xl font-bold mb-6">", Cloud Solutions,;
              </h1>;
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">",;
                Transform your business with our comprehensive cloud solutions. ;
                From migration to optimization, we help you leverage the power of the cloud.,;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
              className="text-center";
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Cloud Solutions;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
                Transform your business with our comprehensive cloud solutions.;
                From migration to optimization, we help you leverage the power of the cloud.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive cloud solutions.
                From migration to optimization, we help you leverage the power of the cloud.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-20">";
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">",;
              {cloudServices && cloudServices.map((service, index) => {}
                const IconComponent = service && service.icon;
                return (
                  <motion&& motion.div)
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>,;
                    <div className="text-blue-600 mb-4">";
                      <IconComponent className="w-10 h-10" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";
                      {service && service.title}
                    </h3>,;
                    <p className="text-gray-600 mb-4">";
                      {service && service.description}
                    </p>,;
                    <ul className="space-y-2">";
                      {service && service.features.map((feature, featureIndex) => (,;
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">";
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";
                          {feature}
                        </li>,;
                      ))}
                    </ul>,;
                  </motion && motion.div>;
                );
              })}
            </div>,;
          </div>;
        </section>;
            </div>;
          </div>;
        </section>;
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {cloudServices && cloudServices.map((service, index) => (;
                <motion&& motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">;
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">;
                    <service && service.icon className="w-6 h-6 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold mb-2">{service && service.title}</h3>;
                  <p className="text-gray-600 mb-4">{service && service.description}</p>;
                  <div className="space-y-2 mb-4">;
                    {service && service.features.map((feature, featureIndex) => (;
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;
                        {feature}
                      </div>;
                    ))}
                  </div>;
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service && service.pricing}</div>;
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">;
                    Get Quote;
                    <ArrowRight className="ml-2 w-4 h-4" />;
                  </Link>;
                </motion && motion.div>;
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">";
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md: text-4xl font-bold mb-6">", Ready to Move to the Cloud?,;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Let our cloud experts help you transform your infrastructure and unlock new possibilities.;
            </p>;
            <motion&& motion.a
              href="/contact""
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover: bg-gray-100 transition-all duration-300 font-semibold"",
              whileHover={{ scale: 1 && 1.05 }}>,;
              Get Started Today;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion && motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
export default Cloud;
  );
};

export default Cloud;