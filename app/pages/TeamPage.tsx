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
    }
}