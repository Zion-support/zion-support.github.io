import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Shield, Users, CheckCircle, ArrowRight, Building2, Heart, GraduationCap, Store, Car, Home, Truck } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const industries = [
  {
    name: "Healthcare & Life Sciences",
    icon: Heart,
    description: "HIPAA-compliant solutions for healthcare providers and life sciences companies",
    solutions: ["Patient Management Systems", "Telemedicine Platforms", "Clinical Data Analytics", "Regulatory Compliance"],
    color: "red"
  },
  {
    name: "Financial Services",
    icon: Building2,
    description: "Secure, compliant solutions for banks, fintech, and financial institutions",
    solutions: ["Digital Banking", "Risk Management", "Fraud Detection", "Regulatory Reporting"],
    color: "blue"
  },
  {
    name: "Manufacturing",
    icon: BarChart3,
    description: "IoT and automation solutions for modern manufacturing operations",
    solutions: ["Smart Manufacturing", "Supply Chain Optimization", "Quality Control", "Predictive Maintenance"],
    color: "green"
  },
  {
    name: "Retail & E-commerce",
    icon: Store,
    description: "Omnichannel solutions for retail and e-commerce businesses",
    solutions: ["E-commerce Platforms", "Inventory Management", "Customer Analytics", "Mobile Commerce"],
    color: "purple"
  },
  {
    name: "Education",
    icon: GraduationCap,
    description: "Technology solutions for educational institutions and EdTech companies",
    solutions: ["Learning Management Systems", "Student Information Systems", "Online Learning Platforms", "Assessment Tools"],
    color: "indigo"
  },
  {
    name: "Transportation & Logistics",
    icon: Truck,
    description: "Fleet management and logistics optimization solutions",
    solutions: ["Fleet Tracking", "Route Optimization", "Supply Chain Visibility", "Driver Management"],
    color: "orange"
  }
];

const industryFeatures = [
  {
    title: "Industry Expertise",
    description: "Deep understanding of industry-specific challenges and requirements",
    icon: Users,
    benefits: ["Domain knowledge", "Best practices", "Compliance expertise", "Industry networks"]
  },
  {
    title: "Custom Workflows",
    description: "Tailored processes that match your industry's unique workflows",
    icon: BarChart3,
    benefits: ["Process optimization", "Workflow automation", "Integration capabilities", "Custom reporting"]
  },
  {
    title: "Regulatory Compliance",
    description: "Built-in compliance with industry regulations and standards",
    icon: Shield,
    benefits: ["Regulatory expertise", "Compliance monitoring", "Audit support", "Documentation"]
  },
  {
    title: "Best Practices",
    description: "Implementation of industry-proven methodologies and practices",
    icon: CheckCircle,
    benefits: ["Proven methodologies", "Quality standards", "Performance optimization", "Continuous improvement"]
  }
];

const industryStats = [
  { number: "15+", label: "Industries Served" },
  { number: "200+", label: "Industry Projects" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5+", label: "Years Experience" }
];

export default function IndustrySolutionsPage() {
  return (
    <MainLayout
      title="Industry Solutions - Zion Tech Group"
      description="Specialized technology solutions for specific industries. Healthcare, finance, manufacturing, retail, education, and more."
      keywords="industry solutions, healthcare technology, financial services, manufacturing, retail, education, industry expertise"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
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
                  Specialized Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Deep industry expertise meets cutting-edge technology. We understand the unique challenges 
                and requirements of your industry and deliver solutions that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Industry Consultation
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {industryStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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
                Our deep industry expertise enables us to deliver solutions that address 
                specific challenges and opportunities in your sector.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                const colorClasses = {
                  red: "from-red-500 to-pink-600",
                  blue: "from-blue-500 to-cyan-600",
                  green: "from-green-500 to-emerald-600",
                  purple: "from-purple-500 to-violet-600",
                  indigo: "from-indigo-500 to-blue-600",
                  orange: "from-orange-500 to-red-600"
                };
                
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[industry.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {industry.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {industry.description}
                    </p>

                    <ul className="space-y-1">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-center text-xs text-gray-500">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Industry Expertise Matters
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our industry-specific approach ensures solutions that truly fit your business needs and regulatory requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industryFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Industry-Specific Solutions?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our industry experts design a solution tailored to your sector's unique requirements and challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Industry Consultation
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Explore All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}