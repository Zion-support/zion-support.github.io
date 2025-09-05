import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const itServices = [
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for modern businesses.',
    features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization'],
    pricing: '$1,500 - $5,000/month'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security measures to protect your digital assets.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance Management'],
    pricing: '$2,000 - $8,000/month'
  },
  {
    title: 'Database Management',
    description: 'Optimize and maintain your database infrastructure.',
    features: ['Performance Tuning', 'Backup Solutions', 'Data Migration'],
    pricing: '$1,000 - $4,000/month'
  }
];

const stats = [
  { number: "500+", label: "IT Projects Completed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" }
];

export default function ITServices() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, database management, and technical support." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, database management, technical support" />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">IT Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Comprehensive IT solutions to keep your business running smoothly and securely.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                </div>
                
                <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}