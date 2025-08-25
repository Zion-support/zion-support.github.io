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
      icon: <Award className="h-6 w-6" />,
      title: "Career Growth",
      description: "Continuous learning, mentorship, and advancement opportunities"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Diverse Team",
      description: "Collaborate with brilliant minds from around the world"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Innovation",
      description: "Be at the forefront of AI, quantum computing, and emerging technologies"
    }
  ];

  const values = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Innovation First",
      description: "We push boundaries and embrace bold ideas that challenge the status quo"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Integrity",
      description: "We build trust through transparency, honesty, and ethical practices"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We believe the best solutions come from diverse teams working together"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code to customer experience"
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
      </motion.div>

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
      </section>

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
              Don't See the Right Role?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-zion-blue-dark p-6 rounded-xl border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-zion-cyan">{position.title}</h3>
                  <span className="bg-zion-purple/20 text-zion-purple-light px-3 py-1 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-zion-slate-light" />
                    <span className="text-zion-slate-light">{position.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4 text-zion-slate-light" />
                    <span className="text-zion-slate-light">{position.department}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-zion-slate-light" />
                    <span className="text-zion-slate-light">{position.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-zion-slate-light" />
                    <span className="text-zion-slate-light">{position.salary}</span>
                  </div>
                </div>

                <p className="text-zion-slate-light mb-4">{position.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-slate-light mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, index) => (
                      <span key={index} className="bg-zion-blue-light/20 text-zion-slate-light px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-zion-slate-light mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals!
            </p>
            <Link to="/contact">
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Send Us Your Resume
              </button>
              <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                Contact Recruiting
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our hiring process is designed to be transparent, efficient, and focused on finding 
              the right fit for both you and our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Application</h3>
              <p className="text-zion-slate-light">Submit your resume and cover letter through our portal</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Screening</h3>
              <p className="text-zion-slate-light">Initial review and phone screening with our team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Interview</h3>
              <p className="text-zion-slate-light">Technical assessment and team interviews</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Offer</h3>
              <p className="text-zion-slate-light">Welcome to the Zion Tech Group family!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-purple-dark via-zion-blue to-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make History?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join us in building the future of technology. Your next adventure starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="#open-positions">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Browse Openings
              </button>
            </Link>
            <Link to="/about">
              <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
