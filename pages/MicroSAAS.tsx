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
        </div>
      </section>
    </>
  );
}