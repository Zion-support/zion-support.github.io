import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
  DollarSign, 
  Settings, 
  ShoppingCart, 
  BookOpen, 
  Building,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Zap,
  Globe
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const industries = [
  {
    title: "Healthcare",
    description: "HIPAA-compliant solutions for hospitals, clinics, and healthcare providers",
    icon: Heart,
    href: "/industries/healthcare",
    features: ["HIPAA Compliance", "Patient Data Security", "Telemedicine Platform", "Medical Records Management"],
    stats: "500+ Healthcare Clients"
  },
  {
    title: "Finance",
    description: "Bank-grade security solutions for financial institutions and fintech companies",
    icon: DollarSign,
    href: "/industries/finance",
    features: ["PCI DSS Compliance", "Fraud Detection", "Risk Management", "Regulatory Reporting"],
    stats: "200+ Financial Clients"
  },
  {
    title: "Manufacturing",
    description: "IoT and automation solutions for smart manufacturing and Industry 4.0",
    icon: Settings,
    href: "/industries/manufacturing",
    features: ["IoT Integration", "Predictive Maintenance", "Quality Control", "Supply Chain Optimization"],
    stats: "300+ Manufacturing Clients"
  },
  {
    title: "Retail",
    description: "E-commerce and omnichannel solutions for retail businesses",
    icon: ShoppingCart,
    href: "/industries/retail",
    features: ["E-commerce Platform", "Inventory Management", "Customer Analytics", "Mobile Commerce"],
    stats: "400+ Retail Clients"
  },
  {
    title: "Education",
    description: "Learning management systems and educational technology solutions",
    icon: BookOpen,
    href: "/industries/education",
    features: ["LMS Platform", "Student Management", "Online Learning", "Assessment Tools"],
    stats: "150+ Educational Clients"
  },
  {
    title: "Government",
    description: "Secure government solutions with compliance and security requirements",
    icon: Building,
    href: "/industries/government",
    features: ["Security Clearance", "Compliance Standards", "Citizen Services", "Data Governance"],
    stats: "50+ Government Clients"
  }
];

const stats = [
  { number: '1,600+', label: 'Industry Clients' },
  { number: '99.9%', label: 'Compliance Rate' },
  { number: '24/7', label: 'Industry Support' },
  { number: '15+', label: 'Years Experience' }
];

export default function IndustriesPage() {
  return (
    <MainLayout 
      title="Industry Solutions - Zion Tech Group"
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors with industry-specific compliance and security."
      keywords="industry solutions, healthcare technology, financial technology, manufacturing solutions, retail technology, education technology, government solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Specialized technology solutions tailored to meet the unique requirements 
                and compliance standards of different industries.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Get Industry Quote <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
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
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Industries</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We serve organizations across multiple industries with specialized solutions 
                that meet their unique compliance, security, and operational requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors duration-300">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-gray-400">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-blue-400 font-semibold">
                      {industry.stats}
                    </span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={industry.href}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center group"
                  >
                    Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't See Your Industry?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We work with organizations across all sectors. Our team of industry experts 
                can create custom solutions tailored to your specific needs and requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Discuss Your Industry <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/solutions/custom"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Custom Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}