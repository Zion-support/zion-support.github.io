import React from 'react';;
import { Link } from 'react-router-dom';;
import SEO from '../components/SEO;
import {
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon';
} from '@heroicons/react/24/outline;
export default function MicroSaaSPage() {
  const services = [
    {
      icon: GlobeAltIcon,
      title: 'Custom Micro SaaS Development',
      description: 'Tailored micro SaaS solutions designed to solve specific business challenges with scalable architecture.',
      features: ['Custom development', 'Scalable architecture', 'API integration', 'Multi-tenant support']
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Micro SaaS',
      description: 'Intelligent micro SaaS applications powered by artificial intelligence and machine learning.',
      features: ['AI integration', 'Machine learning', 'Predictive analytics', 'Automated workflows']
    }
}