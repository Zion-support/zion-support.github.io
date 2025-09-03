import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../src/components/seo/SEOHead';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Briefcase } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Stock options']
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Cloud Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud architectures for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years of cloud architecture experience',
        'AWS/Azure/GCP certifications preferred',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of microservices architecture'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Stock options']
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and implement security best practices.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years of cybersecurity experience',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Stock options']
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'Development',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build innovative web applications and micro SaaS solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of modern development practices'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Stock options']
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'DevOps',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Streamline our development and deployment processes with automation.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Experience with CI/CD pipelines',
        'Knowledge of infrastructure as code (Terraform, CloudFormation)',
        'Experience with monitoring and logging tools'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Stock options']
    },
    {
      id: 6,
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from data to drive business decisions and AI model development.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years of data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical and analytical skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget', 'Stock options']
    }
  ];

  const companyBenefits = [
    {
      icon: '💰',
      title: 'Competitive Compensation',
      description: 'Above-market salaries with performance bonuses and stock options'
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: '🏠',
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and home office stipend'
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: 'Annual learning budget, conference attendance, and certification support'
    },
    {
      icon: '⚡',
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest tools and technologies in AI, cloud, and development'
    },
    {
      icon: '🎯',
      title: 'Growth Opportunities',
      description: 'Clear career paths with mentorship and leadership development programs'
    }
  ];

  return (
    <>
      <SEOHead
        title="Careers - Zion Tech Group | Join Our Team"
        description="Join Zion Tech Group and work on cutting-edge AI, cloud, and technology solutions. Explore open positions and discover why we're a great place to work."
        keywords="careers, jobs, AI engineer, cloud architect, cybersecurity, full stack developer, DevOps, data scientist"
        canonical="https://ziontechgroup.com/careers"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Team</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build the future of technology with us. We're looking for passionate individuals who want to make a difference in AI, cloud computing, and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#open-positions"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just a technology company – we're a community of innovators, problem-solvers, and visionaries.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find your perfect role and help us build the future of technology.
              </p>
            </div>
            
            <div className="space-y-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:ml-8">
                      <Link
                        href={`/contact?position=${encodeURIComponent(position.title)}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Send Us Your Resume
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Careers;