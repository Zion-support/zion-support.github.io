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
import Layout from '../components/Layout';    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"]
  },
  {
    "id": 2,
    "title": "Full-Stack Developer"
    "department": "Micro SaaS"
    "location": "New York, NY"
    "type": "Full-time"
    "experience": "3+ years"
    "description": "Build scalable web applications and microservices for our SaaS solutions."
    "requirements": ["Bachelor's degree in Computer Science or related field"
      "3+ years experience in full-stack development"
      "Proficiency in React, Node.js, TypeScript"
      "Experience with databases (PostgreSQL, MongoDB)"
    id: 2,
    title: "Full-Stack Developer",
    department: "Micro SaaS",
    location: "New York, NY",
    type: "Full-time",
    experience: "3+ years",
    description: "Build scalable web applications and microservices for our SaaS solutions.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years experience in full-stack development",
      "Proficiency in React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",    ],
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
      "Experience with containerization (Docker, Kubernetes)",    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Certification support"]
  },
  {
    "id": 4,
    "title": "Cybersecurity Specialist"
    "department": "Security"
    "location": "San Francisco, CA"
    "type": "Full-time"
    "experience": "4+ years"
    "description": "Protect our clients' digital assets and implement security best practices."
    "requirements": ["Bachelor's degree in Cybersecurity or related field"
      "4+ years experience in cybersecurity"
      "Certifications (CISSP, CISM, CEH) preferred"
      "Experience with security tools and frameworks"
    id: 4,
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "4+ years",
    description: "Protect our clients' digital assets and implement security best practices.",
    requirements: [
      "Bachelor's degree in Cybersecurity or related field",
      "4+ years experience in cybersecurity",
      "Certifications (CISSP, CISM, CEH) preferred",
      "Experience with security tools and frameworks",    ],
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
      "Experience with infrastructure as code (Terraform, CloudFormation)",    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget"]
  },
  {
    "id": 6,
    "title": "UX/UI Designer"
    "department": "Design"
    "location": "Remote"
    "type": "Full-time"
    "experience": "2+ years"
    "description": "Create intuitive and beautiful user experiences for our digital products."
    "requirements": ["Bachelor's degree in Design or related field"
      "2+ years experience in UX/UI design"
      "Proficiency in Figma, Sketch, Adobe Creative Suite"
      "Experience with user research and testing"
    id: 6,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Create intuitive and beautiful user experiences for our digital products.",
    requirements: [
      "Bachelor's degree in Design or related field",
      "2+ years experience in UX/UI design",
      "Proficiency in Figma, Sketch, Adobe Creative Suite",
      "Experience with user research and testing",    ],
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
  "Client success focus"
];
export default function TalentPage() {



const values = [;
  "Innovation and creativity",;
  "Collaboration and teamwork",;
  "Continuous learning",;
  "Work-life balance",;
  "Diversity and inclusion",;
  "Client success focus";
];
export default function TalentPage() {;


  return (
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
      title="Careers - Zion Tech Group"      description="Join our team of talented professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology careers, AI engineer, developer, cloud architect">;
      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */}
    initial={{ "opacity": 0, "y": 30 }}
              animate={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0 && 0.8 }}
            <motion && motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
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
              transition={{ duration: 0 && 0.8 }}
              className="text-center max-w-4xl mx-auto">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Join Our Team;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8">;
                Be part of a team that's shaping the future of technology and helping businesses transform digitally;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link href="#openings" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">;
                  View Open Positions;
                </Link>;
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">;
                  Get In Touch;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Benefits Section */}
        <section className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div,
    className="text-center mb-16"
              initial={{ "opacity": 0, "y": 30 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0 && 0.8 }}
              viewport={{ "once": true }}
            <motion && motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're building a culture of innovation, collaboration, and growth where talented individuals can thrive
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div,
    key={index}
                    className="text-center p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}                  >
                    <div className="text-blue-600 mb-4 mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              transition={{ duration: 0.8 }}
