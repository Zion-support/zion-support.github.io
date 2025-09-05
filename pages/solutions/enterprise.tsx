import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Cloud,
  Database,
  Lock,
  Zap,
  Globe,
  Settings
} from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const features = [
  {
    title: "Scalable Infrastructure",
    description: "Cloud-native solutions that grow with your business",
    icon: Cloud,
    benefits: [
      "Auto-scaling capabilities",
      "High availability design",
      "Global deployment options",
      "Cost optimization"
    ]
  },
  {
    title: "Enterprise Security",
    description: "Military-grade security for your most sensitive data",
    icon: Shield,
    benefits: [
      "End-to-end encryption",
      "Multi-factor authentication",
      "Compliance frameworks",
      "24/7 security monitoring"
    ]
  },
  {
    title: "Custom Integration",
    description: "Seamless integration with your existing systems",
    icon: Settings,
    benefits: [
      "API-first architecture",
      "Legacy system integration",
      "Real-time data sync",
      "Custom connectors"
    ]
  },
  {
    title: "Advanced Analytics",
    description: "Data-driven insights for strategic decision making",
    icon: BarChart3,
    benefits: [
      "Real-time dashboards",
      "Predictive analytics",
      "Custom reporting",
      "Business intelligence"
    ]
  }
];

const services = [
  {
    title: "Cloud Migration",
    description: "Seamless migration to cloud infrastructure",
    icon: Cloud,
    duration: "2-6 months"
  },
  {
    title: "Security Audit",
    description: "Comprehensive security assessment and hardening",
    icon: Shield,
    duration: "1-3 months"
  },
  {
    title: "System Integration",
    description: "Connect all your business systems",
    icon: Settings,
    duration: "3-9 months"
  },
  {
    title: "Data Analytics",
    description: "Transform data into actionable insights",
    icon: BarChart3,
    duration: "2-4 months"
  }
];

const compliance = [
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR",
  "HIPAA",
  "PCI DSS",
  "FedRAMP"
];

export default function EnterpriseSolutionsPage() {
  return (
    <MainLayout 
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise technology solutions including cloud migration, security, integration, and analytics for large organizations."
      keywords="enterprise solutions, cloud migration, enterprise security, system integration, enterprise analytics"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Building className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Enterprise Solutions
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed for large organizations. 
                Scale, secure, and optimize your enterprise infrastructure with our expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Enterprise Quote
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Built for scale, security, and performance. Our enterprise solutions are designed to handle 
                the most demanding business requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Enterprise Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                End-to-end services designed to transform your enterprise technology landscape.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 text-sm">
                      {service.description}
                    </p>

                    <div className="text-xs text-blue-600 font-medium">
                      Duration: {service.duration}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Compliance & Security
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We maintain the highest standards of security and compliance to protect your enterprise data.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {compliance.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Lock className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {cert}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Scale Your Enterprise?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss your enterprise requirements and create a custom solution that drives growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Schedule Enterprise Consultation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}