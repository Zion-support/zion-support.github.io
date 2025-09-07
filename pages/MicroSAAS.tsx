import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Star, CheckCircle, ArrowRight, Clock, DollarSign, Users, Zap, Shield } from 'lucide-react';

export default function MicroSAAS() {
  const microSAASServices = [
    {
      name: "AI Invoice Generator Pro",
      description: "Intelligent invoice creation and payment tracking platform with AI-powered templates, automated follow-ups, and multi-currency support.",
      price: "$29/month",
      features: [
        "AI-powered invoice generation",
        "Automated payment reminders",
        "Multi-currency support",
        "Client management system",
        "Payment tracking dashboard",
        "Custom branding options",
        "Tax calculation automation",
        "Integration with accounting software"
      ],
      benefits: [
        "Save 80% time on invoicing",
        "Reduce payment delays by 60%",
        "Professional invoice templates",
        "Automated follow-up system"
      ],
      marketPrice: "$49-79/month",
      savings: "Save up to $50/month",
      category: "Financial Tools"
    },
    {
      name: "Smart Meeting Scheduler AI",
      description: "AI-powered meeting scheduling that automatically finds optimal times, sends reminders, and handles rescheduling conflicts.",
      price: "$19/month",
      features: [
        "AI-powered time optimization",
        "Calendar integration",
        "Automated reminders",
        "Conflict resolution",
        "Multi-timezone support",
        "Custom meeting templates",
        "Follow-up automation",
        "Analytics dashboard"
      ],
      benefits: [
        "Save 90% scheduling time",
        "Reduce no-shows by 70%",
        "Optimize meeting efficiency",
        "Professional scheduling"
      ],
      marketPrice: "$39-59/month",
      savings: "Save up to $40/month",
      category: "Productivity"
    },
    {
      name: "Content Marketing AI",
      description: "AI-powered content creation and marketing automation platform for blogs, social media, and email campaigns.",
      price: "$39/month",
      features: [
        "AI content generation",
        "SEO optimization",
        "Social media scheduling",
        "Email campaign automation",
        "Content calendar management",
        "Performance analytics",
        "Multi-platform publishing",
        "Brand voice consistency"
      ],
      benefits: [
        "10x content production",
        "Improved SEO rankings",
        "Consistent brand messaging",
        "Automated distribution"
      ],
      marketPrice: "$69-99/month",
      savings: "Save up to $60/month",
      category: "Marketing"
    },
    {
      name: "Customer Support AI",
      description: "Intelligent customer support automation with chatbots, ticket routing, and sentiment analysis.",
      price: "$49/month",
      features: [
        "AI-powered chatbots",
        "Ticket automation",
        "Sentiment analysis",
        "Knowledge base integration",
        "Multi-channel support",
        "Performance metrics",
        "Custom response templates",
        "Escalation management"
      ],
      benefits: [
        "24/7 customer support",
        "Faster response times",
        "Reduced support costs",
        "Improved satisfaction"
      ],
      marketPrice: "$89-149/month",
      savings: "Save up to $100/month",
      category: "Customer Service"
    }
  ];

  const stats = [
    { number: "50+", label: "Micro SaaS Solutions" },
    { number: "10K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Innovative micro SaaS solutions for modern businesses across all industries."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <Head>
          <title>Micro SaaS Solutions - Zion Tech Group</title>
          <meta name="description" content="Discover powerful micro SaaS solutions designed to streamline your business operations and boost productivity." />
        </Head>

        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
              Micro SaaS Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
            >
              Powerful, focused tools that solve specific business problems with maximum efficiency and minimum complexity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300">
                Get Started Today
              </Link>
            </motion.div>
          </section>

          {/* Services Grid */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
              Our Micro SaaS Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {microSAASServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-green-400">{service.price}</span>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 line-through">{service.marketPrice}</div>
                        <div className="text-sm text-green-400 font-semibold">{service.savings}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <ArrowRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <Link href="/contact" className="bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 text-white font-bold py-2 px-6 rounded-full text-md transition-all duration-300">
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
                >
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-purple-600 to-pink-700 p-12 rounded-lg shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Choose from our suite of micro SaaS solutions and start seeing results immediately.
            </p>
            <Link href="/contact" className="bg-white text-purple-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300">
              Contact Us Today
            </Link>
          </section>
        </main>

        <footer className="text-center py-8 text-gray-500">
          <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
        </footer>
      </div>
    </Layout>
  );
}