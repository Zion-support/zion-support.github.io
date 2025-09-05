import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Lock, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Settings,
  Zap,
  Cloud,
  Building
} from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const features = [
  {
    title: "Enterprise Security",
    description: "Bank-grade security with multi-layer protection, encryption, and compliance",
    icon: Shield,
    details: ["SOC 2 Type II", "ISO 27001", "GDPR Compliance", "Zero Trust Architecture"]
  },
  {
    title: "Scalable Architecture",
    description: "Built to handle millions of users and massive data volumes",
    icon: BarChart3,
    details: ["Auto-scaling", "Load Balancing", "High Availability", "Disaster Recovery"]
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support with dedicated account managers",
    icon: Users,
    details: ["Dedicated Support Team", "SLA Guarantees", "Priority Response", "Proactive Monitoring"]
  },
  {
    title: "Custom Integration",
    description: "Seamless integration with your existing enterprise systems",
    icon: Settings,
    details: ["API Integration", "Legacy System Support", "Custom Workflows", "Data Migration"]
  }
];

const industries = [
  { name: "Financial Services", icon: Building },
  { name: "Healthcare", icon: Shield },
  { name: "Manufacturing", icon: Settings },
  { name: "Government", icon: Globe },
  { name: "Retail", icon: BarChart3 },
  { name: "Education", icon: Users }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO, Fortune 500 Company",
    content: "Zion Tech Group transformed our entire IT infrastructure. The enterprise solution they delivered exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    title: "VP Technology, Global Bank",
    content: "Their security-first approach and scalability gave us the confidence to handle our growing customer base.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    title: "IT Director, Healthcare Corp",
    content: "The custom integration capabilities saved us months of development time and significantly reduced costs.",
    rating: 5
  }
];

export default function EnterpriseSolutionsPage() {
  return (
    <MainLayout 
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise-grade technology solutions with bank-grade security, scalable architecture, and 24/7 support for large organizations."
      keywords="enterprise solutions, enterprise security, scalable architecture, custom integration, enterprise support, large organizations"
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
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Comprehensive enterprise-grade technology solutions designed for large organizations. 
                Built with security, scalability, and reliability at the core.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Get Enterprise Quote <ArrowRight className="ml-2" />
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

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our enterprise solutions are built with the highest standards of security, 
                scalability, and reliability to meet your organization's demanding requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Industries</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our enterprise solutions serve organizations across various industries, 
                each with unique compliance and security requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300 group-hover:scale-105 transform">
                    <industry.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold">
                      {industry.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear from enterprise leaders who have transformed their organizations with our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400">
                      {testimonial.title}
                    </p>
                  </div>
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
                Ready for Enterprise Transformation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our enterprise experts design a solution that meets your organization's 
                unique requirements and compliance needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Schedule Enterprise Demo <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/about"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}