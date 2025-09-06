import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "👨‍💼",
      description: "Visionary leader with 15+ years in technology innovation"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "👩‍💻",
      description: "Expert in AI and machine learning with PhD in Computer Science"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Security",
      image: "👨‍🔬",
      description: "Cybersecurity specialist with extensive experience in enterprise security"
    },
    {
      name: "Emily Watson",
      role: "Lead Developer",
      image: "👩‍💻",
      description: "Full-stack developer passionate about creating scalable solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a leading technology company specializing in innovative solutions
            for the modern digital world. Founded in 2020, we've been at the forefront
            of technological advancement, helping businesses transform and thrive.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To deliver cutting-edge technology solutions that empower businesses
              to thrive in the digital age. We believe in the power of innovation
              to solve complex problems and create meaningful impact.
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <div className="text-4xl mb-4">🔮</div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the global leader in technology solutions, known for our
              innovation, reliability, and commitment to client success. We envision
              a future where technology seamlessly integrates with human potential.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-300">We constantly push the boundaries of what's possible in technology.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-300">We work closely with our clients to understand their unique needs.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-300">We strive for the highest quality in everything we deliver.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-400">500+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400">50+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400">25+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400">4+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;