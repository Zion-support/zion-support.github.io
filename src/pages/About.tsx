<<<<<<< HEAD
<<<<<<< HEAD
import React, { _memo } from 'react';

// Info card component for better performance
const InfoCard = memo<{ title: string; children: React.ReactNode }>(({ _title, children }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
    <h3 className="text-xl font-semibold mb-3 text-white">{_title}</h3>
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
import React, { memo } from 'react';

// Info card component for better performance
const InfoCard = memo<{ title: string; children: React.ReactNode }>(({ title, children }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    {children}
  </div>
));

InfoCard.displayName = 'InfoCard';

<<<<<<< HEAD
const _About: React.FC = memo(() => {
=======
const About: React.FC = memo(() => {
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
  const features = [
    'Expert team with years of industry experience',
    'Cutting-edge AI and machine learning solutions',
    'Comprehensive IT support and cybersecurity',
    'Scalable micro SAAS platforms',
    '24/7 customer support and monitoring'
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Team Members', value: '50+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Leading the future of technology with innovative solutions and cutting-edge expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-zion-blue-light rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M13 10V3L4 14h7v7l9-11h-7z" />
=======
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Innovation First</h3>
            <p className="text-zion-slate-light">
              We pioneer cutting-edge technologies and solutions that transform industries and drive digital evolution.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-zion-purple rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
=======
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Quality Assured</h3>
            <p className="text-zion-slate-light">
              Every solution undergoes rigorous testing and quality assurance to ensure optimal performance and reliability.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-zion-green rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
=======
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Expert Team</h3>
            <p className="text-zion-slate-light">
              Our team of industry experts brings decades of experience in technology, innovation, and business solutions.
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              To empower businesses and organizations with transformative technology solutions that drive growth, 
              efficiency, and innovation in an ever-evolving digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">What We Do</h3>
              <ul className="space-y-4 text-zion-slate-light">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-blue-light mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M5 13l4 4L19 7" />
=======
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                  </svg>
                  AI-Powered Business Solutions
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-blue-light mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M5 13l4 4L19 7" />
=======
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                  </svg>
                  Quantum Computing Platforms
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-blue-light mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M5 13l4 4L19 7" />
=======
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                  </svg>
                  Cybersecurity & Compliance
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-blue-light mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M5 13l4 4L19 7" />
=======
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                  </svg>
                  Cloud Infrastructure & DevOps
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-blue-light mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M5 13l4 4L19 7" />
=======
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                  </svg>
                  Micro SAAS Development
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Why Choose Us</h3>
              <ul className="space-y-4 text-zion-slate-light">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-purple mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M5 13l4 4L19 7" />
=======
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                  </svg>
                  Proven track record of successful projects
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-purple mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M5 13l4 4L19 7" />
=======
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                  </svg>
                  Cutting-edge technology expertise
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-purple mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M5 13l4 4L19 7" />
=======
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                  </svg>
                  24/7 support and monitoring
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-purple mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M5 13l4 4L19 7" />
=======
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                  </svg>
                  Scalable and future-proof solutions
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-purple mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M5 13l4 4L19 7" />
=======
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                  </svg>
                  Competitive pricing and flexible terms
                </li>
              </ul>
            </div>
=======
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
  const [activeTab, setActiveTab] = useState('mission');

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
>>>>>>> origin/main
          </div>
        </div>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;