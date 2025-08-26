import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Positions', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 6 },
    { id: 'ai', name: 'AI & ML', count: 4 },
    { id: 'business', name: 'Business', count: 2 }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      category: 'ai',
      location: 'Wilmington, DE / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning platforms.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Cloud Computing'],
      isNew: true
    },
    {
      id: 2,
      title: 'Quantum Computing Researcher',
      category: 'ai',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms for AI applications.',
      skills: ['Quantum Computing', 'Python', 'Qiskit', 'Linear Algebra', 'Quantum Algorithms'],
      isNew: true
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      category: 'engineering',
      location: 'Wilmington, DE / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain cloud infrastructure and CI/CD pipelines.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      isNew: false
    },
    {
      id: 4,
      title: 'Frontend Developer',
      category: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Create modern, responsive web applications using React and TypeScript.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'GraphQL'],
      isNew: false
    },
    {
      id: 5,
      title: 'AI Product Manager',
      category: 'business',
      location: 'Wilmington, DE / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead product strategy for AI-powered solutions and platforms.',
      skills: ['Product Management', 'AI/ML', 'Agile', 'Data Analysis', 'User Research'],
      isNew: false
    },
    {
      id: 6,
      title: 'Cybersecurity Specialist',
      category: 'engineering',
      location: 'Wilmington, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Implement and maintain security measures for enterprise systems.',
      skills: ['Cybersecurity', 'Network Security', 'Compliance', 'Penetration Testing', 'SIEM'],
      isNew: false
    }
  ];

  const benefits = [
    {
      icon: '🏠',
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible schedules'
    },
    {
      icon: '💻',
      title: 'Latest Technology',
      description: 'Access to cutting-edge tools and platforms'
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and certifications'
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage'
    },
    {
      icon: '💰',
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with equity options'
    },
    {
      icon: '🎯',
      title: 'Impact & Growth',
      description: 'Work on projects that shape the future of technology'
    }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Join Our Mission
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8"
          >
            Help us build the future of technology. We're looking for passionate innovators, 
            problem-solvers, and visionaries to join our team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="#open-positions"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Work at Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're building more than just technology – we're building a future where AI and 
              human intelligence work together to solve the world's greatest challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find your perfect role and join our innovative team
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {job.title}
                      </h3>
                      {job.isNew && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314-11.314z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2H8a2 2 0 00-2-2v2" />
                        </svg>
                        {job.type}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.experience}
                      </span>
                    </div>
                    
                    <p className="text-slate-700 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <Link
                      to={`/careers/apply/${job.id}`}
                      className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No positions available in this category at the moment.</p>
              <p className="text-slate-500 mt-2">Check back later or contact us for future opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How to Apply
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our simple and transparent application process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Submit Application',
                description: 'Fill out our online application form with your details and resume.',
                icon: '📝'
              },
              {
                step: '02',
                title: 'Initial Review',
                description: 'Our team reviews your application and reaches out within 48 hours.',
                icon: '👀'
              },
              {
                step: '03',
                title: 'Interview Process',
                description: 'Complete technical assessments and team interviews.',
                icon: '🤝'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Don't see a position that fits? We're always looking for talented individuals. 
            Send us your resume and let's discuss how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;