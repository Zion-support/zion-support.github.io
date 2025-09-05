import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Heart,
  Laptop,
  Users,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Building,
  Cloud,
  Shield
} from 'lucide-react';

const positions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80,000 - $120,000',
    description: 'Join our engineering team to build cutting-edge web applications and AI-powered solutions.',
    requirements: [
      '5+ years of full-stack development experience',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Strong problem-solving and communication skills'
    ]
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI Research',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90,000 - $140,000',
    description: 'Develop and implement machine learning models and AI solutions for our clients.',
    requirements: [
      '3+ years of ML/AI development experience',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with NLP and computer vision',
      'PhD or Master\'s in Computer Science preferred'
    ]
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    salary: '$85,000 - $130,000',
    description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
    requirements: [
      '4+ years of DevOps experience',
      'Expertise in Docker, Kubernetes, CI/CD',
      'Experience with AWS, Azure, or GCP',
      'Strong automation and scripting skills'
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs'
  },
  {
    icon: Laptop,
    title: 'Remote Work',
    description: 'Flexible remote work options and home office stipend'
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Collaborative and inclusive work environment'
  },
  {
    icon: Star,
    title: 'Growth Opportunities',
    description: 'Professional development and career advancement'
  }
];

export default function Careers() {
  return (
    <Layout
      title="Careers - Zion Tech Group"
      description="Join our team of innovative developers, engineers, and technology professionals. Explore exciting career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology jobs, software engineering, AI jobs"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Join Our
                <span className="text-blue-600 block">Innovation Team</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Be part of a team that's shaping the future of technology. 
                We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#positions"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover exciting career opportunities and join our growing team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Building className="h-4 w-4 mr-1" />
                        {position.department}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {position.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Apply Now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive work environment 
                that encourages growth and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
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

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Don't see a position that matches your skills? We're always looking 
                for talented individuals. Send us your resume and let's talk!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Send Your Resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-blue-300 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn About Our Culture
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}