import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  BarChart3, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Globe,
  Shield,
  DollarSign
} from 'lucide-react';

const startupSolutions = [
  {
    title: "MVP Development",
    description: "Rapid development of minimum viable products to validate your business idea",
    icon: Rocket,
    features: ["Quick Prototyping", "User Testing", "Iterative Development", "Market Validation"],
    price: "Starting at $5,000"
  },
  {
    title: "Scalable Architecture",
    description: "Build for growth with scalable technology architecture from day one",
    icon: Globe,
    features: ["Cloud-Native Design", "Auto-Scaling", "Performance Optimization", "Cost Efficiency"],
    price: "Starting at $8,000"
  },
  {
    title: "Tech Stack Selection",
    description: "Choose the right technologies for your startup's specific needs and budget",
    icon: BarChart3,
    features: ["Technology Consulting", "Stack Evaluation", "Cost Analysis", "Future-Proofing"],
    price: "Starting at $2,000"
  },
  {
    title: "Funding-Ready Solutions",
    description: "Prepare your technology for investor presentations and due diligence",
    icon: DollarSign,
    features: ["Technical Documentation", "Security Audits", "Performance Reports", "Scalability Plans"],
    price: "Starting at $3,000"
  }
];

const startupFeatures = [
  {
    title: "Fast Delivery",
    description: "Get to market quickly with our rapid development approach",
    icon: Zap
  },
  {
    title: "Cost Effective",
    description: "Startup-friendly pricing and flexible payment options",
    icon: DollarSign
  },
  {
    title: "Growth Ready",
    description: "Solutions designed to scale with your business",
    icon: Users
  }
];

export default function StartupPage() {
  return (
    <Layout
      title="Startup Solutions - Zion Tech Group"
      description="Technology solutions for startups including MVP development, scalable architecture, tech stack selection, and funding-ready solutions."
      keywords="startup solutions, MVP development, scalable architecture, tech stack, startup technology, rapid development"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Startup{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Launch your startup with the right technology foundation. From MVP development to scalable architecture, 
                we help startups build, validate, and scale their technology solutions efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your Journey
                </Link>
                <Link href="/pricing" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Startup Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the unique challenges startups face and provide technology solutions 
                that help you move fast, stay lean, and scale efficiently.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {startupSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-orange-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {solution.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-bold text-orange-600 mb-4">
                      {solution.price}
                    </div>
                    <Link
                      href="/contact"
                      className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Startup Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're startup founders ourselves and understand the challenges you face. 
                Our solutions are designed to help you move fast and scale efficiently.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {startupFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-orange-600 mb-4">
                      <IconComponent className="w-16 h-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Startup?</h2>
            <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Let's discuss your startup idea and explore how we can help you build 
              the technology foundation for success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/contact" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call Us Now
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}