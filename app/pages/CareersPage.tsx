import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote / New York',
      type: 'Full-time',
      department: 'AI Solutions',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science or related field'],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible work hours', 'Professional development']
    },
    {
      title: 'Cloud Infrastructure Architect',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      department: 'Cloud Solutions',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['7+ years cloud experience', 'AWS, Azure, GCP', 'Kubernetes, Docker', 'Architecture certifications'],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible work hours', 'Professional development']
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Remote / Austin',
      type: 'Full-time',
      department: 'Security',
      description: 'Protect our clients from cyber threats with advanced security solutions.',
      requirements: ['4+ years security experience', 'CISSP, CISM certifications', 'Penetration testing', 'Incident response'],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible work hours', 'Professional development']
    },
    {
      title: 'Frontend Developer',
      location: 'Remote / Seattle',
      type: 'Full-time',
      department: 'Development',
      description: 'Build beautiful and responsive user interfaces for our web applications.',
      requirements: ['3+ years frontend experience', 'React, TypeScript, CSS', 'UI/UX design', 'Responsive design'],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible work hours', 'Professional development']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs for you and your family.'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance.'
    },
    {
      icon: Target,
      title: 'Growth Opportunities',
      description: 'Professional development programs and career advancement opportunities.'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with talented and passionate professionals in a collaborative environment.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals and help us build the future of AI and IT solutions." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, cloud architect, cybersecurity, frontend developer" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Join Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Help us build the future of AI and IT solutions. Join our team of talented professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">Open Positions</h2>
              <div className="space-y-8">
                {positions.map((position, index) => (
                  <div key={index} className="bg-slate-900 p-8 rounded-lg">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-4 text-gray-300">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {position.type}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {position.department}
                          </div>
                        </div>
                      </div>
                      <button className="mt-4 lg:mt-0 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all">
                        Apply Now
                      </button>
                    </div>
                    <p className="text-gray-300 mb-6">{position.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-gray-400 flex items-center">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-gray-400 flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
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
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">Why Join Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-slate-800 p-6 rounded-lg text-center">
                    <benefit.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-white mb-8">
                We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
