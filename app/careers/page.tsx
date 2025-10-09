import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, MapPin, Clock, CheckCircle } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience in AI/ML',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ]
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs for our AI platform.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services and DevOps'
      ],
      benefits: [
        'Competitive salary',
        'Comprehensive health benefits',
        'Remote work flexibility',
        'Learning and development opportunities',
        'Team building events'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-grid quantum-particles">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-glitch floating">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow pulse-glow">
              Build the Future of AI
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              We're looking for passionate individuals who want to make a difference 
              in the world of artificial intelligence. Join us in creating cutting-edge 
              AI solutions that transform businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📧 Send Resume
              </a>
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <div key={index} className="quantum-hologram p-6 energy-pulse">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white neon-text">{position.title}</h3>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{position.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{position.experience}</span>
                  </div>

                  <p className="text-gray-300 mb-4">{position.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2 neon-text">Requirements:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {position.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="/contact"
                      className="flex-1 cyber-button text-center"
                    >
                      Apply Now
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-center font-medium hover:bg-cyan-400 hover:text-white transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="quantum-hologram p-6 energy-pulse text-center">
                <div className="text-4xl mb-4 cyber-scan-line">💰</div>
                <h3 className="text-xl font-semibold text-white mb-2 neon-text">Competitive Pay</h3>
                <p className="text-gray-300">Competitive salaries, equity, and performance bonuses</p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse text-center">
                <div className="text-4xl mb-4 cyber-scan-line">🏥</div>
                <h3 className="text-xl font-semibold text-white mb-2 neon-text">Health Benefits</h3>
                <p className="text-gray-300">Comprehensive health, dental, and vision insurance</p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse text-center">
                <div className="text-4xl mb-4 cyber-scan-line">🏠</div>
                <h3 className="text-xl font-semibold text-white mb-2 neon-text">Remote Work</h3>
                <p className="text-gray-300">Flexible work arrangements and remote options</p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse text-center">
                <div className="text-4xl mb-4 cyber-scan-line">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2 neon-text">Growth</h3>
                <p className="text-gray-300">Learning opportunities and professional development</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Don't See Your Dream Job?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and 
              we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📧 Send Resume
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;