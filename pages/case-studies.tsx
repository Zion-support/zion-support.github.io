import React from 'react';
import MainLayout from './components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Clock,
  Target
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered E-commerce Platform",
    client: "TechRetail Inc.",
    industry: "E-commerce",
    duration: "6 months",
    team: "8 developers",
    results: "300% increase in conversion rates",
    description: "Developed a comprehensive AI-powered e-commerce platform with personalized recommendations, automated inventory management, and intelligent customer service chatbots.",
    technologies: ["React", "Node.js", "TensorFlow", "MongoDB", "AWS"],
    image: "/images/case-study-1.jpg"
  },
  {
    id: 2,
    title: "Blockchain Supply Chain Solution",
    client: "Global Logistics Corp",
    industry: "Logistics",
    duration: "8 months",
    team: "12 developers",
    results: "50% reduction in supply chain costs",
    description: "Implemented a blockchain-based supply chain tracking system that provides end-to-end visibility and transparency for all stakeholders.",
    technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"],
    image: "/images/case-study-2.jpg"
  },
  {
    id: 3,
    title: "Cloud Migration & DevOps",
    client: "Financial Services Ltd",
    industry: "Finance",
    duration: "4 months",
    team: "6 developers",
    results: "99.9% uptime achieved",
    description: "Migrated legacy systems to cloud infrastructure with automated CI/CD pipelines, monitoring, and security implementations.",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    image: "/images/case-study-3.jpg"
  }
];

export default function CaseStudies() {
  return (
    <MainLayout
      title="Case Studies | Zion Tech Group"
      description="Explore our successful projects and client transformations across various industries."
      keywords="case studies, success stories, client projects, AI solutions, blockchain development, cloud migration"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Real projects, real results. See how we've helped businesses transform their operations with cutting-edge technology.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-yellow-400 mr-2" />
                  <span className="text-lg">50+ Projects</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-8 h-8 text-yellow-400 mr-2" />
                  <span className="text-lg">100+ Clients</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-8 h-8 text-yellow-400 mr-2" />
                  <span className="text-lg">95% Success Rate</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">{study.id}</div>
                      <div className="text-sm opacity-90">Case Study</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {study.client}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {study.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Target className="w-4 h-4 mr-2" />
                        {study.industry}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">Technologies:</div>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-green-600 font-semibold">
                        <CheckCircle className="w-4 h-4 inline mr-1" />
                        {study.results}
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 flex items-center">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our proven solutions and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  View All Projects
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}