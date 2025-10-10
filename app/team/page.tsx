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
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' }
  ];
};

export default TeamPage;