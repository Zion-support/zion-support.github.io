import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Heart, Brain, Shield, Users, BarChart3, CheckCircle, ArrowRight, Phone, Mail, Calendar, Stethoscope, Activity, Database, Camera, FileText } from 'lucide-react';

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

const challenges = [
  {
    challenge: 'Data Security & Privacy',
    description: 'Protecting sensitive patient data while enabling data-driven insights.',
    solution: 'HIPAA-compliant encryption, secure cloud infrastructure, and advanced access controls.',
    icon: Shield
  },
  {
    challenge: 'Interoperability',
    description: 'Integrating disparate healthcare systems and data sources.',
    solution: 'Standardized APIs, FHIR compliance, and seamless data integration platforms.',
    icon: Database
  },
  {
    challenge: 'Regulatory Compliance',
    description: 'Meeting strict healthcare regulations and standards.',
    solution: 'Compliance automation, audit trails, and regulatory reporting tools.',
    icon: FileText
  },
  {
    challenge: 'Scalability',
    description: 'Supporting growing patient populations and increasing data volumes.',
    solution: 'Cloud-native architecture, auto-scaling, and performance optimization.',
    icon: TrendingUp  }
];

const benefits = [
  {
    title: 'Improved Patient Care',
    description: 'AI-powered tools help provide better and more accurate patient care',
    icon: Heart
  },
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

export default function Healthcare() {
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