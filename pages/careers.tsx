import React from "react";
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Users, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    location: "Remote / New York, NY",
    type: "Full-time",
    department: "Engineering",
    description: "Join our engineering team to build cutting-edge web applications and AI-powered solutions.",
    requirements: [
      "5+ years of full-stack development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong problem-solving and communication skills"
    ]
  },
  {
    title: "AI/ML Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "AI Research",
    description: "Develop and implement machine learning models and AI solutions for our clients.",
    requirements: [
      "3+ years of ML/AI development experience",
      "Strong background in Python, TensorFlow, or PyTorch",
      "Experience with data preprocessing and model deployment",
      "PhD or Master's in Computer Science or related field"
    ]
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Infrastructure",
    description: "Manage and optimize our cloud infrastructure and deployment pipelines.",
    requirements: [
      "4+ years of DevOps experience",
      "Expertise in Docker, Kubernetes, and CI/CD",
      "Experience with monitoring and logging tools",
      "Strong knowledge of cloud security best practices"
    ]
  },
  {
    title: "Product Manager",
    location: "New York, NY",
    type: "Full-time",
    department: "Product",
    description: "Lead product strategy and development for our AI-powered solutions.",
    requirements: [
      "3+ years of product management experience",
      "Experience with B2B SaaS products",
      "Strong analytical and communication skills",
      "Technical background preferred"
    ]
  }
];

const benefits = [
  "Competitive salary and equity",
  "Comprehensive health insurance",
  "Flexible work arrangements",
  "Professional development budget",
  "Unlimited PTO",
  "Top-tier equipment and tools"
];

export default function CareersPage() {
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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build the future of technology with us. We're looking for passionate, 
              innovative individuals to join our mission of transforming businesses through AI and technology.
            </p>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Work With Us?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Job Openings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Open Positions
            </h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {job.department}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {job.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-blue-600 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and 
              let us know how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
                <Users className="w-5 h-5 mr-2" />
                Send Your Resume
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                <ArrowRight className="w-5 h-5 mr-2" />
                Learn About Our Culture
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}