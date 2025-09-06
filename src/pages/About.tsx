import React from 'react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/team/john-smith.jpg',
      bio: 'Visionary leader with 15+ years in tech innovation.',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/team/sarah-johnson.jpg',
      bio: 'Technical architect specializing in scalable solutions.',
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      image: '/team/mike-chen.jpg',
      bio: 'Full-stack developer passionate about clean code.',
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in technology.',
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: 'Security',
      description: 'Your data and privacy are our top priorities in everything we build.',
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.',
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in every project we deliver.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    </div>
  );
};

