'use client';
import React from 'react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of AI Research',
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Enterprise Clients' },
    { number: '300%', label: 'Average ROI' },
    { number: '99.9%', label: 'Uptime' }
  ];
};

export default TeamPage;