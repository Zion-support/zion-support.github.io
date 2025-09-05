import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Rocket, 
  BarChart3, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Building,
  Users,
  Globe,
  Zap,
  Target,
  Award
} from 'lucide-react';

const solutions = [
  {
    title: "Enterprise Solutions",
    description: "Comprehensive technology solutions for large organizations with complex requirements and enterprise-grade security.",
    icon: Building,
    href: "/solutions/enterprise",
    features: ["Scalable Architecture", "Enterprise Security", "24/7 Support", "Custom Integration"],
    benefits: ["Reduced IT Costs", "Improved Efficiency", "Enhanced Security", "Better Compliance"]
  },
  {
    title: "Startup Solutions", 
    description: "Cost-effective technology solutions designed to help startups scale quickly and efficiently.",
    icon: Rocket,
    href: "/solutions/startup",
    features: ["Rapid Deployment", "Cost Optimization", "Scalable Growth", "Expert Guidance"],
    benefits: ["Faster Time to Market", "Lower Initial Costs", "Flexible Scaling", "Competitive Advantage"]
  },
  {
    title: "Industry Solutions",
    description: "Specialized solutions tailored for specific industries with deep domain expertise.",
    icon: BarChart3,
    href: "/solutions/industry",
    features: ["Industry Expertise", "Compliance Ready", "Best Practices", "Proven Results"],
    benefits: ["Industry Compliance", "Faster Implementation", "Reduced Risk", "Better ROI"]
  },
  {
    title: "Custom Development",
    description: "Bespoke software solutions built specifically for your unique business requirements.",
    icon: Settings,
    href: "/solutions/custom",
    features: ["Tailored Solutions", "Full Ownership", "Ongoing Support", "Future-Proof Design"],
    benefits: ["Perfect Fit", "Competitive Edge", "Full Control", "Long-term Value"]
  }
];

const industries = [
  { name: "Healthcare", icon: Shield, description: "HIPAA-compliant solutions for healthcare providers" },
  { name: "Finance", icon: BarChart3, description: "Secure financial technology solutions" },
  { name: "E-commerce", icon: Globe, description: "Scalable online retail platforms" },
  { name: "Manufacturing", icon: Settings, description: "IoT and automation solutions" },
  { name: "Education", icon: Users, description: "Learning management and student systems" },
  { name: "Real Estate", icon: Building, description: "Property management and listing platforms" }
];

const process = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We analyze your business requirements, challenges, and goals to understand your needs."
  },
  {
    step: "02", 
    title: "Solution Design",
    description: "Our experts design a tailored solution architecture that meets your specific requirements."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build and thoroughly test your solution using industry best practices and standards."
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "We deploy your solution and provide ongoing support to ensure optimal performance."
  }
];

export default function SolutionsPage() {
  return (
    <MainLayout 
      title="Solutions - Zion Tech Group"
      description="Comprehensive technology solutions for enterprises, startups, and industry-specific needs. Custom development and consulting services."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Solutions for{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Every Business
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                From startups to enterprises, we deliver tailored technology solutions that drive growth, 
                efficiency, and innovation across all industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Custom Solution
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Solution Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive technology solutions across different business types and industry verticals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
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
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {solution.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {solution.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {solution.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                            <ul className="space-y-1">
                              {solution.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-600">
                                  <Target className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Link
                          href={solution.href}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industry Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We have deep domain expertise across multiple industries, delivering solutions that meet specific regulatory and business requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-purple-600 transition-colors" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {industry.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {industry.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Solution Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure your solution is delivered on time, on budget, and exceeds expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss your specific needs and create a custom solution that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Success Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}