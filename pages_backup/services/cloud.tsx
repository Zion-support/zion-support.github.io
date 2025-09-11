

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Cloud, Server, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Cloud, Server, Shield, Zap } from 'lucide-react';
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Cloud, Server, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Cloud, Server, Shield, Zap } from 'lucide-react';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const cloudServices = [
  {
    title: "Cloud Migration",
    description: "Seamless migration of your infrastructure to the cloud",
    icon: Cloud,
    features: ["Zero-downtime migration", "Cost optimization", "Performance improvement", "Scalability"],
    pricing: "$5,000 - $25,000/project"
  },
  {
    title: "Cloud Infrastructure",
    description: "Design and implement scalable cloud infrastructure",
    icon: Server,
    features: ["Auto-scaling", "Load balancing", "High availability", "Disaster recovery"],
    pricing: "$2,000 - $10,000/month"
  },
  {
    title: "Database Services",
    description: "Managed database services with high availability",
    icon: Database,
    features: ["Managed databases", "Backup & recovery", "Performance tuning", "Security"],
    pricing: "$1,000 - $5,000/month"
  },
  {
    title: "Cloud Security",
    description: "Comprehensive security solutions for cloud environments",
    icon: Shield,
    features: ["Security audits", "Compliance", "Access control", "Monitoring"],
    pricing: "$1,500 - $8,000/month"
  },
  {
    title: "DevOps Automation",
    description: "Automated deployment and infrastructure management",
    icon: Zap,
    features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring", "Alerting"],
    pricing: "$2,500 - $12,000/month"
  }
];

export default function CloudServicesPage() {
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function CloudServicesPage() {
  const cloudServices = [;
    {}
      title: "Cloud Migration","
      description: "Seamless migration of your infrastructure to the cloud","
      icon: Cloud,
      features: ["Zero Downtime", "Data Integrity", "Cost Optimization"]"
    },
    {}
      title: "Cloud Infrastructure","
      description: "Scalable and secure cloud infrastructure setup","
      icon: Server,
      features: ["Auto Scaling", "High Availability", "Disaster Recovery"]"
    },
    {}
      title: "Cloud Security","
      description: "Comprehensive security solutions for cloud environments","
      icon: Shield,
      features: ["Identity Management", "Data Encryption", "Compliance"]"
    },
    {}
      title: "Cloud Optimization","
      description: "Performance and cost optimization for cloud resources","
      icon: Zap,
      features: ["Cost Analysis", "Performance Tuning", "Resource Management"]"
    }
;  ];
  return (;
    <Layout );
      title="Cloud Solutions - Zion Tech Group"";
      description="Comprehensive cloud solutions including migration, infrastructure, security, and optimization services.""
    >;
      <div className="min-h-screen bg-gray-50">";
  ];


ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
  return (
    <Layout
      title="Cloud Solutions - Zion Tech Group"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  

  
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">"
          <div className="container mx-auto px-4">";
            <motion.div;
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
            </motion.div>;
          </div>;
        </section>;

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.pricing}</div>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our cloud services can transform your business infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Ready to Move to the Cloud?;
=======


=======        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";

            <h2 className="text-3xl md: text-4xl font-bold mb-6">", Ready to Move to the Cloud?,;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
            </motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
}