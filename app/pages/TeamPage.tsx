import React from 'react';;
import { Link } from 'react-router-dom';;
import SEO from '../components/SEO;
import {
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  StarIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon';
} from '@heroicons/react/24/outline;
export default function TeamPage() {
  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Technology visionary with over 10 years of experience in AI and IT solutions.',
      image: '/images/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      twitter: 'https://twitter.com/kleber_santos;
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Expert in cloud architecture and cybersecurity with a passion for innovation.',
      image: '/images/team/sarah-johnson.jpg',
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      twitter: 'https://twitter.com/sarah_johnson;
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      bio: 'Machine learning specialist focused on developing cutting-edge AI solutions.',
      image: '/images/team/michael-chen.jpg',
      linkedin: 'https://linkedin.com/in/michael-chen',
      twitter: 'https://twitter.com/michael_chen;
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Creative director with expertise in user experience and interface design.',
      image: '/images/team/emily-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/emily-rodriguez',
      twitter: 'https://twitter.com/emily_rodriguez;
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      bio: 'Infrastructure specialist ensuring scalable and reliable cloud solutions.',
      image: '/images/team/david-kim.jpg',
      linkedin: 'https://linkedin.com/in/david-kim',
      twitter: 'https://twitter.com/david_kim;
    },
    {
      name: 'Lisa Wang',
      role: 'Project Manager',
      bio: 'Experienced project manager ensuring timely delivery of complex solutions.',
      image: '/images/team/lisa-wang.jpg',
      linkedin: 'https://linkedin.com/in/lisa-wang',
      twitter: 'https://twitter.com/lisa_wang;
    }
  ]
  const values = [
    {
      icon: StarIcon,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality solutions.;
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaboration to achieve great results.;
    },
    {
      icon: AcademicCapIcon,
      title: 'Innovation',
      description: 'We continuously innovate and stay ahead of technology trends.;
    },
    {
      icon: BriefcaseIcon,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices.;
    }
  ]
import { Helmet } from 'react-helmet-async';
const TeamPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TeamPage - Zion Tech Group</title>
        <meta name="description" content="TeamPage - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">TeamPage</h1>
          <p className="text-gray-300">This page is under construction.</p>
        </div>
      </div>
    </>
  )}
