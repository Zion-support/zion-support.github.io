'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Award, Zap } from 'lucide-react'

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary: string;
  posted: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Development',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      salary: '$120,000 - $180,000',
      posted: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Cloud Infrastructure',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud solutions for enterprise clients using AWS, Azure, and GCP.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years of cloud architecture experience',
        'AWS/Azure/GCP certifications preferred',
        'Experience with containerization and microservices',
        'Strong leadership and client-facing skills'
      ],
      benefits: [
        'Competitive salary and bonuses',
        'Comprehensive health benefits',
        'Remote work options',
        'Learning and development opportunities',
        'Stock options'
      ],
      salary: '$130,000 - $200,000',
      posted: '2024-01-12',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Washington DC',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and implement comprehensive security solutions.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years of cybersecurity experience',
        'CISSP, CISM, or similar certifications',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)'
      ],
      benefits: [
        'Competitive salary',
        'Health and wellness benefits',
        'Flexible schedule',
        'Security training and certifications',
        '401(k) with matching'
      ],
      salary: '$90,000 - $140,000',
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '4',
      title: 'Full-Stack Developer',
      department: 'Development',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build modern web applications using React, Node.js, and cloud technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud platforms and DevOps practices'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work flexibility',
        'Professional development',
        'Team building events'
      ],
      salary: '$80,000 - $120,000',
      posted: '2024-01-08',
      featured: false
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'Boston, MA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Analyze complex data sets and develop predictive models to drive business insights.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '4+ years of data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive benefits package',
        'Flexible work arrangements',
        'Data science conference attendance',
        '401(k) with company matching'
      ],
      salary: '$100,000 - $150,000',
      posted: '2024-01-05',
      featured: false
    },
    {
      id: '6',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Automate deployment pipelines and manage cloud infrastructure for scalable applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years of DevOps experience',
        'Experience with CI/CD tools and practices',
        'Knowledge of containerization (Docker, Kubernetes)',
        'Scripting skills (Bash, Python, PowerShell)'
      ],
      benefits: [
        'Competitive salary',
        'Health and dental insurance',
        'Remote work options',
        'DevOps training and certifications',
        'Stock options'
      ],
      salary: '$110,000 - $160,000',
      posted: '2024-01-03',
      featured: false
    }
  ];

  const companyBenefits = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive and innovative environment.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest technologies and tools in AI, cloud, and cybersecurity.'
    },
    {
      icon: <Award className="w-8 h-8 text-green-400" />,
      title: 'Career Growth',
      description: 'Opportunities for professional development and career advancement.'
    },
    {
      icon: <Star className="w-8 h-8 text-orange-400" />,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options to support your lifestyle.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Open Positions' },
    { number: '95%', label: 'Employee Satisfaction' },
    { number: '100%', label: 'Remote Friendly' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text-advanced" data-text="Team">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of technology with us. Join a team of passionate professionals working on cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center quantum-button">
                <Zap className="w-5 h-5 mr-2" />
                View Open Positions
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text-enhanced">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300">
              We offer more than just a job - we offer a career with purpose and growth opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div key={index} className="holographic-card-advanced cyber-card-enhanced rounded-2xl p-6 text-center hover-quantum">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300">
              Find your next career opportunity with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobPositions.map((job) => (
              <div key={job.id} className={`holographic-card-advanced cyber-card-enhanced rounded-2xl p-8 hover-quantum ${
                job.featured ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {job.featured && (
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-medium text-yellow-400">Featured Position</span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{job.department}</p>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    {job.experience}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Award className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Requirements</h4>
                  <ul className="space-y-2">
                    {job.requirements.slice(0, 3).map((requirement, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    Posted {new Date(job.posted).toLocaleDateString()}
                  </span>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center quantum-button">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center quantum-button">
              <Zap className="w-5 h-5 mr-2" />
              Send Your Resume
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CareersPage