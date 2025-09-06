import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { DollarSign, Zap, Users, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { DollarSign, Zap, Users, Building2 } from 'lucide-react';
import React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import { Building2, Users, DollarSign, Zap, CheckCircle, ArrowRight } from 'lucide-react';
export default function SMBSolutionsPage() {;
  const smbServices = [;
    {}
      title: "Cost-Effective IT",";
      description: "Affordable technology solutions for small and medium businesses",";
      icon: DollarSign,;
      features: ["Budget-Friendly", "Scalable Solutions", "ROI Focused"]";
    },;
    {}
      title: "Quick Setup",";
      description: "Rapid deployment of essential business systems",";
      icon: Zap,;
      features: ["Fast Implementation", "Minimal Downtime", "Easy Migration"]";
    },;
    {}
      title: "Team Collaboration",";
      description: "Tools and systems to enhance team productivity",";
      icon: Users,;
      features: ["Communication Tools", "Project Management", "File Sharing"]";
    },;
    {}
      title: "Business Growth",";
      description: "Technology solutions that grow with your business",";
      icon: Building2,;
      features: ["Scalable Infrastructure", "Future-Proof", "Growth Support"]";
    }
;  ];
  return (
    <Layout)
      title="SMB Solutions - Zion Tech Group""
      description="Tailored technology solutions for small and medium businesses to drive growth and efficiency."">;
      <div className="min-h-screen bg-gray-50">";
  ];
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  DollarSign, 
  Zap, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

interface SmbProps {
  className?: string;
}

export default function SMBSolutionsPage() {
  return (
    <Layout
      title="SMB Solutions - Zion Tech Group"
      description="Tailored technology solutions for small and medium businesses to drive growth and efficiency."
    >
      <div className="min-h-screen bg-gray-50">
      description="Tailored technology solutions for small and medium businesses to drive growth and efficiency.">;
      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                SMB Solutions;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Technology solutions designed specifically for small and medium businesses. 
              transition={{ duration: 0 && 0.8 }}
              className="text-center"">;
              <h1 className="text-4xl md: text-6xl font-bold mb-6">", SMB Solutions,;
              </h1>;
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">",;
                Technology solutions designed specifically for small and medium businesses. ;
                Get enterprise-level capabilities at SMB-friendly prices.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
              className="text-center";
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                SMB Solutions;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
                Technology solutions designed specifically for small and medium businesses.;
                Get enterprise-level capabilities at SMB-friendly prices.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                SMB Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Technology solutions designed specifically for small and medium businesses.
                Get enterprise-level capabilities at SMB-friendly prices.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-20">";
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">",;
              {smbServices && smbServices.map((service, index) => {}
                const IconComponent = service && service.icon;
                return (
                  <motion&& motion.div)
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>,;
                    <div className="text-orange-600 mb-4">";
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

        {/* Services Section */}
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-12">;
              <h2 className="text-3xl md:text-4xl font-bold mb-4">SMB Services</h2>;
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
                Affordable technology solutions that grow with your business.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {smbServices && smbServices.map((service, index) => (;
                <motion&& motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">;
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">;
                    <service && service.icon className="w-6 h-6 text-purple-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold mb-2">{service && service.title}</h3>;
                  <p className="text-gray-600">{service && service.description}</p>;
                </motion && motion.div>;
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">";
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md: text-4xl font-bold mb-6">", Grow Your Business Today,;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Ready to take your SMB to the next level? Let our experts help you choose the right technology solutions.;
            </p>;
            <motion&& motion.a
              href="/contact""
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg hover: bg-gray-100 transition-all duration-300 font-semibold"",
              whileHover={{ scale: 1 && 1.05 }}>,;
              Get SMB Consultation;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion && motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
<<<<<<< HEAD
  );
};

export default Smb;
=======
<<<<<<< HEAD
  );
};

export default Smb;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
