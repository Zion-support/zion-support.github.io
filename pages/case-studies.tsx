import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Building, TrendingUp } from 'lucide-react';
import Layout from '../components/Layout';

const caseStudies = [
  {
    id: 'ai-healthcare-transformation',
    title: 'AI-Powered Healthcare Transformation',
    company: 'MedTech Solutions',
    industry: 'Healthcare',
    description: 'Implemented AI-driven diagnostic tools that reduced diagnosis time by 60% and improved accuracy by 45%.',
    image: '/images/case-studies/healthcare-ai.jpg',
    readTime: '5 min read',
    date: '2024-01-15',
    results: [
      '60% reduction in diagnosis time',
      '45% improvement in accuracy',
      '30% cost savings',
      '95% patient satisfaction'
    ]
  },
  {
    id: 'cloud-migration-enterprise',
    title: 'Enterprise Cloud Migration',
    company: 'Global Finance Corp',
    industry: 'Finance',
    description: 'Successfully migrated legacy systems to AWS, improving scalability and reducing infrastructure costs by 40%.',
    image: '/images/case-studies/cloud-migration.jpg',
    readTime: '7 min read',
    date: '2024-01-10',
    results: [
      '40% reduction in infrastructure costs',
      '99.9% uptime achieved',
      '50% faster deployment',
      'Zero data loss during migration'
    ]
  },
  {
    id: 'micro-saas-ecommerce',
    title: 'Micro SaaS for E-commerce',
    company: 'RetailMax',
    industry: 'Retail',
    description: 'Developed custom inventory management SaaS that increased operational efficiency by 35% and reduced stockouts by 80%.',
    image: '/images/case-studies/ecommerce-saas.jpg',
    readTime: '6 min read',
    date: '2024-01-05',
    results: [
      '35% increase in operational efficiency',
      '80% reduction in stockouts',
      '25% increase in sales',
      '90% user adoption rate'
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and see how we've helped businesses transform with cutting-edge technology solutions."
      keywords="case studies, success stories, AI projects, cloud migration, micro SaaS, technology solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform with innovative technology solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how we've delivered value to our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Building className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{study.date}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{study.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{study.company}</span>
                      </div>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}