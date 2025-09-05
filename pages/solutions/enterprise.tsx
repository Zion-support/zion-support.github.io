import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Server, 
  Database, 
  Lock, 
  Users, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Zap,
  Settings,
  Cloud
} from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const features = [
  {
    title: "Scalable Infrastructure",
    description: "Cloud-native solutions that grow with your business",
    icon: Server,
    benefits: ["Auto-scaling", "High availability", "Global deployment"]
  },
  {
    title: "Enterprise Security",
    description: "Military-grade security for your critical data",
    icon: Shield,
    benefits: ["End-to-end encryption", "Compliance ready", "24/7 monitoring"]
  },
  {
    title: "Advanced Analytics",
    description: "Real-time insights and predictive analytics",
    icon: BarChart3,
    benefits: ["Real-time dashboards", "Predictive modeling", "Custom reports"]
  },
  {
    title: "Integration Services",
    description: "Seamless integration with existing systems",
    icon: Settings,
    benefits: ["API management", "Legacy system integration", "Data migration"]
  }
];

const solutions = [
  {
    title: "Cloud Migration",
    description: "Seamless migration to cloud infrastructure",
    icon: Cloud,
    features: ["Zero downtime", "Data integrity", "Cost optimization"]
  },
  {
    title: "Digital Transformation",
    description: "Complete digital overhaul of business processes",
    icon: Zap,
    features: ["Process automation", "Workflow optimization", "User training"]
  },
  {
    title: "Data Management",
    description: "Comprehensive data strategy and management",
    icon: Database,
    features: ["Data governance", "Quality assurance", "Analytics platform"]
  },
  {
    title: "Security Solutions",
    description: "Comprehensive security and compliance",
    icon: Lock,
    features: ["Threat detection", "Compliance audit", "Security training"]
  }
];

const industries = [
  { name: "Financial Services", icon: "🏦", description: "Banking and fintech solutions" },
  { name: "Healthcare", icon: "🏥", description: "HIPAA-compliant healthcare systems" },
  { name: "Manufacturing", icon: "🏭", description: "Industrial IoT and automation" },
  { name: "Retail", icon: "🛍️", description: "E-commerce and retail platforms" },
  { name: "Government", icon: "🏛️", description: "Public sector digitalization" },
  { name: "Education", icon: "🎓", description: "Educational technology platforms" }
];

const stats = [
  { number: '500+', label: 'Enterprise Clients' },
  { number: '99.9%', label: 'Uptime SLA' },
  { number: '50+', label: 'Countries Served' },
  { number: '24/7', label: 'Support Available' }
];

export default function EnterpriseSolutionsPage() {
  return (
    <MainLayout
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise technology solutions including cloud migration, digital transformation, and security services."
      keywords="enterprise solutions, cloud migration, digital transformation, enterprise security, large organizations"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed for large organizations. 
                Scale, secure, and transform your enterprise with our proven expertise.
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
                Built for scale, security, and performance at enterprise level
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
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                          <CheckCircle className="w-4 h-4 text-green-500" />
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

        {/* Solutions Section */}
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
                Our Enterprise Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive solutions tailored for enterprise needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Section */}
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
                  <div className="text-blue-100 font-medium">{stat.label}</div>
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
                Ready to Scale Your Enterprise?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Let's discuss your enterprise needs and create a solution that drives growth and innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Schedule Consultation
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