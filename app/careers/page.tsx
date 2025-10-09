import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MapPin, Clock, Briefcase, GraduationCap, Heart, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred'],
      icon: Zap
    },
    {
      title: 'Full Stack Developer',
      department: 'IT Services',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      description: 'Build scalable web applications and microservices for enterprise clients.',
      requirements: ['3+ years full-stack experience', 'React, Node.js, TypeScript', 'AWS/Cloud experience'],
      icon: Briefcase
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      description: 'Manage cloud infrastructure and implement CI/CD pipelines.',
      requirements: ['4+ years DevOps experience', 'AWS, Docker, Kubernetes', 'Infrastructure as Code'],
      icon: Heart
    },
    {
      title: 'AI Research Scientist',
      department: 'Research & Development',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      description: 'Conduct cutting-edge research in artificial intelligence and quantum computing.',
      requirements: ['PhD in AI/ML', 'Published research papers', 'Experience with quantum algorithms'],
      icon: GraduationCap
    }
  ];

  const benefits = [
    { title: 'Competitive Salary', description: 'Above-market compensation with performance bonuses' },
    { title: 'Health Insurance', description: 'Comprehensive medical, dental, and vision coverage' },
    { title: 'Remote Work', description: 'Flexible remote work options with home office stipend' },
    { title: 'Learning Budget', description: '$5,000 annual budget for courses, conferences, and books' },
    { title: 'Stock Options', description: 'Equity participation in our growing company' },
    { title: 'Unlimited PTO', description: 'Take time off when you need it to recharge' }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group and help shape the future of enterprise technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, remote work, technology careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-cyan-400">Innovation</span> Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us build the future of AI and enterprise technology. Work with cutting-edge tools, 
              solve complex problems, and make a real impact on businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                View Open Positions
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Send Resume
              </a>
            </div>
          </section>

          {/* Why Work With Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Users className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">
                  Work alongside industry leaders and AI researchers who are pushing the boundaries of technology.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Zap className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cutting-Edge Projects</h3>
                <p className="text-gray-300">
                  Work on innovative AI solutions, quantum computing, and autonomous systems that shape the future.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Heart className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Work-Life Balance</h3>
                <p className="text-gray-300">
                  Flexible schedules, remote work options, and unlimited PTO to maintain a healthy work-life balance.
                </p>
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section id="open-positions" className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <position.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-300 mb-3">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                    className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Benefits & Perks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Culture */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Our Culture
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Innovation First</h3>
                  <p className="text-gray-300 mb-4">
                    We encourage experimentation and bold ideas. Every team member has the freedom to explore 
                    new technologies and approaches that could revolutionize our industry.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Collaborative Environment</h3>
                  <p className="text-gray-300 mb-4">
                    We believe the best solutions come from diverse teams working together. We foster an 
                    inclusive environment where everyone's voice is heard and valued.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Continuous Learning</h3>
                  <p className="text-gray-300 mb-4">
                    Technology evolves rapidly, and so do we. We invest heavily in our team's growth through 
                    training, conferences, and access to the latest tools and resources.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Impact-Driven</h3>
                  <p className="text-gray-300 mb-4">
                    Our work directly impacts businesses and people worldwide. We're not just building software; 
                    we're creating solutions that drive real change and value.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see a position that fits? We're always looking for exceptional talent. 
              Send us your resume and let us know how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Send Your Resume
              </a>
              <a
                href="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CareersPage;