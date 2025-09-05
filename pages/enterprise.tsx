import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Database,
  Cloud,
  Globe,
  Settings,
  BarChart3,
  Lock,
  Cpu,
  Smartphone
} from 'lucide-react';
import Layout from './components/Layout';

const enterpriseServices = [
  {
    title: "Enterprise Architecture",
    description: "Scalable, secure enterprise architecture design and implementation",
    icon: Building,
    features: ["Microservices architecture", "API-first design", "Cloud-native solutions", "Legacy system integration"]
  },
  {
    title: "Digital Transformation",
    description: "Complete digital transformation strategies and implementation",
    icon: Zap,
    features: ["Process automation", "Workflow optimization", "Data migration", "Change management"]
  },
  {
    title: "Enterprise Security",
    description: "Comprehensive security solutions for large organizations",
    icon: Shield,
    features: ["Zero-trust architecture", "Identity management", "Data protection", "Compliance"]
  },
  {
    title: "Enterprise Integration",
    description: "Seamless integration of enterprise systems and applications",
    icon: Settings,
    features: ["API management", "Data integration", "System connectivity", "Real-time sync"]
  }
];

const solutions = [
  {
    title: "ERP Solutions",
    description: "Custom enterprise resource planning systems tailored to your business",
    icon: Database,
    benefits: ["Streamlined operations", "Real-time insights", "Cost reduction", "Improved efficiency"]
  },
  {
    title: "CRM Platforms",
    description: "Customer relationship management solutions for enterprise sales",
    icon: Users,
    benefits: ["Enhanced customer experience", "Sales automation", "Lead management", "Analytics"]
  },
  {
    title: "Business Intelligence",
    description: "Advanced analytics and reporting for data-driven decisions",
    icon: BarChart3,
    benefits: ["Data visualization", "Predictive analytics", "KPI tracking", "Custom dashboards"]
  },
  {
    title: "Cloud Migration",
    description: "Secure migration to cloud platforms with minimal downtime",
    icon: Cloud,
    benefits: ["Scalability", "Cost optimization", "Enhanced security", "Global accessibility"]
  }
];

const industries = [
  "Manufacturing", "Healthcare", "Finance", "Retail", "Government", 
  "Education", "Energy", "Transportation", "Telecommunications", "Real Estate"
];

export default function Enterprise() {
  return (
    <Layout 
      title="Enterprise Solutions | Zion Tech Group"
      description="Comprehensive enterprise solutions including digital transformation, architecture design, system integration, and cloud migration services."
      keywords="enterprise solutions, digital transformation, enterprise architecture, system integration, cloud migration, ERP, CRM"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Transform your enterprise with scalable, secure, and intelligent solutions designed for large-scale operations and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Enterprise Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive enterprise solutions designed for scale, security, and performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
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

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for enterprise challenges and opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise solutions across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-800 font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your enterprise challenges and explore how we can help you achieve digital transformation and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-slate-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start Your Project
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}