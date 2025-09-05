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

  const _filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

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
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a team that's revolutionizing technology through AI, _quantum computing, _and space technology. Help us build the future.
          </p>
        </motion.div>

        {_/* Company Culture */}
        <motion.div 
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
              </div>
            ))}
          </div>
        </motion.div>

        {_/* Benefits */}
        <motion.div 
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
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {_/* Job Openings */}
        <motion.div 
          initial={_{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.6}}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Open Positions</h2>
          
          {_/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {_departments.map(_(dept) => (_<button
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

          {_/* Job Listings */}
          <div className="space-y-6">
            {_filteredJobs.map(_(job) => (
              <motion.div
                key={job.id}
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                className="bg-gradient-to-br from-gray-900/40 to-blue-900/20 p-6 rounded-2xl border border-gray-600/20 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
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
                      </span>
                    </div>
                  </div>
                  <a
                    href={_`/contact?position=${encodeURIComponent(job.title)}`}
                    className="mt-4 lg:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
                
                <p className="text-gray-300 mb-4">{_job.description}</p>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {_job.requirements.map(_(req, _index) => (
                      <li key={index} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {_req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {_filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No Open Positions</h3>
              <p className="text-gray-500">
                We don't have any open positions in this department at the moment. 
                Check back later or send us your resume for future opportunities.
              </p>
            </div>
          )}
        </motion.div>

        {_/* General Application */}
        <motion.div 
          initial={_{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.8}}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Don't See the Right Fit?</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default CareersPage;
