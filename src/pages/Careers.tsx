import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Zap, 
  Globe, 
  Heart, 
  Award, 
  Rocket, 
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Coffee
} from 'lucide-react';

const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'ai-research', name: 'AI Research' },
    { id: 'design', name: 'Design' },
    { id: 'sales', name: 'Sales & Marketing' },
    { id: 'operations', name: 'Operations' }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'Join our cutting-edge AI team to develop next-generation machine learning models and algorithms.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Experience with PyTorch, TensorFlow, and modern ML frameworks',
        'Strong background in deep learning and neural networks',
        'Experience with large-scale data processing and distributed systems'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible work arrangements',
        'Professional development budget',
        'Health, dental, and vision coverage'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90k - $140k',
      description: 'Build scalable web applications and APIs using modern technologies and best practices.',
      requirements: [
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of database design and optimization',
        'Understanding of CI/CD pipelines and DevOps practices'
      ],
      benefits: [
        'Remote-first culture',
        'Flexible hours',
        'Learning and development opportunities',
        'Comprehensive benefits package'
      ]
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'design',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$80k - $130k',
      description: 'Create intuitive and beautiful user experiences for our innovative technology products.',
      requirements: [
        'Strong portfolio demonstrating user-centered design',
        'Proficiency in Figma, Sketch, and prototyping tools',
        'Experience with design systems and component libraries',
        'Understanding of accessibility and inclusive design principles'
      ],
      benefits: [
        'Creative and collaborative environment',
        'Latest design tools and resources',
        'Conference and workshop attendance',
        'Health and wellness benefits'
      ]
    },
    {
      id: 4,
      title: 'Sales Development Representative',
      department: 'sales',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '1+ years',
      salary: '$60k - $80k + Commission',
      description: 'Drive business growth by identifying and qualifying new business opportunities.',
      requirements: [
        'Excellent communication and interpersonal skills',
        'Experience with CRM systems (Salesforce preferred)',
        'Strong organizational and time management abilities',
        'Motivation to exceed targets and goals'
      ],
      benefits: [
        'Uncapped commission structure',
        'Career advancement opportunities',
        'Sales training and development',
        'Team events and recognition programs'
      ]
    }
  ];

  const companyValues = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We push boundaries and embrace new ideas to solve complex challenges.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Great things happen when we work together and share our diverse perspectives.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We\'re passionate about technology and its power to transform the world.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service.'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Remote-First',
      description: 'Work from anywhere with our flexible remote work policy.'
    },
    {
      icon: Rocket,
      title: 'Career Growth',
      description: 'Continuous learning and advancement opportunities.'
    },
    {
      icon: Coffee,
      title: 'Flexible Hours',
      description: 'Work when you\'re most productive with flexible scheduling.'
    },
    {
      icon: GraduationCap,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and certifications.'
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Be part of a team that's shaping the future of technology. Work on cutting-edge projects, 
            learn from experts, and grow your career with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              View Open Positions
            </a>
            <Link
              to="/contact"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Open Positions</h2>
          
          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700/70'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-300 mb-4">{job.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No positions available in this department at the moment.</p>
              <p className="text-gray-400 mt-2">Check back later or contact us to learn about future opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Don't See the Right Fit?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Send Your Resume
            </Link>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;