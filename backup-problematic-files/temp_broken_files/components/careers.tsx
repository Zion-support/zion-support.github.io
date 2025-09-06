import React, { useState } from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
import { motion } from 'framer-motion',
import { 
  Users, Rocket, Brain, Globe, Award, Zap,
  Heart, Star, ArrowRight, CheckCircle, Briefcase
 from 'lucide-react',

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all'),

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'ai-research', name: 'AI Research' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'space-tech', name: 'Space Technology' },
    { id: 'sales', name: 'Sales & Business Development' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'operations', name: 'Operations' }
  ],

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related fieldExpertise in Python, TensorFlow, PyTorchExperience with large language models and neural networksStrong problem-solving and analytical skills'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Researcher',
      department: 'quantum',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms and quantum computing solutions.',
      requirements: [
        'PhD in Physics, Computer Science, or related fieldExperience with quantum programming languages (Qiskit, Cirq)Knowledge of quantum algorithms and quantum information theoryStrong mathematical and theoretical background'
      ]
    },
    {
      id: 3,
      title: 'Space Technology Engineer',
      department: 'space-tech',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and develop innovative space technology solutions and satellite systems.',
      requirements: [
        'Degree in Aerospace Engineering, Physics, or related fieldExperience with satellite design and space systemsKnowledge of orbital mechanics and space environmentFamiliarity with space industry standards and regulations'
      ]
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and cloud-based solutions.',
      requirements: [
        'Experience with React, Node.js, and cloud platformsKnowledge of modern web technologies and APIsUnderstanding of software architecture and design patternsExperience with DevOps and CI/CD practices'
      ]
    },
    {
      id: 5,
      title: 'Business Development Manager',
      department: 'sales',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive business growth through strategic partnerships and client relationships.',
      requirements: [
        'Proven track record in B2B sales and business developmentExperience in technology or consulting industriesStrong networking and relationship-building skillsUnderstanding of emerging technologies and market trends'
      ]
    }
  ],

  const companyValues = [
    {
      icon: <Brain className=&quot;w-8 h-8&quot; />,
      title: 'Innovation First',
      description: 'We push boundaries and explore new technologies to solve complex problems.'
    },
    {
      icon: <Heart className=&quot;w-8 h-8&quot; />,
      title: 'People Matter',
      description: 'Our team is our greatest asset, and we invest in their growth and well-being.'
    },
    {
      icon: <Globe className=&quot;w-8 h-8&quot; />,
      title: 'Global Impact',
      description: 'We create solutions that make a difference in the world.'
    },
    {
      icon: <Star className=&quot;w-8 h-8&quot; />,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    }
  ],

  const benefits = [
    'Competitive salary and equity packagesComprehensive health, dental, and vision insuranceFlexible work arrangements and remote work optionsProfessional development and training programsGenerous paid time off and holidays401(k) with company matchingModern technology and equipmentCollaborative and inclusive work environment'
  ],
  const filteredJobs = selectedDepartment = = 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department = = selectedDepartment),

  return (
    <UltraFuturisticBackground>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Careers - Zion Tech Group | Join Our Revolutionary Technology Team</title>
          <meta name=&quot;description&quot; content=&quot;Join Zion Tech Group's team of innovators. Explore career opportunities in AI, quantum computing, and emerging technologies. Remote work, competitive benefits, and cutting-edge projects.&quot; />
        </Head>

      <div className=&quot;min-h-screen py-12 px-4 sm:px-6 lg:px-8&quot;>
        {/* Hero Section */}
        <motion.div,
initial={ opacity: 0, y: 20 }
          animate={ opacity: 1, y: 0 }
          transition={ duration: 0.6 }
          className=&quot;text-center mb-16&quot;        >
          <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6&quot;>
            Join Our Team
          </h1>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Be part of a team that's revolutionizing technology through AI, quantum computing, 
            and space technology. Help us build the future.          </p>
        </motion.div>

        {_/* Company Culture */}
        <motion.div,
initial={ opacity: 0, y: 20 }
          animate={ opacity: 1, y: 0 }
          transition={ duration: 0.6, delay: 0.2 }
          className=&quot;mb-16&quot;
        >
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Our Culture & Values</h2>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            {companyValues.map(value, index) => (
              <div key={index} className=&quot;bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-6 rounded-2xl border border-gray-600/20 text-center&quot;>
                <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400&quot;>
                  {value.icon}
                </div>
                <h3 className=&quot;text-lg font-bold text-white mb-3&quot;>{value.title}</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>{value.description}</p>              </div>
            )}
          </div>
        </motion.div>

        {_/* Benefits */}
        <motion.div,
initial={ opacity: 0, y: 20 }
          animate={ opacity: 1, y: 0 }
          transition={ duration: 0.6, delay: 0.4 }
          className=&quot;mb-16&quot;
        >
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Why Work With Us?</h2>
          <div className=&quot;bg-gradient-to-br from-gray-900/40 to-purple-900/20 p-8 rounded-2xl border border-gray-600/20 max-w-4xl mx-auto&quot;>
            <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
              {benefits.map(benefit, index) => (
                <div key={index} className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                  <span className=&quot;text-gray-300&quot;>{benefit}</span>                </div>
              )}
            </div>
          </div>
        </motion.div>

        {_/* Job Openings */}
        <motion.div,
initial={ opacity: 0, y: 20 }
          animate={ opacity: 1, y: 0 }
          transition={ duration: 0.6, delay: 0.6 }
          className=&quot;mb-16&quot;        >
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-8&quot;>Open Positions</h2>

          {/* Department Filter */}
          <div className=&quot;flex flex-wrap justify-center gap-3 mb-8&quot;>
            {departments.map(dept) => (
              <button                key={dept.id}
                onClick={_() => setSelectedDepartment(dept.id)}
                className={_`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedDepartment = = dept.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'}`}
              >
                {dept.name}
              </button>;
            )}
          </div>;

          {/* Job Listings */}
          <div className=&quot;space-y-6&quot;>
            {filteredJobs.map(job) => (
              <motion.div,
key={job.id}
                initial={ opacity: 0, y: 20 }
                animate={ opacity: 1, y: 0 }
                className=&quot;bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-6 rounded-2xl border border-gray-600/20 hover:border-blue-500/30 transition-all duration-300&quot;              >
                <div className=&quot;flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4&quot;>
                  <div>
                    <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{job.title}</h3>
                    <div className=&quot;flex flex-wrap gap-3 text-sm&quot;>
                      <span className=&quot;bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full&quot;>
                        {departments.find(d => d.id = = job.department)?.name}
                      </span>
                      <span className=&quot;bg-green-500/20 text-green-400 px-3 py-1 rounded-full&quot;>
                        {job.location}
                      </span>
                      <span className=&quot;bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full&quot;>
                        {job.type}
                      </span>
                      <span className=&quot;bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full&quot;>
                        {job.experience}                      </span>
                    </div>
                  </div>
                  <a,
href={`/contact?position=${encodeURIComponent(job.title)}`}
                    className=&quot;mt-4 lg:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;                  >
                    Apply Now
                    <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                  </a>
                </div>

                <p className=&quot;text-gray-300 mb-4&quot;>{job.description}</p>

                <div>
                  <h4 className=&quot;text-white font-semibold mb-2&quot;>Requirements:</h4>
                  <ul className=&quot;space-y-1&quot;>
                    {job.requirements.map(req, index) => (
                      <li key={index} className=&quot;flex items-start text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0&quot; />
                        {req}                      </li>
                    )}
                  </ul>;
                </div>;
              </motion.div>;
            )}
          </div>

          {filteredJobs.length = = 0 && (
            <div className=&quot;text-center py-12&quot;>
              <Briefcase className=&quot;w-16 h-16 text-gray-500 mx-auto mb-4&quot; />
              <h3 className=&quot;text-xl font-semibold text-gray-400 mb-2&quot;>No Open Positions</h3>
              <p className=&quot;text-gray-500&quot;>                We don't have any open positions in this department at the moment. 
                Check back later or send us your resume for future opportunities.
              </p>
            </div>
          )}
        </motion.div>

        {_/* General Application */}
        <motion.div,
initial={ opacity: 0, y: 20 }
          animate={ opacity: 1, y: 0 }
          transition={ duration: 0.6, delay: 0.8 }
          className=&quot;text-center&quot;        >
          <div className=&quot;bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/20 max-w-4xl mx-auto&quot;>
            <h2 className=&quot;text-2xl font-bold text-white mb-4&quot;>Don't See the Right Fit?</h2>
            <p className=&quot;text-gray-300 mb-6&quot;>
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">              <a,
href=&quot;/contact&quot; 
                className=&quot;inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
              >
                Send Your Resume
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </a>
              <a,
href=&quot;/about&quot; 
                className=&quot;inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300&quot;
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
,

export default CareersPage,