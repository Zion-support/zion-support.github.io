'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Link as LinkIcon } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Security & Trust',
      description: 'Your data and business operations are protected with enterprise-grade security measures and compliance standards.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Client-Centric',
      description: 'We prioritize your success and work closely with you to understand your unique challenges and goals.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from initial consultation to final delivery.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/team/kleber.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in cloud architecture and AI system design.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      description: 'Machine learning specialist with expertise in NLP and computer vision.',
      image: '/team/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      description: 'Cybersecurity expert ensuring enterprise-grade protection.',
      image: '/team/emily.jpg'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI technology for businesses of all sizes.'
    },
    {
      year: '2020',
      title: 'First AI Solutions',
      description: 'Launched our first AI-powered business solutions, helping 50+ companies automate their processes.'
    },
    {
      year: '2021',
      title: 'Cloud Expansion',
      description: 'Expanded our cloud infrastructure services, becoming a certified AWS and Azure partner.'
    },
    {
      year: '2022',
      title: 'Micro SAAS Launch',
      description: 'Introduced our suite of micro SAAS products, making AI accessible to small and medium businesses.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded internationally, serving clients across North America, Europe, and Asia.'
    },
    {
      year: '2024',
      title: 'AI Revolution',
      description: 'Leading the next generation of AI solutions with advanced machine learning and automation.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company specializing in AI solutions, cloud infrastructure, cybersecurity, and custom software development. Founded in 2019." />
        <meta name="keywords" content="about zion tech group, AI company, technology company, cloud solutions, cybersecurity, software development" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      </div>
    </>
  );
};

export default AboutPage;