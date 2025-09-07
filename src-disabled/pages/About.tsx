import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI & Machine Learning',
      image: '👩‍💼',
      description:
        'Leading our AI initiatives with 15+ years of experience in machine learning and data science.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      expertise: 'Cloud Architecture',
      image: '👨‍💻',
      description:
        'Expert in scalable cloud solutions and microservices architecture with a track record of successful enterprise deployments.',
    },
    {
      name: 'Emily Johnson',
      role: 'Security Director',
      expertise: 'Cybersecurity',
      image: '👩‍🔬',
      description:
        'Cybersecurity expert with extensive experience in threat detection, incident response, and compliance frameworks.',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We continuously push the boundaries of technology to deliver cutting-edge solutions.',
      icon: '🚀',
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      icon: '⭐',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients to achieve their goals.',
      icon: '🤝',
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices.',
      icon: '🛡️',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        {/* Hero Section */}
        <motion.div
          className='text-center mb-20'
          initial={ opacity: 0, y: 20 }
          animate={ opacity: 1, y: 0 }
          transition={ duration: 0.6 }
        >
          <h1 className='text-5xl font-bold text-white mb-6'>
            About Zion Tech Group
          </h1>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            We are a leading technology solutions provider specializing in AI, 
            cybersecurity, cloud infrastructure, and digital transformation services.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className='mb-20'
          initial={ opacity: 0, y: 20 }
          animate={ opacity: 1, y: 0 }
          transition={ duration: 0.6, delay: 0.2 }
        >
          <Card className='text-center p-12 bg-slate-800/50 backdrop-blur-sm'>
            <h2 className='text-3xl font-bold text-white mb-6'>Our Mission</h2>
            <p className='text-lg text-gray-300 leading-relaxed'>
              To empower businesses with cutting-edge technology solutions that drive 
              innovation, enhance security, and accelerate digital transformation. We 
              believe in the power of technology to solve complex challenges and create 
              opportunities for growth and success.
            </p>
          </Card>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className='mb-20'
          initial={ opacity: 0, y: 20 }
          animate={ opacity: 1, y: 0 }
          transition={ duration: 0.6, delay: 0.4 }
        >
          <h2 className='text-3xl font-bold text-white text-center mb-12'>Our Values</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <Card key={index} className='text-center p-6 bg-slate-800/50 backdrop-blur-sm'>
                <div className='text-4xl mb-4'>{value.icon}</div>
                <h3 className='text-xl font-semibold text-white mb-3'>{value.title}</h3>
                <p className='text-gray-300'>{value.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className='mb-20'
          initial={ opacity: 0, y: 20 }
          animate={ opacity: 1, y: 0 }
          transition={ duration: 0.6, delay: 0.6 }
        >
          <h2 className='text-3xl font-bold text-white text-center mb-12'>Our Team</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {teamMembers.map((member, index) => (
              <Card key={index} className='text-center p-8 bg-slate-800/50 backdrop-blur-sm'>
                <div className='text-6xl mb-4'>{member.image}</div>
                <h3 className='text-xl font-semibold text-white mb-2'>{member.name}</h3>
                <p className='text-cyan-400 font-medium mb-2'>{member.role}</p>
                <p className='text-blue-200 text-sm mb-4'>{member.expertise}</p>
                <p className='text-gray-300 text-sm'>{member.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className='text-center'
          initial={ opacity: 0, y: 20 }
          animate={ opacity: 1, y: 0 }
          transition={ duration: 0.6, delay: 0.8 }
        >
          <Card className='bg-gradient-to-r from-cyan-600 to-blue-600 p-12'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Ready to Work With Us?
            </h2>
            <p className='text-xl text-blue-100 mb-8'>
              Let's discuss how we can help transform your business with our technology solutions.
            </p>
            <button className='bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
              Get In Touch
            </button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;