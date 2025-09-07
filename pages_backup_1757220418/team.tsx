import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Technology Officer',
    expertise: 'AI & Machine Learning',
    icon: Brain,
    description: 'Leading our AI initiatives with 15+ years of experience in machine learning and data science.'
  },
  {
    name: 'Michael Chen',
    role: 'Cloud Solutions Architect',
    expertise: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'Expert in cloud migration and scalable infrastructure design with AWS and Azure certifications.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Security Specialist',
    expertise: 'Cybersecurity',
    icon: Shield,
    description: 'Ensuring enterprise-grade security with expertise in threat detection and prevention.'
  },
  {
    name: 'David Thompson',
    role: 'Team Lead',
    expertise: 'Project Management',
    icon: Users,
    description: 'Leading our development teams with agile methodologies and client-focused delivery.'
  }
];

export default function TeamPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Head>
        <title>Our Team - Zion Tech Group</title>
        <meta name='description' content='Meet the talented individuals behind Zion Tech Group' />
      </Head>
      <div className='container mx-auto px-4 py-20'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Our Team
          </h1>
          <p className='text-xl text-gray-600'>
            Team page is under construction.
          </p>
        </div>
      </div>
    </div>
  );
}
