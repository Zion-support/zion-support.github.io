import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Zap, Brain, Code, BarChart } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'Expert in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms',
        'Strong problem-solving skills'
      ],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Build scalable web applications and APIs using modern technologies.',
      requirements: [
        '3+ years React/Node.js experience',
        'Experience with TypeScript',
        'Knowledge of cloud services',
        'Strong communication skills'
      ],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Analyze complex data sets and develop predictive models for business insights.',
      requirements: [
        '4+ years data science experience',
        'Expert in Python, R, SQL',
        'Experience with ML algorithms',
        'Strong statistical background'
      ],
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Manage cloud infrastructure and implement CI/CD pipelines for scalable systems.',
      requirements: [
        '3+ years DevOps experience',
        'Expert in AWS/Azure/GCP',
        'Experience with Docker, Kubernetes',
        'Strong automation skills'
      ],
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with performance bonuses and equity options',
      icon: '💰'
    },
    {
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO',
      icon: '🏠'
    },
    {
      title: 'Learning & Growth',
      description: 'Annual learning budget, conference attendance, and mentorship programs',
      icon: '📚'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and fitness stipend',
      icon: '🏥'
    },
    {
      title: 'Cutting-Edge Tech',
      description: 'Work with the latest AI technologies and tools in the industry',
      icon: '🤖'
    },
    {
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and retreats',
      icon: '👥'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology',
      icon: '🚀'
    },
    {
      title: 'Customer Obsession',
      description: 'Everything we do is focused on delivering value to our customers',
      icon: '🎯'
    },
    {
      title: 'Continuous Learning',
      description: 'We believe in constant growth and development for all team members',
      icon: '📈'
    },
    {
      title: 'Transparency',
      description: 'Open communication and honest feedback drive our success',
      icon: '💬'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Build the future of AI with us
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              We're looking for passionate individuals who want to make a real impact in the AI industry. 
              Join our team of innovators, creators, and problem-solvers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="mailto:careers@ziontechgroup.com"
                className="cyber-button inline-flex items-center justify-center"
              >
                📧 careers@ziontechgroup.com
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📞 Call: (302) 464-0950
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Remote First</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">4.9/5</div>
                <div className="text-gray-300">Team Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current openings and find your next career opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {openPositions.map((position, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-cyan-400 flex-shrink-0">
                    {position.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        {position.department}
                      </span>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        {position.location}
                      </span>
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                  className="w-full py-3 px-6 bg-cyan-400 text-slate-900 rounded-lg font-semibold text-center hover:bg-cyan-300 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a culture that values innovation and growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="cyber-card text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@ziontechgroup.com"
              className="cyber-button inline-flex items-center justify-center"
            >
              📧 Send Your Resume
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              📞 Call Us: (302) 464-0950
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Competitive compensation • ✓ Remote-first culture • ✓ Growth opportunities</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;