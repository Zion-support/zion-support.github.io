import React from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag, ExternalLink } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Platform",
      description: "Developed a comprehensive AI platform for a major healthcare provider to analyze patient data and improve treatment outcomes.",
      industry: "Healthcare",
      duration: "6 months",
      readTime: "5 min read",
      image: "/api/placeholder/600/400",
      results: [
        "40% improvement in diagnostic accuracy",
        "30% reduction in treatment costs",
        "50% faster patient data processing"
      ],
      technologies: ["Machine Learning", "Python", "TensorFlow", "AWS", "React"]
    },
    {
      id: 2,
      title: "Cloud Migration for Financial Services",
      description: "Successfully migrated a legacy financial system to the cloud, improving scalability and reducing operational costs.",
      industry: "Finance",
      duration: "4 months",
      readTime: "4 min read",
      image: "/api/placeholder/600/400",
      results: [
        "60% reduction in infrastructure costs",
        "99.9% uptime achieved",
        "50% faster transaction processing"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "PostgreSQL", "Node.js"]
    },
    {
      id: 3,
      title: "E-commerce Microservices Architecture",
      description: "Built a scalable microservices architecture for a growing e-commerce platform, enabling rapid feature development.",
      industry: "Retail",
      duration: "8 months",
      readTime: "6 min read",
      image: "/api/placeholder/600/400",
      results: [
        "300% increase in system performance",
        "90% reduction in deployment time",
        "99.5% system reliability"
      ],
      technologies: ["Microservices", "Docker", "Kubernetes", "MongoDB", "React"]
    },
    {
      id: 4,
      title: "Cybersecurity Implementation for Government",
      description: "Implemented comprehensive cybersecurity measures for a government agency, protecting sensitive data and systems.",
      industry: "Government",
      duration: "5 months",
      readTime: "5 min read",
      image: "/api/placeholder/600/400",
      results: [
        "Zero security breaches achieved",
        "100% compliance with regulations",
        "80% reduction in security incidents"
      ],
      technologies: ["Cybersecurity", "SIEM", "Firewall", "Encryption", "Monitoring"]
    },
    {
      id: 5,
      title: "IoT Manufacturing Analytics",
      description: "Developed an IoT analytics platform for a manufacturing company to optimize production processes and reduce waste.",
      industry: "Manufacturing",
      duration: "7 months",
      readTime: "5 min read",
      image: "/api/placeholder/600/400",
      results: [
        "25% reduction in production waste",
        "35% improvement in efficiency",
        "20% cost savings achieved"
      ],
      technologies: ["IoT", "Python", "Machine Learning", "Azure", "Power BI"]
    },
    {
      id: 6,
      title: "Digital Transformation for Education",
      description: "Led digital transformation initiative for a university, modernizing systems and improving student experience.",
      industry: "Education",
      duration: "10 months",
      readTime: "6 min read",
      image: "/api/placeholder/600/400",
      results: [
        "50% improvement in student satisfaction",
        "40% reduction in administrative costs",
        "90% increase in system efficiency"
      ],
      technologies: ["Cloud Computing", "React", "Node.js", "MongoDB", "AWS"]
    }
  ];

  const industries = ["All", "Healthcare", "Finance", "Retail", "Government", "Manufacturing", "Education"];

  return (
    <Layout 
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and see how we've helped businesses across various industries achieve their technology goals."
      keywords="case studies, success stories, projects, technology solutions, business transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories & 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Case Studies
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Discover how we've helped businesses transform their operations and achieve remarkable results
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-4 justify-center">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    className={`px-6 py-2 rounded-full transition-all duration-200 ${
                      industry === "All" 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <motion.article
                    key={study.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">Case Study Image</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Tag className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 text-sm font-semibold">{study.industry}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{study.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{study.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{study.readTime}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {study.results.slice(0, 2).map((result, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {study.technologies.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
              <p className="text-xl text-blue-200 mb-8">
                Let's discuss how we can help transform your business with our proven technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;