import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  StarIcon,
  GlobeAltIcon,
  ChartBarIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      image: '/api/placeholder/300/300',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
      expertise: ['AI Strategy', 'Technology Leadership', 'Business Development']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/api/placeholder/300/300',
      bio: 'Technical architect specializing in cloud infrastructure and AI systems.',
      expertise: ['Cloud Architecture', 'AI Systems', 'Technical Strategy']
    }
}