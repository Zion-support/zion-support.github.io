import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Cloud, Shield, Database, Cpu, Users, Globe } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions to automate processes and gain insights from your data.',
      icon: Cpu,
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems']
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      icon: Cloud,
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud Platform', 'Hybrid Cloud']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      icon: Database,
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Data Warehousing']
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business processes with cutting-edge technology solutions.',
      icon: Globe,
      features: ['Process Automation', 'Legacy System Modernization', 'API Development', 'Integration Services']
    },
    {
      title: 'Consulting',
      description: 'Expert guidance to help you make informed technology decisions.',
      icon: Users,
      features: ['Technology Strategy', 'Architecture Design', 'Project Management', 'Training & Support']
    }
  ];

  const benefits = [
    '24/7 Technical Support',
    'Scalable Solutions',
    'Industry Expertise',
    'Cost-Effective Pricing',
    'Rapid Deployment',
    'Ongoing Maintenance'
  ];

  return (
    <Layout title="Services - Zion Tech Group">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive technology solutions to drive your business forward. 
                From AI and cloud services to cybersecurity and digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Us
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We deliver exceptional value through our expertise, innovation, and commitment to your success.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}