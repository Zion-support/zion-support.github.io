import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Shield, 
  Settings, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Database
} from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const industries = [
  {
    title: "Healthcare",
    icon: "🏥",
    description: "HIPAA-compliant solutions for healthcare providers",
    solutions: ["EMR Systems", "Telemedicine", "Patient Management", "Compliance Tools"],
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Financial Services",
    icon: "🏦",
    description: "Secure financial technology solutions",
    solutions: ["Banking Systems", "Payment Processing", "Risk Management", "Compliance"],
    color: "from-green-500 to-green-600"
  },
  {
    title: "E-commerce",
    icon: "🛒",
    description: "Scalable online retail platforms",
    solutions: ["Online Stores", "Inventory Management", "Payment Gateways", "Analytics"],
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Manufacturing",
    icon: "🏭",
    description: "Industrial IoT and automation solutions",
    solutions: ["IoT Sensors", "Predictive Maintenance", "Quality Control", "Supply Chain"],
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Education",
    icon: "🎓",
    description: "Educational technology platforms",
    solutions: ["LMS Systems", "Online Learning", "Student Management", "Assessment Tools"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Real Estate",
    icon: "🏠",
    description: "Property management and sales platforms",
    solutions: ["Property Listings", "CRM Systems", "Virtual Tours", "Document Management"],
    color: "from-teal-500 to-teal-600"
  }
];

const features = [
  {
    title: "Industry Expertise",
    description: "Deep understanding of industry-specific challenges and requirements",
    icon: Users,
    benefits: ["Domain knowledge", "Best practices", "Compliance expertise"]
  },
  {
    title: "Compliance Ready",
    description: "Built-in compliance with industry regulations and standards",
    icon: Shield,
    benefits: ["HIPAA", "SOX", "GDPR", "PCI DSS"]
  },
  {
    title: "Custom Workflows",
    description: "Tailored processes that match your industry's unique needs",
    icon: Settings,
    benefits: ["Process optimization", "Workflow automation", "Integration"]
  },
  {
    title: "Scalable Solutions",
    description: "Solutions that grow with your business and industry demands",
    icon: BarChart3,
    benefits: ["Auto-scaling", "Performance", "Global reach"]
  }
];

const stats = [
  { number: '15+', label: 'Industries Served' },
  { number: '500+', label: 'Industry Projects' },
  { number: '99%', label: 'Compliance Rate' },
  { number: '24/7', label: 'Industry Support' }
];

export default function IndustrySolutionsPage() {
  return (
    <MainLayout
      title="Industry Solutions - Zion Tech Group"
      description="Specialized technology solutions for specific industries including healthcare, finance, e-commerce, and manufacturing."
      keywords="industry solutions, healthcare technology, financial services, e-commerce solutions, manufacturing IoT"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industry{' '}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Specialized technology solutions designed for specific industries. 
                Deep expertise, compliance-ready, and tailored to your sector's unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Industry Quote
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
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
                Industries We Serve
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Deep industry expertise across multiple sectors
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="space-y-2">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-600">{solution}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${industry.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                Why Choose Industry Solutions?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Specialized expertise that understands your industry's unique challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-purple-100 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready for Industry-Specific Solutions?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Let's discuss your industry needs and create a solution that drives sector-specific success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Schedule Industry Consultation
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}