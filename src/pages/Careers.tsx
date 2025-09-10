import React from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon,
  AcademicCapIcon,
  HeartIcon,
  GlobeAltIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: HeartIcon,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs'
    },
    {
      icon: AcademicCapIcon,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, certifications, and career growth paths'
    },
    {
      icon: GlobeAltIcon,
      title: 'Remote First',
      description: 'Work from anywhere with flexible schedules and global collaboration'
    },
    {
      icon: SparklesIcon,
      title: 'Innovation Time',
      description: 'Dedicated time for personal projects and innovation initiatives'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and autonomous systems'
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technology',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms and quantum computing solutions'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines'
    },
    {
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our systems and clients with advanced security measures'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive product strategy and execution for AI-powered solutions'
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Bridge technical expertise with business solutions for clients'
    }
  ];

  const values = [
    {
      icon: RocketLaunchIcon,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technology'
    },
    {
      icon: HeartIcon,
      title: 'Human Centered',
      description: 'Technology serves humanity, not the other way around'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Impact',
      description: 'We solve problems that affect people worldwide'
    },
    {
      icon: SparklesIcon,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Join Our Mission
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Help us shape the future of AI, quantum computing, and technology. 
            Work with brilliant minds on projects that change the world.
          </motion.p>
        </div>
      </div>

      {/* Company Values */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Why Work With Us
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Open Positions
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                    {position.type}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <BriefcaseIcon className="h-4 w-4" />
                      <span>{position.department}</span>
                    </span>
                    <span>•</span>
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.experience}</span>
                  </div>
                  <p className="text-gray-300">{position.description}</p>
                </div>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join our team of innovators and help us build the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                View All Positions
              </button>
              <button className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
                Contact Recruiting
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Careers;