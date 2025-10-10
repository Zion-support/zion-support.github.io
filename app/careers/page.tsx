'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, CheckCircle, Star, Users, Heart, Award, ArrowRight, Briefcase, GraduationCap, Zap } from 'lucide-react';

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
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of deep learning algorithms',
        'Previous experience in production AI systems'
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000',
        'Equity participation',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '2 days ago',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, and GCP',
        'Strong knowledge of containerization (Docker, Kubernetes)',
        'Experience with Infrastructure as Code',
        'Certifications in cloud platforms preferred'
      ],
      benefits: [
        'Competitive salary: $140,000 - $200,000',
        'Comprehensive health benefits',
        '401k with company matching',
        'Flexible work arrangements'
      ],
      posted: '1 week ago',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and infrastructure from cyber threats.',
      requirements: [
        '4+ years experience in cybersecurity',
        'Knowledge of security frameworks (NIST, ISO 27001)',
        'Experience with penetration testing',
        'Certifications: CISSP, CISM, or equivalent',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Remote work options'
      ],
      posted: '3 days ago',
      featured: false
    },
    {
      id: '4',
      title: 'Quantum Computing Researcher',
      department: 'Research & Development',
      location: 'Boston, MA',
      type: 'Full-time',
      experience: 'PhD + 3 years',
      description: 'Conduct groundbreaking research in quantum computing and quantum algorithms.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        '3+ years experience in quantum computing research',
        'Strong publication record in quantum computing',
        'Experience with quantum programming languages',
        'Knowledge of quantum hardware and software'
      ],
      benefits: [
        'Competitive salary: $150,000 - $220,000',
        'Research budget and resources',
        'Conference attendance support',
        'Collaboration with leading universities'
      ],
      posted: '1 week ago',
      featured: true
    },
    {
      id: '5',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Streamline our development and deployment processes with modern DevOps practices.',
      requirements: [
        '3+ years experience in DevOps/DevSecOps',
        'Expertise in CI/CD pipelines',
        'Experience with monitoring and logging tools',
        'Knowledge of containerization and orchestration',
        'Scripting skills (Python, Bash, PowerShell)'
      ],
      benefits: [
        'Competitive salary: $90,000 - $130,000',
        'Health and wellness benefits',
        'Learning and development budget',
        'Flexible work schedule'
      ],
      posted: '5 days ago',
      featured: false
    },
    {
      id: '6',
      title: 'Data Scientist',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Extract insights from complex data sets to drive business decisions and AI model development.',
      requirements: [
        '4+ years experience in data science',
        'Expertise in Python, R, SQL',
        'Experience with machine learning frameworks',
        'Strong statistical and analytical skills',
        'Experience with big data technologies'
      ],
      benefits: [
        'Competitive salary: $110,000 - $160,000',
        'Equity participation',
        'Remote work flexibility',
        'Professional development opportunities'
      ],
      posted: '1 week ago',
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: <Star className="w-8 h-8 text-cyan-400" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, pushing the boundaries of what\'s possible.'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex challenges.'
    },
    {
      icon: <Heart className="w-8 h-8 text-cyan-400" />,
      title: 'Passion',
      description: 'Our team is passionate about technology and its potential to transform the world.'
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation',
      description: 'We foster a culture of innovation where new ideas are encouraged and supported.'
    }
  ];

  const benefits = [
    'Competitive salaries and equity participation',
    'Comprehensive health, dental, and vision insurance',
    '401k with company matching',
    'Flexible remote work options',
    'Professional development budget',
    'Generous paid time off',
    'State-of-the-art equipment and tools',
    'Team building events and activities',
    'Mentorship and career growth opportunities',
    'Access to cutting-edge technology and research'
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of innovators and help shape the future of technology. Explore exciting career opportunities at Zion Tech Group." />
        <meta name="keywords" content="tech careers, AI jobs, quantum computing jobs, cybersecurity careers, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-cyan-400">Innovation</span> Journey
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology. We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-xl hover:bg-cyan-300 transition-colors">
                View Open Positions
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-colors">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {openPositions.map((position) => (
                <div key={position.id} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${position.featured ? 'border-cyan-400/50' : 'border-white/10'} hover:border-cyan-400/50 transition-all duration-300`}>
                  {position.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-semibold text-sm">Featured Position</span>
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                    <span className="text-sm text-gray-400">{position.posted}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="flex items-center gap-2 text-gray-300">
                      <Briefcase className="w-4 h-4" />
                      {position.department}
                    </span>
                    <span className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-cyan-400 text-slate-900 font-semibold py-3 rounded-xl hover:bg-cyan-300 transition-colors group">
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-400/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              At Zion Tech Group, we foster an environment where innovation thrives, collaboration flourishes, and every team member has the opportunity to grow and make a meaningful impact.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
                <p className="text-gray-300">We invest in your growth with learning opportunities, conferences, and access to cutting-edge resources.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Fast-Paced Innovation</h3>
                <p className="text-gray-300">Work on cutting-edge projects that push the boundaries of what's possible in technology.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Collaborative Environment</h3>
                <p className="text-gray-300">Join a diverse team of experts who support each other and celebrate collective success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our team and help us build the future of technology. We're always looking for talented individuals who share our passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-xl hover:bg-cyan-300 transition-colors">
                View All Positions
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-colors">
                Contact Our Recruiting Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;