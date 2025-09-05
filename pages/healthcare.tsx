import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Heart, 
  Shield, 
  BarChart3, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Award,
  TrendingUp,
  DollarSign,
  Clock,
  Star,
  Globe,
  Lock,
  Settings
} from 'lucide-react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const healthcareSolutions = [
  {
    title: "Electronic Health Records (EHR)",
    description: "Comprehensive patient data management systems with HIPAA compliance",
    icon: Heart,
    features: ["Patient records", "Medical history", "Prescription management", "HIPAA compliance"],
    pricing: "Starting at $25,000"
  },
  {
    title: "Telemedicine Platforms",
    description: "Secure video consultation and remote patient monitoring systems",
    icon: Globe,
    features: ["Video consultations", "Remote monitoring", "Appointment scheduling", "Patient portal"],
    pricing: "Starting at $15,000"
  },
  {
    title: "Medical Device Integration",
    description: "Connect and manage medical devices with centralized data collection",
    icon: Settings,
    features: ["Device connectivity", "Data synchronization", "Real-time monitoring", "Alert systems"],
    pricing: "Starting at $20,000"
  },
  {
    title: "Healthcare Analytics",
    description: "Advanced analytics for patient outcomes and operational efficiency",
    icon: BarChart3,
    features: ["Patient analytics", "Operational insights", "Predictive modeling", "Compliance reporting"],
    pricing: "Starting at $18,000"
  }
];

const benefits = [
  {
    title: "HIPAA Compliance",
    description: "Full compliance with healthcare data protection regulations",
    icon: Shield
  },
  {
    title: "Patient Safety",
    description: "Technology solutions that improve patient care and safety",
    icon: Heart
  },
  {
    title: "Operational Efficiency",
    description: "Streamlined workflows and automated processes",
    icon: TrendingUp
  },
  {
    title: "Data Security",
    description: "Enterprise-grade security for sensitive healthcare data",
    icon: Lock
  }
];

const stats = [
  { number: '100+', label: 'Healthcare Organizations' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: 'HIPAA', label: 'Compliant' },
  { number: '24/7', label: 'Support Available' }
];

export default function HealthcareSolutions() {
  return (
    <Layout 
      title="Healthcare Technology Solutions | Zion Tech Group"
      description="Comprehensive healthcare technology solutions including EHR systems, telemedicine platforms, medical device integration, and healthcare analytics."
      keywords="healthcare technology, EHR systems, telemedicine, medical device integration, healthcare analytics, HIPAA compliance"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Healthcare Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8">
                Secure, compliant technology solutions for modern healthcare organizations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Started
                </Link>
                <Link 
                  href="/quote" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for healthcare organizations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {healthcareSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                      <p className="text-green-600 font-semibold">{solution.pricing}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Healthcare Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven expertise in healthcare technology and compliance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Let's build technology solutions that improve patient care and operational efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/case-studies" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}