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
  Users,
  Shield,
  BarChart3,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const industries = [
  {
    name: 'Healthcare',
    icon: Heart,
    description: 'Revolutionizing healthcare with AI-powered diagnostics, telemedicine platforms, and patient management systems.',
    services: [
      'AI-Powered Medical Diagnostics',
      'Telemedicine Platforms',
      'Electronic Health Records (EHR)',
      'Patient Management Systems',
      'Medical Imaging AI',
      'Healthcare Analytics'
    ],
    href: '/industries/healthcare',
    color: 'from-red-500 to-pink-600'
  },
  {
    name: 'Finance',
    icon: DollarSign,
    description: 'Transforming financial services with blockchain, AI-driven trading, and secure payment solutions.',
    services: [
      'Blockchain Solutions',
      'AI Trading Algorithms',
      'Digital Payment Systems',
      'Risk Management AI',
      'Fraud Detection Systems',
      'Regulatory Compliance Tools'
    ],
    href: '/industries/finance',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Manufacturing',
    icon: Settings,
    description: 'Optimizing manufacturing processes with IoT, predictive maintenance, and smart factory solutions.',
    services: [
      'Smart Factory Solutions',
      'Predictive Maintenance AI',
      'IoT Sensor Networks',
      'Quality Control Systems',
      'Supply Chain Optimization',
      'Digital Twin Technology'
    ],
    href: '/industries/manufacturing',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Retail',
    icon: ShoppingCart,
    description: 'Enhancing retail experiences with e-commerce platforms, inventory management, and customer analytics.',
    services: [
      'E-commerce Platforms',
      'Inventory Management AI',
      'Customer Analytics',
      'Personalized Recommendations',
      'Supply Chain Optimization',
      'Omnichannel Solutions'
    ],
    href: '/industries/retail',
    color: 'from-purple-500 to-violet-600'
  },
  {
    name: 'Education',
    icon: BookOpen,
    description: 'Modernizing education with learning management systems, virtual classrooms, and educational AI.',
    services: [
      'Learning Management Systems',
      'Virtual Classrooms',
      'Educational AI Tutors',
      'Student Analytics',
      'Online Assessment Tools',
      'Content Management Systems'
    ],
    href: '/industries/education',
    color: 'from-orange-500 to-amber-600'
  },
  {
    name: 'Government',
    icon: Building,
    description: 'Supporting government operations with secure systems, citizen services, and data management.',
    services: [
      'Citizen Service Portals',
      'Secure Data Management',
      'Digital Identity Solutions',
      'Public Safety Systems',
      'Government Analytics',
      'Compliance Management'
    ],
    href: '/industries/government',
    color: 'from-indigo-500 to-blue-600'
  }
];

const stats = [
  { number: '500+', label: 'Industry Projects' },
  { number: '50+', label: 'Industry Partners' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Industry Support' }
];

export default function IndustriesPage() {
  return (
    <MainLayout 
      title="Industry Solutions - Zion Tech Group"
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors."
      keywords="industry solutions, healthcare technology, fintech, manufacturing AI, retail technology, education technology, government IT"
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
                Industry-Specific
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Tailored technology solutions designed for your industry's unique challenges and opportunities. 
                From healthcare to finance, we deliver specialized expertise that drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Industry Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
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
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our deep industry expertise ensures we deliver solutions that address your specific challenges 
                and capitalize on your unique opportunities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mr-4`}>
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                      <ul className="space-y-2">
                        {industry.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={industry.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our industry experts help you implement the right technology solutions 
                for your specific sector and business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}