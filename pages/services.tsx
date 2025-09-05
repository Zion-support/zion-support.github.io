import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Server, Cloud, Shield, Database, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const services = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions including machine learning, natural language processing, and computer vision.",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "IT Services",
    description: "Comprehensive information technology services including cloud infrastructure, cybersecurity, and system integration.",
    icon: Server,
    href: "/it-services",
    features: ["Cloud Migration", "System Integration", "Infrastructure Management", "Technical Support"]
  },
  {
    title: "Micro SaaS",
    description: "Scalable software as a service solutions tailored to your business needs and growth objectives.",
    icon: Cloud,
    href: "/micro-saas",
    features: ["Custom SaaS Development", "API Integration", "Scalable Architecture", "Maintenance & Support"]
  },
  {
    title: "Cybersecurity",
    description: "Advanced security solutions to protect your digital assets and ensure compliance with industry standards.",
    icon: Shield,
    href: "/services/cybersecurity",
    features: ["Security Audits", "Threat Detection", "Compliance", "Incident Response"]
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our advanced analytics and business intelligence solutions.",
    icon: Database,
    href: "/services/data-analytics",
    features: ["Data Visualization", "Business Intelligence", "Predictive Modeling", "Real-time Analytics"]
  },
  {
    title: "Cloud Solutions",
    description: "Comprehensive cloud migration and management services to optimize your infrastructure and reduce costs.",
    icon: Zap,
    href: "/solutions/cloud-migration",
    features: ["Cloud Migration", "Multi-cloud Strategy", "Cost Optimization", "24/7 Monitoring"]
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Expert Team Members' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
];

export default function ServicesPage() {
  return (
    <MainLayout>
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
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
              </p>
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
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Technology Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a full spectrum of technology services to help your business thrive in the digital age.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your technology goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/solutions"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}