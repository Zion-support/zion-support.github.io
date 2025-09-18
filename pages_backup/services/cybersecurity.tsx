import React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Eye, Shield, Lock, AlertTriangle } from 'lucide-react';
export default function CybersecurityPage() {
  const securityServices = [;
    {}
      title: "Security Assessment","
      description: "Comprehensive security evaluation of your systems","
      icon: Eye,
      features: ["Vulnerability Scanning", "Penetration Testing", "Risk Analysis"]"
    },
    {}
      title: "Threat Protection","
      description: "Advanced threat detection and prevention systems","
      icon: Shield,
      features: ["Real-time Monitoring", "AI-Powered Detection", "Incident Response"]"
    },
    {}
      title: "Data Encryption","
      description: "End-to-end encryption for sensitive data","
      icon: Lock,
      features: ["Data at Rest", "Data in Transit", "Key Management"]"
    },
    {}
      title: "Compliance","
      description: "Ensure compliance with industry standards","
      icon: AlertTriangle,
      features: ["GDPR", "HIPAA", "SOC 2", "ISO 27001"]"
    }
;  ];
  return (;
    <Layout );
      title="Cybersecurity Services - Zion Tech Group"";
      description="Advanced cybersecurity solutions to protect your business from evolving threats and ensure compliance."";
    >;
      <div className="min-h-screen bg-gray-50">";
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white py-20">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Cybersecurity Services;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Protect your business with our comprehensive cybersecurity solutions. 
                Stay ahead of threats with advanced security measures and expert support.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {securityServices.map((service, index) => {}
                const IconComponent = service.icon;
                return (;
                  <motion.div);
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >,
                    <div className="text-red-600 mb-4">";
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
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Secure Your Business Today;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Don't wait for a security breach. Let our experts help you build a robust security framework.';
            </p>;
            <motion.a;
              href="/contact"";
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
              whileHover={{ scale: 1.05 }}
            >,
              Get Security Assessment;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
import Layout from '../../components/Layout';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
const features = [
  {
    icon: Shield,
    title: 'Security Assessment',
    description: 'Comprehensive security audits and vulnerability assessments'
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Advanced encryption and data protection solutions'
  },
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, Shield, Lock, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const securityServices = [
  {
    icon: Eye,
    title: 'Threat Monitoring',
    description: '24/7 security monitoring and threat detection'
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Rapid response to security incidents and breaches'
  },
  {
    icon: CheckCircle,
    title: 'Compliance',
    description: 'GDPR, HIPAA, SOX, and other regulatory compliance'
  },
  {
    icon: ArrowRight,
    title: 'Security Training',
    description: 'Employee security awareness and training programs'
  }
];
const benefits = [
  'Protection against cyber threats and attacks',
  'Compliance with industry regulations',
  'Reduced risk of data breaches',
  'Enhanced customer trust and confidence',
  'Lower insurance costs and liability',
  'Peace of mind with 24/7 monitoring'
];
export default function CybersecurityServices() {

export default function CybersecurityPage() {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">cybersecurity</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default cybersecurity;
