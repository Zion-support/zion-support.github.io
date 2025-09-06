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
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">";
          <div className="container mx-auto px-4 text-center">";
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Let our cloud experts help you transform your infrastructure and unlock new possibilities.;
            </p>;
              Get Started Today;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion && motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
