import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {MapPin, Clock} from 'lucide-react';
const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead AI solution development and implementation'
    },
    {
      title: 'DevOps Engineer',
      location: 'Delaware, USA',
      type: 'Full-time',
      description: 'Build and maintain CI/CD pipelines and infrastructure'
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement cloud-based solutions'
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Delaware, USA',
      type: 'Full-time',
      description: 'Protect and secure our clients digital assets'
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
      <Navigation />
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
                <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                <div className="flex items-center text-gray-300 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  {position.location}
                </div>
                <div className="flex items-center text-gray-300 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {position.type}
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default CareersPage;
