<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
import { motion } from 'framer-motion',
import { 
  Users, Rocket, Brain, Globe, Award, Zap, 
  Heart, Star, ArrowRight, CheckCircle, Briefcase
} from 'lucide-react',

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
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import {_Users, _Rocket, _Brain, _Globe, _Award, _Zap, _Heart, _Star, _ArrowRight, _CheckCircle, _Briefcase} from 'lucide-react';

export default function Careers() {_const [selectedDepartment, _setSelectedDepartment] = useState('all');

  const _departments = [
    { id: 'all', _name: 'All Departments'},
    {_id: 'engineering', _name: 'Engineering'},
    {_id: 'ai-research', _name: 'AI Research'},
    {_id: 'quantum', _name: 'Quantum Computing'},
    {_id: 'space-tech', _name: 'Space Technology'},
    {_id: 'sales', _name: 'Sales & Business Development'},
    {_id: 'marketing', _name: 'Marketing'},
    {_id: 'operations', _name: 'Operations'}
  ];

  const _jobOpenings = [
    {_id: 1, _title: 'Senior AI Engineer', _department: 'ai-research', _location: 'Remote / Middletown, _DE', _type: 'Full-time', _experience: '5+ years', _description: 'Lead the development of cutting-edge AI solutions and machine learning models.', _requirements: [
        'Advanced degree in Computer Science, _AI, _or related field', _'Expertise in Python, _TensorFlow, _PyTorch', _'Experience with large language models and neural networks', _'Strong problem-solving and analytical skills'
      ]},
    {_id: 2, _title: 'Quantum Computing Researcher', _department: 'quantum', _location: 'Remote / Middletown, _DE', _type: 'Full-time', _experience: '3+ years', _description: 'Research and develop quantum algorithms and quantum computing solutions.', _requirements: [
        'PhD in Physics, _Computer Science, _or related field', _'Experience with quantum programming languages (Qiskit, _Cirq)', _'Knowledge of quantum algorithms and quantum information theory', _'Strong mathematical and theoretical background'
      ]},
    {_id: 3, _title: 'Space Technology Engineer', _department: 'space-tech', _location: 'Remote / Middletown, _DE', _type: 'Full-time', _experience: '4+ years', _description: 'Design and develop innovative space technology solutions and satellite systems.', _requirements: [
        'Degree in Aerospace Engineering, _Physics, _or related field', _'Experience with satellite design and space systems', _'Knowledge of orbital mechanics and space environment', _'Familiarity with space industry standards and regulations'
      ]},
    {_id: 4, _title: 'Full Stack Developer', _department: 'engineering', _location: 'Remote / Middletown, _DE', _type: 'Full-time', _experience: '3+ years', _description: 'Build scalable web applications and cloud-based solutions.', _requirements: [
        'Experience with React, _Node.js, _and cloud platforms', _'Knowledge of modern web technologies and APIs', _'Understanding of software architecture and design patterns', _'Experience with DevOps and CI/CD practices'
      ]},
    {_id: 5, _title: 'Business Development Manager', _department: 'sales', _location: 'Remote / Middletown, _DE', _type: 'Full-time', _experience: '5+ years', _description: 'Drive business growth through strategic partnerships and client relationships.', _requirements: [
        'Proven track record in B2B sales and business development', _'Experience in technology or consulting industries', _'Strong networking and relationship-building skills', _'Understanding of emerging technologies and market trends'
      ]}
  ];

  const _companyValues = [
    {_icon: <Brain className="w-8 h-8" />, _title: 'Innovation First', _description: 'We push boundaries and explore new technologies to solve complex problems.'},
    {_icon: <Heart className="w-8 h-8" />, _title: 'People Matter', _description: 'Our team is our greatest asset, _and we invest in their growth and well-being.'},
    {_icon: <Globe className="w-8 h-8" />, _title: 'Global Impact', _description: 'We create solutions that make a difference in the world.'},
    {_icon: <Star className="w-8 h-8" />, _title: 'Excellence', _description: 'We strive for the highest quality in everything we do.'}
  ];

  const _benefits = [
    'Competitive salary and equity packages',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and remote work options',
    'Professional development and training programs',
    'Generous paid time off and holidays',
    '401(k) with company matching',
    'Modern technology and equipment',
    'Collaborative and inclusive work environment'
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment),

<<<<<<< HEAD
  return (
    <UltraFuturisticBackground>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Careers - Zion Tech Group | Join Our Revolutionary Technology Team</title>
          <meta name=&quot;description&quot; content=&quot;Join Zion Tech Group's team of innovators. Explore career opportunities in AI, quantum computing, and emerging technologies. Remote work, competitive benefits, and cutting-edge projects.&quot; />
        </Head>

      <div className=&quot;min-h-screen py-12 px-4 sm:px-6 lg:px-8&quot;>
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=&quot;text-center mb-16&quot;
=======
  return (_<UltraFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Careers - Zion Tech Group | Join Our Revolutionary Technology Team</title>
          <meta name="description" content="Join Zion Tech Group's team of innovators. Explore career opportunities in AI, _quantum computing, _and emerging technologies. Remote work, _competitive benefits, _and cutting-edge projects." />
        </Head>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {_/* Hero Section */}
        <motion.div 
          initial={_{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6}}
          className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6&quot;>
            Join Our Team
          </h1>
<<<<<<< HEAD
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Be part of a team that's revolutionizing technology through AI, quantum computing, 
            and space technology. Help us build the future.
=======
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a team that's revolutionizing technology through AI, _quantum computing, _and space technology. Help us build the future.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </p>
        </motion.div>

        {_/* Company Culture */}
        <motion.div 
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=&quot;mb-16&quot;
        >
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Our Culture & Values</h2>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            {companyValues.map((value, index) => (
              <div key={index} className=&quot;bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-6 rounded-2xl border border-gray-600/20 text-center&quot;>
                <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400&quot;>
                  {value.icon}
                </div>
                <h3 className=&quot;text-lg font-bold text-white mb-3&quot;>{value.title}</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>{value.description}</p>
=======
          initial={_{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.2}}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Culture & Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {_companyValues.map((value, _index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-6 rounded-2xl border border-gray-600/20 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                  {_value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{_value.title}</h3>
                <p className="text-gray-300 text-sm">{_value.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            ))}
          </div>
        </motion.div>

        {_/* Benefits */}
        <motion.div 
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className=&quot;mb-16&quot;
        >
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Why Work With Us?</h2>
          <div className=&quot;bg-gradient-to-br from-gray-900/40 to-purple-900/20 p-8 rounded-2xl border border-gray-600/20 max-w-4xl mx-auto&quot;>
            <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                  <span className=&quot;text-gray-300&quot;>{benefit}</span>
=======
          initial={_{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.4}}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
          <div className="bg-gradient-to-br from-gray-900/40 to-purple-900/20 p-8 rounded-2xl border border-gray-600/20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {_benefits.map(_(benefit, _index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{_benefit}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {_/* Job Openings */}
        <motion.div 
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className=&quot;mb-16&quot;
=======
          initial={_{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.6}}
          className="mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-8&quot;>Open Positions</h2>
          
<<<<<<< HEAD
          {/* Department Filter */}
          <div className=&quot;flex flex-wrap justify-center gap-3 mb-8&quot;>
            {departments.map((dept) => (
              <button
=======
          {_/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {_departments.map(_(dept) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                key={dept.id}
                onClick={_() => setSelectedDepartment(dept.id)}
                className={_`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'}`}
              >
                {_dept.name}
              </button>
            ))}
          </div>

<<<<<<< HEAD
          {/* Job Listings */}
          <div className=&quot;space-y-6&quot;>
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className=&quot;bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-6 rounded-2xl border border-gray-600/20 hover:border-blue-500/30 transition-all duration-300&quot;
=======
          {_/* Job Listings */}
          <div className="space-y-6">
            {_filteredJobs.map(_(job) => (
              <motion.div
                key={job.id}
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                className="bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-6 rounded-2xl border border-gray-600/20 hover:border-blue-500/30 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className=&quot;flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4&quot;>
                  <div>
<<<<<<< HEAD
                    <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{job.title}</h3>
                    <div className=&quot;flex flex-wrap gap-3 text-sm&quot;>
                      <span className=&quot;bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full&quot;>
                        {departments.find(d => d.id === job.department)?.name}
                      </span>
                      <span className=&quot;bg-green-500/20 text-green-400 px-3 py-1 rounded-full&quot;>
                        {job.location}
                      </span>
                      <span className=&quot;bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full&quot;>
                        {job.type}
                      </span>
                      <span className=&quot;bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full&quot;>
                        {job.experience}
=======
                    <h3 className="text-xl font-bold text-white mb-2">{_job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                        {_departments.find(d => d.id === job.department)?.name}
                      </span>
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                        {_job.location}
                      </span>
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                        {_job.type}
                      </span>
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                        {_job.experience}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </span>
                    </div>
                  </div>
                  <a
<<<<<<< HEAD
                    href={`/contact?position=${encodeURIComponent(job.title)}`}
                    className=&quot;mt-4 lg:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
=======
                    href={_`/contact?position=${encodeURIComponent(job.title)}`}
                    className="mt-4 lg:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Apply Now
                    <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                  </a>
                </div>
                
<<<<<<< HEAD
                <p className=&quot;text-gray-300 mb-4&quot;>{job.description}</p>
                
                <div>
                  <h4 className=&quot;text-white font-semibold mb-2&quot;>Requirements:</h4>
                  <ul className=&quot;space-y-1&quot;>
                    {job.requirements.map((req, index) => (
                      <li key={index} className=&quot;flex items-start text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0&quot; />
                        {req}
=======
                <p className="text-gray-300 mb-4">{_job.description}</p>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {_job.requirements.map(_(req, _index) => (
                      <li key={index} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {_req}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

<<<<<<< HEAD
          {filteredJobs.length === 0 && (
            <div className=&quot;text-center py-12&quot;>
              <Briefcase className=&quot;w-16 h-16 text-gray-500 mx-auto mb-4&quot; />
              <h3 className=&quot;text-xl font-semibold text-gray-400 mb-2&quot;>No Open Positions</h3>
              <p className=&quot;text-gray-500&quot;>
=======
          {_filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No Open Positions</h3>
              <p className="text-gray-500">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                We don't have any open positions in this department at the moment. 
                Check back later or send us your resume for future opportunities.
              </p>
            </div>
          )}
        </motion.div>

        {_/* General Application */}
        <motion.div 
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className=&quot;text-center&quot;
=======
          initial={_{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.8}}
          className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/20 max-w-4xl mx-auto&quot;>
            <h2 className=&quot;text-2xl font-bold text-white mb-4&quot;>Don't See the Right Fit?</h2>
            <p className=&quot;text-gray-300 mb-6&quot;>
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute to our mission.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <a 
                href=&quot;/contact&quot; 
                className=&quot;inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
              >
                Send Your Resume
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </a>
              <a 
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
},

export default CareersPage,
