import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Team member card component
const TeamMember = memo<{ 
  name: string; 
  role: string; 
  expertise: string[];
  avatar: string;
}>(({ name, role, expertise, avatar }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
    <div className="text-center">
      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
        {avatar}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-blue-300 mb-4">{role}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {expertise.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
));

TeamMember.displayName = 'TeamMember';

// Stats counter component
const StatCounter = memo<{ 
  value: number; 
  label: string; 
  suffix?: string;
}>(({ value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-blue-300">{label}</div>
    </div>
  );
});

StatCounter.displayName = 'StatCounter';

const About: React.FC = memo(() => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'AI Research Director',
      expertise: ['Machine Learning', 'Neural Networks', 'Quantum Computing'],
      avatar: '👩‍💻'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Lead Architect',
      expertise: ['Cloud Infrastructure', 'DevOps', 'Security'],
      avatar: '👨‍💼'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Quantum Computing Specialist',
      expertise: ['Quantum Algorithms', 'Physics', 'Research'],
      avatar: '👩‍🔬'
    },
    {
      name: 'Alex Thompson',
      role: 'Micro SaaS Lead',
      expertise: ['Full-Stack', 'API Design', 'Scalability'],
      avatar: '👨‍💻'
    }
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We pioneer cutting-edge technologies and solutions that transform industries and drive digital evolution.'
    },
    {
      icon: '✅',
      title: 'Quality Assured',
      description: 'Every solution undergoes rigorous testing and quality assurance to ensure optimal performance and reliability.'
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Our team of industry experts brings decades of experience in technology, innovation, and business solutions.'
    },
    {
      icon: '🔒',
      title: 'Security Focused',
      description: 'We prioritize security and compliance in every solution we deliver, ensuring your data and systems are protected.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
          About Zion Tech Group
        </h1>
        <p className="text-2xl md:text-3xl text-blue-200 mb-4 font-light">
          Leading the Future of Technology
        </p>
        <p className="text-lg text-blue-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          We are a cutting-edge technology company dedicated to transforming businesses through innovative AI solutions, 
          robust IT infrastructure, and scalable Micro SaaS platforms. Our mission is to empower organizations 
          with the tools they need to thrive in the digital age.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter value={500} label="Projects Delivered" suffix="+" />
          <StatCounter value={150} label="Happy Clients" suffix="+" />
          <StatCounter value={8} label="Years Experience" suffix="+" />
          <StatCounter value={50} label="Team Members" suffix="+" />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-blue-200 leading-relaxed">
              To empower businesses and organizations with transformative technology solutions that drive growth, 
              efficiency, and innovation in an ever-evolving digital landscape. We believe technology should 
              be accessible, powerful, and transformative.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🔮</div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-blue-200 leading-relaxed">
              To be the global leader in AI-powered business solutions, setting the standard for innovation, 
              quality, and customer success. We envision a future where technology seamlessly integrates 
              with human potential to create extraordinary outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              expertise={member.expertise}
              avatar={member.avatar}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Let's discuss how our innovative solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;