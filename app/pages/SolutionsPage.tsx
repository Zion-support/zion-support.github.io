import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CogIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

export default function SolutionsPage() {
  const solutions = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions including machine learning, computer vision, natural language processing, and automation.',
      features: [
        'Machine Learning Models',
        'Computer Vision',
        'Natural Language Processing',
        'Predictive Analytics',
        'Automated Decision Making',
        'Custom AI Development'
      ],
      icon: CpuChipIcon,
      href: '/ai-solutions',
      pricing: 'Starting from $299/month'
    },
    {
      id: 'it-solutions',
      title: 'IT Solutions',
      description: 'Complete IT infrastructure and services including cloud computing, network management, cybersecurity, and digital transformation.',
      features: [
        'Cloud Infrastructure',
        'Network Management',
        'Cybersecurity',
        'Data Center Solutions',
        'IT Support Services',
        'Digital Transformation'
      ],
      icon: ServerIcon,
      href: '/it-solutions',
      pricing: 'Starting from $199/month'
    }
}