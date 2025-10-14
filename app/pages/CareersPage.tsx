import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'AI Solutions',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred']
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Cloud Infrastructure',
      description: 'Design and implement scalable cloud architectures for enterprise clients.',
      requirements: ['AWS/Azure certifications', '3+ years cloud experience', 'Strong communication skills']
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Remote',
      type: 'Full-time',
      department: 'Security',
      description: 'Protect our clients from cyber threats and ensure compliance with security standards.',
      requirements: ['CISSP certification', '3+ years security experience', 'Knowledge of compliance frameworks']
    },
    {
      title: 'DevOps Engineer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Automate deployment processes and maintain our infrastructure.',
      requirements: ['Docker, Kubernetes experience', 'CI/CD pipeline knowledge', '2+ years DevOps experience']
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible remote work options',
    'Professional development budget',
    'Unlimited PTO',
    'Modern tech stack and tools'
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and IT solutions. 
              We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300">
                View Open Positions
              </button>
              <button className="border border-rose-400 text-rose-400 px-8 py-3 rounded-lg hover:bg-rose-400 hover:text-white transition-all duration-300">
                Learn About Us
              </button>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Open Positions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {position.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                      </div>
                    </div>
                    <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-sm">
                      {position.department}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {position.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-400">
                          <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Why Work With Us?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <Heart className="w-6 h-6 text-rose-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Our Culture
                </h2>
                <p className="text-gray-300 mb-6">
                  At Zion Tech Group, we believe in fostering an environment where innovation thrives. 
                  Our team is diverse, inclusive, and passionate about solving complex problems with cutting-edge technology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-rose-400 mr-3" />
                    <span className="text-gray-300">Innovation-driven mindset</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-rose-400 mr-3" />
                    <span className="text-gray-300">Collaborative team environment</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-rose-400 mr-3" />
                    <span className="text-gray-300">Clear growth opportunities</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Ready to Join Us?
                </h3>
                <p className="text-gray-300 mb-6">
                  Don't see a position that matches your skills? We're always looking for talented individuals. 
                  Send us your resume and let's start a conversation.
                </p>
                <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300">
                  Send Resume
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
