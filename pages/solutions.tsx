import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Rocket, BarChart3, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const solutions = [
  {
    title: "Enterprise Solutions",
    description: "Comprehensive technology solutions for large organizations",
    icon: Shield,
    href: "/solutions/enterprise",
    features: ["Scalable Infrastructure", "Enterprise Security", "24/7 Support", "Compliance Ready"],
    color: "blue"
  },
  {
    title: "Startup Solutions", 
    description: "Rapid deployment solutions for growing startups",
    icon: Rocket,
    href: "/solutions/startup",
    features: ["Quick Setup", "Cost Effective", "Scalable Growth", "Expert Guidance"],
    color: "green"
  },
  {
    title: "Industry Solutions",
    description: "Specialized solutions for specific industries",
    icon: BarChart3,
    href: "/solutions/industry",
    features: ["Industry Expertise", "Custom Workflows", "Regulatory Compliance", "Best Practices"],
    color: "purple"
  },
  {
    title: "Custom Development",
    description: "Tailored solutions built to your exact specifications",
    icon: Settings,
    href: "/solutions/custom",
    features: ["Bespoke Development", "Full Customization", "Integration Ready", "Future Proof"],
    color: "indigo"
  }
];

const industries = [
  "Healthcare & Life Sciences",
  "Financial Services", 
  "Manufacturing",
  "Retail & E-commerce",
  "Education",
  "Government",
  "Real Estate",
  "Transportation & Logistics"
];

export default function SolutionsPage() {
  return (
    <MainLayout
      title="Solutions - Zion Tech Group"
      description="Comprehensive technology solutions for enterprises, startups, and industries. Custom development and specialized services."
      keywords="enterprise solutions, startup solutions, industry solutions, custom development, technology consulting"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Solutions for{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Every Business
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                From startups to enterprises, we provide tailored technology solutions that drive growth, 
                efficiency, and innovation across all industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Custom Solution
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
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
                Our Solution Categories
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We offer comprehensive technology solutions tailored to different business sizes, 
                industries, and specific requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                const colorClasses = {
                  blue: "from-blue-500 to-blue-600",
                  green: "from-green-500 to-green-600", 
                  purple: "from-purple-500 to-purple-600",
                  indigo: "from-indigo-500 to-indigo-600"
                };
                
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
                    <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[solution.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={solution.href}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${colorClasses[solution.color as keyof typeof colorClasses]} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group`}
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our solutions are designed to meet the unique challenges and requirements of various industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg text-center hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm font-medium text-gray-700">{industry}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Find Your Perfect Solution?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our experts analyze your needs and recommend the best technology solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}