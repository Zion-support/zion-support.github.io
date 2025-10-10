'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Users, 
  Award, 
  GraduationCap, 
  Star, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Heart,
  Zap,
  Shield,
  Brain
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ]
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years of cloud architecture experience',
        'Certifications in AWS, Azure, or GCP',
        'Experience with containerization and orchestration',
        'Strong understanding of security best practices'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced security solutions and threat monitoring.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years of cybersecurity experience',
        'Certifications in CISSP, CISM, or CEH',
        'Experience with SIEM tools and incident response',
        'Knowledge of compliance frameworks (SOC 2, ISO 27001)'
      ]
    },
    {
      id: 4,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex data sets to drive business decisions and innovation.',
      requirements: [
        'Master\'s degree in Data Science or related field',
        '3+ years of data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning algorithms',
        'Strong statistical and analytical skills'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Streamline development processes and ensure reliable deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Experience with CI/CD tools and practices',
        'Knowledge of infrastructure as code',
        'Strong scripting and automation skills'
      ]
    },
    {
      id: 6,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and development for our AI and IT solutions.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '5+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'MBA preferred'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      title: 'Learning & Development',
      description: 'Annual learning budget and access to conferences, courses, and certifications'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Retirement Planning',
      description: '401(k) with company matching and financial planning resources'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'Innovation Time',
      description: 'Dedicated time to work on personal projects and explore new technologies'
    },
    {
      icon: <Star className="w-8 h-8 text-orange-500" />,
      title: 'Recognition & Rewards',
      description: 'Performance bonuses, stock options, and recognition programs'
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-600" />, value: '50+', label: 'Team Members' },
    { icon: <Award className="w-8 h-8 text-green-600" />, value: '98%', label: 'Employee Satisfaction' },
    { icon: <GraduationCap className="w-8 h-8 text-purple-600" />, value: '100%', label: 'Learning & Development' },
    { icon: <Star className="w-8 h-8 text-yellow-600" />, value: '4.8/5', label: 'Glassdoor Rating' }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's transforming businesses with cutting-edge AI and IT solutions. Explore our open positions and benefits." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, technology careers, remote work, benefits" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Join Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Be part of a team that's shaping the future of technology. Work on cutting-edge AI and IT 
                solutions while enjoying a culture of innovation, growth, and collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8"
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and a culture that values innovation, growth, and work-life balance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-bold text-white ml-4">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for your skills and career goals.
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                    </div>
                    <button className="mt-4 lg:mt-0 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  At Zion Tech Group, we believe that great technology comes from great people. 
                  We foster a culture of innovation, collaboration, and continuous learning where 
                  every team member can thrive and make a meaningful impact.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Innovation First</h3>
                      <p className="text-gray-300">We encourage experimentation and creative problem-solving</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Collaborative Environment</h3>
                      <p className="text-gray-300">Work with talented professionals from diverse backgrounds</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Growth Opportunities</h3>
                      <p className="text-gray-300">Continuous learning and career development support</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Apply?</h3>
                <p className="text-gray-300 mb-6">
                  Don't see a position that matches your skills? We're always looking for talented 
                  individuals to join our team. Send us your resume and let us know how you can contribute.
                </p>
                <div className="space-y-4">
                  <a
                    href="/contact"
                    className="w-full block text-center py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Send Your Resume
                  </a>
                  <a
                    href="mailto:careers@ziontechgroup.com"
                    className="w-full block text-center py-3 px-6 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Email Us Directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CareersPage;