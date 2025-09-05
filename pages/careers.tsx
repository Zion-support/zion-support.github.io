import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  ArrowRight,
  CheckCircle,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  Globe,
  Heart, 
  Zap, 
  Award, 
  Coffee, 
  Laptop, 
  Home, 
  DollarSign, 
  BookOpen
} from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Industry-leading compensation packages with performance bonuses"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous learning opportunities and professional development programs"
  },
  {
    icon: Home,
    title: "Remote Work",
    description: "Flexible remote work options and work-life balance"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: Zap,
    title: "Innovation Time",
    description: "Dedicated time for personal projects and innovation"
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "Clear career progression paths and mentorship programs"
  }
];

const openPositions = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "AI Research",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead development of cutting-edge AI solutions and machine learning models."
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "Cloud Infrastructure",
    location: "New York, NY",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement scalable cloud architectures for enterprise clients."
  },
  {
    id: 3,
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Protect our clients' digital assets with advanced security solutions."
  },
  {
    id: 4,
    title: "Frontend Developer",
    department: "Engineering",
    location: "London, UK",
    type: "Full-time",
    experience: "3+ years",
    description: "Build beautiful and responsive user interfaces for our applications."
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Singapore",
    type: "Full-time",
    experience: "4+ years",
    description: "Automate deployment pipelines and manage cloud infrastructure."
  },
  {
    id: 6,
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "6+ years",
    description: "Drive product strategy and roadmap for our technology solutions."
  }
];

const values = [
  {
    title: "Innovation",
    description: "We encourage creative thinking and embrace new technologies"
  },
  {
    title: "Collaboration",
    description: "We believe great solutions come from diverse teams working together"
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do"
  },
  {
    title: "Growth",
    description: "We invest in our people and support their professional development"
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head>
        <title>Careers - ZION TECH GROUP</title>
        <meta name="description" content="Join our team of innovators. Explore career opportunities at ZION TECH GROUP and help shape the future of technology." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, cloud architect, cybersecurity, software developer" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-blue-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Be part of a team that's shaping the future of technology. Join us in building innovative solutions that make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">95+ Team Members</span>
              </div>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">15+ Countries</span>
              </div>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">50% Women in Leadership</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer competitive benefits and a culture that values innovation, collaboration, and personal growth.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next opportunity and join our growing team of innovators.
            </p>
          </motion.div>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {position.experience}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{position.description}</p>
                  </div>
                  <div className="lg:ml-6">
                    <Link
                      href={`/careers/${position.id}`}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apply Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide our culture and shape how we work together.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}