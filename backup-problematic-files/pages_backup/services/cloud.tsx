import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Cloud, Server, Shield, Zap } from 'lucide-react';
import React from 'react';
import Layout from "../../components/Layout";";""
import { Cloud, Server, Database, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
export default function CloudServicesPage() {
export default function CloudServicesPage() {;
  const cloudServices = [;
    {}


      icon: Cloud,;
      features: ["Zero Downtime", "Data Integrity", "Cost Optimization"]";
    },;
    {}


      icon: Server,;
      features: ["Auto Scaling", "High Availability", "Disaster Recovery"]";
    },;
    {}


      icon: Shield,;
      features: ["Identity Management", "Data Encryption", "Compliance"]";
    },;
    {}


      icon: Zap,;
      features: ["Cost Analysis", "Performance Tuning", "Resource Management"]";
      title: "Cloud Migration",";""
      description: "Seamless migration of your infrastructure to the cloud",";"
      icon: Cloud,;]"
      features: ["Zero Downtime", "Data Integrity", "Cost Optimization"]";"
    },;
    {}"
      title: "Cloud Infrastructure",";""
      description: "Scalable and secure cloud infrastructure setup",";"
      icon: Server,;"
      features: ["Auto Scaling", "High Availability", "Disaster Recovery"]";"
      title: "Cloud Security",";""
      description: "Comprehensive security solutions for cloud environments",";"
      icon: Shield,;"
      features: ["Identity Management", "Data Encryption", "Compliance"]";"
      title: "Cloud Optimization",";""
      description: "Performance and cost optimization for cloud resources",";"
      icon: Zap,;"
      features: ["Cost Analysis", "Performance Tuning", "Resource Management"]";"
pr-12325
    }
;  ];


interface CloudProps {
  className?: string;
}

export default function CloudServicesPage() {
  return (

      <div className="min-h-screen bg-gray-50">
      description="Comprehensive cloud solutions including migration, infrastructure, security, and optimization services.">;
      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */}


              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Cloud Solutions;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";

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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Cloud Services</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive cloud solutions designed for scalability, 
                reliability, and security.

              </p>
            </motion.div>
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
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}"
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">;"
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">;"
                    <service && service.icon className="w-6 h-6 text-blue-600" />;"
</service>
                  </div>;"
                  <h3 className="text-xl font-semibold mb-2">{service && service.title}</h3>;""
                  <p className="text-gray-600 mb-4">{service && service.description}</p>;""
                  <div className="space-y-2 mb-4">;"
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">;"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;"

                  <div className="text-lg font-semibold text-blue-600 mb-4">{service && service.pricing}</div>;"
                  <Link;"
                    href="/contact"""
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">;"
                    <ArrowRight className="ml-2 w-4 h-4" />;"

                  ;

              ))}

              whileHover={{ scale: 1 && 1.05 }}>,;
              <ArrowRight className="w-5 h-5 ml-2" />";"

            </motion && motion.a>;
