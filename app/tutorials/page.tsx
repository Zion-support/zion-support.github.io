'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Play, ArrowRight, Clock, Users, Star } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
=======
import { Play, Clock, User, ArrowRight, BookOpen, Code, Database, Cloud, Shield } from 'lucide-react';
interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  author: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}
const TutorialsPage: React.FC = () => {
  const tutorials: Tutorial[] = [
    {
id: '1',
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of artificial intelligence and machine learning development.',
      duration: '2h 30m',
      level: 'Beginner',
      author: 'Dr. Sarah Johnson',
      category: 'AI/ML',
      thumbnail: '/tutorials/ai-fundamentals.jpg',
      videoUrl: '/tutorials/ai-fundamentals'
    },
    {
      id: '2',
      title: 'Building Scalable Web Applications',
      description: 'Master the art of creating web applications that can handle millions of users.',
      duration: '3h 15m',
      level: 'Intermediate',
      author: 'Mike Chen',
      category: 'Web Development',
      thumbnail: '/tutorials/scalable-web.jpg',
      videoUrl: '/tutorials/scalable-web'
    },
    {
      id: '3',
      title: 'Cloud Infrastructure Best Practices',
      description: 'Learn how to design and implement robust cloud infrastructure solutions.',
      duration: '4h 00m',
      level: 'Advanced',
      author: 'Alex Rodriguez',
      category: 'Cloud Computing',
      thumbnail: '/tutorials/cloud-infrastructure.jpg',
      videoUrl: '/tutorials/cloud-infrastructure'
    },
    {
      id: '4',
      title: 'Database Design and Optimization',
      description: 'Master database design principles and performance optimization techniques.',
      duration: '2h 45m',
      level: 'Intermediate',
      author: 'Emily Davis',
      category: 'Database',
      thumbnail: '/tutorials/database-design.jpg',
      videoUrl: '/tutorials/database-design'
    },
    {
      id: '5',
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity concepts and practices for developers.',
      duration: '3h 30m',
      level: 'Beginner',
      author: 'James Wilson',
      category: 'Security',
      thumbnail: '/tutorials/cybersecurity.jpg',
      videoUrl: '/tutorials/cybersecurity'
    },
    {
      id: '6',
      title: 'API Development and Integration',
      description: 'Build and integrate RESTful APIs for modern applications.',
      duration: '2h 15m',
      level: 'Intermediate',
      author: 'Lisa Thompson',
      category: 'API Development',
      thumbnail: '/tutorials/api-development.jpg',
      videoUrl: '/tutorials/api-development'
    }
  ]
const categories = [
    { name: 'All', icon: BookOpen, count: tutorials.length },
    { name: 'AI/ML', icon: Code, count: tutorials.filter(t => t.category === 'AI/ML').length },
    { name: 'Web Development', icon: Code, count: tutorials.filter(t => t.category === 'Web Development').length },
    { name: 'Cloud Computing', icon: Cloud, count: tutorials.filter(t => t.category === 'Cloud Computing').length },
    { name: 'Database', icon: Database, count: tutorials.filter(t => t.category === 'Database').length },
    { name: 'Security', icon: Shield, count: tutorials.filter(t => t.category === 'Security').length }
  ];
const PagePage: React.FC = () => {
  return (
    <>
<Helmet>
        <title>Tutorials - Zion Tech Group | Learn Technology Skills</title>
        <meta name="description" content="Comprehensive tutorials on AI, cloud computing, web development, cybersecurity, and more. Learn from industry experts and advance your tech skills." />
        <meta name="keywords" content="tutorials, learning, AI, cloud computing, web development, cybersecurity, database, DevOps, tech skills" />
      </Helmet>
