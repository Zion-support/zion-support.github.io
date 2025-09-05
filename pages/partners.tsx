import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Globe, Cloud, Zap, Users, Shield, Award, Handshake } from 'lucide-react';

const partners = [
  {
    name: 'Microsoft',
    category: 'Cloud Partner',
    description: 'Certified Microsoft Azure partner providing cloud solutions and migration services.',
    logo: '/api/placeholder/200/100',
    benefits: ['Azure credits', 'Technical support', 'Co-marketing opportunities'],
    icon: Globe
  },
  {
    name: 'Amazon Web Services',
    category: 'Cloud Partner',
    description: 'AWS Advanced Consulting Partner with expertise in cloud architecture and migration.',
    logo: '/api/placeholder/200/100',
    benefits: ['AWS credits', 'Technical support', 'Co-marketing opportunities'],
    icon: Cloud
  },
  {
    name: 'Google Cloud',
    category: 'Cloud Partner',
    description: 'Google Cloud Platform partner specializing in data analytics and machine learning solutions.',
    logo: '/api/placeholder/200/100',
    benefits: ['GCP credits', 'Technical support', 'Co-marketing opportunities'],
    icon: Cloud
  },
  {
    name: 'Salesforce',
    category: 'CRM Partner',
    description: 'Certified Salesforce partner providing CRM implementation and customization services.',
    logo: '/api/placeholder/200/100',
    benefits: ['Salesforce credits', 'Technical support', 'Co-marketing opportunities'],
    icon: Users
  },
  {
    name: 'HubSpot',
    category: 'Marketing Partner',
    description: 'HubSpot Solutions Partner specializing in inbound marketing and sales automation.',
    logo: '/api/placeholder/200/100',
    benefits: ['HubSpot credits', 'Technical support', 'Co-marketing opportunities'],
    icon: Zap
  },
  {
    name: 'Cisco',
    category: 'Security Partner',
    description: 'Cisco Security Partner providing network security and cybersecurity solutions.',
    logo: '/api/placeholder/200/100',
    benefits: ['Cisco credits', 'Technical support', 'Co-marketing opportunities'],
    icon: Shield
  }
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with leading technology partners to deliver the best solutions for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <partner.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{partner.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{partner.description}</p>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {partner.category}
                </span>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {partner.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}