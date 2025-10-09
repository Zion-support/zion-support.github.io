import React from 'react';
import { MapPin, Clock, ArrowRight, Users, Zap, Shield, Brain, Code } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'AI Engineer',
      location: 'Delaware, USA',
      type: 'Full-time',
      description: 'Design and implement AI solutions for enterprise clients'
    },
    {
      title: 'Cloud Architect',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement cloud-based solutions'
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Delaware, USA',
      type: 'Full-time',
      description: 'Protect and secure our clients digital assets'
    },
    {
      title: 'Data Scientist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Analyze data and build predictive models'
    }
  ];

  const benefits = [
    'Competitive Salary',
    'Health Insurance',
    'Remote Work Options',
    'Professional Development',
    'Flexible Hours',
    'Stock Options'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the future of technology. Join Zion Tech Group and help us build 
            innovative AI and IT solutions that transform businesses worldwide.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{position.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{position.type}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span className="mr-2">Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge Technology</h3>
              <p className="text-gray-300">Work with the latest AI and cloud technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Great Team</h3>
              <p className="text-gray-300">Collaborate with talented and passionate professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Growth</h3>
              <p className="text-gray-300">Be part of a rapidly growing company with exciting opportunities</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Send us your resume and let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@ziontechgroup.com"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Apply Now
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center justify-center"
            >
              +1 302 464 0950
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CareersPage;