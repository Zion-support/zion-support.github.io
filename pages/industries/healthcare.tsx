import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Stethoscope, 
  Shield, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Activity,
  Users,
  FileText,
  Lock,
  Zap,
  Target
} from 'lucide-react';
import Layout from '../../components/Layout';

const solutions = [
  {
    icon: Brain,
    title: 'AI-Powered Diagnostics',
    description: 'Leverage machine learning for faster, more accurate medical diagnoses and treatment recommendations.',
    features: ['Medical Image Analysis', 'Symptom Assessment', 'Treatment Planning', 'Drug Interaction Checking']
  },
  {
    icon: Activity,
    title: 'Patient Monitoring',
    description: 'Real-time patient monitoring systems with predictive analytics for early intervention.',
    features: ['IoT Health Devices', 'Vital Signs Tracking', 'Alert Systems', 'Remote Monitoring']
  },
  {
    icon: FileText,
    title: 'Electronic Health Records',
    description: 'Secure, interoperable EHR systems that improve patient care and operational efficiency.',
    features: ['Patient Data Management', 'Interoperability', 'Clinical Decision Support', 'Data Analytics']
  },
  {
    icon: Lock,
    title: 'Healthcare Security',
    description: 'Comprehensive cybersecurity solutions to protect sensitive patient data and ensure compliance.',
    features: ['HIPAA Compliance', 'Data Encryption', 'Access Controls', 'Audit Trails']
  },
  {
    icon: Users,
    title: 'Telemedicine Platform',
    description: 'Complete telemedicine solutions for remote consultations and virtual care delivery.',
    features: ['Video Consultations', 'Appointment Scheduling', 'Prescription Management', 'Patient Portal']
  },
  {
    icon: Target,
    title: 'Population Health Management',
    description: 'Analytics-driven population health programs to improve outcomes and reduce costs.',
    features: ['Risk Stratification', 'Care Coordination', 'Outcome Tracking', 'Cost Analysis']
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Improved Patient Outcomes',
    description: 'Better diagnosis accuracy and treatment effectiveness through AI and data analytics.'
  },
  {
    icon: Zap,
    title: 'Operational Efficiency',
    description: 'Streamlined workflows and automated processes to reduce administrative burden.'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Robust security measures to protect patient data and ensure regulatory compliance.'
  },
  {
    icon: Users,
    title: 'Better Patient Experience',
    description: 'Improved access to care and more personalized treatment options.'
  }
];

const technologies = [
  { name: 'Machine Learning', category: 'AI/ML' },
  { name: 'Natural Language Processing', category: 'AI/ML' },
  { name: 'Computer Vision', category: 'AI/ML' },
  { name: 'IoT Sensors', category: 'Hardware' },
  { name: 'Blockchain', category: 'Security' },
  { name: 'Cloud Computing', category: 'Infrastructure' },
  { name: 'Mobile Apps', category: 'Software' },
  { name: 'APIs', category: 'Integration' },
  { name: 'Data Analytics', category: 'Analytics' },
  { name: 'Robotic Process Automation', category: 'Automation' }
];

const compliance = [
  { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
  { name: 'FDA', description: 'Food and Drug Administration Guidelines' },
  { name: 'HITECH', description: 'Health Information Technology for Economic and Clinical Health' },
  { name: 'SOC 2', description: 'Service Organization Control 2' },
  { name: 'ISO 27001', description: 'Information Security Management' },
  { name: 'GDPR', description: 'General Data Protection Regulation' }
];

export default function HealthcarePage() {
  return (
    <Layout
      title="Healthcare Technology Solutions - Zion Tech Group"
      description="Transform healthcare delivery with our AI-powered solutions, telemedicine platforms, and secure health data management systems."
      keywords="healthcare technology, medical AI, telemedicine, EHR, HIPAA compliance, healthcare software"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-pink-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">
                Healthcare Technology Solutions
              </h1>
              <p className="text-xl text-red-100 mb-8">
                Transform healthcare delivery with AI-powered diagnostics, telemedicine platforms, 
                and secure health data management systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#solutions"
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Solutions
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  Get Healthcare Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section id="solutions" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Healthcare Technology Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From AI-powered diagnostics to secure patient data management, we provide 
                comprehensive technology solutions for healthcare organizations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
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
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Healthcare Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our healthcare technology expertise delivers measurable improvements 
                in patient care and operational efficiency.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-red-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Healthcare Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage cutting-edge technologies to build secure, scalable, 
                and compliant healthcare solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {tech.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {tech.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Healthcare Compliance & Security
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We ensure all our healthcare solutions meet the highest standards 
                of security and regulatory compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {compliance.map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-2xl font-bold text-red-600 mb-2">
                    {standard.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {standard.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Transform Healthcare with Technology
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Join leading healthcare organizations that trust us to deliver 
                innovative, secure, and compliant technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <span>Get Healthcare Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  View Healthcare Cases
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}