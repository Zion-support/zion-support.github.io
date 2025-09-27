import React from 'react';

export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '👩‍💼',
      description: 'Visionary leader with 15+ years in technology innovation.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '👨‍💻',
      description: 'Technical architect specializing in scalable systems.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      image: '👩‍🔬',
      description: 'AI expert leading our machine learning initiatives.'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: '👨‍💻',
      description: 'Full-stack developer with expertise in modern frameworks.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Zion Tech Group Founded' },
    { year: '2021', event: 'First AI Product Launch' },
    { year: '2022', event: 'Expanded to Cloud Services' },
    { year: '2023', event: 'International Expansion' },
    { year: '2024', event: 'AI Platform 2.0 Release' },
    { year: '2025', event: 'Quantum Computing Research' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zion Tech Group</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are pioneers in technology innovation, dedicated to transforming businesses 
            through cutting-edge solutions and exceptional service.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in an ever-evolving digital landscape.
              </p>
              <p className="text-lg text-gray-600">
                We believe in the power of technology to solve complex problems and create 
                opportunities that were previously unimaginable.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">We constantly push boundaries and explore new possibilities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence</h4>
                    <p className="text-gray-600">We deliver exceptional quality in everything we do.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Collaboration</h4>
                    <p className="text-gray-600">We work closely with our clients as partners.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience and passion for technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.image}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From startup to industry leader, here are the key milestones in our growth.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <div className="text-lg font-semibold text-gray-900">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};