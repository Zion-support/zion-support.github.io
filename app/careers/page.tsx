'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Users, Award, Zap } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const CareersPage: React.FC = () => {
  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving skills',
        'PhD in Computer Science or related field preferred'
      ],
      benefits: [
        'Competitive salary ($120k-$180k)',
        'Health, dental, vision insurance',
        '401k with company matching',
        'Flexible work schedule',
        'Professional development budget'
      ]
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Build scalable web applications and APIs using modern technologies.',
      requirements: [
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services',
        'Strong communication skills'
      ],
      benefits: [
        'Competitive salary ($80k-$120k)',
        'Health, dental, vision insurance',
        '401k with company matching',
        'Remote work options',
        'Learning and development opportunities'
      ]
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
      requirements: [
        '4+ years experience in DevOps',
        'Experience with AWS, Docker, Kubernetes',
        'Knowledge of CI/CD pipelines',
        'Scripting skills (Bash, Python)',
        'Infrastructure as Code experience'
      ],
      benefits: [
        'Competitive salary ($100k-$140k)',
        'Health, dental, vision insurance',
        '401k with company matching',
        'Flexible work schedule',
        'Certification reimbursement'
      ]
    },
    {
      id: '4',
      title: 'AI Solutions Architect',
      department: 'Solutions',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Design and implement AI solutions for enterprise clients.',
      requirements: [
        '6+ years experience in AI/ML',
        'Experience with enterprise solutions',
        'Strong client-facing skills',
        'Knowledge of AI frameworks and tools',
        'Project management experience'
      ],
      benefits: [
        'Competitive salary ($130k-$200k)',
        'Health, dental, vision insurance',
        '401k with company matching',
        'Performance bonuses',
        'Stock options'
      ]
    },
    {
      id: '5',
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Support sales team with technical expertise and client demonstrations.',
      requirements: [
        '3+ years experience in technical sales',
        'Strong technical background',
        'Excellent presentation skills',
        'Experience with AI/ML technologies',
        'Bachelor\'s degree in technical field'
      ],
      benefits: [
        'Competitive salary + commission',
        'Health, dental, vision insurance',
        '401k with company matching',
        'Unlimited PTO',
        'Sales performance bonuses'
      ]
    },
    {
      id: '6',
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Create intuitive and engaging user experiences for our AI-powered applications.',
      requirements: [
        '4+ years experience in UX/UI design',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Experience with design systems',
        'Portfolio demonstrating AI/tech projects',
        'Strong collaboration skills'
      ],
      benefits: [
        'Competitive salary ($70k-$110k)',
        'Health, dental, vision insurance',
        '401k with company matching',
        'Creative freedom',
        'Design tool subscriptions'
      ]
    }
  ];

  const companyValues = [
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'We believe in the power of teamwork and open communication.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We encourage creative thinking and cutting-edge solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of AI and technology. Explore career opportunities and grow with us." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, tech jobs, remote work, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's revolutionizing the future of AI and technology. We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#open-positions"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobPositions.map((job) => (
                <div key={job.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                      <p className="text-purple-400 mb-2">{job.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="text-gray-300 text-sm">• {req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={`/careers/${job.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;