import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import ModernLayout from '../components/layout/ModernLayout';
import { ArrowRight, Zap, Brain, Cloud, Shield } from "lucide-react";
import { motion } from 'framer-motion';

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Micro SaaS Solutions',
      description: 'Ready-to-deploy SaaS platforms for common business needs',
      href: '/services#micro-saas'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions to automate and optimize your operations',
      href: '/services#ai-solutions'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and migration strategies',
      href: '/services#cloud-solutions'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Zero Trust implementation and security hardening',
      href: '/services#cybersecurity'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '24/7', label: 'Support Available' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '48hrs', label: 'Response Time' }
  ];
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const index.route: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">index.route</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default index.route;
