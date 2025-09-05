import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle,
  ArrowRight,
  Briefcase,
  Heart,
  Zap
} from 'lucide-react';
import Layout from '../components/Layout';

const positions = [
  {
    id: 1,
    title: "AI/ML Engineer",
    department: "AI Services",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "5+ years",
    description: "Develop cutting-edge AI solutions and machine learning models for our clients.",
    requirements: [
      "5+ years experience in machine learning and AI",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong understanding of deep learning algorithms"
    ],
    benefits: ["Competitive salary", "Health insurance", "Stock options", "Learning budget"]
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    department: "Micro SaaS",
    location: "New York, NY",
    type: "Full-time",
    experience: "3+ years",
    description: "Build scalable web applications and microservices for our SaaS solutions.",
    requirements: [
      "3+ years experience in full-stack development",
      "Proficiency in React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud deployment and DevOps"
    ],
    benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Stock options"]
  },
  {
    id: 3,
    title: "Cloud Solutions Architect",
    department: "IT Services",
    location: "Remote",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement cloud infrastructure solutions for enterprise clients.",
    requirements: [
      "7+ years experience in cloud architecture",
      "AWS/Azure/GCP certifications preferred",
      "Experience with containerization (Docker, Kubernetes)",
      "Strong understanding of security best practices"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Certification support"]
  },
  {
    id: 4,
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "4+ years",
    description: "Protect our clients' digital assets and implement security best practices.",
    requirements: [
      "4+ years experience in cybersecurity",
      "Certifications (CISSP, CISM, CEH) preferred",
      "Experience with security tools and frameworks",
      "Knowledge of compliance standards (SOC 2, ISO 27001)"
    ],
    benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Professional development"]
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Austin, TX",
    type: "Full-time",
    experience: "3+ years",
    description: "Streamline our development and deployment processes with modern DevOps practices.",
    requirements: [
      "3+ years experience in DevOps",
      "Proficiency in CI/CD pipelines",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Knowledge of monitoring and logging tools"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget"]
  },
  {
    id: 6,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Create intuitive and beautiful user experiences for our digital products.",
    requirements: [
      "2+ years experience in UX/UI design",
      "Proficiency in Figma, Sketch, Adobe Creative Suite",
      "Experience with user research and testing",
      "Strong portfolio demonstrating design skills"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Design tools budget"]
  }
];

const benefits = [
  {
    title: "Competitive Compensation",
    description: "We offer competitive salaries and performance-based bonuses",
    icon: Star
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
    icon: Heart
  },
  {
    title: "Flexible Work",
    description: "Remote work options and flexible schedules",
    icon: Clock
  },
  {
    title: "Professional Growth",
    description: "Learning opportunities and career development support",
    icon: Zap
  }
];

const values = [
  "Innovation and creativity",
  "Collaboration and teamwork",
  "Continuous learning",
  "Work-life balance",
  "Diversity and inclusion",
  "Client success focus"
];

export default function TalentPage() {
  return (
    <Layout
      title="Join Our Team - Zion Tech Group"
      description="Join Zion Tech Group and be part of a team that's transforming businesses with cutting-edge AI and technology solutions."
      keywords="careers, jobs, AI engineer, developer, cloud architect, cybersecurity, remote work"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Be part of a team that's transforming businesses with cutting-edge 
                AI and technology solutions. We're looking for passionate individuals 
                who want to make a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#positions"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role for your skills and interests.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {positions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {position.department}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                      {position.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {position.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{position.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span className="text-sm">{position.experience}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {position.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={`/contact?position=${encodeURIComponent(position.title)}`}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
                  >
                    Apply Now
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive benefits package and a supportive work environment 
                that encourages growth and innovation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-sm font-medium text-gray-900">
                    {value}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Don't see a position that matches your skills? We're always looking for 
                talented individuals. Send us your resume and let's talk.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <span>Send Your Resume</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}