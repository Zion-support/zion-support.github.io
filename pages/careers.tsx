import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Heart,
  Laptop,
  Users,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead AI projects and develop cutting-edge machine learning solutions',
    requirements: ['5+ years AI experience', 'Python/ML expertise', 'Team leadership']
  },
  {
    id: 2,
    title: 'Cloud Solutions Architect',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Design and implement scalable cloud infrastructure solutions',
    requirements: ['AWS/Azure certification', '3+ years cloud experience', 'DevOps knowledge']
  }
];

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of experts and help shape the future of technology. Explore career opportunities at Zion Tech Group." />
      </Head>
      
      <Layout>
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Careers</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Join our team of innovators
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
                >
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm text-gray-500">{job.location}</span>
                    <span className="text-sm text-gray-500">{job.type}</span>
                  </div>
                  <ul className="mb-4">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center mb-1">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}