import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Award, Building, TrendingUp } from 'lucide-react';
import Layout from '../components/Layout';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Need for automated medical diagnosis and patient management",
    solution: "Developed AI-powered diagnostic system with 95% accuracy",
    results: [
      "95% diagnostic accuracy improvement",
      "60% reduction in diagnosis time",
      "40% cost savings",
      "500+ patients served daily"
    ],
    image: "/api/placeholder/600/400",
    tags: ["AI", "Healthcare", "Machine Learning"]
  },
  {
    id: 2,
    title: "Enterprise Cloud Migration",
    client: "Global Finance Corp",
    industry: "Finance",
    challenge: "Legacy system migration to cloud infrastructure",
    solution: "Complete cloud transformation with zero downtime",
    results: [
      "99.9% uptime achieved",
      "50% infrastructure cost reduction",
      "3x faster processing speed",
      "100% data security compliance"
    ],
    image: "/api/placeholder/600/400",
    tags: ["Cloud", "Migration", "Finance"]
  },
  {
    id: 3,
    title: "Micro SaaS E-commerce Platform",
    client: "RetailMax",
    industry: "Retail",
    challenge: "Need for scalable e-commerce solution",
    solution: "Custom micro SaaS platform with AI recommendations",
    results: [
      "200% increase in sales",
      "35% improvement in conversion rate",
      "80% reduction in cart abandonment",
      "50,000+ active users"
    ],
    image: "/api/placeholder/600/400",
    tags: ["Micro SaaS", "E-commerce", "AI"]
  }
];

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Industries Served' },
  { number: '24/7', label: 'Support Available' }
];

export default function CaseStudies() {
  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and client success stories across various industries"
      keywords="case studies, success stories, client projects, technology solutions"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Explore our successful projects and client success stories
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Success Stories
            </h2>
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    <div>
                      <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                        <span className="text-gray-500">Project Image</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h3>
                      <div className="mb-4">
                        <p className="text-lg font-semibold text-gray-700">
                          Client: {study.client}
                        </p>
                        <p className="text-gray-600">Industry: {study.industry}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 mb-4">{study.challenge}</p>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}