import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { }
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Download,;
  Globe;
} from 'lucide-react';
import Layout from '../components/Layout';

const trainingPrograms = []
  {}
    title: "AI & Machine Learning Fundamentals",
    description: "Comprehensive introduction to AI concepts, algorithms, and practical applications",
    duration: "40 hours",
    level: "Beginner",
    format: "Online + Hands-on",
    price: "$2,499",
    features: [Python for AI", "TensorFlow & PyTorch", "Real-world projects", "Certification"];
  },
  {}
    title: "Cloud Architecture & DevOps",
    description: "Master cloud platforms and DevOps practices for scalable applications",
    duration: "32 hours",
    level: "Intermediate",
    format: "Hybrid",
    price: "$1,999",
    features: [AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"];
  },
  {}
    title: "Cybersecurity Essentials",
    description: "Learn to protect systems and data from cyber threats and attacks",
    duration: "24 hours",
    level: "Beginner",
    format: "Online",
    price: "$1,499",
    features: [Threat Analysis", "Security Tools", "Incident Response", "Compliance"];
  },
  {}
    title: "Quantum Computing Basics",
    description: "Introduction to quantum computing principles and applications",
    duration: "16 hours",
    level: "Advanced",
    format: "Online",
    price: "$3,999",
    features: [Quantum Mechanics", "Quantum Algorithms", "Qiskit Programming", "Future Applications"];
  };
];

import React from 'react';'
import MainLayout from '../components/layout/MainLayout';'

const Page = () => {
}
return (;
    <MainLayout,
title="Page - Zion Tech Group""
      description="Zion Tech Group page""
    >
      <div className="min-h-screen bg-gray-50">"
        <div className="max-w-7xl mx-auto px-4 py-20">"
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>"
          <p className="text-xl text-gray-600">Coming soon...</p>"
        </div>
      </div>
    </MainLayout>
  );
};

        {/* Training Programs Section */};
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Training Programs;
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive range of training programs designed by industry experts;
                to help you master the latest technologies and advance your career.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingPrograms.map((program, index) => (}
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.8, delay: index * 0.1 }};
                  viewport={{ once: true }};
                  whileHover={{ y: -5 }};
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {program.level};
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{program.price}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {program.title};
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description};
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {program.duration};
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-1" />
                      {program.format};
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (}
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature};
                      </div>
                    ))};
                  </div>
                  
                  <Link;
                    href="/contact"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center block group-hover:from-purple-500 group-hover:to-blue-600"
                  >
                    Enroll Now;
                  </Link>
                </motion.div>
              ))};
            </div>
          </div>
        </section>

        {/* Certification Paths Section */};
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Certification Paths;
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Follow structured learning paths to earn industry-recognized certifications;
                and advance your career in technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificationPaths.map((path, index) => (}
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-200"
                  initial={{ opacity: 0, x: -20 }};
                  whileInView={{ opacity: 1, x: 0 }};
                  transition={{ duration: 0.8, delay: index * 0.1 }};
                  viewport={{ once: true }};
                >
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{path.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {path.duration};
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {path.courses} courses;
                    </div>
                  </div>
                  
                  <Link;
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                  >
                    Learn More;
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))};
            </div>
          </div>
        </section>

        {/* CTA Section */};
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div;
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
            >
              <h2 className="text-3xl md: text-4xl font-bold mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have advanced their careers with our training programs. 
                Get started today and unlock your potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Enroll Now;
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Us;
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
