import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/FooterSimple';
import { Users, MapPin, Clock, CheckCircle } from 'lucide-react';

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
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create modern, responsive user interfaces'
    },
    {
      title: 'Data Scientist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Analyze data and build predictive models'
    }
  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of the future of AI and technology. We're looking for passionate individuals 
            who want to make a difference in the world.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">{position.title}</h3>
                <div className="flex items-center text-gray-300 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  {position.location}
                </div>
                <div className="flex items-center text-gray-300 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {position.type}
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <button className="cyber-button w-full">
                  Apply Now
                </button>
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
