import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, GraduationCap, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
  posted: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for our clients.',
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
      posted: '2 days ago',
      featured: true
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications using modern technologies and best practices.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services and DevOps practices'
      ],
      benefits: [
        'Competitive salary',
        'Health and dental insurance',
        'Remote work options',
        'Learning and development opportunities',
        'Team building events'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '3',
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Analyze complex datasets and develop predictive models to drive business insights.',
      requirements: [
        'PhD or Master\'s degree in Data Science, Statistics, or related field',
        '4+ years of data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning algorithms',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary and bonuses',
        'Comprehensive health benefits',
        'Flexible schedule',
        'Conference and training budget',
        'Stock options'
      ],
      posted: '3 days ago',
      featured: true
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of DevOps experience',
        'Experience with AWS, Docker, Kubernetes',
        'Knowledge of CI/CD pipelines',
        'Scripting skills (Bash, Python)'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work flexibility',
        'Professional development',
        'Performance bonuses'
      ],
      posted: '5 days ago',
      featured: false
    },
    {
      id: '5',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Create intuitive and beautiful user interfaces for our web and mobile applications.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '2+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Experience with design systems',
        'Portfolio demonstrating design skills'
      ],
      benefits: [
        'Competitive salary',
        'Health and dental insurance',
        'Flexible work arrangements',
        'Design tools and software',
        'Creative freedom'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '6',
      title: 'Product Manager',
      department: 'Product',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead product strategy and roadmap for our AI-powered solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile methodologies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive benefits package',
        'Flexible schedule',
        'Leadership development',
        'Stock options'
      ],
      posted: '4 days ago',
      featured: true
    }
  ];

  const companyStats = [
    { icon: Users, label: 'Team Members', value: '50+' },
    { icon: Award, label: 'Awards Won', value: '15+' },
    { icon: Heart, label: 'Employee Satisfaction', value: '98%' },
    { icon: Zap, label: 'Projects Completed', value: '200+' }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities with access to courses, conferences, and certifications.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive and inclusive environment.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest technologies and tools in AI, cloud computing, and software development.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and policies that support your personal and professional life.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of talented professionals and work on cutting-edge AI and technology solutions. Explore open positions and career opportunities." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, data scientist, remote work, technology careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Be part of a team that's shaping the future with innovative AI and technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we provide opportunities for growth, innovation, and making a real impact.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find your next career opportunity with us. We're always looking for talented individuals to join our team.
              </p>
            </div>
            
            <div className="space-y-6">
              {openPositions.map((position) => (
                <div key={position.id} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${position.featured ? 'border border-cyan-500/50' : 'border border-white/20'}`}>
                  {position.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Featured Position</span>
                    </div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          {position.experience}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                    </div>
                    
                    <div className="lg:ml-8">
                      <button className="w-full lg:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-between text-sm text-gray-400">
                    <span>Posted {position.posted}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 flex items-center">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Send Resume
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact HR
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CareersPage;