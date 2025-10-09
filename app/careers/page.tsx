import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, MapPin, Clock, CheckCircle } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years of experience in AI/ML',
        'Strong Python and TensorFlow skills',
        'Experience with cloud platforms',
        'PhD in Computer Science preferred'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        '401k matching',
        'Flexible work schedule'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        '7+ years of cloud experience',
        'AWS/Azure/GCP certifications',
        'Strong DevOps knowledge',
        'Leadership experience'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        '401k matching',
        'Flexible work schedule'
      ]
    },
    {
      title: 'Frontend Developer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Build modern, responsive web applications using React and TypeScript.',
      requirements: [
        '3+ years of React experience',
        'Strong TypeScript skills',
        'Experience with modern CSS',
        'Portfolio of previous work'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        '401k matching',
        'Flexible work schedule'
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with talented professionals in a supportive, innovative culture.'
    },
    {
      icon: MapPin,
      title: 'Flexible Location',
      description: 'Work remotely or from our modern office in Middletown, Delaware.'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible hours and generous time off to maintain a healthy balance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build the future of AI and technology with us. We're looking for passionate, 
            innovative professionals to join our growing team.
          </p>
          <a
            href="mailto:careers@ziontechgroup.com"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            View Open Positions
          </a>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Open Positions
          </h2>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </span>
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        {position.department}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                    className="mt-4 md:mt-0 bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know 
            how you can contribute to our mission.
          </p>
          <a
            href="mailto:careers@ziontechgroup.com"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Send Your Resume
          </a>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareersPage;