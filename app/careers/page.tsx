'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, GraduationCap, Zap } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Cloud & Infrastructure',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud architectures for enterprise clients using modern cloud technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, and Google Cloud',
        'Experience with containerization and orchestration',
        'Strong leadership and client-facing skills'
      ],
      posted: '2024-01-12',
      featured: true
    },
    {
      id: '3',
      title: 'Full Stack Developer',
      department: 'Software Development',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop modern web applications using React, Node.js, and cloud technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Expertise in React, Node.js, and TypeScript',
        'Experience with databases and APIs',
        'Strong problem-solving skills'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '4',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Washington, DC',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced cybersecurity solutions and threat detection.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Expertise in security tools and frameworks',
        'Experience with incident response',
        'Relevant certifications (CISSP, CISM, etc.)'
      ],
      posted: '2024-01-08',
      featured: false
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Remote / Boston, MA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Extract insights from complex data sets to drive business decisions and AI model development.',
      requirements: [
        'Master\'s degree in Data Science or related field',
        '4+ years experience in data science',
        'Expertise in Python, R, and SQL',
        'Experience with machine learning and statistics',
        'Strong analytical and communication skills'
      ],
      posted: '2024-01-05',
      featured: false
    },
    {
      id: '6',
      title: 'DevOps Engineer',
      department: 'Cloud & Infrastructure',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Automate deployment processes and maintain scalable infrastructure for our cloud-based solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in DevOps',
        'Expertise in CI/CD pipelines and automation',
        'Experience with Docker, Kubernetes, and cloud platforms',
        'Strong scripting and automation skills'
      ],
      posted: '2024-01-03',
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional development budget and training opportunities'
    },
    {
      icon: Users,
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules'
    },
    {
      icon: Award,
      title: 'Career Growth',
      description: 'Clear career progression paths and mentorship'
    },
    {
      icon: Zap,
      title: 'Innovation Time',
      description: 'Dedicated time for personal projects and innovation'
    }
  ];

  const culture = [
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with talented professionals in a supportive, collaborative environment'
    },
    {
      icon: Award,
      title: 'Recognition & Rewards',
      description: 'Your contributions are recognized and rewarded with competitive benefits'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We believe in maintaining a healthy work-life balance for all our employees'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest technologies and innovative solutions'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Join our team of AI and IT professionals. Explore career opportunities at Zion Tech Group and help us build the future." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, software developer, cybersecurity, data scientist, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us build the future of AI and IT solutions. Join a team of passionate professionals working on cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us?</h2>
              <p className="text-gray-300">We offer more than just a job - we offer a career and a community</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Culture</h2>
              <p className="text-gray-300">What makes working at Zion Tech Group special</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {culture.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-gray-300">Find your next career opportunity with us</p>
            </div>
            
            <div className="space-y-6">
              {jobPositions.map((job) => (
                <div
                  key={job.id}
                  className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                    job.featured
                      ? 'border-cyan-500/40 ring-2 ring-cyan-500/20'
                      : 'border-cyan-500/20 hover:border-cyan-500/40'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        {job.featured && (
                          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                    </div>
                    <div className="md:ml-6">
                      <div className="text-sm text-gray-400 mb-2">Posted: {formatDate(job.posted)}</div>
                      <button className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Resume</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Email Us</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareersPage;