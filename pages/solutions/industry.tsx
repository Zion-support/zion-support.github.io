<<<<<<< HEAD
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Shield, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Building, 
  Heart, 
  GraduationCap, 
  Factory, 
  Home, 
  CreditCard 
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Heart, 
  GraduationCap, 
  Landmark,
  Factory,
  Globe
>>>>>>> pr-11913
} from 'lucide-react';

const industries = [
  {
<<<<<<< HEAD
    name: 'Healthcare',
    icon: Heart,
    description: 'AI-powered healthcare solutions for better patient care',
    features: ['Patient data management', 'Medical imaging AI', 'Drug discovery', 'Telemedicine']
  },
  {
    name: 'Finance',
    icon: CreditCard,
    description: 'Secure financial technology and compliance solutions',
    features: ['Fraud detection', 'Risk management', 'Compliance automation', 'Digital banking']
  },
  {
    name: 'Education',
    icon: GraduationCap,
    description: 'Educational technology and learning management systems',
    features: ['Learning analytics', 'Personalized learning', 'Virtual classrooms', 'Assessment tools']
  },
  {
    name: 'Manufacturing',
    icon: Factory,
    description: 'Industrial automation and smart manufacturing solutions',
    features: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'IoT integration']
  },
  {
    name: 'Retail',
    icon: Home,
    description: 'E-commerce and retail technology solutions',
    features: ['Inventory management', 'Customer analytics', 'Personalization', 'Omnichannel experience']
  },
  {
    name: 'Government',
    icon: Building,
    description: 'Secure government and public sector solutions',
    features: ['Citizen services', 'Data security', 'Compliance', 'Digital transformation']
  }
];

export default function IndustrySolutionsPage() {
  return (
    <>
      <Head>
        <title>Industry Solutions - Zion Tech Group</title>
        <meta name="description" content="Industry-specific technology solutions for healthcare, finance, education, manufacturing, retail, and government sectors." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Industry Solutions</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Tailored technology solutions for specific industries. 
                From healthcare to finance, we understand your unique challenges.
=======
    title: 'Healthcare',
    description: 'Specialized solutions for healthcare organizations.',
    icon: Heart,
    features: ['HIPAA compliance', 'Patient data security', 'Telemedicine platforms', 'Electronic health records']
  },
  {
    title: 'Education',
    description: 'Technology solutions for educational institutions.',
    icon: GraduationCap,
    features: ['Learning management systems', 'Student information systems', 'Online assessment tools', 'Campus management']
  },
  {
    title: 'Government',
    description: 'Secure solutions for government agencies.',
    icon: Landmark,
    features: ['Security clearance', 'Compliance requirements', 'Citizen services', 'Data governance']
  },
  {
    title: 'Manufacturing',
    description: 'Industrial solutions for manufacturing companies.',
    icon: Factory,
    features: ['IoT integration', 'Supply chain management', 'Quality control systems', 'Predictive maintenance']
  },
  {
    title: 'Finance',
    description: 'Financial technology solutions.',
    icon: Building2,
    features: ['Regulatory compliance', 'Risk management', 'Payment processing', 'Fraud detection']
  },
  {
    title: 'Global',
    description: 'Solutions for international organizations.',
    icon: Globe,
    features: ['Multi-language support', 'Global deployment', 'Compliance across regions', '24/7 support']
  }
];

export default function Industry() {
  return (
    <Layout>
      <Head>
        <title>Industry Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized technology solutions for various industries including healthcare, education, government, and more." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industry Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Specialized technology solutions for various industries with deep domain expertise.
>>>>>>> pr-11913
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Industries Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our solutions are designed to meet the specific needs of different industries.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Industries We Serve
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => {
                  const IconComponent = industry.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                        <p className="text-gray-600">{industry.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {industry.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-gray-600">
                              • {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
>>>>>>> pr-11913
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Industry-Specific Solutions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our industry solutions can support your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Need Industry-Specific Solutions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team has deep expertise across multiple industries. Let us help you with specialized solutions.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                Discuss Your Industry Needs
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
>>>>>>> pr-11913
  );
}