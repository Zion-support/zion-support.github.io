import React from 'react';
<<<<<<< HEAD
import MainLayout from '../src/components/layout/MainLayout';
=======
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
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68

export default function TeamPage() {
  return (
    <MainLayout title="Our Team - Zion Tech Group">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Team</h1>
        <p className="text-lg text-gray-700">
          This is a placeholder for the team page.
        </p>
      </div>
<<<<<<< HEAD
    </MainLayout>
=======
    </>
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
  );
}