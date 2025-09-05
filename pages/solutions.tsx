import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Rocket, 
  BarChart3, 
  Settings, 
  Zap, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Building
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const solutions = [
  {
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise-grade solutions for large organizations",
    icon: Shield,
    href: "/solutions/enterprise",
    features: ["Scalable Architecture", "Enterprise Security", "24/7 Support", "Custom Integration"],
    price: "Custom Pricing"
  },
  {
    title: "Startup Solutions",
    description: "Cost-effective solutions designed for growing startups",
    icon: Rocket,
    href: "/solutions/startup",
    features: ["Rapid Deployment", "Cost-Effective", "Scalable Growth", "Startup Support"],
    price: "From $999/month"
  },
  {
    title: "Industry Solutions",
    description: "Specialized solutions tailored for specific industries",
    icon: BarChart3,
    href: "/solutions/industry",
    features: ["Industry Expertise", "Compliance Ready", "Custom Workflows", "Regulatory Support"],
    price: "Industry Specific"
  },
  {
    title: "Custom Development",
    description: "Bespoke solutions built to your exact specifications",
    icon: Settings,
    href: "/solutions/custom",
    features: ["100% Custom", "Full Ownership", "Dedicated Team", "Flexible Timeline"],
    price: "Project Based"
  },
  {
    title: "Digital Transformation",
    description: "Complete digital transformation for modern businesses",
    icon: Zap,
    href: "/solutions/digital-transformation",
    features: ["Process Automation", "Data Migration", "Change Management", "Training & Support"],
    price: "From $5,000/month"
  },
  {
    title: "Cloud Migration",
    description: "Seamless migration to cloud infrastructure",
    icon: Cloud,
    href: "/solutions/cloud-migration",
    features: ["Zero Downtime", "Data Security", "Cost Optimization", "Performance Boost"],
    price: "From $2,500/month"
  }
];

const stats = [
  { number: '500+', label: 'Solutions Delivered' },
  { number: '99.9%', label: 'Success Rate' },
  { number: '24/7', label: 'Support Available' },
  { number: '50+', label: 'Industry Experts' }
];

export default function SolutionsPage() {
  return (
    <MainLayout 
      title="Solutions - Zion Tech Group"
      description="Comprehensive technology solutions for enterprises, startups, and industries. Custom development, digital transformation, and cloud migration services."
      keywords="enterprise solutions, startup solutions, digital transformation, cloud migration, custom development, industry solutions"
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
                Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Comprehensive technology solutions tailored to your business needs. 
                From enterprise-grade systems to startup-friendly packages.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Get Started <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/about"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Learn More
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

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of technology solutions designed to meet your specific business requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors duration-300">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-400">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-blue-400">
                      {solution.price}
                    </span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={solution.href}
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our experts help you choose the perfect solution for your needs. 
                Get a free consultation and custom quote today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Get Free Consultation <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/about"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}