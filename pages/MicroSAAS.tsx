<<<<<<< HEAD
import { Star } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

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
    }
  ];

  return (
    <Layout 
      title="Micro SaaS Solutions - Zion Tech Group" 
      description="Discover our innovative micro SaaS solutions designed to solve specific business problems with powerful, easy-to-use tools. From AI-powered invoicing to smart scheduling, we have the perfect solution for your needs."
      keywords="micro SaaS, business tools, AI solutions, productivity software, automation tools, business software"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Powerful, focused tools that solve specific business problems. 
              No bloat, just results.
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const microSaasServices = [
  {
    title: 'Workflow Automation',
    description: 'Streamline your business processes with custom automation tools.',
    features: ['Process Optimization', 'Custom Workflows', 'Integration APIs'],
    pricing: '$500 - $2,000/month'
  },
  {
    title: 'Data Processing Tools',
    description: 'Efficient data management and processing solutions.',
    features: ['Data Cleaning', 'ETL Processes', 'Real-time Analytics'],
    pricing: '$800 - $3,000/month'
  },
  {
    title: 'Custom Dashboards',
    description: 'Tailored dashboard solutions for better business insights.',
    features: ['Real-time Data', 'Custom Visualizations', 'Mobile Responsive'],
    pricing: '$1,200 - $4,000/month'
  }
];

export default function MicroSAAS() {
  return (
    <>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Innovative micro SaaS solutions for modern businesses. Custom tools and platforms designed to streamline operations." />
        <meta name="keywords" content="micro SaaS, business tools, automation, custom software, SaaS solutions" />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Micro SaaS Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Innovative micro SaaS solutions designed to streamline your business operations.
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                </div>
                
                <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Learn More
                  <span className="ml-2">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team help you leverage cutting-edge micro SaaS solutions to drive growth and innovation.
              <br className="hidden md:block" />
              <span className="text-blue-200 font-semibold">Get your free consultation today!</span>
            </p>
            <div className="mb-8">
              <p className="text-lg text-blue-100 mb-2">
                📞 <strong>Call us:</strong> +1 302 464 0950
              </p>
              <p className="text-lg text-blue-100 mb-2">
                📧 <strong>Email us:</strong> kleber@ziontechgroup.com
              </p>
              <p className="text-lg text-blue-100">
                📍 <strong>Visit us:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Free Consultation
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
=======
        </div>
      </section>
    </>
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
  );
}