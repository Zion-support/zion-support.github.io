import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  MapPinIcon,
  ClockIcon,
  AcademicCapIcon,
  HeartIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const Careers: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Positions' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'sales', name: 'Sales & Marketing' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      category: 'ai',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our AI team to develop cutting-edge autonomous business systems and machine learning platforms.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Experience with PyTorch, TensorFlow, and modern ML frameworks',
        'Knowledge of quantum computing and neural networks',
        'Experience with large-scale AI systems deployment'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      category: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs for our enterprise clients using modern technologies.',
      requirements: [
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of microservices architecture',
        'Experience with CI/CD pipelines'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ]
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      category: 'design',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Create intuitive and beautiful user experiences for our AI-powered applications and platforms.',
      requirements: [
        'Strong portfolio showcasing complex applications',
        'Experience with design systems and component libraries',
        'Knowledge of accessibility standards',
        'Experience with user research and testing'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ]
    },
    {
      id: 4,
      title: 'AI Solutions Architect',
      category: 'ai',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and architect AI solutions for enterprise clients across various industries.',
      requirements: [
        'Deep understanding of AI/ML technologies and architectures',
        'Experience with enterprise software design',
        'Strong communication and presentation skills',
        'Experience with cloud AI services'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ]
    },
    {
      id: 5,
      title: 'Business Development Manager',
      category: 'business',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive business growth by identifying new opportunities and building strategic partnerships.',
      requirements: [
        'Experience in B2B technology sales',
        'Strong network in enterprise technology',
        'Understanding of AI and emerging technologies',
        'Track record of meeting sales targets'
      ],
      benefits: [
        'Competitive salary with commission structure',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ]
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      category: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Experience with Kubernetes and containerization',
        'Knowledge of AWS, Azure, or GCP',
        'Experience with infrastructure as code',
        'Understanding of security best practices'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ]
    }
  ];

  const filteredJobs = jobOpenings.filter(job => 
    activeCategory === 'all' || job.category === activeCategory
  );

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology',
      icon: SparklesIcon
    },
    {
      title: 'People Matter',
      description: 'Our team is our greatest asset and we invest in their growth',
      icon: HeartIcon
    },
    {
      title: 'Continuous Learning',
      description: 'We believe in lifelong learning and professional development',
      icon: AcademicCapIcon
    }
  ];

  const benefits = [
    'Competitive salary with equity options',
    '100% remote work flexibility',
    'Unlimited PTO and flexible hours',
    'Professional development budget ($5,000/year)',
    'Health, dental, and vision insurance',
    '401(k) with company match',
    'Latest technology and equipment',
    'Regular team events and retreats'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Help us build the future of AI-powered technology. Join a team that's pushing the boundaries of what's possible.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Company Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {companyValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="bg-white/10 border border-white/20 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="flex items-center space-x-3"
              >
                <CheckIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Job Openings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Open Positions
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg border transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-purple-600 border-purple-500 text-white'
                  : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center space-x-1">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BriefcaseIcon className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="h-4 w-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>
                <button className="mt-4 lg:mt-0 inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200">
                  <span>Apply Now</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>

              <p className="text-gray-300 mb-4">
                {job.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <CheckIcon className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <CheckIcon className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
          </p>
          <button className="inline-flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200">
            <span>Send Resume</span>
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Careers;