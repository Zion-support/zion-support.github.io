import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Users, Briefcase, Star, CheckCircle } from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
}

const CareersPage = () => {
  const jobOpenings: JobOpening[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for our clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      postedDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Cloud Infrastructure',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud architectures for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'AWS/Azure/GCP certifications preferred',
        'Experience with Kubernetes and Docker',
        'Strong leadership and client-facing skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      postedDate: '2024-01-12'
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and implement robust security measures.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'CISSP, CISM, or similar certifications',
        'Experience with SIEM tools and incident response',
        'Knowledge of compliance frameworks (SOC2, ISO27001)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      postedDate: '2024-01-10'
    },
    {
      id: '4',
      title: 'Full Stack Developer',
      department: 'Software Development',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build innovative web applications and microservices using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of DevOps practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      postedDate: '2024-01-08'
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'Remote / Boston, MA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Extract insights from complex datasets and build predictive models for business intelligence.',
      requirements: [
        'Master\'s degree in Data Science or related field',
        '4+ years experience in data science',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning frameworks',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      postedDate: '2024-01-05'
    },
    {
      id: '6',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Denver, CO',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Automate deployment processes and maintain scalable infrastructure for our development teams.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years experience in DevOps',
        'Experience with CI/CD pipelines and automation',
        'Knowledge of containerization (Docker, Kubernetes)',
        'Proficiency in scripting languages (Bash, Python)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      postedDate: '2024-01-03'
    }
  ];

  const companyStats = [
    { number: '150+', label: 'Team Members', icon: <Users className="w-8 h-8" /> },
    { number: '25+', label: 'Countries', icon: <MapPin className="w-8 h-8" /> },
    { number: '95%', label: 'Employee Satisfaction', icon: <Star className="w-8 h-8" /> },
    { number: '50+', label: 'Projects Completed', icon: <Briefcase className="w-8 h-8" /> }
  ];

  const companyBenefits = [
    'Competitive salary and equity packages',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and remote options',
    'Professional development and learning budget',
    '401(k) with company matching',
    'Unlimited paid time off',
    'Modern equipment and home office setup',
    'Team building events and company retreats',
    'Mentorship and career growth opportunities',
    'Diverse and inclusive work environment'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta
          name="description"
          content="Join Zion Tech Group and work on cutting-edge AI, cloud, and cybersecurity projects. Explore career opportunities and be part of our innovative team."
        />
        <meta
          name="keywords"
          content="careers, jobs, AI engineer, cloud architect, cybersecurity, software developer, data scientist, DevOps engineer, remote work"
        />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Users className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Join Our Team</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Build the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join our team of innovative thinkers and technology experts working on cutting-edge 
              AI, cloud, and cybersecurity solutions that shape the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#openings"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Openings
              </Link>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Work With Us?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we provide an environment where you can grow, 
                innovate, and make a real impact on the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 group"
                >
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for your skills and career goals.
              </p>
            </div>
            
            <div className="space-y-8">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </span>
                        <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                          {job.experience}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {job.description}
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Link
                        to={`/careers/${job.id}`}
                        className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-cyan-400 text-sm">
                            +{job.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                        {job.benefits.length > 3 && (
                          <li className="text-cyan-400 text-sm">
                            +{job.benefits.length - 3} more benefits
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
                      <span className="text-cyan-400">Remote friendly</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;