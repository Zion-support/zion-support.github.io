import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Shield, Settings, Users, CheckCircle, ArrowRight, Globe, Zap, Target } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const industries = [
  {
    name: "Healthcare",
    icon: "🏥",
    description: "HIPAA-compliant solutions for healthcare providers",
    features: ["Patient data security", "HIPAA compliance", "Telemedicine platforms", "Medical records management"],
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "Finance",
    icon: "💰",
    description: "Secure financial technology solutions",
    features: ["Payment processing", "Fraud detection", "Regulatory compliance", "Risk management"],
    color: "from-green-600 to-green-800"
  },
  {
    name: "E-commerce",
    icon: "🛒",
    description: "Scalable online retail platforms",
    features: ["Inventory management", "Payment gateways", "Order processing", "Customer analytics"],
    color: "from-purple-600 to-purple-800"
  },
  {
    name: "Education",
    icon: "🎓",
    description: "Learning management and educational tools",
    features: ["LMS platforms", "Student tracking", "Online assessments", "Content management"],
    color: "from-orange-600 to-orange-800"
  },
  {
    name: "Manufacturing",
    icon: "🏭",
    description: "Industrial automation and IoT solutions",
    features: ["IoT integration", "Predictive maintenance", "Quality control", "Supply chain optimization"],
    color: "from-gray-600 to-gray-800"
  },
  {
    name: "Real Estate",
    icon: "🏠",
    description: "Property management and listing platforms",
    features: ["Property listings", "CRM systems", "Virtual tours", "Transaction management"],
    color: "from-indigo-600 to-indigo-800"
  }
];

const solutions = [
  {
    title: "Industry Compliance",
    description: "Ensure your solutions meet industry-specific regulations",
    icon: Shield,
    benefits: ["Regulatory compliance", "Audit trails", "Data protection", "Standards adherence"]
  },
  {
    title: "Custom Workflows",
    description: "Tailored processes that match your industry requirements",
    icon: Settings,
    benefits: ["Workflow automation", "Process optimization", "Integration capabilities", "Custom reporting"]
  },
  {
    title: "Expert Knowledge",
    description: "Deep understanding of industry challenges and opportunities",
    icon: Users,
    benefits: ["Industry expertise", "Best practices", "Proven methodologies", "Continuous support"]
  },
  {
    title: "Scalable Solutions",
    description: "Built to grow with your business and industry demands",
    icon: BarChart3,
    benefits: ["Performance scaling", "Feature expansion", "Global deployment", "Future-proofing"]
  }
];

export default function IndustrySolutionsPage() {
  return (
    <MainLayout
      title="Industry Solutions - Zion Tech Group"
      description="Specialized technology solutions for specific industries including healthcare, finance, e-commerce, education, manufacturing, and real estate."
      keywords="industry solutions, healthcare technology, fintech, e-commerce solutions, education technology, manufacturing automation"
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
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Specialized technology solutions designed for specific industries. 
                We understand your unique challenges and deliver tailored solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Industry Solution
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
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Deep expertise across multiple industries with specialized solutions for each sector.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {industry.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <ul className="space-y-2">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Tailored solutions that address the unique challenges and requirements of each industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-lg hover:bg-purple-50 transition-colors group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Need Industry-Specific Solutions?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Let's discuss your industry requirements and create a solution that meets your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Discuss Your Industry
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
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