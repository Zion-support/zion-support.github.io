import React from "react";
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: "AI-Powered E-commerce Optimization",
    client: "TechRetail Inc.",
    industry: "E-commerce",
    duration: "6 months",
    results: [
      "40% increase in conversion rates",
      "25% reduction in cart abandonment",
      "60% improvement in customer satisfaction"
    ],
    description: "Implemented AI-driven personalization and recommendation engine for a major e-commerce platform.",
    challenge: "Low conversion rates and high cart abandonment due to poor product recommendations.",
    solution: "Developed a machine learning system that analyzes user behavior and provides personalized product recommendations in real-time.",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"]
  },
  {
    title: "Healthcare Data Analytics Platform",
    client: "MediCare Systems",
    industry: "Healthcare",
    duration: "8 months",
    results: [
      "50% faster diagnosis times",
      "30% reduction in medical errors",
      "80% improvement in data processing speed"
    ],
    description: "Built a comprehensive data analytics platform for healthcare providers to improve patient outcomes.",
    challenge: "Fragmented patient data across multiple systems making it difficult to provide comprehensive care.",
    solution: "Created a unified data platform with AI-powered analytics to provide insights and recommendations to healthcare providers.",
    technologies: ["Python", "Apache Spark", "PostgreSQL", "Docker", "Kubernetes"]
  },
  {
    title: "Financial Risk Assessment System",
    client: "SecureBank",
    industry: "Finance",
    duration: "4 months",
    results: [
      "70% reduction in false positives",
      "45% faster risk assessment",
      "90% accuracy in fraud detection"
    ],
    description: "Developed an AI-powered risk assessment system for real-time fraud detection and credit scoring.",
    challenge: "High false positive rates in fraud detection leading to poor customer experience and increased operational costs.",
    solution: "Implemented machine learning models that analyze transaction patterns and user behavior to accurately identify fraudulent activities.",
    technologies: ["Python", "Scikit-learn", "Apache Kafka", "Redis", "React"]
  },
  {
    title: "Manufacturing Process Optimization",
    client: "AutoParts Manufacturing",
    industry: "Manufacturing",
    duration: "10 months",
    results: [
      "35% reduction in production costs",
      "20% increase in production efficiency",
      "50% reduction in quality defects"
    ],
    description: "Optimized manufacturing processes using IoT sensors and AI analytics to improve efficiency and quality.",
    challenge: "Inefficient production processes and high defect rates leading to increased costs and customer complaints.",
    solution: "Deployed IoT sensors throughout the production line and implemented AI algorithms to monitor and optimize processes in real-time.",
    technologies: ["Python", "TensorFlow", "IoT Sensors", "Apache Kafka", "InfluxDB"]
  }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries transform 
              their operations and achieve remarkable results through innovative technology solutions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {study.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.client}
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {study.industry}
                        </span>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {study.duration}
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg">
                        {study.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Challenge
                      </h3>
                      <p className="text-gray-600">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Solution
                      </h3>
                      <p className="text-gray-600">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Results
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <TrendingUp className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-blue-600 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let us help you achieve similar results. Our team of experts is ready 
              to work with you to transform your business through innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
                <CheckCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}