import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
const jobOpenings = [{
    "id": 1,
    "title": "Senior AI/ML Engineer"
    "department": "AI Services"
    "location": "Remote"
    "type": "Full-time"
    "experience": "5+ years"
    "description": "Lead the development of cutting-edge AI solutions and machine learning models for our clients."
    "requirements": [
      "Master's degree in Computer Science or related field"
      "5+ years experience in AI/ML development"
      "Proficiency in Python, TensorFlow, PyTorch"
      "Experience with cloud platforms (AWS, Azure, GCP)"
import Layout from '../components/Layout';
const jobOpenings = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    department: "AI Services",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions and machine learning models for our clients.",
    requirements: [
      "Master's degree in Computer Science or related field",
      "5+ years experience in AI/ML development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, Azure, GCP)",      "Knowledge of cloud deployment and DevOps"
    ],
    benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Stock options"]
  },
  {
    "id": 3,
    "title": "Cloud Solutions Architect"
    "department": "IT Services"
    "location": "Remote"
    "type": "Full-time"
    "experience": "7+ years"
    "description": "Design and implement cloud infrastructure solutions for enterprise clients."
    "requirements": ["Bachelor's degree in Computer Science or related field"
      "7+ years experience in cloud architecture"
      "AWS/Azure/GCP certifications preferred"
      "Experience with containerization (Docker, Kubernetes)"
    id: 3,
    title: "Cloud Solutions Architect",
    department: "IT Services",
    location: "Remote",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement cloud infrastructure solutions for enterprise clients.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "7+ years experience in cloud architecture",
      "AWS/Azure/GCP certifications preferred",
      "Experience with containerization (Docker, Kubernetes)",      "Knowledge of compliance standards (SOC 2, ISO 27001)"
    ],
    benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Professional development"]
  },
  {
    "id": 5,
    "title": "DevOps Engineer"
    "department": "Engineering"
    "location": "Austin, TX"
    "type": "Full-time"
    "experience": "3+ years"
    "description": "Streamline our development and deployment processes with modern DevOps practices."
    "requirements": ["Bachelor's degree in Computer Science or related field"
      "3+ years experience in DevOps"
      "Proficiency in CI/CD pipelines"
      "Experience with infrastructure as code (Terraform, CloudFormation)"
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Austin, TX",
    type: "Full-time",
    experience: "3+ years",
    description: "Streamline our development and deployment processes with modern DevOps practices.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years experience in DevOps",
      "Proficiency in CI/CD pipelines",
      "Experience with infrastructure as code (Terraform, CloudFormation)",      "Strong portfolio demonstrating design skills"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Design tools budget"]
  }
];
const benefits = [{
    "title": "Competitive Compensation"
    "description": "We offer competitive salaries and performance-based bonuses"
    "icon": Star
  },
  {
    "title": "Health & Wellness"
    "description": "Comprehensive health insurance and wellness programs"
    "icon": Users
  },
  {
    "title": "Flexible Work"
    "description": "Remote work options and flexible schedules"
    "icon": Clock
  },
  {
    "title": "Professional Growth"
    "description": "Learning opportunities and career development support"
    "icon": ArrowRight
  }
];
const values = ["Innovation and creativity"
  "Collaboration and teamwork"
  "Continuous learning"
  "Work-life balance"
  "Diversity and inclusion"
const benefits = [
  {
    title: "Competitive Compensation",
    description: "We offer competitive salaries and performance-based bonuses",
    icon: Star
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
    icon: Users
  },
  {
    title: "Flexible Work",
    description: "Remote work options and flexible schedules",
    icon: Clock
  },
  {
    title: "Professional Growth",
    description: "Learning opportunities and career development support",
    icon: ArrowRight
  }
];
const values = [
  "Innovation and creativity",
  "Collaboration and teamwork",
  "Continuous learning",
  "Work-life balance",
  "Diversity and inclusion",  "Client success focus"
];
export default function TalentPage() {
  return (
    <MainLayout,
    title="Careers - Zion Tech Group"
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Join Our Team - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals and help us build the future of technology." />
      </Head>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100">
              We're looking for talented individuals who share our passion for innovation and excellence.
            </p>
          </div>
        </div>
      </section>
      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
    <Layout 
      title="Careers - Zion Tech Group"              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Be part of a team that's shaping the future of technology and helping businesses transform digitally
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#openings" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  View Open Positions
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div,
    className="text-center mb-16"
              initial={{ "opacity": 0, "y": 30 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0.8 }}
              viewport={{ "once": true }}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide our work and shape our company culture
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div,
    key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {job.department} • {job.location} • {job.type}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {job.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Work With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
        </section>
        {/* Job Openings Section */}
        <section id="openings" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div,
    className="text-center mb-16"
              initial={{ "opacity": 0, "y": 30 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0.8 }}
              viewport={{ "once": true }}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
              </p>
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Send Your Resume
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}