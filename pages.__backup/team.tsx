import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  UsersAwardLinkedinTwitterGithub
  MailMapPinGlobeStarZapBrainRocket
} from 'lucide-react';

export default function TeamPage() {
  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      image: '/team/sarah-chen.jpg',
      bio: 'Former AI Research Lead at GooglePhD in Computer Science from MIT. Pioneered breakthrough AI algorithms that power our autonomous systems.',
      expertise: ['AI & Machine Learning'Strategic Leadership'Research & Development'],
      social: {
        linkedin: 'https://linkedin.com/in/sarah-chen-zion',
        twitter: 'https://twitter.com/sarahchen_zion',
        github: 'https://github.com/sarahchen-zion'
      },
      achievements: ['25+ AI Patents'MIT Technology Review Innovator'Forbes 30 Under 30']
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Technology Officer',
      image: '/team/marcus-rodriguez.jpg',
      bio: 'Ex-Engineering Director at Microsoftspecializing in cloud architecture and quantum computing. Leads our technical innovation strategy.',
      expertise: ['Cloud Architecture'Quantum Computing'System Design'],
      social: {
        linkedin: 'https://linkedin.com/in/marcus-rodriguez-zion',
        twitter: 'https://twitter.com/marcusrod_zion',
        github: 'https://github.com/marcusrod-zion'
      },
      achievements: ['Microsoft MVP Award'Quantum Computing Pioneer'Cloud Architecture Expert']
    },
    {
      name: 'Emily Watson',
      title: 'Chief Operations Officer',
      image: '/team/emily-watson.jpg',
      bio: 'Former VP of Operations at Amazonexpert in scaling technology operations and building high-performing teams.',
      expertise: ['Operations Management'Team Leadership'Process Optimization'],
      social: {
        linkedin: 'https://linkedin.com/in/emily-watson-zion',
        twitter: 'https://twitter.com/emilywat_zion'
      },
      achievements: ['Amazon Leadership Award'Operations Excellence'Team Building Expert']
    }
  ];

  const departments = [
    {
      name: 'AI Research & Development',
      description: 'Pioneering the future of artificial intelligence and autonomous systems.',
      members: 25,
      icon: Brain,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Quantum Computing',
      description: 'Breaking barriers in quantum technology and computational power.',
      members: 18,
      icon: Zap,
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Building scalablesecureand high-performance cloud solutions.',
      members: 32,
      icon: Globe,
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Product & Engineering',
      description: 'Creating innovative products that transform business operations.',
      members: 45,
      icon: Rocket,
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'Client Success',
      description: 'Ensuring exceptional client experiences and successful implementations.',
      members: 28,
      icon: Star,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Business Development',
      description: 'Expanding our global reach and strategic partnerships.',
      members: 22,
      icon: Users,
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new technologies.',
      icon: Brain
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.',
      icon: Star
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.',
      icon: Users
    },
    {
      title: 'Client Focus',
      description: 'Your success is our success - we work as an extension of your team.',
      icon: Award
    }
  ];
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const team: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">team</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default team;
