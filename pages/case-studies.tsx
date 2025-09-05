import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Code, 
  Users, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  Star,
  TrendingUp,
  Shield,
  Globe,
  Zap,
  CheckCircle,
  Brain,
  Search
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    client: "Regional Medical Center",
    industry: "Healthcare",
    description: "Developed a comprehensive AI platform that improved patient diagnosis accuracy by 40% and reduced administrative workload by 60%.",
    challenge: "The medical center needed to streamline patient care while maintaining accuracy and compliance with healthcare regulations.",
    solution: "We built an AI-powered platform with machine learning models for diagnosis assistance, automated patient scheduling, and real-time health monitoring.",
    results: [
      "40% improvement in diagnosis accuracy",
      "60% reduction in administrative tasks",
      "30% faster patient processing",
      "95% patient satisfaction rate"
    ],
    technologies: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL", "AWS"],
    duration: "6 months",
    team: "8 experts",
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 2,
    title: "E-commerce Platform Migration",
    client: "TechRetail Inc.",
    industry: "E-commerce",
    description: "Migrated legacy e-commerce platform to modern cloud architecture, resulting in 300% performance improvement and 50% cost reduction.",
    challenge: "Legacy system was causing frequent downtime and couldn't handle peak traffic during sales events.",
    solution: "Complete platform migration to microservices architecture with auto-scaling capabilities and modern payment integration.",
    results: [
      "300% improvement in page load speed",
      "50% reduction in hosting costs",
      "99.9% uptime during peak traffic",
      "200% increase in conversion rate"
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "Docker", "Kubernetes"],
    duration: "4 months",
    team: "6 experts",
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 3,
    title: "Cybersecurity Enhancement",
    client: "FinanceCorp",
    industry: "Financial Services",
    description: "Implemented comprehensive cybersecurity solution that prevented 100% of attempted breaches and improved compliance scores.",
    challenge: "Financial institution needed to enhance security posture and meet strict regulatory compliance requirements.",
    solution: "Multi-layered security approach with real-time threat detection, encryption, and automated compliance monitoring.",
    results: [
      "100% prevention of security breaches",
      "95% improvement in compliance scores",
      "80% reduction in security incidents",
      "24/7 automated threat monitoring"
    ],
    technologies: ["Python", "Elasticsearch", "Kibana", "Docker", "AWS Security", "SIEM"],
    duration: "3 months",
    team: "5 experts",
    image: "/api/placeholder/600/400",
    featured: false
  }
];

const industries = [
  "Healthcare",
  "Financial Services",
  "E-commerce",
  "Manufacturing",
  "Education",
  "Technology"
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '40+', label: 'Happy Clients' },
  { number: '95%', label: 'Success Rate' },
  { number: '5+', label: 'Years Experience' }
];

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies. See how we've helped businesses transform with innovative technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Studies
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses transform with innovative technology solutions. 
                Real projects, real results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Our Services
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
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

        {/* Featured Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore some of our most successful and impactful projects.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => study.featured).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">{study.industry}</div>
                      <div className="text-sm opacity-90">{study.client}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">Featured</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {study.industry}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        {study.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {study.team}
                      </div>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse through all our successful projects across different industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">{study.industry}</div>
                      <div className="text-sm opacity-90">{study.client}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                      {study.featured && (
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">Featured</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {study.industry}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        {study.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {study.team}
                      </div>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's work together to create something amazing. Contact us today to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}