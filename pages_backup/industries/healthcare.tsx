import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Heart, Brain, Shield, Users, BarChart3, CheckCircle, ArrowRight, Phone, Mail, Calendar, Stethoscope, Activity, Database, Camera, FileText } from 'lucide-react';
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Heart, 
  Brain, 
  Shield, 
  Users, 
  BarChart3, import {
  Heart,
  Brain,
  Shield,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Stethoscope,
  Activity,
  Database,
  Camera,
  FileText;
} from 'lucide-react';
import Layout from '../../components/Layout';';
const services = [;
  {}
    title: 'AI-Powered Medical Diagnostics,',
    description: 'Advanced machine learning algorithms for accurate disease detection and diagnosis.,',];
=======

const solutions = [
  {
    title: 'AI-Powered Medical Imaging',
    description: 'Advanced AI algorithms for medical image analysis and diagnosis support',
    icon: Camera,
    features: ['Image Analysis', 'Diagnosis Support', 'Pattern Recognition', 'Report Generation']
  },
  {
    title: 'Electronic Health Records',
    description: 'Comprehensive EHR system with AI-powered features for better patient care',
    icon: FileText,
    features: ['Patient Records', 'Medical History', 'Treatment Plans', 'Data Analytics']
  },
  {
    title: 'Telemedicine Platform',
    description: 'Secure telemedicine platform for remote patient consultations',
    icon: Phone,
    features: ['Video Consultations', 'Remote Monitoring', 'Prescription Management', 'Appointment Scheduling']
  },
  {
    title: 'Health Analytics Dashboard',
    description: 'AI-powered analytics platform for healthcare insights and decision making',
    icon: BarChart3,
    features: ['Patient Analytics', 'Treatment Outcomes', 'Resource Optimization', 'Predictive Modeling']
  }
];

>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
const benefits = [
  {
    title: 'Improved Patient Care',
    description: 'AI-powered tools help provide better and more accurate patient care',
    icon: Heart
  },
<<<<<<< HEAD
  {}
    title: 'Enhanced Efficiency,',
    description: 'Streamlined workflows and automated processes reduce administrative burden.,',
    icon: Activity;
  },
  {}
    title: 'Cost Reduction,',
    description: 'Optimized resource allocation and preventive care reduce overall healthcare costs.,',
    icon: BarChart3;
  },
  {}
    title: 'Regulatory Compliance,',
    description: 'Built-in compliance tools ensure adherence to healthcare regulations and standards.,',
    icon: Shield;
  }
;];
const caseStudies = [;
  {}
    title: 'AI Diagnostic System Implementation,',
    description: 'Reduced diagnostic time by 60% and improved accuracy by 25% for a major hospital network.,',
    results: ['60% faster diagnosis, '25% accuracy improvement', '40% cost reduction']',];
=======
  {
    title: 'Enhanced Security',
    description: 'Advanced security measures protect sensitive patient data',
    icon: Shield
  },
  {
    title: 'Better Outcomes',
    description: 'Data-driven insights help improve treatment outcomes',
    icon: Activity
  },
  {
    title: 'Operational Efficiency',
    description: 'Automated processes reduce administrative burden and costs',
    icon: CheckCircle
  }
];

>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
export default function HealthcarePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Healthcare <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform healthcare delivery with AI-powered medical imaging, electronic health records, 
                and telemedicine solutions that improve patient outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
<<<<<<< HEAD
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-12 h-12 text-red-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Healthcare
                  <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                    Technology Solutions
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolutionizing healthcare delivery with cutting-edge AI, telemedicine, and digital health solutions.
                Improve patient outcomes, enhance efficiency, and ensure regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Healthcare Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold">
                  View Healthcare Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Healthcare Technology Services;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Comprehensive technology solutions designed specifically for healthcare organizations, 
                from hospitals to private practices.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {services.map((service, index) => (,
                <motion.div}),                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Healthcare Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for healthcare providers.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
<<<<<<< HEAD
            </div>,
          </div>;
        </section>;              className="text-center mb-16"
=======
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Healthcare Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our solutions are designed to address the unique challenges faced by healthcare providers.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center""
                >;
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">";
                    <benefit.icon className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>"
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>"
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Healthcare Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from healthcare organizations that have transformed their operations
                with our technology solutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300""
                >;
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>"
                  <div className="space-y-2">";
                    {study.results.map((result, resultIndex) => (,
                      <div key={resultIndex} className="flex items-center text-sm text-green-600">"
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />";            </div>
=======
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
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
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our healthcare solutions can help your organization achieve its goals.
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
      </div>
    </Layout>
  );
}