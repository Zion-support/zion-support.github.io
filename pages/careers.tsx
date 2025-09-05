import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Laptop, 
  BookOpen, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Zap,
  Shield,
  Globe,
  Code,
  Database,
  Cloud,
  Brain,
  Target
} from 'lucide-react';

const positions = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Engineering',
    experience: '5+ years',
    description: 'We are looking for an experienced full-stack developer to join our engineering team. You will work on cutting-edge projects using modern technologies.',
    requirements: [
      '5+ years of full-stack development experience',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Strong problem-solving skills',
      'Excellent communication skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    department: 'AI Research',
    experience: '3+ years',
    description: 'Join our AI team to develop innovative machine learning solutions and work on cutting-edge AI projects.',
    requirements: [
      '3+ years of ML/AI experience',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with deep learning models',
      'Strong mathematical background',
      'PhD or Master\'s in Computer Science preferred'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
  },
  {
    id: 3,
    title: 'Product Manager',
    location: 'New York, NY',
    type: 'Full-time',
    department: 'Product',
    experience: '5+ years',
    description: 'Lead product strategy and development for our AI-powered solutions. Work closely with engineering and design teams.',
    requirements: [
      '5+ years of product management',
      'AI/ML product experience preferred',
      'Strong analytical skills',
      'Excellent communication skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Certification support']
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs'
  },
  {
    icon: Laptop,
    title: 'Remote Work',
    description: 'Work from anywhere with flexible schedules'
  },
  {
    icon: BookOpen,
    title: 'Learning & Development',
    description: 'Access to courses, conferences, and professional development opportunities'
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description: 'Competitive salary, equity options, and performance bonuses'
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Collaborative, inclusive, and innovative work environment'
  },
  {
    icon: Award,
    title: 'Career Growth',
    description: 'Clear career paths and opportunities for advancement'
  }
];

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'We encourage creative thinking and innovative solutions'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work together to achieve common goals'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do'
  }
];

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative technologists. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, technology, AI, development, remote work" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Be part of a team that's shaping the future of technology. 
                Work on cutting-edge projects and make a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#open-positions" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  View Open Positions
                </Link>
                <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive benefits and perks to support our team members' 
                well-being and professional growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {positions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Link
                        href={`/careers/${position.id}`}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {position.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume 
                and let us know how you'd like to contribute to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Send Resume
                </Link>
                <Link href="/about" className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}