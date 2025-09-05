import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  Shield, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award,
  TrendingUp,
  DollarSign,
  Clock,
  Star,
  Globe,
  Lock,
  Settings
} from 'lucide-react';
import Layout from '../components/Layout';

const startupSolutions = [
  {
    title: "MVP Development",
    description: "Rapid development of minimum viable products to validate your business idea",
    icon: Rocket,
    features: ["Quick prototyping", "User feedback integration", "Iterative development", "Cost-effective solutions"],
    pricing: "Starting at $5,000"
  },
  {
    title: "Scalable Architecture",
    description: "Future-proof technology architecture that grows with your startup",
    icon: Globe,
    features: ["Cloud-native design", "Microservices architecture", "Auto-scaling", "Performance optimization"],
    pricing: "Starting at $8,000"
  },
  {
    title: "Funding-Ready Tech",
    description: "Technology solutions that attract investors and support fundraising",
    icon: Award,
    features: ["Investor presentations", "Technical documentation", "Scalability planning", "Security compliance"],
    pricing: "Starting at $12,000"
  },
  {
    title: "Growth Acceleration",
    description: "Technology solutions to accelerate user acquisition and business growth",
    icon: TrendingUp,
    features: ["Analytics integration", "A/B testing", "User engagement tools", "Performance monitoring"],
    pricing: "Starting at $6,000"
  }
];

const benefits = [
  {
    title: "Speed to Market",
    description: "Fast development cycles to get your product to market quickly",
    icon: Clock
  },
  {
    title: "Cost Effective",
    description: "Budget-friendly solutions designed for startup constraints",
    icon: DollarSign
  },
  {
    title: "Scalable",
    description: "Technology that grows with your business from startup to scale-up",
    icon: TrendingUp
  },
  {
    title: "Expert Guidance",
    description: "Access to experienced developers and business advisors",
    icon: Users
  }
];

const stats = [
  { number: '150+', label: 'Startups Launched' },
  { number: '95%', label: 'Success Rate' },
  { number: '30%', label: 'Faster Time to Market' },
  { number: '50%', label: 'Cost Savings' }
];

export default function StartupSolutions() {
  return (
    <Layout 
      title="Startup Solutions | Zion Tech Group"
      description="Technology solutions for startups including MVP development, scalable architecture, and growth acceleration services."
      keywords="startup solutions, MVP development, scalable architecture, startup technology, funding ready tech"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Startup Solutions
              </h1>
              <p className="text-xl md:text-2xl text-pink-100 mb-8">
                Technology solutions that help startups launch, scale, and succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Started
                </Link>
                <Link 
                  href="/quote" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Quote
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
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Startup Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored technology solutions for every stage of startup growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {startupSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                      <p className="text-purple-600 font-semibold">{solution.pricing}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Startup Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven expertise in helping startups succeed with technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Launch Your Startup?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Let's build the technology foundation that will take your startup to the next level
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/case-studies" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}