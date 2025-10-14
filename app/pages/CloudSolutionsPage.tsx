import React from 'react';;
import { Link } from 'react-router-dom';;
import SEO from '../components/SEO;
import {
  CloudIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon';
} from '@heroicons/react/24/outline;
export default function CloudSolutionsPage() {
  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & planning', 'Data migration', 'Application modernization', 'Performance optimization']
    },
    {
      icon: ServerIcon,
      title: 'Infrastructure Management',
      description: 'Complete management of your cloud infrastructure with 24/7 monitoring and support.',
      features: ['Server provisioning', 'Load balancing', 'Auto-scaling', 'Backup & recovery']
    }
}