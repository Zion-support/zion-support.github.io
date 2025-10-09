'use client';
import React from 'react';
import { Users, Briefcase, MapPin, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin as LocationIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead AI development projects and mentor junior engineers',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred']
    },
    {
      title: 'Full Stack Developer',
      location: 'Middletown, DE',
      type: 'Full-time',
      description: 'Build scalable web applications and APIs',
      requirements: ['3+ years full-stack experience', 'React, Node.js, TypeScript', 'Cloud platform experience']
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Manage cloud infrastructure and CI/CD pipelines',
      requirements: ['4+ years DevOps experience', 'AWS/Azure/GCP', 'Kubernetes, Docker']
    },
    {
      title: 'Data Scientist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Analyze data and build predictive models',
      requirements: ['3+ years data science experience', 'Python, R, SQL', 'Machine learning expertise']
    }
  ];

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Above-market compensation packages' },
    { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive medical, dental, and vision coverage' },
    { icon: '🏖️', title: 'Flexible PTO', description: 'Unlimited paid time off policy' },
    { icon: '🏠', title: 'Remote Work', description: 'Work from anywhere in the world' },
    { icon: '📚', title: 'Learning Budget', description: '$5,000 annual learning and development budget' },
    { icon: '💻', title: 'Latest Tech', description: 'Top-of-the-line equipment and tools' }
  ];

  return (
    <>
      <SEOEnhancer
        title="Careers - Join Our Team | Zion Tech Group"
        description="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group and help us build the future of technology."
        keywords={['careers', 'jobs', 'hiring', 'ai engineer', 'developer', 'data scientist', 'devops', 'remote work']}
        canonicalUrl="https://ziontechgroup.com/careers"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join our team of AI and technology experts. Help us build the future of technology 
              and transform businesses worldwide with cutting-edge solutions.
            </p>
          </section>

          {/* Why Work With Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex items-center gap-4 text-gray-300 mb-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                    </div>
                    <a
                      href="/contact"
                      className="cyber-button px-6 py-3 font-semibold hover:scale-105 transition-all duration-300 mt-4 md:mt-0"
                    >
                      Apply Now
                    </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Culture */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
                <p className="text-gray-300 mb-4">
                  We encourage experimentation and innovation. Our team is always exploring new technologies 
                  and pushing the boundaries of what's possible.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    20% time for personal projects
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Regular hackathons and innovation days
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Conference attendance and speaking opportunities
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Work-Life Balance</h3>
                <p className="text-gray-300 mb-4">
                  We believe in maintaining a healthy work-life balance. Our flexible work arrangements 
                  and unlimited PTO policy ensure you can thrive both professionally and personally.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Flexible working hours
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Remote work options
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Mental health support and resources
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Don't See Your Role?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                We're always looking for talented individuals. Send us your resume and let us know 
                how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Send Your Resume
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CareersPage;